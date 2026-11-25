export interface GalleryStory {
  id: string;
  subtitle: string;
  dateLabel: string;
  readTime: string;
  location: string;
  author: string;
  photoCredit?: string;
  caption: string;
  imageWidth: number;
  imageHeight: number;
  imageStyle?: "poster" | "portrait" | "landscape" | "square";
  markdown: string;
}

export const galleryStories: Record<string, GalleryStory> = {
  "shs-food-bazaar-2026": {
    id: "shs-food-bazaar-2026",
    subtitle:
      "December 11 is when spreadsheets, marketing plans, and late-night taste tests finally hit the campus grounds.",
    dateLabel: "December 11, 2026",
    readTime: "4 min read",
    location: "OLLCF Campus, Vinzons Ave, Daet",
    author: "Christine Ann Ubana · AYBL Feature",
    photoCredit: "Poster artwork by Ma. Jiecel Najera",
    caption:
      "Official announcement poster for the OLLCF SHS Food Bazaar 2026 — 'From Concept to Commerce.'",
    imageWidth: 509,
    imageHeight: 720,
    imageStyle: "poster",
    markdown: `If you ask almost any ABM student at Our Lady of Lourdes College Foundation what day they look forward to the most, there's a good chance they'll say the **SHS Food Bazaar**.

It's the one day on campus when nobody is just talking about profit margins on a whiteboard. Instead, you're actually setting up a booth, greeting hungry classmates, pricing your snacks so they sell fast without losing money, and figuring out on the spot how to keep the line moving.

> "One day, countless cravings! Bring your friends, follow your cravings, and support our fellow SHS entrepreneurs."

## What makes "From Concept to Commerce" different?

This year's theme — *From Concept to Commerce: Advancing Entrepreneurial Competence Through Innovation, Creativity, and Practical Business Experience* — says it all. Every food stall starts weeks earlier inside ABM classes:

- **Product costing & pricing:** Students compute ingredient costs down to the last peso, factor in packaging, and test whether their price fits a student budget.
- **Branding & booth design:** Teams pick a clear concept, design signage that catches attention from across the courtyard, and plan festive December touches.
- **Team roles in action:** Someone manages the cash box, someone tracks inventory, someone handles plating, and someone chats with customers and promotes combos.
- **Honest sales tracking:** After the crowd clears out, every booth reconciles its cash and records what actually sold best — just like in **Business Enterprise Simulation** and **Fundamentals of ABM**.

## Quick guide if you're visiting

| Detail | What to know |
| --- | --- |
| **Date** | December 11, 2026 |
| **Venue** | Our Lady of Lourdes College Foundation (OLLCF), Daet |
| **Who's running the booths** | OLLCF Senior High School student entrepreneurs & AYBL |
| **Best time to drop by** | Come early before the crowd's favorite treats sell out! |

## Why incoming Grade 11 students love hearing about this

A lot of Grade 10 students worry that ABM is all ledgers, calculators, and quiet lectures. The Food Bazaar is the best proof that it isn't. You still learn the numbers — in fact, you learn why the numbers matter — because when real customers are handing you cash and asking for seconds, everything you studied suddenly clicks.

### Tips if you're planning to join next year

1. **Start simple with your menu.** Two or three standout items you can serve quickly almost always beat a ten-item menu that slows down your team.
2. **Test your recipe on honest friends.** Ask them if they'd actually pay your target price for it.
3. **Enjoy the buzz.** You'll be tired by the afternoon, sure, but counting your first day of real student sales with your groupmates is a memory you keep long after graduation.

---

*Publication credits: Write-up inspired by Christine Ann Ubana · Official poster by Ma. Jiecel Najera (AYBL, OLLCF SHS).*`,
  },

  "aybl-general-assembly": {
    id: "aybl-general-assembly",
    subtitle:
      "How one afternoon in July brought OLLCF's young business leaders together to set the tone for the whole school year.",
    dateLabel: "July 29, 2026",
    readTime: "3 min read",
    location: "OLLCF Senior High School, Daet",
    author: "AYBL Editorial Team",
    caption:
      "Members, advisers, and newly gathered officers of the Association of Young Business Leaders during the SY 2026–2027 General Assembly.",
    imageWidth: 1440,
    imageHeight: 810,
    imageStyle: "landscape",
    markdown: `The start of a school year always feels a little noisy and uncertain — especially if you're new to Senior High School and still trying to figure out where your classrooms are, let alone which student organization to join.

That's why the **AYBL General Assembly** on July 29, 2026 felt so refreshing. Walk into the room and you immediately notice the energy: Grade 11 and Grade 12 students sitting side by side, chatting with officers, and realizing they aren't going through the ABM journey alone.

## What happened during the kickoff

Rather than turning the assembly into a stiff seminar, the organizers kept it friendly, practical, and welcoming:

- **Getting to know AYBL:** Students learned what the *Association of Young Business Leaders* actually does throughout the year — from student-run bazaars to leadership training and campus representation.
- **Meeting the mentors and officers:** Guided by Adviser **Ms. Blossom L. Dionela**, the student leadership team shared how different committees work together like departments in a real company.
- **Opening the floor to fresh ideas:** Members talked openly about the activities they wanted to see, the skills they hoped to build, and how everyone can pitch in — whether you're outgoing on stage or prefer working behind the scenes on finance, audit, or graphics.

> "You don't have to walk into your first assembly feeling like a CEO. You just have to show up curious and ready to learn with people who want you to grow."

## Why joining a student org matters in ABM

Here's something upperclassmen will tell you right away: textbooks teach you the framework, but student organizations teach you how people actually work.

1. **You learn to speak up comfortably** in meetings and group discussions.
2. **You see how deadlines, budgets, and teamwork fit together** when organizing real campus events.
3. **You build friendships across sections**, which makes tough exam weeks and group projects a whole lot lighter.

If you're an incoming Grade 11 Lourdenian wondering whether you'll fit in, take a good look at the smiles in this photo. That's the kind of community waiting for you at OLLCF Senior High School.`,
  },

  "aybl-newly-elected-officers": {
    id: "aybl-newly-elected-officers",
    subtitle:
      "The torch has been passed — meet the student leaders stepping up to guide AYBL with purpose, integrity, and fresh energy.",
    dateLabel: "SY 2026–2027",
    readTime: "4 min read",
    location: "OLLCF Senior High School, Daet",
    author: "Christine Ann Ubana · AYBL Announcement",
    photoCredit: "Graphics by Akime Jhean Rasco & Ma. Jiecel Najera",
    caption:
      "Official banner introducing the newly elected officers of the Association of Young Business Leaders at OLLCF Senior High School.",
    imageWidth: 590,
    imageHeight: 495,
    imageStyle: "square",
    markdown: `Every school year brings a handover moment — that bittersweet mix of thanking the seniors who paved the way and cheering on the new team ready to step forward.

This year, **the torch has been passed** to a brand-new set of officers for the **Association of Young Business Leaders (AYBL)** at Our Lady of Lourdes College Foundation.

> "A new generation of leaders now takes the helm — rising with fresh ideas, unwavering passion, and a shared commitment to meaningful change."

## Structured like a real organization

One of the coolest things about AYBL at OLLCF is that it isn't just a president and a secretary doing everything. The board is organized like an actual modern enterprise, giving students a taste of real corporate and startup roles before they even reach college:

| Division | What the officers handle |
| --- | --- |
| **Executive Leadership** | Overall direction, student advocacy, and coordination led by President **Rey Kenneth C. Dasco**, EVP **John Ruzzel Velez**, and Executive Secretary **Lea Joy Abarca** |
| **Finance & Audit** | Budgeting, transparent record-keeping, and checks led by **Kaycee Louise Maravillas** (VP for Finance) and **Cristel B. Aguas** (Director for Audit) |
| **Marketing, Creatives & Social Media** | Campus campaigns, posters, storytelling, and visuals led by **Abigail Marte**, **Ma. Jiecel Najera**, **Cristine Ann Ubana**, and **Rayzel Diaz** |
| **Communications & Public Relations** | Internal & external coordination led by **Evangeline Jazz Reema Ibasco**, **Rencess P. Canlas**, **Shane Rafael**, and **Frances Ann Ang** |
| **Events, Membership & Community** | Assemblies, bazaars, member outreach, and TechPro liaison led by **Princess Joy De Mata**, **Roselle Cabajar**, **Cynelle Deterala**, **Christine Joyce Ibis**, **Lance Roby Savilla**, and **Dhenbert Sayno** |

All of them work closely with AYBL Adviser **Ms. Blossom L. Dionela**, making sure student ideas stay grounded, responsible, and fun.

## What this means for incoming ABM students

When you join OLLCF Senior High School, you aren't just watching from the sidelines:

- **Real mentorship:** You have approachable student officers who know the exact subjects, teachers, and study habits that help you succeed.
- **Room to grow into leadership:** Today's Grade 11 volunteers often become next year's directors, vice presidents, and project leads.
- **Lessons that stick:** Practicing audit checks, event logistics, and public relations in Senior High directly mirrors **Organization and Management** and **Business Ethics**.

Want to put faces to all twenty names? Scroll through the full officer roster on our [Student Showcase Gallery](/gallery/#aybl-officers) — you'll probably recognize a few friendly faces when you visit campus!

---

*Original write-up by Christine Ann Ubana · Official graphics by Akime Jhean Rasco & Ma. Jiecel Najera.*`,
  },

  "kenneth-mr-intramurals-2026": {
    id: "kenneth-mr-intramurals-2026",
    subtitle:
      "AYBL President Rey Kenneth C. Dasco stepped onto the Intramurals stage and walked away with 2nd Runner-Up — plus four major special awards.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "AYBL President Rey Kenneth C. Dasco beaming with his Mr. Intramurals 2026 trophy and multiple special award sashes.",
    imageWidth: 1080,
    imageHeight: 1440,
    imageStyle: "portrait",
    markdown: `It's one thing to lead meetings and plan student activities behind a desk. It's another thing entirely to walk out under campus stage lights in front of hundreds of cheering Lourdenians and represent your organization with total composure.

Our very own AYBL President, **Rey Kenneth C. Dasco**, did both — and made the entire ABM and AYBL family proud by being crowned **Mr. Intramurals 2026 – 2nd Runner-Up**.

> "Your dedication, confidence, and outstanding performance have brought pride to our organization. Keep shining and inspiring others, Mr. President!"

## A sweep of special honors

Beyond his 2nd Runner-Up crown, Kenneth's preparation and presence stood out across almost every segment of the competition:

- **Mr. Intramurals 2026 — 2nd Runner-Up**
- **Mr. Popularity 2026**
- **Best in Sports Attire**
- **Best in School Uniform**
- **Best in Formal Attire**

Look closely at the photo and you can literally see the stack of sashes draped across his shoulders — each one backed by hours of rehearsals, fittings, Q&A practice, and nonstop support from his AYBL teammates cheering from the crowd.

## What stage confidence has to do with ABM

You might wonder why a business strand website is celebrating an Intramurals pageant win. Honestly? The overlap is huge:

1. **Presence under pressure:** Whether you're answering a pageant question on stage or defending a feasibility study in front of panelists, staying calm and clear-headed is a superpower.
2. **Leading by example:** Seeing the AYBL President put himself out there encourages younger students to step outside their comfort zones too.
3. **Well-rounded student life:** At OLLCF, ABM isn't just about surviving quizzes. You get to enjoy campus traditions, discover new talents, and cheer loudly for your friends.

Congratulations again, Kenneth! Thank you for showing incoming students that Lourdenian business leaders bring both heart and confidence wherever they go.`,
  },

  "evangeline-ms-intramurals-2026": {
    id: "evangeline-ms-intramurals-2026",
    subtitle:
      "Grace, hard work, and steady confidence carried AYBL's VP for Internal Communication to the Ms. Intramurals 2026 2nd Runner-Up crown.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "AYBL VP for Internal Communication Evangeline Jazz Reema Ibasco celebrated as Ms. Intramurals 2026 – 2nd Runner-Up.",
    imageWidth: 443,
    imageHeight: 590,
    imageStyle: "portrait",
    markdown: `Anyone who has worked with **Evangeline Jazz Reema Ibasco** inside AYBL knows she's the kind of person who keeps people connected — making sure messages are clear, teammates feel included, and details don't slip through the cracks.

At **OLLCF Intramurals 2026**, the whole campus got to see that same warmth and poise shine on stage when she was crowned **Ms. Intramurals 2026 – 2nd Runner-Up**.

> "Your hard work, confidence, and dedication truly shined throughout the competition. Your AYBL family is so proud of you!"

## Behind the crown

What looks effortless during coronation night actually takes weeks of quiet effort:

- **Balancing academics and rehearsals:** Staying on top of Senior High coursework while putting in evening practices takes serious time management.
- **Speaking from the heart:** As VP for Internal Communication, Evangeline already practices clear, thoughtful speaking — and that authenticity came straight through on stage.
- **Showing up with grace:** From preparation to the final walk, she carried herself with kindness and Lourdenian pride.

## Why moments like this matter to our community

In Senior High School, it's easy to think you have to pick a single box — either you're an "academics student," a "student leader," or a "campus performer." Evangeline's milestone reminds every incoming ABM student that you don't have to shrink yourself to fit one label.

You can study accounting and marketing during the week, help lead a student business organization, and still own the spotlight when Intramurals season rolls around.

Way to go, Evangeline! Your AYBL family couldn't be prouder.`,
  },

  "shane-mr-intramurals-2026": {
    id: "shane-mr-intramurals-2026",
    subtitle:
      "Representing AYBL as Director for Public Relations, Shane Rafael stood tall on the Intramurals stage and earned 3rd Runner-Up.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "AYBL Director for Public Relations Shane Rafael during Mr. Intramurals 2026 at OLLCF, crowned 3rd Runner-Up.",
    imageWidth: 1440,
    imageHeight: 810,
    imageStyle: "landscape",
    markdown: `In any organization, the **Director for Public Relations** is one of the people who represents its voice and spirit to everyone else. At OLLCF Intramurals 2026, **Shane Rafael** took that role literally — stepping up in front of the entire school and earning **Mr. Intramurals 2026 – 3rd Runner-Up**.

> "You shined all throughout the competition. Keep on shining — we are so proud of the special milestone you achieved!"

## Standing out from start to finish

Competitions like Mr. & Ms. Intramurals test way more than just a formal suit:

- **Consistency across every round:** Keeping your energy high from opening production to formal wear and Q&A takes real grit.
- **Approachable charisma:** Good public relations is all about connecting naturally with people — and Shane brought that genuine warmth right onto the stage.
- **Team spirit:** Behind every confident walk was a loud, supportive AYBL crowd rooting for him from the sidelines.

## Carrying that confidence into ABM and beyond

If you're thinking about taking ABM at OLLCF, remember that careers in **marketing, management, entrepreneurship, and client relations** all lean heavily on how well you communicate and carry yourself.

Getting involved in campus events — whether you're competing on stage, organizing logistics, or cheering with your classmates — helps you build that confidence early in a place where people genuinely want to see you win.

Huge congratulations once again, Shane!`,
  },

  "cristel-ms-intramurals-2026": {
    id: "cristel-ms-intramurals-2026",
    subtitle:
      "Proof that future accountants and auditors can own the stage too — AYBL Director for Audit Cristel Aguas takes home 3rd Runner-Up.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "AYBL Director for Audit Cristel B. Aguas with her trophy and bouquet after being crowned Ms. Intramurals 2026 – 3rd Runner-Up.",
    imageWidth: 1080,
    imageHeight: 1440,
    imageStyle: "portrait",
    markdown: `There's an old stereotype that audit and accounting folks just sit quietly in the corner checking receipts. **Cristel B. Aguas**, our AYBL Director for Audit, happily broke that stereotype into pieces at OLLCF Intramurals 2026.

Holding her trophy and flowers with a well-earned smile, Cristel was crowned **Ms. Intramurals 2026 – 3rd Runner-Up** — a milestone the entire AYBL community celebrated together.

> "We are incredibly proud of your achievement and honored to celebrate this special milestone with you! Your AYBL family is so proud of you!"

## Detail-oriented in org work, poised on stage

In AYBL, being **Director for Audit** means people trust your integrity, careful eye, and discipline. Those exact same habits show up when preparing for a major school competition:

- **Preparation that shows:** Paying attention to every small detail — posture, timing, delivery, and composure — makes all the difference on stage.
- **Quiet grit:** Balancing Senior High School responsibilities with Intramurals prep isn't easy, and Cristel handled both with steady determination.
- **Lourdenian pride:** Representing your strand and organization with warmth leaves a lasting impression on classmates and younger students watching from the audience.

## A message for incoming ABM students

Whether you dream of becoming a **Certified Public Accountant (CPA)**, a financial analyst, or a business founder, your Senior High years at OLLCF are about becoming a confident, well-rounded person — not just memorizing formulas.

Cristel's win is a joyful reminder to try new things, back your classmates, and enjoy every chapter of Senior High. Congratulations again, Cristel!`,
  },

  "aybl-classroom-orientation": {
    id: "aybl-classroom-orientation",
    subtitle:
      "Before the big posters and campus crowds come the real conversations inside the classroom — planning, listening, and turning ideas into action.",
    dateLabel: "July 29, 2026",
    readTime: "3 min read",
    location: "OLLCF Senior High School Classroom, Daet",
    author: "AYBL Editorial Team",
    caption:
      "OLLCF Senior High School students listening and collaborating during an AYBL leadership and planning session.",
    imageWidth: 1440,
    imageHeight: 810,
    imageStyle: "landscape",
    markdown: `Not every big moment in ABM happens under stage lights or behind a busy bazaar booth. Most of the real magic starts right here — in an ordinary classroom with students leaning in, taking notes, and figuring out what they want to build together.

During this **AYBL classroom orientation and planning session**, OLLCF Senior High learners gathered to talk through the basics of student leadership, upcoming organization activities, and how classroom lessons connect to real-world teamwork.

## What actually happens in sessions like this

If you've never been to a Senior High organization meeting before, here's what it feels like at OLLCF:

- **No intimidating jargon:** Seniors and officers explain how committees work in plain language so new students immediately feel welcome.
- **Space to ask real questions:** Curious about how to balance ABM subjects with org activities? Or how event budgets get approved? Everything is open for discussion.
- **Practical collaboration:** Students practice the exact skills they read about in **Organization and Management** — setting clear goals, dividing tasks fairly, and communicating updates without drama.

## Why these quieter afternoons matter

It's easy to celebrate finished events, but learning how to sit down with a team and plan something from scratch is honestly one of the most valuable habits you can pick up in Grade 11 and Grade 12.

1. **You learn to listen before jumping in**, which makes group projects way smoother.
2. **You see that good ideas can come from anyone in the room**, even a brand-new Grade 11 student on their first month of campus.
3. **You leave knowing you have teammates** who'll have your back all school year.

That's the everyday heartbeat of ABM at OLLCF — practical, welcoming, and grounded in real teamwork.`,
  },

  "aybl-community-camaraderie": {
    id: "aybl-community-camaraderie",
    subtitle:
      "Good subjects matter, sure — but it's the classmates smiling beside you that make Senior High unforgettable.",
    dateLabel: "July 29, 2026",
    readTime: "3 min read",
    location: "OLLCF Senior High School, Daet",
    author: "AYBL Editorial Team",
    caption:
      "OLLCF ABM students smiling and waving together during their July 29, 2026 AYBL gathering.",
    imageWidth: 1440,
    imageHeight: 810,
    imageStyle: "landscape",
    markdown: `When incoming Grade 11 students ask us what ABM at Our Lady of Lourdes College Foundation is *really* like, we can list all the specialized subjects and college pathways — and those are genuinely important.

Still, if you want the honest answer, just look at this room.

Between the accounting worksheets, marketing pitches, and research deadlines, what students remember most is the **community** — classmates who check in on you before a quiz, share notes when you're stuck on a journal entry, and wave at the camera with huge grins after a long school day.

## What a supportive strand feels like day to day

Here's what helps ABM learners at OLLCF thrive together:

- **Study buddies who actually explain things:** Stuck on debits and credits or break-even formulas? Chances are someone a seat away just figured it out and is happy to walk you through it.
- **Zero "go it alone" pressure:** From group business plans to AYBL events, collaboration is baked into how we learn.
- **Room for every personality:** Some students love pitching in front of the class; others love organizing spreadsheets, editing posters, or coordinating schedules. In ABM, every single one of those strengths matters.

## Thinking about choosing ABM at OLLCF?

If you're still on the fence about which Senior High strand to pick — or nervous about starting fresh at a new campus in Daet — know that you're walking into a warm, encouraging group of teachers and fellow Lourdenians.

Come as you are. Bring your curiosity, make friends early, and let's build something great together.`,
  },

  "intramurals-family-celebration": {
    id: "intramurals-family-celebration",
    subtitle:
      "After the stage lights dim, the best part of winning is celebrating side by side with the people who cheered for you the loudest.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "AYBL officers, winners, and friends gathering backstage for a joyful family photo after OLLCF Intramurals 2026.",
    imageWidth: 1080,
    imageHeight: 1440,
    imageStyle: "portrait",
    markdown: `There's a special kind of joy in the five minutes right after a big campus event wraps up — when the nerves finally fade, everyone rushes in for hugs and group photos, and you realize you pulled it off *together*.

This backstage snapshot captures the **AYBL family** celebrating right after **Mr. & Ms. Intramurals 2026**, where four AYBL officers earned top placements and special awards.

## Our four crowned AYBL finalists

| AYBL Representative | Organization Role | Intramurals 2026 Honor |
| --- | --- | --- |
| **Rey Kenneth C. Dasco** | President | Mr. Intramurals 2026 — 2nd Runner-Up & 4 Special Awards |
| **Evangeline Jazz Reema Ibasco** | VP for Internal Communication | Ms. Intramurals 2026 — 2nd Runner-Up |
| **Shane Rafael** | Director for Public & Internal Relations | Mr. Intramurals 2026 — 3rd Runner-Up |
| **Cristel B. Aguas** | Director for Audit | Ms. Intramurals 2026 — 3rd Runner-Up |

## Why we call it the AYBL family

Notice how nobody in this photo is standing off by themselves. Behind every candidate who stepped onto that stage were classmates fixing outfits, running errands, making banners, taking photos, and screaming their lungs out from the audience.

That's the same spirit AYBL brings into everything else on campus:

- **We celebrate each other's wins loudly** — whether it's a pageant crown, a strong research defense, or a sold-out Food Bazaar booth.
- **We show up for each other backstage**, where the real prep work happens.
- **We make memories that turn classmates into lifelong friends.**

When you hear Lourdenians talk about school spirit at OLLCF, this exact moment is what they mean.`,
  },

  "intramurals-sashes-honor": {
    id: "intramurals-sashes-honor",
    subtitle:
      "A closer look at the award sashes earned at OLLCF Intramurals 2026 — and the hours of effort stitched behind every single title.",
    dateLabel: "OLLCF Intramurals 2026",
    readTime: "2 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "AYBL Editorial Team",
    caption:
      "Close-up of the Intramurals 2026 award sashes including Mr. Popularity, Best in Sports Attire, Best in School Uniform, Best in Formal Attire, and 2nd Runner-Up.",
    imageWidth: 1080,
    imageHeight: 1440,
    imageStyle: "portrait",
    markdown: `At first glance, this is a simple snapshot of white-and-gold sashes laid out after a busy night. Look a little closer, though, and each ribbon tells a story of preparation, pride, and community support.

Earned by AYBL President **Rey Kenneth C. Dasco** during **OLLCF Intramurals 2026**, these sashes represent excellence across multiple categories:

- **Mr. Intramurals 2026 — 2nd Runner-Up**
- **Mr. Popularity 2026**
- **Best in Sports Attire**
- **Best in School Uniform**
- **Best in Formal Attire**

## What it takes to wear your uniform with pride

Out of all the awards in that stack, **Best in School Uniform** always hits a little closer to home. It isn't about the fanciest outfit — it's about carrying your school identity with respect, confidence, and genuine pride in being a Lourdenian.

And **Mr. Popularity**? That one belongs just as much to the classmates, friends, and AYBL family who rallied behind him from day one.

## Little reminders we take back to the classroom

1. **Preparation beats guesswork** — whether you're stepping onto a stage or walking into a quarterly exam.
2. **Consistency shows** — showing up sharp in *every* round is what earns multiple recognitions.
3. **Never underestimate a supportive team** — having people who believe in you makes hard work feel lighter.

A proud keepsake from Intramurals 2026, and a bright standard for every Lourdenian ABM student coming up next.`,
  },

  "ollcf-class-2026-padayon": {
    id: "ollcf-class-2026-padayon",
    subtitle:
      "Laughter in the hallways, late-night reviews, and chasing big dreams together — sending off OLLCF Class 2026 with full hearts.",
    dateLabel: "Class of 2026",
    readTime: "3 min read",
    location: "Our Lady of Lourdes College Foundation, Daet",
    author: "Association of Young Business Leaders (AYBL)",
    caption:
      "Official AYBL graduation tribute celebrating the graduating Lourdenians of OLLCF Class 2026.",
    imageWidth: 526,
    imageHeight: 526,
    imageStyle: "square",
    markdown: `It always feels like Senior High School passes in slow motion during exam week — and then, somehow, in the blink of an eye, you're adjusting your toga and wondering where two whole years just went.

This tribute from the **Association of Young Business Leaders (AYBL)** is for every single graduating Lourdenian of **OLLCF Class 2026**.

> "Every end has a new beginning. High school memories that felt like a blink — laughter in the hallways, late-night study sessions, and the thrill of chasing dreams together. Congratulations, Class 2026. Padayon!"

## What Class 2026 leaves behind

Graduating ABM students don't just leave behind empty desks. They leave a trail for the incoming Grade 11 and Grade 12 batches following right behind them:

- **Proof that you can figure hard things out:** Remember how intimidating your very first balance sheet or research chapter looked? You made it through — and you came out sharper.
- **A stronger student community:** Through campus assemblies, bazaars, and Intramurals cheers, Class 2026 helped keep Lourdenian spirit alive and welcoming.
- **Big dreams in motion:** Graduates are heading into college degrees in **BS Accountancy, BS Business Administration, Financial Management, Marketing, Human Resources, Entrepreneurship**, and more — carrying OLLCF's foundation of *Quality, Excellence, and Success*.

## For incoming Grade 11 students reading this

One day, just two quick years from now, this tribute will be for *your* batch.

So take the leap. Ask questions in class, join AYBL, try running a booth at the Food Bazaar, cheer for your friends, and soak up every hallway laugh along the way.

**Congratulations, Class 2026. Padayon — keep moving forward!**

---

*With love and pride, from your AYBL family at Our Lady of Lourdes College Foundation.*`,
  },
};

export function getGalleryStory(id: string): GalleryStory | undefined {
  return galleryStories[id];
}
