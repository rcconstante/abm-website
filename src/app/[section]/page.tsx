import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutPage,
  SubjectsPage,
  CareersPage,
  ResourcesPage,
} from "@/components/information-pages";
import { EventsPage } from "@/components/events";
import { CareerQuiz } from "@/components/career-quiz";
import { ContactPage } from "@/components/contact";

const pages = {
  about: { title: "About ABM", component: AboutPage },
  subjects: { title: "ABM Subjects", component: SubjectsPage },
  careers: { title: "Career Pathways", component: CareersPage },
  resources: { title: "Learning Resources", component: ResourcesPage },
  events: { title: "Events & Updates", component: EventsPage },
  quiz: { title: "Find Your Career Match", component: CareerQuiz },
  contact: { title: "Get in Touch", component: ContactPage },
};
type Section = keyof typeof pages;
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  return {
    title:
      section in pages ? pages[section as Section].title : "Page not found",
  };
}
export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!(section in pages)) notFound();
  const Component = pages[section as Section].component;
  return <Component />;
}
