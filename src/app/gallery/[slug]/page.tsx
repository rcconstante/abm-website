import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryStoryView } from "@/components/gallery-story";
import { galleryItems } from "@/lib/content";
import { getGalleryStory } from "@/lib/gallery-stories";

export const dynamicParams = false;

export function generateStaticParams() {
  return galleryItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryItems.find((entry) => entry.id === slug);
  const story = item ? getGalleryStory(item.id) : undefined;
  if (!item || !story) {
    return { title: "Story not found" };
  }
  return {
    title: item.title,
    description: story.subtitle,
    openGraph: {
      title: item.title,
      description: story.subtitle,
      images: [{ url: item.image }],
    },
  };
}

export default async function GalleryStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = galleryItems.findIndex((entry) => entry.id === slug);
  if (index === -1) notFound();

  const item = galleryItems[index];
  const story = getGalleryStory(item.id);
  if (!story) notFound();

  const prevItem =
    galleryItems[(index - 1 + galleryItems.length) % galleryItems.length];
  const nextItem = galleryItems[(index + 1) % galleryItems.length];

  const sameCategory = galleryItems.filter(
    (entry) => entry.id !== item.id && entry.category === item.category,
  );
  const otherItems = galleryItems.filter(
    (entry) => entry.id !== item.id && entry.category !== item.category,
  );
  const relatedItems = [...sameCategory, ...otherItems].slice(0, 3);

  return (
    <GalleryStoryView
      item={item}
      story={story}
      prevItem={prevItem}
      nextItem={nextItem}
      relatedItems={relatedItems}
    />
  );
}
