"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Newspaper } from "lucide-react";

import Container from "components/shared/Container";
import { BLOG_POSTS } from "data/blog-data";

export default function BlogSection() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-[#F5F1EA] py-8 lg:py-16">
      <Container>
        <div className="mx-auto max-w-[1050px] text-center">
          <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl xl:text-7xl">
            Helpful Insights.{" "}
            <span className="text-primary">Real Answers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-sm font-medium leading-7 text-[#5C5C5C] sm:text-lg">
            Practical guides and expert advice to help you protect your rights
            and your property.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="relative block h-[280px] overflow-hidden bg-[#F5F1EA]"
              >
                <Image
                  src={blog.homeImage || blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="p-7">
                <div className="flex items-center gap-2 text-sm text-[#666]">
                  <CalendarDays size={15} className="text-primary" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="mt-5 line-clamp-2 text-3xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p className="mt-5 line-clamp-3 text-sm leading-7 text-[#5F5F5F] md:text-base">
                  {blog.description}
                </p>

                <div className="mt-7">
                  <Link
                    href={`/blogs/${blog.slug}`}
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

        <div className="mt-16 flex justify-center">
          <Link
            href="/blogs"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-[3px] bg-primary px-6 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_10px_26px_rgba(220,166,78,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7B862] sm:px-8"
          >
            <Newspaper
              size={20}
              className="transition-transform duration-300 group-hover:rotate-6"
            />
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
