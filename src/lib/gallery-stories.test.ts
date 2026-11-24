import assert from "node:assert/strict";
import test from "node:test";
import { galleryItems } from "./content";
import { getGalleryStory } from "./gallery-stories";

test("every gallery item has a detailed Markdown story", () => {
  assert.ok(galleryItems.length > 0);
  for (const item of galleryItems) {
    const story = getGalleryStory(item.id);
    assert.ok(story, `Missing gallery story for ${item.id}`);
    assert.equal(story.id, item.id);
    assert.ok(story.subtitle.length >= 20, `Short subtitle for ${item.id}`);
    assert.ok(
      story.markdown.includes("## "),
      `Expected Markdown headings in ${item.id}`,
    );
    assert.ok(
      story.markdown.includes("\n- ") || story.markdown.includes("\n1. "),
      `Expected Markdown list formatting in ${item.id}`,
    );
  }
});
