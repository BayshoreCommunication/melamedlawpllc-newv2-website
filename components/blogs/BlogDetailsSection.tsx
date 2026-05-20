"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "components/shared/Container";
import { BLOG_POSTS, BlogPost } from "data/blog-data";

type BlogDetailsSectionProps = {
  post: BlogPost;
};

export default function BlogDetailsSection({ post }: BlogDetailsSectionProps) {
  const recentCases = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(
    0,
    4,
  );

  return (
    <>
      <section className="bg-white py-10 lg:py-16">
        <Container>
          <article className="mx-auto max-w-[1180px]">
            <div className="relative overflow-hidden rounded-[4px] border border-black/5 bg-[#F8F4EE] shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[16/8.5] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1280px) 1180px, 100vw"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-medium text-[#666]">
              <span className="rounded-[3px] bg-primary/15 px-3 py-1 text-primary">
                {post.category}
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={15} className="text-primary" />
                {post.date}
              </span>
            </div>

            <div className="mt-6 space-y-8 text-base leading-8 text-[#555] md:text-lg md:leading-9">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold leading-tight text-black md:text-[28px]">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-7">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-[#F8F4EE] py-10 lg:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase leading-tight text-black md:text-4xl">
              Recent <span className="text-primary">Cases</span>
            </h2>

            <p className="mx-auto mt-3 max-w-[640px] text-sm leading-6 text-[#666] md:text-base">
              Practical guides and expert advice to help you protect your rights
              and your property.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {recentCases.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-[4px] border border-primary/20 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
              >
                <Link
                  href={`/blogs/${item.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#F5F1EA]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <span className="absolute left-3 top-3 rounded-[3px] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm">
                    {item.category}
                  </span>
                </Link>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#777]">
                    <CalendarDays size={14} className="text-primary" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-tight text-black transition duration-300 group-hover:text-primary">
                    <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                  </h3>

                  <Link
                    href={`/blogs/${item.slug}`}
                    className="group/btn mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-primary transition duration-300 hover:text-black"
                  >
                    Read More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
