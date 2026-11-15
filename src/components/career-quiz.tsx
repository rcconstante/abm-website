"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  Target,
} from "lucide-react";
import { quizQuestions, getQuizResult } from "@/lib/quiz";
import { PageIntro, Icon, ButtonLink } from "./ui";

export function CareerQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const question = quizQuestions[step];
  const complete = step === quizQuestions.length;
  const result = complete ? getQuizResult(answers) : null;
  function go(next: number) {
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus());
  }
  function restart() {
    setAnswers({});
    go(0);
  }
  return (
    <>
      <PageIntro
        tag="The Career Quiz"
        title="Find a path that feels like you."
        text="Five questions. A little self-discovery. See where your interests could take you in the world of business."
      />
      <div className="container quiz-page">
        <aside className="quiz-sidebar">
          <span className="icon-tile">
            <Sparkles size={25} />
          </span>
          <h2>There’s no wrong answer.</h2>
          <p>
            Choose what sounds most like you, even if you’re still figuring
            things out.
          </p>
          <div className="quiz-sidebar-item">
            <Target size={20} />
            <span>Follow your curiosity</span>
          </div>
          <div className="quiz-sidebar-item">
            <BookOpen size={20} />
            <span>Explore a possible direction</span>
          </div>
          <p className="fine-print">
            This is an interest activity, not a professional assessment. Your
            future is always yours to choose.
          </p>
          <Link href="/careers/" className="text-link">
            Explore all careers
            <ArrowRight size={16} />
          </Link>
        </aside>
        <section className="quiz-panel" aria-label="Career interest quiz">
          {!complete && question ? (
            <>
              <div className="quiz-progress-top">
                <span>
                  Question {step + 1} of {quizQuestions.length}
                </span>
                <span>
                  {Math.round((step / quizQuestions.length) * 100)}% complete
                </span>
              </div>
              <progress
                value={step}
                max={quizQuestions.length}
                aria-label="Quiz progress"
              />
              <h2 ref={heading} tabIndex={-1} id="quiz-question">
                {question.prompt}
              </h2>
              <p className="quiz-hint">
                Pick the answer that speaks to you most.
              </p>
              <fieldset
                className="quiz-options"
                aria-labelledby="quiz-question"
              >
                <legend className="sr-only">Choose one answer</legend>
                {question.options.map((option, index) => (
                  <label
                    className={`quiz-option ${answers[question.id] === option.id ? "selected" : ""}`}
                    key={option.id}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={answers[question.id] === option.id}
                      onChange={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [question.id]: option.id,
                        }))
                      }
                    />
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option.text}</span>
                    <span className="option-check">
                      {answers[question.id] === option.id && (
                        <Check size={17} />
                      )}
                    </span>
                  </label>
                ))}
              </fieldset>
              <div className="quiz-controls">
                <button
                  className="text-link back-button"
                  disabled={step === 0}
                  onClick={() => go(step - 1)}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  className="button button-primary"
                  disabled={!answers[question.id]}
                  onClick={() => go(step + 1)}
                >
                  {step === quizQuestions.length - 1
                    ? "See my career match"
                    : "Next question"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </>
          ) : (
            result && (
              <div className="quiz-result" aria-live="polite">
                <span className="result-icon">
                  <Icon name={result.recommendation.icon} size={39} />
                </span>
                <p className="eyebrow">A direction worth exploring</p>
                <h2 ref={heading} tabIndex={-1}>
                  {result.recommendation.title}
                </h2>
                <p>{result.recommendation.description}</p>
                <div className="result-summary">
                  <h3>What your answers suggest</h3>
                  <p>{result.summary}</p>
                </div>
                <h3>Your interest snapshot</h3>
                <div className="result-bars">
                  {result.rankedCareers
                    .filter((entry) => entry.score > 0)
                    .map((entry) => (
                      <div key={entry.career.id}>
                        <div>
                          <span>{entry.career.shortTitle}</span>
                          <strong>{entry.score} of 5 choices</strong>
                        </div>
                        <progress
                          value={entry.score}
                          max={5}
                          aria-label={`${entry.career.shortTitle}: ${entry.score} of 5 choices`}
                        />
                      </div>
                    ))}
                </div>
                <div className="result-next">
                  <span className="icon-tile">
                    <Icon name="GraduationCap" />
                  </span>
                  <div>
                    <small>A college pathway to explore</small>
                    <strong>{result.recommendation.degree}</strong>
                  </div>
                </div>
                <ButtonLink href={`/careers/#${result.recommendation.id}`}>
                  Explore this pathway
                </ButtonLink>
                <button className="text-link restart-button" onClick={restart}>
                  <RotateCcw size={16} />
                  Take the quiz again
                </button>
              </div>
            )
          )}
        </section>
      </div>
    </>
  );
}
