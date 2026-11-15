import { careers, type Career, type CareerId } from "./content";

export interface QuizOption {
  readonly id: string;
  readonly text: string;
  readonly careerId: CareerId;
}
export interface QuizQuestion {
  readonly id: string;
  readonly prompt: string;
  readonly options: readonly QuizOption[];
}

export const quizQuestions: readonly QuizQuestion[] = [
  {
    id: "project",
    prompt:
      "Your class is starting a small business. What would you enjoy most?",
    options: [
      {
        id: "project-accountancy",
        text: "Keeping clear records of sales and expenses",
        careerId: "accountancy",
      },
      {
        id: "project-management",
        text: "Organizing the team and keeping the plan on track",
        careerId: "management",
      },
      {
        id: "project-marketing",
        text: "Finding a creative way to reach customers",
        careerId: "marketing",
      },
      {
        id: "project-finance",
        text: "Planning the budget and comparing funding options",
        careerId: "finance",
      },
      {
        id: "project-people",
        text: "Helping teammates find roles they enjoy",
        careerId: "people",
      },
      {
        id: "project-entrepreneurship",
        text: "Turning a new product idea into something real",
        careerId: "entrepreneurship",
      },
    ],
  },
  {
    id: "challenge",
    prompt: "Which kind of challenge makes you curious?",
    options: [
      {
        id: "challenge-accountancy",
        text: "Figuring out why the numbers do not add up",
        careerId: "accountancy",
      },
      {
        id: "challenge-management",
        text: "Making a complicated process work better",
        careerId: "management",
      },
      {
        id: "challenge-marketing",
        text: "Understanding what makes people choose a product",
        careerId: "marketing",
      },
      {
        id: "challenge-finance",
        text: "Comparing the costs, benefits, and risks of a decision",
        careerId: "finance",
      },
      {
        id: "challenge-people",
        text: "Helping a team communicate through a disagreement",
        careerId: "people",
      },
      {
        id: "challenge-entrepreneurship",
        text: "Finding an original solution to an everyday problem",
        careerId: "entrepreneurship",
      },
    ],
  },
  {
    id: "strength",
    prompt: "Which strength would you most like to develop?",
    options: [
      {
        id: "strength-accountancy",
        text: "Accuracy and careful analysis",
        careerId: "accountancy",
      },
      {
        id: "strength-management",
        text: "Planning and confident decision-making",
        careerId: "management",
      },
      {
        id: "strength-marketing",
        text: "Creative storytelling and customer research",
        careerId: "marketing",
      },
      {
        id: "strength-finance",
        text: "Financial reasoning and long-term planning",
        careerId: "finance",
      },
      {
        id: "strength-people",
        text: "Listening and helping others grow",
        careerId: "people",
      },
      {
        id: "strength-entrepreneurship",
        text: "Initiative and learning through experiments",
        careerId: "entrepreneurship",
      },
    ],
  },
  {
    id: "activity",
    prompt: "Pick an activity you would happily spend an afternoon on.",
    options: [
      {
        id: "activity-accountancy",
        text: "Solving an accounting case with a clear audit trail",
        careerId: "accountancy",
      },
      {
        id: "activity-management",
        text: "Coordinating the details of a school event",
        careerId: "management",
      },
      {
        id: "activity-marketing",
        text: "Designing and testing a campaign for a student product",
        careerId: "marketing",
      },
      {
        id: "activity-finance",
        text: "Building a budget and comparing different scenarios",
        careerId: "finance",
      },
      {
        id: "activity-people",
        text: "Welcoming new members and planning a team workshop",
        careerId: "people",
      },
      {
        id: "activity-entrepreneurship",
        text: "Testing a business idea and talking to potential customers",
        careerId: "entrepreneurship",
      },
    ],
  },
  {
    id: "impact",
    prompt: "What would make your future work feel most rewarding?",
    options: [
      {
        id: "impact-accountancy",
        text: "Helping an organization report its finances honestly",
        careerId: "accountancy",
      },
      {
        id: "impact-management",
        text: "Helping a team turn a shared goal into results",
        careerId: "management",
      },
      {
        id: "impact-marketing",
        text: "Connecting useful products with the right people",
        careerId: "marketing",
      },
      {
        id: "impact-finance",
        text: "Supporting well-informed financial choices",
        careerId: "finance",
      },
      {
        id: "impact-people",
        text: "Making a workplace fairer and more supportive",
        careerId: "people",
      },
      {
        id: "impact-entrepreneurship",
        text: "Building a sustainable business that solves a problem",
        careerId: "entrepreneurship",
      },
    ],
  },
];

export type QuizAnswers = Readonly<Record<string, string>>;
export interface RankedCareer {
  readonly career: Career;
  readonly score: number;
}
export interface QuizResult {
  readonly recommendation: Career;
  readonly rankedCareers: readonly RankedCareer[];
  readonly tiedCareerIds: readonly CareerId[];
  readonly summary: string;
}

/** Each response contributes one interest point. Ties use the earliest answered preference. */
export function getQuizResult(answers: QuizAnswers): QuizResult {
  const points = new Map<CareerId, number>(
    careers.map((career) => [career.id, 0]),
  );
  const firstPreference = new Map<CareerId, number>();

  quizQuestions.forEach((question, index) => {
    const chosen = question.options.find(
      (option) => option.id === answers[question.id],
    );
    if (!chosen)
      throw new RangeError(`Choose a valid answer for question ${index + 1}.`);
    points.set(chosen.careerId, (points.get(chosen.careerId) ?? 0) + 1);
    if (!firstPreference.has(chosen.careerId))
      firstPreference.set(chosen.careerId, index);
  });

  const rankedCareers: RankedCareer[] = careers.map((career) => ({
    career,
    score: points.get(career.id) ?? 0,
  }));
  rankedCareers.sort(
    (left, right) =>
      right.score - left.score ||
      (firstPreference.get(left.career.id) ?? quizQuestions.length) -
        (firstPreference.get(right.career.id) ?? quizQuestions.length),
  );
  const first = rankedCareers[0];
  if (!first) throw new RangeError("No career pathways are available.");
  const tiedCareers = rankedCareers.filter(
    (entry) => entry.score === first.score,
  );
  const tiedCareerIds = tiedCareers.map((entry) => entry.career.id);
  const summary =
    tiedCareerIds.length > 1
      ? `Your answers show equal interest in ${tiedCareers.map((entry) => entry.career.shortTitle).join(" and ")}. We highlight ${first.career.shortTitle} because it appeared earliest in your choices. Explore each tied pathway; this activity is a starting point, not a professional assessment.`
      : `You chose ${first.career.shortTitle.toLowerCase()} interests in ${first.score} of ${quizQuestions.length} answers. This pathway may be worth exploring alongside your other interests. This activity is a starting point, not a professional assessment.`;

  return {
    recommendation: first.career,
    rankedCareers,
    tiedCareerIds,
    summary,
  };
}
