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
  "This guide introduces the Accountancy, Business, and Management (ABM) learning areas offered at Our Lady of Lourdes College Foundation (OLLCF) Senior High School. Confirm the latest semester schedules and Strengthened SHS Curriculum updates directly with the OLLCF Senior High School Department.";

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
      "Bring your ABM learning together by preparing, presenting, and running a live student venture—such as booths at the OLLCF SHS Food Bazaar.",
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

export type GalleryCategory =
  | "Events"
  | "Activities"
  | "Leadership"
  | "Achievements";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
}

const AYBL_IMG = "/images/Ourladyoflourdes/student-";

export const galleryItems: readonly GalleryItem[] = [
  {
    id: "shs-food-bazaar-2026",
    title: "OLLCF SHS Food Bazaar 2026",
    category: "Events",
    description:
      "The countdown to deliciousness begins! On December 11, 2026, Lourdenian student entrepreneurs bring 'From Concept to Commerce' to life with festive booths, creative food concepts, and hands-on business experience.",
    image: `${AYBL_IMG}/907191101_122274973436122924_4359142396362882091_n.jpg`,
    alt: "Official poster for OLLCF SHS Food Bazaar 2026 on December 11 themed From Concept to Commerce",
    objectPosition: "center 32%",
  },
  {
    id: "aybl-general-assembly",
    title: "AYBL General Assembly & Kickoff",
    category: "Activities",
    description:
      "Members and officers of the Association of Young Business Leaders gather on July 29, 2026 at OLLCF Senior High School to unite around entrepreneurship, leadership, and student growth.",
    image: `${AYBL_IMG}/768992371_122262095336122924_5639107466373830583_n.jpg`,
    alt: "Group photo of Association of Young Business Leaders students and officers at OLLCF Senior High School",
    objectPosition: "center center",
  },
  {
    id: "aybl-newly-elected-officers",
    title: "The Torch Has Been Passed — New AYBL Officers",
    category: "Leadership",
    description:
      "A new generation of Lourdenian leaders takes the helm—equipped with dedication, integrity, and fresh ideas to serve OLLCF Senior High School students and inspire excellence.",
    image: `${AYBL_IMG}/774089699_122262327194122924_5161641266545301428_n.jpg`,
    alt: "Official banner announcing the Newly Elected Officers of the Association of Young Business Leaders at OLLCF",
    objectPosition: "center center",
  },
  {
    id: "kenneth-mr-intramurals-2026",
    title: "Rey Kenneth Odasco — Mr. Intramurals 2026 (2nd Runner-Up)",
    category: "Achievements",
    description:
      "AYBL President Rey Kenneth Odasco brought pride to the organization as Mr. Intramurals 2026 – 2nd Runner-Up, also earning Mr. Popularity 2026, Best in Sports Attire, Best in School Uniform, and Best in Formal Attire.",
    image: `${AYBL_IMG}/783778095_122263693628122924_9070735196601345550_n.jpg`,
    alt: "AYBL President Rey Kenneth Odasco holding his trophy and multiple award sashes at OLLCF Intramurals 2026",
    objectPosition: "center 18%",
  },
  {
    id: "evangeline-ms-intramurals-2026",
    title: "Evangeline Ibasco — Ms. Intramurals 2026 (2nd Runner-Up)",
    category: "Achievements",
    description:
      "Celebrating AYBL VP for Internal Communication Evangeline Jazz Reema Ibasco, crowned Ms. Intramurals 2026 – 2nd Runner-Up for her confidence, hard work, and dedication on stage.",
    image: `${AYBL_IMG}/783878169_122263688918122924_4571283520738523469_n.jpg`,
    alt: "AYBL VP for Internal Communication Evangeline Jazz Reema Ibasco crowned Ms. Intramurals 2026 2nd Runner-Up",
    objectPosition: "center 20%",
  },
  {
    id: "shane-mr-intramurals-2026",
    title: "Shane Rafael — Mr. Intramurals 2026 (3rd Runner-Up)",
    category: "Achievements",
    description:
      "A proud milestone for AYBL Director for Public Relations Shane Rafael, crowned Mr. Intramurals 2026 – 3rd Runner-Up after shining throughout the OLLCF campus competition.",
    image: `${AYBL_IMG}/783981455_122263705442122924_5073407049623369280_n.jpg`,
    alt: "AYBL Director for Public Relations Shane Rafael in formal attire during Mr. Intramurals 2026",
    objectPosition: "center 20%",
  },
  {
    id: "cristel-ms-intramurals-2026",
    title: "Cristel Aguas — Ms. Intramurals 2026 (3rd Runner-Up)",
    category: "Achievements",
    description:
      "Congratulations to AYBL Director for Audit Cristel B. Aguas, crowned Ms. Intramurals 2026 – 3rd Runner-Up—celebrating poise, grit, and Lourdenian pride.",
    image: `${AYBL_IMG}/783904295_122263689326122924_6635205145037462025_n.jpg`,
    alt: "AYBL Director for Audit Cristel B. Aguas holding her trophy and flowers as Ms. Intramurals 2026 3rd Runner-Up",
    objectPosition: "center 18%",
  },
  {
    id: "aybl-classroom-orientation",
    title: "Business Leadership & Planning Session",
    category: "Activities",
    description:
      "OLLCF Senior High learners participating in an AYBL classroom session—discussing student initiatives, teamwork, and how young leaders turn ideas into action.",
    image: `${AYBL_IMG}/771468961_122262095324122924_6320724206980351642_n.jpg`,
    alt: "OLLCF SHS students attending an Association of Young Business Leaders classroom orientation",
    objectPosition: "center center",
  },
  {
    id: "aybl-community-camaraderie",
    title: "Lourdenian Community & Teamwork",
    category: "Activities",
    description:
      "Inside the supportive community of OLLCF Senior High School, where ABM students collaborate, encourage each other, and grow together through AYBL.",
    image: `${AYBL_IMG}/773523509_122262095330122924_1282680183859537116_n.jpg`,
    alt: "OLLCF ABM students smiling and waving together during the July 29, 2026 AYBL session",
    objectPosition: "center center",
  },
  {
    id: "intramurals-family-celebration",
    title: "Celebrating Together as One AYBL Family",
    category: "Achievements",
    description:
      "Backstage smiles and cheers as AYBL officers and friends celebrate their Mr. & Ms. Intramurals 2026 winners together.",
    image: `${AYBL_IMG}/784734058_122263693634122924_2404624928070217147_n.jpg`,
    alt: "AYBL family taking a celebratory group photo after OLLCF Intramurals 2026",
    objectPosition: "center 30%",
  },
  {
    id: "intramurals-sashes-honor",
    title: "Sashes of Excellence — Intramurals 2026",
    category: "Achievements",
    description:
      "A collection of special award sashes earned at OLLCF Intramurals 2026, reflecting dedication, confidence, and well-rounded student leadership.",
    image: `${AYBL_IMG}/784541786_122263693640122924_2862885401464155675_n.jpg`,
    alt: "Award sashes from OLLCF Intramurals 2026 including Mr. Popularity, Best in Sports Attire, Best in School Uniform, and 2nd Runner-Up",
    objectPosition: "center center",
  },
  {
    id: "ollcf-class-2026-padayon",
    title: "Congratulations, OLLCF Class 2026 — Padayon!",
    category: "Achievements",
    description:
      "Every end has a new beginning. High school memories that felt like a blink—laughter in the hallways, late-night study sessions, and chasing dreams together. Cheers to the next chapter from your AYBL family!",
    image: `${AYBL_IMG}/878081419_122272877678122924_6700403035532850804_n.jpg`,
    alt: "AYBL congratulatory tribute graphic for OLLCF Class 2026 graduation",
    objectPosition: "center center",
  },
];

export interface AyblOfficer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const ayblOfficers: readonly AyblOfficer[] = [
  {
    id: "blossom-dionela",
    name: "Blossom L. Dionela",
    role: "AYBL Adviser",
    image: `${AYBL_IMG}/771468955_122262327188122924_1113879856195972304_n.jpg`,
  },
  {
    id: "rey-kenneth-odasco",
    name: "Rey Kenneth Odasco",
    role: "President",
    image: `${AYBL_IMG}/774052989_122262327260122924_2986634991928873828_n.jpg`,
  },
  {
    id: "john-ruzzel-velez",
    name: "John Ruzzel Velez",
    role: "Executive Vice President",
    image: `${AYBL_IMG}/774173102_122262327272122924_5822672126083981941_n.jpg`,
  },
  {
    id: "lea-joy-abarca",
    name: "Lea Joy Abarca",
    role: "Executive Secretary",
    image: `${AYBL_IMG}/774136760_122262327290122924_6828912981211514223_n.jpg`,
  },
  {
    id: "kaycee-louise-maravillas",
    name: "Kaycee Louise Maravillas",
    role: "VP for Finance",
    image: `${AYBL_IMG}/773294699_122262327458122924_4416735384567558884_n.jpg`,
  },
  {
    id: "abigail-marte",
    name: "Abigail Marte",
    role: "VP for Marketing",
    image: `${AYBL_IMG}/772542845_122262327512122924_9076845955852774572_n.jpg`,
  },
  {
    id: "ma-jiecel-najera",
    name: "Ma. Jiecel Najera",
    role: "VP for Creatives",
    image: `${AYBL_IMG}/773511278_122262327350122924_8245573343844522253_n.jpg`,
  },
  {
    id: "evangeline-ibasco",
    name: "Evangeline Jazz Reema Ibasco",
    role: "VP for Internal Communication",
    image: `${AYBL_IMG}/773574709_122262327404122924_1711204946591659999_n.jpg`,
  },
  {
    id: "rencess-canlas",
    name: "Rencess P. Canlas",
    role: "VP for External Communication",
    image: `${AYBL_IMG}/773759810_122262327296122924_6012166579314972963_n.jpg`,
  },
  {
    id: "princess-joy-de-mata",
    name: "Princess Joy De Mata",
    role: "VP for Events & Logistics",
    image: `${AYBL_IMG}/773574716_122262327560122924_2800510562085471347_n.jpg`,
  },
  {
    id: "cynelle-deterala",
    name: "Cynelle Deterala",
    role: "VP for Membership",
    image: `${AYBL_IMG}/773852926_122262327722122924_6001488408454490034_n.jpg`,
  },
  {
    id: "christine-joyce-ibis",
    name: "Christine Joyce Ibis",
    role: "VP for Membership",
    image: `${AYBL_IMG}/774151790_122262327686122924_5341190873038126658_n.jpg`,
  },
  {
    id: "lance-roby-savilla",
    name: "Lance Roby Savilla",
    role: "VP for Community Development",
    image: `${AYBL_IMG}/774033437_122262327302122924_1981314535247207146_n.jpg`,
  },
  {
    id: "cristel-aguas",
    name: "Cristel B. Aguas",
    role: "Director for Audit",
    image: `${AYBL_IMG}/773255846_122262327356122924_2952947092981958515_n.jpg`,
  },
  {
    id: "shane-rafael",
    name: "Shane Rafael",
    role: "Director for Public & Internal Relations",
    image: `${AYBL_IMG}/773632982_122262327344122924_4740954221076478326_n.jpg`,
  },
  {
    id: "frances-ann-ang",
    name: "Frances Ann Ang",
    role: "Director for External Public Relations",
    image: `${AYBL_IMG}/774130629_122262327392122924_2025236211262682573_n.jpg`,
  },
  {
    id: "cristine-ann-ubana",
    name: "Cristine Ann Ubana",
    role: "Director for Social Media",
    image: `${AYBL_IMG}/773592645_122262327518122924_680880311229539311_n.jpg`,
  },
  {
    id: "rayzel-diaz",
    name: "Rayzel Diaz",
    role: "Associate Director for Graphics",
    image: `${AYBL_IMG}/772891477_122262327452122924_4423108433699752500_n.jpg`,
  },
  {
    id: "roselle-cabajar",
    name: "Roselle Cabajar",
    role: "Director for Events & Logistics",
    image: `${AYBL_IMG}/774042630_122262327650122924_7558703116157832525_n.jpg`,
  },
  {
    id: "dhenbert-sayno",
    name: "Dhenbert Sayno",
    role: "TechPro Representative",
    image: `${AYBL_IMG}/774033518_122262327692122924_3352053733224885489_n.jpg`,
  },
];

export type EventCategory =
  | "Bazaar"
  | "Enrollment"
  | "Orientation"
  | "Leadership"
  | "Research"
  | "Highlight";

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  status: string;
  description: string;
  details: readonly string[];
}

export const events: readonly SchoolEvent[] = [
  {
    id: "shs-food-bazaar-2026",
    title: "OLLCF SHS Food Bazaar 2026",
    date: "2026-12-11",
    time: "Whole-Day Campus Bazaar",
    location: "Our Lady of Lourdes College Foundation (OLLCF), Daet",
    category: "Bazaar",
    status: "Featured Event",
    description:
      "The countdown to deliciousness begins! Support OLLCF Senior High School student entrepreneurs under the theme 'From Concept to Commerce: Advancing Entrepreneurial Competence Through Innovation, Creativity, and Practical Business Experience.'",
    details: [
      "Discover the Spirit of Christmas in every student-run booth—featuring treats, original food concepts, and irresistible campus finds.",
      "Hands-on enterprise practice where SHS learners apply product costing, pricing, marketing, and customer service in real time.",
      "One day, countless cravings! Open to all Lourdenians—bring your friends and support fellow SHS entrepreneurs.",
      "Event publication credits: Write-up by Christine Ann Ubana · Artwork by Ma. Jiecel Najera (AYBL).",
    ],
  },
  {
    id: "ollcf-shs-preregistration",
    title: "OLLCF Senior High School Pre-Registration (SY 2026–2027)",
    date: "2026-12-15",
    time: "Monday – Friday, 8:00 AM – 5:00 PM",
    location: "OLLCF Campus, Vinzons Ave, Gahonon, Daet, Camarines Norte",
    category: "Enrollment",
    status: "Ongoing",
    description:
      "Pre-registration is ongoing for incoming Grade 11 New students, Transferees, Continuing, and Returnees across Academic (including ABM) and Tech-Pro tracks—with free school supplies and uniform for OLLCF SHS learners.",
    details: [
      "Bring your Original Grade 10 Report Card, Certificate of Good Moral Character, Photocopy of PSA Birth Certificate, and 2 pcs 2×2 ID picture (with nametag, white background).",
      "Download the OLLCF SHS Enrollment & Requirements Guide on our Resources page before visiting campus.",
      "For inquiries, call (054) 721 1368 or 0948 180 1434, or message OLLCF SHS on Facebook.",
    ],
  },
  {
    id: "abm-career-orientation",
    title: "Incoming Grade 11 ABM Strand & Career Orientation",
    date: "2027-01-22",
    time: "9:00 AM – 12:00 PM",
    location: "OLLCF Senior High School Department, Daet",
    category: "Orientation",
    status: "Planned Activity",
    description:
      "An informative orientation for incoming Grade 10 completers and parents exploring ABM specialized subjects, AYBL student leadership, and college pathways in accountancy, finance, marketing, and business management.",
    details: [
      "Walk through Grade 11 and Grade 12 ABM subjects and how they connect to college programs at OLLCF and beyond.",
      "Meet AYBL student officers and learn how campus business activities build confidence and real-world skills.",
      "Tip: take the 2-minute Career Quiz on this website ahead of time and bring your questions.",
    ],
  },
  {
    id: "shs-business-research-showcase",
    title: "SHS Enterprise Simulation & Practical Research Showcase",
    date: "2027-02-19",
    time: "8:30 AM – 4:00 PM",
    location: "OLLCF Senior High School, Daet, Camarines Norte",
    category: "Research",
    status: "Academic Milestone",
    description:
      "Grade 11 and Grade 12 ABM learners present market studies, feasibility plans, and practical research findings that address real needs in Daet and Camarines Norte.",
    details: [
      "Presentations integrate Business Finance, Principles of Marketing, Applied Economics, and Practical Research.",
      "Students practice defending financial projections, customer research, and ethical business decisions.",
      "Confirm exact defense schedules and room assignments with your ABM subject teachers and the OLLCF SHS Office.",
    ],
  },
  {
    id: "aybl-general-assembly-highlight",
    title: "AYBL General Assembly & Induction of Newly Elected Officers",
    date: "2026-07-29",
    time: "OLLCF Senior High School",
    location: "Our Lady of Lourdes College Foundation, Daet",
    category: "Leadership",
    status: "SY 2026–2027 Highlight",
    description:
      "The torch was passed to the newly elected officers of the Association of Young Business Leaders (AYBL), guided by Adviser Ms. Blossom L. Dionela and President Rey Kenneth Odasco.",
    details: [
      "Launched the school year's student-led programs focused on business readiness, creativity, audit integrity, and community development.",
      "Brought together executive officers, vice presidents, directors, and TechPro representatives to serve OLLCF SHS learners.",
      "Explore the full roster of newly elected AYBL officers in the Student Showcase Gallery.",
    ],
  },
  {
    id: "ollcf-intramurals-2026-highlight",
    title: "Mr. & Ms. Intramurals 2026 — AYBL Pride Showcase",
    date: "2026-09-18",
    time: "OLLCF Campus Grounds",
    location: "Our Lady of Lourdes College Foundation, Daet",
    category: "Highlight",
    status: "AYBL Achievement",
    description:
      "Four AYBL officers proudly represented the organization at OLLCF Intramurals 2026—bringing home 2nd and 3rd Runner-Up crowns plus major special awards.",
    details: [
      "Rey Kenneth Odasco (AYBL President) — Mr. Intramurals 2026, 2nd Runner-Up & special awardee.",
      "Evangeline Jazz Reema Ibasco (VP for Internal Communication) — Ms. Intramurals 2026, 2nd Runner-Up.",
      "Shane Rafael (Director for Public Relations) — Mr. Intramurals 2026, 3rd Runner-Up.",
      "Cristel B. Aguas (Director for Audit) — Ms. Intramurals 2026, 3rd Runner-Up.",
    ],
  },
];

export interface StudentSpotlight {
  id: string;
  name: string;
  role: string;
  achievement: string;
  highlight: string;
  photo: string;
}

export const studentSpotlights: readonly StudentSpotlight[] = [
  {
    id: "kenneth",
    name: "Rey Kenneth Odasco",
    role: "AYBL President · OLLCF Senior High School",
    achievement: "Mr. Intramurals 2026 · 2nd Runner-Up",
    highlight:
      "Honored for his dedication, confidence, and outstanding performance representing AYBL—also earning Mr. Popularity 2026, Best in Sports Attire, Best in School Uniform, and Best in Formal Attire.",
    photo: `${AYBL_IMG}/783778095_122263693628122924_9070735196601345550_n.jpg`,
  },
  {
    id: "evangeline",
    name: "Evangeline Jazz Reema Ibasco",
    role: "AYBL VP for Internal Communication",
    achievement: "Ms. Intramurals 2026 · 2nd Runner-Up",
    highlight:
      "Celebrated by the AYBL family for her grace, hard work, and dedication throughout the competition—shining on stage as Ms. Intramurals 2026 2nd Runner-Up.",
    photo: `${AYBL_IMG}/783878169_122263688918122924_4571283520738523469_n.jpg`,
  },
  {
    id: "shane",
    name: "Shane Rafael",
    role: "AYBL Director for Public Relations",
    achievement: "Mr. Intramurals 2026 · 3rd Runner-Up",
    highlight:
      "Recognized for shining throughout every stage of OLLCF Intramurals 2026, bringing pride to the Association of Young Business Leaders as 3rd Runner-Up.",
    photo: `${AYBL_IMG}/783981455_122263705442122924_5073407049623369280_n.jpg`,
  },
  {
    id: "cristel",
    name: "Cristel B. Aguas",
    role: "AYBL Director for Audit",
    achievement: "Ms. Intramurals 2026 · 3rd Runner-Up",
    highlight:
      "A special milestone for our AYBL Director for Audit—honored as Ms. Intramurals 2026 3rd Runner-Up and celebrated for her poise, commitment, and Lourdenian spirit.",
    photo: `${AYBL_IMG}/783904295_122263689326122924_6635205145037462025_n.jpg`,
  },
];

export interface StudentWorkItem {
  id: string;
  type: "Enterprise Event" | "Student Org" | "Campus Pride" | "Graduating Class";
  title: string;
  team: string;
  summary: string;
  highlight: string;
  metrics: readonly string[];
  takeaway: string;
  image: string;
  objectPosition?: string;
}

export const studentWorks: readonly StudentWorkItem[] = [
  {
    id: "food-bazaar-2026",
    type: "Enterprise Event",
    title: "OLLCF SHS Food Bazaar 2026 — From Concept to Commerce",
    team: "OLLCF Senior High School Entrepreneurs & AYBL",
    summary:
      "A festive campus bazaar on December 11, 2026 where Senior High School learners launch real food and product booths—turning classroom marketing, pricing, and operations plans into live customer experiences.",
    highlight: "December 11, 2026 · OLLCF Campus, Daet",
    metrics: [
      "Theme: Advancing entrepreneurial competence through innovation & creativity",
      "Hands-on costing, markup, inventory, and sales tracking",
      "Campaign by Christine Ann Ubana (Write-up) & Ma. Jiecel Najera (Poster)",
    ],
    takeaway:
      "Connects Business Mathematics, Principles of Marketing, and Business Enterprise Simulation directly to real campus commerce.",
    image: `${AYBL_IMG}/907191101_122274973436122924_4359142396362882091_n.jpg`,
    objectPosition: "center 32%",
  },
  {
    id: "aybl-leadership-torch",
    type: "Student Org",
    title: "Association of Young Business Leaders (AYBL) Leadership",
    team: "20 Newly Elected Officers · Guided by Adviser Ms. Blossom L. Dionela",
    summary:
      "The official business leadership organization of OLLCF Senior High School—structured like a real enterprise with dedicated divisions for Finance, Audit, Marketing, Creatives, Events & Logistics, Communications, Membership, and Community Development.",
    highlight: "Passing the torch of principled student leadership",
    metrics: [
      "Executive board led by President Rey Kenneth Odasco & EVP John Ruzzel Velez",
      "Real organizational roles mirroring corporate & startup teams",
      "Active campus assemblies, creative campaigns, and student events",
    ],
    takeaway:
      "Brings Organization & Management and Business Ethics to life through real student governance and teamwork.",
    image: `${AYBL_IMG}/768992371_122262095336122924_5639107466373830583_n.jpg`,
    objectPosition: "center center",
  },
  {
    id: "intramurals-2026-pride",
    type: "Campus Pride",
    title: "Mr. & Ms. Intramurals 2026 — Confidence Beyond the Classroom",
    team: "AYBL Student Representatives · OLLCF Daet",
    summary:
      "ABM and AYBL learners prove that business students excel both in academics and on stage—with four AYBL officers winning major placements and special awards at OLLCF Intramurals 2026.",
    highlight: "4 Crowned Finalists · Multiple Special Awards",
    metrics: [
      "2nd Runners-Up: Rey Kenneth Odasco & Evangeline Jazz Reema Ibasco",
      "3rd Runners-Up: Shane Rafael & Cristel B. Aguas",
      "Showcased public speaking, composure, and strong team support",
    ],
    takeaway:
      "Builds the stage presence, communication skills, and self-confidence essential for future corporate leaders and founders.",
    image: `${AYBL_IMG}/784734058_122263693634122924_2404624928070217147_n.jpg`,
    objectPosition: "center 28%",
  },
  {
    id: "class-2026-padayon",
    type: "Graduating Class",
    title: "OLLCF Class 2026 Tribute — Padayon to the Next Chapter",
    team: "Association of Young Business Leaders · OLLCF SHS",
    summary:
      "Celebrating graduating Lourdenians as they carry their Senior High memories, friendships, and ABM foundations into college degrees in accountancy, business administration, finance, marketing, and entrepreneurship.",
    highlight: "Every end has a new beginning · Padayon!",
    metrics: [
      "Prepared for BS Accountancy, BSBA, Finance, Marketing, HR & Entrepreneurship",
      "Backed by OLLCF's legacy of Quality, Excellence, and Success since 1977",
      "Lifelong network of fellow Lourdenian young business leaders",
    ],
    takeaway:
      "Shows incoming Grade 11 students the supportive community waiting for them from enrollment all the way to graduation.",
    image: `${AYBL_IMG}/878081419_122272877678122924_6700403035532850804_n.jpg`,
    objectPosition: "center center",
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
    title: "OLLCF SHS enrollment & requirements guide",
    description:
      "Step-by-step admissions guide for incoming Grade 11 ABM learners at Our Lady of Lourdes College Foundation, including documentary requirements and contact details.",
    category: "Admissions",
    format: "MD",
    href: "/resources/shs-enrollment-guide.md",
    fileName: "ollcf-shs-enrollment-guide.md",
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
    title: "Our Lady of Lourdes College Foundation (Official FB)",
    description:
      "Follow official campus announcements, pre-registration updates, and institutional news from OLLCF Daet.",
    href: "https://www.facebook.com/share/18g81mh4y9/?mibextid=wwXIfr",
    label: "OLLCF Official",
  },
  {
    title: "OLLCF Senior High School (Official FB)",
    description:
      "Stay updated on SHS section lists, enrollment requirements, campus reminders, and Senior High activities.",
    href: "https://www.facebook.com/share/1BrF27ubuq/?mibextid=wwXIfr",
    label: "OLLCF SHS",
  },
  {
    title: "Association of Young Business Leaders — AYBL (Official FB)",
    description:
      "Connect with OLLCF SHS's student business organization for events like the SHS Food Bazaar, officer updates, and highlights.",
    href: "https://www.facebook.com/share/1CDaHK4HhV/?mibextid=wwXIfr",
    label: "OLLCF AYBL",
  },
  {
    title: "DepEd curriculum guides",
    description:
      "Explore official academic-track and ABM curriculum references from the Department of Education.",
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
      "Find student-oriented financial education materials and videos from BSP.",
    href: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/FinEd_LearnersAndEducators.aspx",
    label: "Bangko Sentral ng Pilipinas",
  },
] as const;

export const faqs = [
  {
    question: "What does ABM stand for?",
    answer:
      "ABM means Accountancy, Business, and Management. At Our Lady of Lourdes College Foundation (OLLCF) Senior High School, it equips learners with practical foundations in accounting, finance, marketing, management, and entrepreneurship.",
  },
  {
    question: "Do I need to be great at math to enroll in ABM?",
    answer:
      "No. You do not need to know everything before you begin—willingness to practice, ask questions, and work carefully matters most. ABM blends practical mathematics with communication, teamwork, research, leadership, and ethical decision-making.",
  },
  {
    question: "What are the requirements to enroll in OLLCF Senior High School?",
    answer:
      "Incoming Grade 11 applicants typically submit their Original Grade 10 Report Card, Certificate of Good Moral Character, Photocopy of PSA Birth Certificate, and 2 pcs 2×2 ID picture (with nametag and white background). OLLCF SHS also offers free school supplies and uniform—confirm current enrollment guidelines at the campus or via OLLCF SHS on Facebook.",
  },
  {
    question:
      "How can incoming ABM students get involved in campus activities at OLLCF?",
    answer:
      "You can join the Association of Young Business Leaders (AYBL), the official business leadership student organization of OLLCF Senior High School. Members participate in assemblies, leadership roles, campus representations, and hands-on events such as the OLLCF SHS Food Bazaar.",
  },
  {
    question: "How heavy is the ABM workload, and how do students balance projects?",
    answer:
      "ABM blends steady weekly practice (accounting worksheets, business math, financial analysis) with collaborative projects like marketing plans, Practical Research, and the Business Enterprise Simulation. Reviewing problems regularly and working closely with teammates makes it very manageable.",
  },
  {
    question: "What college degrees can I pursue after graduating from ABM?",
    answer:
      "ABM prepares you strongly for BS Accountancy, BS Management Accounting, BS Business Administration (Financial Management, Marketing Management, Human Resource Management, Operations), BS Entrepreneurship, and related business or corporate courses.",
  },
  {
    question: "Is the career quiz a professional assessment?",
    answer:
      "No. It is a five-question reflection activity designed to help incoming SHS students explore which business fields match their interests. Explore all six pathways and talk with your teachers, parents, or OLLCF guidance team as you plan your future.",
  },
] as const;
