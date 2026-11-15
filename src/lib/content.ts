export type SubjectCategory = "Specialized" | "Applied" | "Core";
export type CareerId =
  | "accountancy"
  | "management"
  | "marketing"
  | "finance"
  | "people"
  | "entrepreneurship";

export interface Subject {
  id: string;
  title: string;
  shortTitle: string;
  category: SubjectCategory;
  description: string;
  topics: readonly string[];
  icon: string;
}

export interface Career {
  id: CareerId;
  title: string;
  shortTitle: string;
  description: string;
  degree: string;
  jobs: readonly string[];
  skills: readonly string[];
  image: string;
  icon: string;
}

export const curriculumNote =
  "This guide introduces traditional ABM learning areas. Subject names, schedules, and offerings can vary as schools implement the Strengthened Senior High School Curriculum. Confirm the current curriculum with your school.";

export const subjects: readonly Subject[] = [
  {
    id: "accounting",
    title: "Fundamentals of Accountancy, Business and Management 1 & 2",
    shortTitle: "Accounting principles",
    category: "Specialized",
    description:
      "Learn the language of business, from recording transactions to understanding financial statements and the accounting cycle.",
    topics: [
      "Accounting equation",
      "Journals and ledgers",
      "Financial statements",
      "Cash flow",
    ],
    icon: "Calculator",
  },
  {
    id: "management",
    title: "Organization and Management",
    shortTitle: "Business management",
    category: "Specialized",
    description:
      "Explore how organizations plan, structure teams, lead people, and evaluate their progress toward shared goals.",
    topics: [
      "Planning and organizing",
      "Leadership",
      "Staffing",
      "Decision-making",
    ],
    icon: "ChartNoAxesCombined",
  },
  {
    id: "marketing",
    title: "Principles of Marketing",
    shortTitle: "Marketing",
    category: "Specialized",
    description:
      "Understand customer needs and build a thoughtful marketing plan through research, positioning, pricing, and communication.",
    topics: [
      "Market research",
      "Customer segments",
      "Marketing mix",
      "Marketing plans",
    ],
    icon: "BriefcaseBusiness",
  },
  {
    id: "finance",
    title: "Business Finance",
    shortTitle: "Business finance",
    category: "Specialized",
    description:
      "Practice reading financial information, preparing budgets, and comparing the costs and risks of business funding decisions.",
    topics: [
      "Financial planning",
      "Time value of money",
      "Funding sources",
      "Risk and return",
    ],
    icon: "Coins",
  },
  {
    id: "math",
    title: "Business Mathematics",
    shortTitle: "Business mathematics",
    category: "Specialized",
    description:
      "Use percentages, ratios, interest, and markup calculations to solve practical problems in buying, selling, and planning.",
    topics: [
      "Markup and margin",
      "Simple and compound interest",
      "Ratios",
      "Break-even calculations",
    ],
    icon: "Sigma",
  },
  {
    id: "economics",
    title: "Applied Economics",
    shortTitle: "Applied economics",
    category: "Specialized",
    description:
      "Connect economic ideas to daily life and investigate how prices, markets, and local conditions influence business choices.",
    topics: [
      "Supply and demand",
      "Market structures",
      "Economic indicators",
      "Business viability",
    ],
    icon: "Monitor",
  },
  {
    id: "ethics",
    title: "Business Ethics and Social Responsibility",
    shortTitle: "Business ethics",
    category: "Specialized",
    description:
      "Examine responsible decisions and the relationships between businesses, workers, customers, communities, and the environment.",
    topics: [
      "Ethical decisions",
      "Stakeholder responsibility",
      "Fair practices",
      "Sustainability",
    ],
    icon: "Scale",
  },
  {
    id: "simulation",
    title: "Business Enterprise Simulation",
    shortTitle: "Enterprise simulation",
    category: "Specialized",
    description:
      "Bring your ABM learning together by preparing, presenting, and evaluating a small-business proposal or simulation.",
    topics: [
      "Business plans",
      "Operations",
      "Sales records",
      "Performance reflection",
    ],
    icon: "Store",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    shortTitle: "Entrepreneurship",
    category: "Applied",
    description:
      "Identify a customer problem, test a possible solution, and turn research into a practical business plan.",
    topics: [
      "Opportunity spotting",
      "Customer validation",
      "Business models",
      "Pitching",
    ],
    icon: "Lightbulb",
  },
  {
    id: "research",
    title: "Practical Research",
    shortTitle: "Practical research",
    category: "Applied",
    description:
      "Develop a research question, gather information responsibly, and communicate evidence-based findings.",
    topics: [
      "Research questions",
      "Data collection",
      "Research ethics",
      "Presenting findings",
    ],
    icon: "Search",
  },
  {
    id: "communication",
    title: "Oral Communication and Reading & Writing",
    shortTitle: "Communication",
    category: "Core",
    description:
      "Build clear speaking, listening, reading, and writing habits that support confident presentations and professional communication.",
    topics: [
      "Public speaking",
      "Critical reading",
      "Writing structure",
      "Audience awareness",
    ],
    icon: "MessagesSquare",
  },
  {
    id: "general-math",
    title: "General Mathematics and Statistics & Probability",
    shortTitle: "Mathematics & statistics",
    category: "Core",
    description:
      "Build quantitative reasoning and learn to interpret information, compare patterns, and support decisions with data.",
    topics: [
      "Functions",
      "Data interpretation",
      "Probability",
      "Statistical reasoning",
    ],
    icon: "ChartColumn",
  },
];

export const careers: readonly Career[] = [
  {
    id: "accountancy",
    title: "Accountancy & audit",
    shortTitle: "Accountancy",
    description:
      "Make sense of the numbers behind a business. Help organizations keep accurate records, understand performance, and meet reporting responsibilities.",
    degree: "BS Accountancy or BS Management Accounting",
    jobs: [
      "Accounting associate",
      "Audit associate",
      "Management accountant",
      "Bookkeeper",
    ],
    skills: ["Attention to detail", "Analytical thinking", "Integrity"],
    image: "/images/gallery-accounting.webp",
    icon: "Calculator",
  },
  {
    id: "management",
    title: "Business management",
    shortTitle: "Management",
    description:
      "Turn shared goals into organized action. Coordinate projects, improve everyday operations, and help teams work well together.",
    degree: "BS Business Administration or BS Management",
    jobs: [
      "Management trainee",
      "Operations associate",
      "Project coordinator",
      "Business analyst",
    ],
    skills: ["Planning", "Problem-solving", "Leadership"],
    image: "/images/gallery-team.webp",
    icon: "BriefcaseBusiness",
  },
  {
    id: "marketing",
    title: "Marketing & sales",
    shortTitle: "Marketing",
    description:
      "Connect good ideas with the people who need them. Use research, creativity, and clear communication to develop meaningful campaigns.",
    degree: "BS Business Administration major in Marketing Management",
    jobs: [
      "Marketing associate",
      "Market research assistant",
      "Sales associate",
      "Brand coordinator",
    ],
    skills: ["Creativity", "Communication", "Customer empathy"],
    image: "/images/gallery-presentation.webp",
    icon: "Megaphone",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & startups",
    shortTitle: "Entrepreneurship",
    description:
      "Build something that solves a real problem. Test ideas with customers, shape a sustainable business model, and learn by doing.",
    degree: "BS Entrepreneurship or a related business degree",
    jobs: [
      "Small-business owner",
      "Business development associate",
      "Startup operations associate",
      "Social enterprise founder",
    ],
    skills: ["Initiative", "Adaptability", "Creative problem-solving"],
    image: "/images/gallery-expo.webp",
    icon: "Lightbulb",
  },
  {
    id: "finance",
    title: "Finance & banking",
    shortTitle: "Finance",
    description:
      "Explore how organizations manage money. Analyze financial information, compare options, and support responsible planning decisions.",
    degree: "BS Business Administration major in Financial Management",
    jobs: [
      "Finance associate",
      "Credit analyst",
      "Treasury assistant",
      "Banking associate",
    ],
    skills: ["Quantitative reasoning", "Research", "Risk awareness"],
    image: "/images/gallery-accounting.webp",
    icon: "ChartNoAxesCombined",
  },
  {
    id: "people",
    title: "Human resources",
    shortTitle: "Human resources",
    description:
      "Help people thrive at work. Support fair recruitment, training, employee development, and positive workplace relationships.",
    degree: "BS Business Administration major in Human Resource Management",
    jobs: [
      "HR associate",
      "Recruitment coordinator",
      "Learning and development assistant",
      "Employee relations assistant",
    ],
    skills: ["Listening", "Fairness", "Organization"],
    image: "/images/gallery-team.webp",
    icon: "UsersRound",
  },
];

export type GalleryCategory = "Projects" | "Activities" | "Achievements";
export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  image: string;
  alt: string;
}
export const galleryItems: readonly GalleryItem[] = [
  {
    id: "expo",
    title: "Ideas meet opportunity",
    category: "Projects",
    description:
      "An illustration of a student business expo: learners practice pitching, pricing, and explaining a product to customers.",
    image: "/images/gallery-expo.webp",
    alt: "Illustrative scene of Filipino senior high students presenting a small-business project",
  },
  {
    id: "team",
    title: "Better ideas, together",
    category: "Activities",
    description:
      "A collaborative planning activity brings together market research, creative thinking, and shared responsibilities.",
    image: "/images/gallery-team.webp",
    alt: "Illustrative student team collaborating on a business presentation",
  },
  {
    id: "accounting",
    title: "Making the numbers count",
    category: "Projects",
    description:
      "A hands-on accounting exercise connects careful record-keeping with the everyday transactions behind a student enterprise.",
    image: "/images/gallery-accounting.webp",
    alt: "Illustrative close-up of a student using a calculator beside accounting notes",
  },
  {
    id: "presentation",
    title: "A pitch worth celebrating",
    category: "Achievements",
    description:
      "Completing a classroom business pitch is a chance to recognize preparation, teamwork, and the confidence to present an idea.",
    image: "/images/gallery-presentation.webp",
    alt: "Illustrative senior high students presenting their completed classroom business idea",
  },
];

export type EventCategory = "Expo" | "Seminar" | "Orientation";
export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  description: string;
  details: readonly string[];
  sample: true;
}
export const events: readonly SchoolEvent[] = [
  {
    id: "business-expo",
    title: "ABM Business Expo",
    date: "2026-12-05",
    time: "9:00 AM – 3:00 PM",
    location: "School venue to be confirmed",
    category: "Expo",
    description:
      "A sample student enterprise showcase with product displays, business pitches, and customer feedback.",
    details: [
      "Explore student business ideas and practice evaluating a product pitch.",
      "Suggested preparation: bring a notebook and questions for the student teams.",
      "Illustrative event only. Confirm the date, venue, and participation details with your school.",
    ],
    sample: true,
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy Seminar",
    date: "2026-12-12",
    time: "10:00 AM – 12:00 PM",
    location: "School venue to be confirmed",
    category: "Seminar",
    description:
      "A sample learning session on budgeting, saving habits, and recognizing common financial risks.",
    details: [
      "Explore needs and wants, goal-setting, and basic budget planning.",
      "Suggested preparation: try the downloadable student budget template.",
      "Illustrative event only. Confirm the date, venue, and participation details with your school.",
    ],
    sample: true,
  },
  {
    id: "career-orientation",
    title: "ABM Career Orientation",
    date: "2027-01-16",
    time: "1:00 PM – 3:00 PM",
    location: "School venue to be confirmed",
    category: "Orientation",
    description:
      "A sample orientation exploring business-related college programs and possible career directions.",
    details: [
      "Compare accounting, finance, management, marketing, HR, and entrepreneurship pathways.",
      "Suggested preparation: take the career quiz and write down your questions.",
      "Illustrative event only. Confirm the date, venue, and participation details with your school.",
    ],
    sample: true,
  },
];

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  category: "Study guides" | "Templates" | "College prep";
  format: "MD" | "CSV";
  href: string;
  fileName: string;
}
export const resources: readonly LearningResource[] = [
  {
    id: "study-guide",
    title: "ABM starter study guide",
    description:
      "A plain-language introduction to accounting, pricing, marketing, and responsible business.",
    category: "Study guides",
    format: "MD",
    href: "/resources/abm-starter-guide.md",
    fileName: "abm-starter-guide.md",
  },
  {
    id: "subject-checklist",
    title: "Subject & skills checklist",
    description:
      "Track the business concepts and practical skills you want to understand and practice.",
    category: "Study guides",
    format: "MD",
    href: "/resources/abm-subject-checklist.md",
    fileName: "abm-subject-checklist.md",
  },
  {
    id: "student-budget",
    title: "Student budget template",
    description:
      "An editable spreadsheet-friendly template for planning income, savings, and expenses.",
    category: "Templates",
    format: "CSV",
    href: "/resources/student-budget.csv",
    fileName: "student-budget.csv",
  },
  {
    id: "college-checklist",
    title: "College preparation checklist",
    description:
      "Compare courses, check requirements, and prepare questions for your guidance counselor.",
    category: "College prep",
    format: "MD",
    href: "/resources/college-preparation-checklist.md",
    fileName: "college-preparation-checklist.md",
  },
];

export const usefulLinks = [
  {
    title: "DepEd curriculum guides",
    description:
      "Explore official academic-track and traditional ABM curriculum references.",
    href: "https://www.deped.gov.ph/k-to-12/about/k-to-12-basic-education-curriculum/academic-track/",
    label: "Department of Education",
  },
  {
    title: "Strengthened Senior High School",
    description:
      "Check official information about the evolving senior high curriculum.",
    href: "https://www.deped.gov.ph/strengthened-shs-program/",
    label: "Department of Education",
  },
  {
    title: "Financial education for learners",
    description:
      "Find student-oriented financial education materials and videos.",
    href: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/FinEd_LearnersAndEducators.aspx",
    label: "Bangko Sentral ng Pilipinas",
  },
  {
    title: "Starting a business",
    description:
      "Explore practical official resources for small and growing businesses.",
    href: "https://www.dti.gov.ph/dti-business-center/dti-msme-resources",
    label: "Department of Trade and Industry",
  },
] as const;

export const faqs = [
  {
    question: "What does ABM stand for?",
    answer:
      "ABM means Accountancy, Business, and Management. This site introduces the traditional senior high learning pathway focused on understanding businesses, financial information, management, and enterprise.",
  },
  {
    question: "Do I need to be great at math to explore ABM?",
    answer:
      "You do not need to know everything before you begin. Willingness to practice, ask questions, and work carefully helps. ABM uses practical mathematics alongside communication, collaboration, research, and ethical decision-making.",
  },
  {
    question: "Does choosing ABM guarantee a place in a business course?",
    answer:
      "No. Each college sets its own admission and program requirements. Use ABM as a foundation, then check the exact requirements, entrance assessments, and any bridging arrangements of the colleges you are considering.",
  },
  {
    question: "Are these the exact subjects my school will offer?",
    answer:
      "Not necessarily. The site introduces traditional ABM subject areas. Schools may use different schedules and offerings, particularly during the transition to the Strengthened Senior High School Curriculum. Ask your school for its current official curriculum.",
  },
  {
    question: "Is the career quiz a professional assessment?",
    answer:
      "No. It is a five-question reflection activity that matches your choices to predefined career interests. It does not measure aptitude or predict success. Explore the other pathways too and discuss your options with a guidance counselor.",
  },
  {
    question: "Are the events and student photos from a real school?",
    answer:
      "The current event schedule is illustrative, and the student imagery is AI-generated. The school can replace these with its confirmed dates, approved photos, and real activity highlights before publication to students.",
  },
] as const;
