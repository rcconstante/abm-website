# ABM Strand

A complete, responsive nine-page informational website built with Next.js App Router, React, strict TypeScript, Inter, and Lucide icons. The design follows the supplied burgundy ABM reference. Westbridge Senior High is an illustrative identity selected for development.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3417. For the production export:

```sh
npm run build
npm run preview
```

The static export lives in `out/` and can be deployed to static hosting, including Cloudflare Pages. For Vercel, import this Next.js project and use `npm run build` as the build command. There are no database, authentication, paid service, or runtime API requirements.

## Included functionality

- Home, About ABM, Subjects, Career Pathways, Student Showcase, Learning Resources, Career Quiz, Events, and Contact routes.
- Responsive navigation with active-page indicators and an accessible mobile menu.
- Five-question, rule-based career explorer for six pathways, with validated answers, clear tie handling, results, interest breakdown, back navigation, and restart.
- Gallery category filtering and native modal image previews with previous/next controls, arrow-key navigation, Escape dismissal, focus containment, and focus restoration.
- Four original downloadable learning resources: introductory guide, subject checklist, budget CSV, and college-preparation checklist.
- FAQs, official educational links, expandable event details, and a visual college/career roadmap.
- Inquiry form with validation, message preparation, copy, and text-file download. Configuring a school email enables an email-app draft. The visitor reviews and sends the message in their own email app; the website does not claim server delivery.
- Original generated WebP imagery, locally hosted fonts, reduced-motion support, keyboard focus styles, skip navigation, and descriptive page metadata.

## Change the school identity

Copy `.env.example` to `.env.local` and set the school name, contact email, address, and official website URL. These are public information values, never secrets. Rebuild after changing them.

`src/lib/site.ts` centralizes the identity and navigation. Change the fictional-school note in `src/components/contact.tsx` when replacing the identity with a real school. `src/lib/content.ts` holds all subjects, careers, gallery captions, events, FAQs, and resource links. `src/lib/quiz.ts` owns questions and scoring. Visual tokens and responsive layouts are in `src/app/globals.css`.

Before using this site as an official school website, supply approved school details, real event dates, social links, and any approved student photographs. Current imagery and events are explicitly illustrative. School curriculum names and schedules vary; the site includes a note about confirming the current curriculum with the school.

## Validation

```sh
npm run typecheck
npm test
npm run build
node scripts/check-export.mjs
```

The quiz tests cover all six career outcomes, ties, malformed/incomplete answers, and question consistency. The export check validates all nine pages, local links, fragment destinations, images, and downloadable assets. Browser checks cover the complete quiz/reset flow, gallery filtering and preview navigation, contact preparation, responsive navigation, and layout overflow.

Original image prompts, provenance, and saved asset paths are documented in `public/image-prompts.md`.
