"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

import Container from "components/shared/Container";
import { BLOG_POSTS } from "data/blog-data";

export default function ArticlesSection() {
  return (
    <section className="bg-white py-8 lg:py-16">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
            Helpful Insights.{" "}
            <span className="text-primary">Real Answers.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555]">
            Practical guides and expert advice to help you protect your rights
            and your property.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              <Link
                href={`/blogs/${item.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#777]">
                  <CalendarDays size={15} className="text-primary" />
                  <span>{item.date}</span>
                </div>

                <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                  <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                </h3>

                <p className="mt-4 line-clamp-3 text-base leading-7 text-[#666]">
                  {item.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="group/btn inline-flex h-11 items-center justify-center gap-3 rounded-[3px] bg-primary px-6 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_10px_26px_rgba(220,166,78,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7B862]"
                  >
                    Read More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-[3px] bg-primary px-6 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_10px_26px_rgba(220,166,78,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7B862] sm:px-8"
          >
            <Newspaper
              size={20}
              className="transition-transform duration-300 group-hover:rotate-6"
            />
            Load More Articles
          </button>
        </div>
      </Container>
    </section>
  );
}
