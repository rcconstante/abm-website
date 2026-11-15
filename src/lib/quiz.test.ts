import assert from "node:assert/strict";
import test from "node:test";
import { careers } from "./content";
import { getQuizResult, quizQuestions, type QuizAnswers } from "./quiz";

function answersForCareer(careerId: string): QuizAnswers {
  return Object.fromEntries(
    quizQuestions.map((question) => [
      question.id,
      question.options.find((option) => option.careerId === careerId)!.id,
    ]),
  );
}

for (const career of careers) {
  test(`five matching choices recommend ${career.id}`, () => {
    const result = getQuizResult(answersForCareer(career.id));
    assert.equal(result.recommendation.id, career.id);
    assert.equal(result.rankedCareers[0]?.score, 5);
    assert.deepEqual(result.tiedCareerIds, [career.id]);
    assert.equal(
      result.rankedCareers.reduce((total, entry) => total + entry.score, 0),
      5,
    );
  });
}

test("ties favor the earliest expressed preference and explain that choice", () => {
  const pattern = ["finance", "marketing", "marketing", "finance", "people"];
  const answers = Object.fromEntries(
    quizQuestions.map((question, index) => [
      question.id,
      question.options.find((option) => option.careerId === pattern[index])!.id,
    ]),
  );
  const result = getQuizResult(answers);
  assert.equal(result.recommendation.id, "finance");
  assert.deepEqual(result.tiedCareerIds, ["finance", "marketing"]);
  assert.match(result.summary, /equal interest/);
  assert.match(result.summary, /earliest/);
});

test("missing and foreign options cannot produce a result", () => {
  assert.throws(() => getQuizResult({}), RangeError);
  const valid = answersForCareer("accountancy");
  assert.throws(
    () => getQuizResult({ ...valid, project: "impact-finance" }),
    RangeError,
  );
  assert.throws(
    () => getQuizResult({ ...valid, project: "<script>" }),
    RangeError,
  );
});

test("question and option IDs are unique and every career is available per question", () => {
  assert.equal(new Set(quizQuestions.map((question) => question.id)).size, 5);
  const ids = quizQuestions.flatMap((question) =>
    question.options.map((option) => option.id),
  );
  assert.equal(new Set(ids).size, ids.length);
  for (const question of quizQuestions) {
    assert.equal(question.options.length, careers.length);
    assert.deepEqual(
      new Set(question.options.map((option) => option.careerId)),
      new Set(careers.map((career) => career.id)),
    );
  }
});
