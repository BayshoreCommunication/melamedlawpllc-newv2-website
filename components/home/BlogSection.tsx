"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Newspaper } from "lucide-react";

import Container from "components/shared/Container";

const blogs = [
  {
    title:
      "Who Is Responsible for Water Damage in a Florida Condo? Timeline & Legal Insights",
    description:
      "Water moves fast inside shared walls, which is why the question 'Who's liable for water damage in a Florida condo?' becomes critically important.",
    image: "/images/home/blogs/blog1.png",
    date: "May 15, 2026",
  },
  {
    title: "How Much Does a Lawyer Cost for a Water Damage Insurance Claim?",
    description:
      "The question of how much a lawyer costs for a water damage insurance claim in Florida deserves a direct answer and practical guidance.",
    image: "/images/home/blogs/blog2.png",
    date: "May 15, 2026",
  },
  {
    title: "Can You Claim Wind Damage on Home Insurance in Florida?",
    description:
      "Florida's stormy wind doesn't knock. It sneaks through loose screens, rattles windows, and presses the air deeper into vulnerable structures.",
    image: "/images/home/blogs/blog3.png",
    date: "May 15, 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#F5F1EA] py-8 lg:py-16">
      <Container>
        {/* HEADING */}
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

        {/* BLOG GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <Link
                href="/blogs"
                className="relative block h-[280px] overflow-hidden bg-[#F5F1EA]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* CONTENT */}
              <div className="p-7">
                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-[#666]">
                  <CalendarDays size={15} className="text-primary" />

                  <span>{blog.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="mt-5 line-clamp-2 text-3xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                  <Link href="/blogs">{blog.title}</Link>
                </h3>

                {/* DESC */}
                <p className="mt-5 line-clamp-3 text-sm md:text-base leading-7 text-[#5F5F5F]">
                  {blog.description}
                </p>

                {/* READ MORE */}
                <div className="mt-7">
                  <Link
                    href="/blogs"
                    className="group/btn inline-flex items-center gap-2 text-lg font-medium text-primary transition-all duration-300 hover:gap-3"
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

        {/* BUTTON */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/blogs"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-[8px] border border-primary/30 bg-white px-8 text-[11px] font-bold uppercase tracking-[1px] text-black transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-black hover:shadow-[0_15px_35px_rgba(220,166,78,0.25)]"
          >
            <Newspaper
              size={16}
              className="transition-transform duration-300 group-hover:rotate-6"
            />
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
