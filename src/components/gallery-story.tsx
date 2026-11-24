import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { galleryItems, type GalleryItem } from "@/lib/content";
import { getGalleryStory, type GalleryStory } from "@/lib/gallery-stories";
import { site } from "@/lib/site";
import { ButtonLink, Icon } from "./ui";

interface GalleryStoryViewProps {
  item: GalleryItem;
  story: GalleryStory;
  prevItem: GalleryItem;
  nextItem: GalleryItem;
  relatedItems: readonly GalleryItem[];
}

export function GalleryStoryView({
  item,
  story,
  prevItem,
  nextItem,
  relatedItems,
}: GalleryStoryViewProps) {
  return (
    <article className="story-page">
      <section className="story-header-band">
        <div className="container story-container">
          <nav className="breadcrumbs story-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/gallery/">Student Showcase</Link>
            <span aria-hidden="true">/</span>
            <span>{item.category}</span>
          </nav>

          <Link href="/gallery/" className="story-back-link">
            <Icon name="ArrowLeft" size={16} />
            Back to all Lourdenian moments
          </Link>

          <div className="story-meta-row">
            <span className="story-category-pill">{item.category}</span>
            <span>
              <Icon name="CalendarDays" size={15} />
              {story.dateLabel}
            </span>
            <span>
              <Icon name="Clock3" size={15} />
              {story.readTime}
            </span>
            <span>
              <Icon name="MapPin" size={15} />
              {story.location}
            </span>
          </div>

          <h1 className="story-title">{item.title}</h1>
          <p className="story-subtitle">{story.subtitle}</p>

          <div className="story-byline">
            <div className="story-byline-badge" aria-hidden="true">
              <Icon name="UsersRound" size={20} />
            </div>
            <div>
              <strong>{story.author}</strong>
              <span>
                {site.schoolShort} · {site.organization}
                {story.photoCredit ? ` · ${story.photoCredit}` : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container story-container">
        <figure
          className={`story-hero-figure story-hero-${story.imageStyle || "landscape"}`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={story.imageWidth}
            height={story.imageHeight}
            priority
            className="story-hero-img"
          />
          <figcaption className="story-hero-caption">
            <Icon name="Info" size={16} />
            <span>{story.caption}</span>
          </figcaption>
        </figure>

        <div className="story-body-wrap">
          <div className="story-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => {
                  if (href && href.startsWith("/")) {
                    return <Link href={href}>{children}</Link>;
                  }
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  );
                },
              }}
            >
              {story.markdown}
            </ReactMarkdown>
          </div>

          <div className="story-source-box">
            <div>
              <p className="eyebrow">Official OLLCF SHS &amp; AYBL Showcase</p>
              <p>
                Want to see more updates, announcements, and student activities
                live from Our Lady of Lourdes College Foundation? Follow the{" "}
                <a
                  href={site.socials.ayblFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-note-link"
                >
                  Association of Young Business Leaders (AYBL)
                </a>{" "}
                on Facebook.
              </p>
            </div>
            <div className="story-source-actions">
              <ButtonLink href="/contact/" variant="primary" className="button-pill">
                Inquire about OLLCF ABM
              </ButtonLink>
              <ButtonLink
                href="/quiz/"
                variant="secondary"
                className="button-pill"
                arrow={false}
              >
                <Icon name="Compass" size={17} />
                Take career quiz
              </ButtonLink>
            </div>
          </div>

          <nav className="story-pager" aria-label="Browse neighboring stories">
            <Link href={`/gallery/${prevItem.id}/`} className="story-pager-card">
              <span className="story-pager-label">
                <Icon name="ArrowLeft" size={16} />
                Previous moment
              </span>
              <strong>{prevItem.title}</strong>
              <small>{prevItem.category}</small>
            </Link>

            <Link
              href={`/gallery/${nextItem.id}/`}
              className="story-pager-card story-pager-next"
            >
              <span className="story-pager-label">
                Next moment
                <Icon name="ArrowRight" size={16} />
              </span>
              <strong>{nextItem.title}</strong>
              <small>{nextItem.category}</small>
            </Link>
          </nav>
        </div>
      </div>

      <section className="story-related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Keep exploring OLLCF ABM</p>
              <h2>More moments from our Lourdenian community</h2>
            </div>
            <Link className="text-link" href="/gallery/">
              View all {galleryItems.length} stories
              <Icon name="ArrowRight" size={17} />
            </Link>
          </div>

          <div className="gallery-grid">
            {relatedItems.map((photo) => {
              const relatedStory = getGalleryStory(photo.id);
              return (
                <Link
                  className="gallery-card"
                  key={photo.id}
                  href={`/gallery/${photo.id}/`}
                >
                  <div className="gallery-card-image">
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      style={{
                        objectPosition: photo.objectPosition || "center 20%",
                      }}
                      sizes="(max-width:600px) 100vw, (max-width:950px) 50vw, 33vw"
                    />
                    <span className="gallery-card-pill">{photo.category}</span>
                  </div>
                  <div className="gallery-card-caption">
                    <div className="gallery-card-meta">
                      <span>{relatedStory?.dateLabel || "OLLCF SHS"}</span>
                      <span>·</span>
                      <span>{relatedStory?.readTime || "3 min read"}</span>
                    </div>
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                    <span className="gallery-read-more">
                      Read full story
                      <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
