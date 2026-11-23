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
    image: "/images/career-finance.jpg",
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
    image: "/images/career-hr.jpg",
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
      "A student business expo booth where learners practice pitching, pricing, and serving real customers.",
    image: "/images/gallery-expo.webp",
    alt: "Illustrative scene of Filipino senior high students presenting a small-business project",
  },
  {
    id: "team",
    title: "Better ideas, together",
    category: "Activities",
    description:
      "A collaborative planning activity bringing together market research, creative thinking, and shared responsibilities.",
    image: "/images/gallery-team.webp",
    alt: "Illustrative student team collaborating on a business presentation",
  },
  {
    id: "accounting",
    title: "Making the numbers count",
    category: "Projects",
    description:
      "A hands-on accounting exercise connecting careful record-keeping with the everyday transactions behind a student enterprise.",
    image: "/images/gallery-accounting.webp",
    alt: "Illustrative close-up of a student using a calculator beside accounting notes",
  },
  {
    id: "presentation",
    title: "A pitch worth celebrating",
    category: "Achievements",
    description:
      "Completing a classroom business pitch recognizes preparation, teamwork, and the confidence to defend an original proposal.",
    image: "/images/gallery-presentation.webp",
    alt: "Illustrative senior high students presenting their completed classroom business idea",
  },
  {
    id: "finance-lab",
    title: "Data behind every decision",
    category: "Projects",
    description:
      "Students reviewing budget forecasts and financial charts in the library ahead of the Business Research Congress.",
    image: "/images/career-finance.jpg",
    alt: "Two senior high school students analyzing financial charts and spreadsheets on a laptop in the school library",
  },
  {
    id: "leadership-circle",
    title: "Leading teams with empathy",
    category: "Activities",
    description:
      "An Organization & Management workshop where ABM learners map team roles, brainstorm ideas, and practice leadership communication.",
    image: "/images/career-hr.jpg",
    alt: "Three senior high school students collaborating in a leadership workshop with sticky notes and notebooks",
  },
];

export type EventCategory =
  | "Expo"
  | "Research"
  | "Enrollment"
  | "Webinar"
  | "Seminar"
  | "Orientation";
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
    location: "Westbridge Covered Quadrangle & Pavilion",
    category: "Expo",
    description:
      "A student enterprise showcase featuring pop-up booths, live product pitches, pricing exercises, and customer feedback sessions.",
    details: [
      "Explore 14 student-run pop-up ventures and evaluate product pitches from Grade 12 ABM teams.",
      "Suggested preparation: bring a notebook and questions for the student founders.",
      "Open to Grade 10–12 students, parents, and visiting faculty; confirm visitor passes at the ABM Office.",
    ],
    sample: true,
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy Seminar",
    date: "2026-12-12",
    time: "10:00 AM – 12:00 PM",
    location: "Founder’s Hall Auditorium, 2nd Floor",
    category: "Seminar",
    description:
      "An interactive learning session on personal budgeting, saving habits, digital payments, and spotting common financial risks.",
    details: [
      "Explore needs vs. wants, smart allowance goal-setting, and practical budget planning.",
      "Suggested preparation: download and bring the Student Budget Template from Resources.",
      "Hosted by the Westbridge Junior Business Society with guest alumni speakers.",
    ],
    sample: true,
  },
  {
    id: "career-orientation",
    title: "ABM Career Orientation",
    date: "2027-01-16",
    time: "1:00 PM – 3:00 PM",
    location: "Senior High Audio-Visual Room (AVR 302)",
    category: "Orientation",
    description:
      "A guided orientation exploring business-related college degree programs, board licensure tracks, and industry pathways.",
    details: [
      "Compare accounting, finance, management, marketing, HR, and entrepreneurship college pathways.",
      "Suggested preparation: complete the 2-minute Career Quiz and write down your top two questions.",
      "Includes a Q&A panel with Westbridge ABM advisers and guidance counselors.",
    ],
    sample: true,
  },
  {
    id: "research-congress",
    title: "SHS Business & Practical Research Congress",
    date: "2027-02-13",
    time: "8:30 AM – 4:00 PM",
    location: "Westbridge Multi-Purpose Hall & Breakout Rooms",
    category: "Research",
    description:
      "Senior High ABM teams present original market studies, feasibility reports, and local micro-enterprise research posters to faculty panelists.",
    details: [
      "Attend live research defense sessions covering consumer behavior, student finance, and sustainable small businesses.",
      "Browse the Research Poster Exhibit featuring 20+ Grade 11 and Grade 12 study abstracts.",
      "Best Research Paper and Best Presenter recognitions are awarded during the afternoon closing program.",
    ],
    sample: true,
  },
  {
    id: "entrepreneurs-webinar",
    title: "Young Entrepreneurs & Digital Marketing Webinar",
    date: "2027-02-27",
    time: "2:00 PM – 4:00 PM",
    location: "Online via Zoom & Westbridge Live Stream",
    category: "Webinar",
    description:
      "A live online talk with young Filipino founders and digital marketers on validating product ideas, ethical branding, and social commerce.",
    details: [
      "Learn practical tools for content storytelling, customer discovery, and low-budget digital campaigns.",
      "Includes a live Q&A where Grade 10–12 students can pitch a 60-second business idea for feedback.",
      "Registration link is sent to registered attendees via school email two days before the webinar.",
    ],
    sample: true,
  },
  {
    id: "enrollment-deadline",
    title: "SY 2027–2028 Early Enrollment & Voucher Deadline",
    date: "2027-03-20",
    time: "8:00 AM – 4:30 PM",
    location: "Admissions & Registrar Office, Main Building Ground Floor",
    category: "Enrollment",
    description:
      "Priority submission cutoff for incoming Grade 11 ABM applicants, SHS Voucher / ESC grantees, and early campus tour slots.",
    details: [
      "Submit your Form 138, PSA Birth Certificate copy, Good Moral Certificate, and SHS Voucher documentation.",
      "Download the SHS Enrollment & Requirements Guide on the Resources page before visiting.",
      "Walk-in parent consultations and guided campus tours are available all week by request.",
    ],
    sample: true,
  },
];

export interface StudentSpotlight {
  id: string;
  name: string;
  grade: string;
  project: string;
  quote: string;
  achievement: string;
  photo: string;
}

export const studentSpotlights: readonly StudentSpotlight[] = [
  {
    id: "mikaela",
    name: "Mikaela D. Reyes",
    grade: "Grade 12 · ABM-A",
    project: "Kape Kalye Cold Brew Co.",
    quote:
      "Running our pop-up stall at the Business Expo made every accounting and pricing lesson click. Tracking real costs, adjusting our bundle price, and reaching break-even before noon gave me the confidence to pursue BS Accountancy.",
    achievement: "Best Financial Stewardship · ABM Expo 2026",
    photo: "/images/student-mikaela.jpg",
  },
  {
    id: "rafael",
    name: "Rafael L. Mendoza",
    grade: "Grade 12 · ABM-B",
    project: "EcoPack Refill Station Proposal",
    quote:
      "I entered Senior High shy about speaking in front of a panel. Through Marketing pitches and Practical Research defense, I learned how to back creative ideas with real customer interviews and clear numbers.",
    achievement: "1st Place Business Pitch · SHS Research Congress",
    photo: "/images/student-rafael.jpg",
  },
  {
    id: "chloe",
    name: "Chloe Anne Bautista",
    grade: "Grade 11 · ABM-A",
    project: "Junior Business Society Treasurer",
    quote:
      "ABM isn’t just for math whizzes—it’s about working with people, organizing events, and solving everyday problems. The study guides and group simulations helped me discover how much I enjoy operations and HR.",
    achievement: "Outstanding Student Leader · ABM Strand",
    photo: "/images/student-chloe.jpg",
  },
];

export interface StudentWorkItem {
  id: string;
  type: "Mini-Business" | "Business Proposal" | "Student Article" | "Project Poster";
  title: string;
  team: string;
  summary: string;
  highlight: string;
  metrics: readonly string[];
  takeaway: string;
  image: string;
}

export const studentWorks: readonly StudentWorkItem[] = [
  {
    id: "kape-kalye",
    type: "Mini-Business",
    title: "Kape Kalye Cold Brew Co.",
    team: "Grade 12 ABM-A · 5-Student Enterprise Team",
    summary:
      "A student-run pop-up beverage stall launched during the ABM Business Expo, offering locally sourced cold brew and oat-milk iced coffee in reusable cup sleeves.",
    highlight: "142 cups sold · 38% gross margin",
    metrics: [
      "Startup capital: PHP 4,200",
      "Break-even reached: 11:30 AM",
      "Zero single-use plastic straws",
    ],
    takeaway:
      "Applied Business Math markup formulas and daily cash-flow journals to manage inventory restocking in real time.",
    image: "/images/gallery-expo.webp",
  },
  {
    id: "ecopack-proposal",
    type: "Business Proposal",
    title: "EcoPack Campus Refill Station",
    team: "Grade 12 ABM-B · Enterprise Simulation Capstone",
    summary:
      "A comprehensive 24-page feasibility study and startup pitch proposing an affordable refill kiosk for student notebooks, pens, and sanitized tumbler refills on campus.",
    highlight: "PHP 18,500 projected startup plan",
    metrics: [
      "180 student survey respondents",
      "4Ps marketing & pricing tier model",
      "6-month projected payback period",
    ],
    takeaway:
      "Combined Principles of Marketing customer segmentation with Business Finance sensitivity analysis.",
    image: "/images/gallery-presentation.webp",
  },
  {
    id: "smart-baon-article",
    type: "Student Article",
    title: "Smart Baon: How SHS Students Budget Weekly Allowances",
    team: "Grade 11 ABM Research Writers",
    summary:
      "An editorial feature and Practical Research digest exploring how 120 senior high learners allocate transport, meals, school supplies, and emergency savings each week.",
    highlight: "120 learners surveyed · 50-30-20 guide",
    metrics: [
      "Top expense: daily snacks & commute",
      "68% started tracking with CSV sheets",
      "Published in Westbridge ABM Digest",
    ],
    takeaway:
      "Demonstrates how Applied Economics and Statistics turn student observations into actionable financial habits.",
    image: "/images/career-finance.jpg",
  },
  {
    id: "pricing-poster",
    type: "Project Poster",
    title: "Bayanihan Micro-Retail Pricing & Margin Playbook",
    team: "Grade 11 ABM-C · Applied Business Math Group",
    summary:
      "A visual capstone poster breaking down cost-plus pricing, markup vs. gross margin traps, and ethical bundle promotions for neighborhood micro-retailers.",
    highlight: "Featured at SHS Research Congress",
    metrics: [
      "Side-by-side markup vs. margin chart",
      "3 real neighborhood store case studies",
      "Clear visual break-even calculator",
    ],
    takeaway:
      "Translates core accounting and pricing math into clear visuals small-business owners can apply right away.",
    image: "/images/career-hr.jpg",
  },
];

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  category: "Study guides" | "Templates" | "College prep" | "Admissions";
  format: "MD" | "CSV";
  href: string;
  fileName: string;
}
export const resources: readonly LearningResource[] = [
  {
    id: "enrollment-guide",
    title: "SHS enrollment & requirements guide",
    description:
      "Step-by-step ABM admissions process, document checklist, SHS voucher reminders, and key enrollment dates.",
    category: "Admissions",
    format: "MD",
    href: "/resources/shs-enrollment-guide.md",
    fileName: "shs-enrollment-guide.md",
  },
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
    question: "How heavy is the ABM workload, and how do students balance projects?",
    answer:
      "ABM blends steady weekly practice (accounting worksheets, business math, financial analysis) with collaborative projects like marketing plans and the Grade 12 Business Enterprise Simulation. Most students manage it well by reviewing accounting problems in short daily sessions and splitting group roles early.",
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
