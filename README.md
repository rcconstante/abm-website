# ABM Strand — Our Lady of Lourdes College Foundation (OLLCF) Senior High School

> **Here at OLLCF, Your Future is our Concern.** · *Quality · Excellence · Success*

An informative, responsive **Accountancy, Business, and Management (ABM)** Senior High School web application personalized for **Our Lady of Lourdes College Foundation (OLLCF)** in Daet, Camarines Norte and the **Association of Young Business Leaders (AYBL)**.

Built with **Next.js 16 (App Router, static export)**, **React 19**, **strict TypeScript**, **Hugeicons**, **Inter**, **Lenis smooth scrolling**, and **Markdown storytelling (`react-markdown` + `remark-gfm`)** — designed for incoming Grade 11 Lourdenians, parents, and students exploring ABM while meeting 100% of the **SHS Website Project (ABM Strand)** rubric.

---

## School & Organization Identity

- **School:** Our Lady of Lourdes College Foundation (OLLCF) — Senior High School
- **Location:** 4WFV+H24, Vinzons Ave, Gahonon, Daet, 4600 Camarines Norte
- **Student Organization:** Association of Young Business Leaders (AYBL) · Adviser: Ms. Blossom L. Dionela
- **Contact:** `(054) 721 1368` · `0948 180 1434` · `information.ollcf@gmail.com`
- **Official Pages:**
  - [Our Lady of Lourdes College Foundation (Facebook)](https://www.facebook.com/share/18g81mh4y9/?mibextid=wwXIfr)
  - [OLLCF Senior High School (Facebook)](https://www.facebook.com/share/1BrF27ubuq/?mibextid=wwXIfr)
  - [Association of Young Business Leaders — AYBL (Facebook)](https://www.facebook.com/share/1CDaHK4HhV/?mibextid=wwXIfr)
  - [OLLCF Official Instagram (`@ollcfofficial`)](https://www.instagram.com/ollcfofficial/)

---

## ABM Project Requirements & Rubric Alignment

| Section | Requirement | Implementation |
| :--- | :--- | :--- |
| **1. Homepage & Overview** | ABM tagline, visual banner, interactive navigation tiles | Full-bleed hero banner with natural student photography, OLLCF official transparent seal (`public/images/Ourladyoflourdes/logo.png`), Royal Blue & Gold theme, responsive navigation with mobile drawer, and interactive previews for subjects, careers, quiz, spotlights, events, gallery, and PDF guides. |
| **2. ABM Strand Content** | Core & Specialized Subjects | 12 subjects organized across **Specialized (8)**, **Applied (2)**, and **Core (2)** learning areas with topic checklists and anchor jump links (`/subjects/`). |
| | Enterprise & AYBL Program Highlights | Filterable showcase in `/gallery/#student-work` highlighting the **OLLCF SHS Food Bazaar 2026**, **AYBL Leadership**, **Intramurals 2026 Pride**, and **Class 2026 Tribute**, paired with the full **20-officer AYBL roster** (`/gallery/#aybl-officers`). |
| | Career Pathways | 4-step Senior High-to-Career visual roadmap + 6 detailed pathways (**Accountancy**, **Management**, **Marketing**, **Entrepreneurship**, **Finance & Banking**, **Human Resources**) with degree options, job roles, and skills (`/careers/`). |
| | Student Success & Spotlights | Real AYBL student spotlights celebrating OLLCF Intramurals 2026 winners (Rey Kenneth Odasco, Evangeline Jazz Reema Ibasco, Shane Rafael, Cristel B. Aguas) featured on Home (`/`) and About (`/about/`). |
| **3. Student Resources & Tools** | Branded PDF Guides & Worksheets | 5 original, branded OLLCF PDFs in `public/resources/` configured to open inline in a new browser tab (`_headers`): **OLLCF SHS Enrollment & Requirements Guide**, **ABM Starter Study Guide**, **Subject & Skills Checklist**, **Student Budget Planner Worksheet**, and **College Preparation Checklist**. |
| | Interactive Career Quiz | Deterministic 5-question career interest matcher (`/quiz/`) with progress indicator, tie-breaking explanation, interest breakdown bars, degree recommendations, and automated unit tests. |
| | Study Tips & FAQs | Practical study habits, official OLLCF / DepEd / BSP links, and expandable FAQ accordions covering ABM math expectations, enrollment requirements, AYBL involvement, workload balance, and college pathways (`/resources/`). |
| **4. Community & Admissions** | Upcoming Events Calendar | Filterable 6-event SY 2026–2027 campus calendar (`/events/`) featuring **OLLCF SHS Food Bazaar 2026**, **SHS Pre-Registration**, **ABM Career Orientation**, **Enterprise Simulation & Research Showcase**, **AYBL General Assembly**, and **Mr. & Ms. Intramurals 2026**. |
| | Student Showcase & Blog Stories | Filterable showcase (`/gallery/`) linking to **12 dedicated editorial story pages** (`/gallery/<slug>/`) with large full-clarity photo framing, conversational humanized **Markdown** articles (`react-markdown` + `remark-gfm`), previous/next story navigation, and related moments. |
| | Contact, Campus Visit & Google Map | Student/parent inquiry & campus visit request form with conditional date/time fields, `mailto:` draft, clipboard copy, `.txt` download, and an embedded interactive **Google Map** for OLLCF along Vinzons Ave, Daet (`/contact/`). |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export via `output: "export"`)
- **UI & Language:** React 19, TypeScript 5.9 (`strict`)
- **Markdown Rendering:** `react-markdown` + `remark-gfm`
- **Icons:** Hugeicons (`@hugeicons/react` + `@hugeicons/core-free-icons`)
- **Typography:** Self-hosted Inter (`@fontsource/inter`, weights 400–800)
- **Smooth Scrolling:** Lenis (`lenis`) with `prefers-reduced-motion` support and sticky-header offsets
- **Testing & QA:** Node/TSX unit tests (`src/lib/*.test.ts`) + static export validator (`scripts/check-export.mjs`)

---

## Pages & Routes (21 Static Pages)

| Route | Purpose |
| :--- | :--- |
| `/` | Homepage — Hero, value strip, About preview, Subject tiles, Career cards, Career Quiz banner, AYBL Student Spotlights, Events/Gallery/Resources previews |
| `/about/` | About ABM — OLLCF ABM overview, life skills, incoming Grade 11 checklist, Student Spotlights |
| `/subjects/` | ABM Subjects — Specialized, Applied, and Core subjects with jump navigation & topic breakdowns |
| `/careers/` | Career Pathways — 4-step roadmap + 6 business tracks with degrees, job roles, and skills |
| `/resources/` | Learning Resources — 5 inline-view OLLCF PDF guides, study tips, official OLLCF/DepEd/BSP links, and FAQs |
| `/events/` | Events & Updates — Filterable 6-event SY 2026–2027 calendar with expandable details |
| `/gallery/` | Student Showcase — Filterable story journal, 20 newly elected AYBL officers, and program highlights |
| `/gallery/[slug]/` | 12 dedicated blog/story pages rendered from Markdown with large featured photos and prev/next navigation |
| `/quiz/` | Interactive Career Quiz — 5-question interest matcher with breakdown bars and degree suggestions |
| `/contact/` | Get in Touch — OLLCF Daet contact info, inquiry/campus-visit form, official social links, and embedded Google Map |

---

## Run Locally

```bash
npm ci
npm run dev
```

Open [http://127.0.0.1:3417](http://127.0.0.1:3417).

### Production Build & Verification

```bash
npm run typecheck
npm test
npm run build
node scripts/check-export.mjs
npm run preview
```

The static production build outputs to `out/` and deploys cleanly to **Cloudflare Pages**, **Vercel**, **Netlify**, or **GitHub Pages** with no environment variables required.

---

## Key Project Files

- `src/lib/site.ts` — OLLCF identity, contact details, Google Map links, social URLs, and navigation
- `src/lib/content.ts` — Subjects, careers, spotlights, AYBL officers, events, student works, PDF resources, and FAQs
- `src/lib/gallery-stories.ts` — 12 detailed conversational Markdown stories for `/gallery/[slug]/`
- `src/components/gallery-story.tsx` — Markdown blog article layout (`react-markdown` + `remark-gfm`)
- `src/components/contact.tsx` — Inquiry/campus-visit form and interactive OLLCF Google Map
- `src/components/school-logo.tsx` — Transparent OLLCF official seal component
- `src/app/globals.css` — Royal Blue & Gold design tokens, Markdown prose typography, and responsive layouts
- `public/resources/*.pdf` — Branded OLLCF ABM PDF guides and worksheets
