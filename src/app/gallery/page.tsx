import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Student Showcase",
  description:
    "Read real stories and browse moments from OLLCF Senior High School ABM and the Association of Young Business Leaders (AYBL).",
};

export default function GalleryPage() {
  return <Gallery />;
}
