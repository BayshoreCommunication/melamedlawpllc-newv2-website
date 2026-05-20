"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "components/shared/Container";

const articles = [
  {
    title: "Who Is Responsible for Water Damage in a Florida Condo?",

    description:
      "Water moves fast inside shared walls, which is why the question 'Who’s liable for water damage in a Florida condo?' becomes incredibly important.",

    image: "/images/blogs/blog1.webp",

    date: "May 15, 2026",

    slug: "water-damage-florida-condo",
  },

  {
    title: "How Much Does a Lawyer Cost for a Water Damage Insurance Claim?",

    description:
      "The question of how much a lawyer costs for a water damage insurance claim in Florida deserves a direct answer.",

    image: "/images/blogs/blog2.webp",

    date: "May 15, 2026",

    slug: "water-damage-lawyer-cost",
  },

  {
    title: "Can You Claim Wind Damage on Home Insurance in Florida",

    description:
      "Florida’s stormy wind doesn’t knock. It sneaks through loose screens, rattles windows, presses the air deeper into your home.",

    image: "/images/blogs/blog3.webp",

    date: "May 15, 2026",

    slug: "wind-damage-home-insurance",
  },

  {
    title: "Who Is Responsible for Water Damage in a Florida Condo?",

    description:
      "Water moves fast inside shared walls, which is why the question 'Who’s liable for water damage in a Florida condo?' becomes incredibly important.",

    image: "/images/blogs/blog4.webp",

    date: "May 15, 2026",

    slug: "water-damage-florida-condo-2",
  },

  {
    title: "How Much Does a Lawyer Cost for a Water Damage Insurance Claim?",

    description:
      "The question of how much a lawyer costs for a water damage insurance claim in Florida deserves a direct answer.",

    image: "/images/blogs/blog5.webp",

    date: "May 15, 2026",

    slug: "water-damage-lawyer-cost-2",
  },

  {
    title: "Can You Claim Wind Damage on Home Insurance in Florida",

    description:
      "Florida’s stormy wind doesn’t knock. It sneaks through loose screens, rattles windows, presses the air deeper into your home.",

    image: "/images/blogs/blog6.webp",

    date: "May 15, 2026",

    slug: "wind-damage-home-insurance-2",
  },
];

export default function ArticlesSection() {
  return (
    <section className="bg-[#FFFFF] py-8 lg:py-16">
      <Container>
        {/* HEADER */}
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

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
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

              {/* CONTENT */}
              <div className="p-6">
                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-[#777]">
                  <CalendarDays size={15} className="text-primary" />

                  <span>{item.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                  <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 line-clamp-3 text-base leading-7 text-[#666]">
                  {item.description}
                </p>

                {/* BUTTON */}
                <div className="mt-6">
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="
                      group/btn
                      inline-flex
                      items-center
                      gap-3
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-primary
                    "
                  >
                    <span>Read More</span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-primary/30
                        transition-all
                        duration-300
                        group-hover/btn:border-primary
                        group-hover/btn:bg-primary
                      "
                    >
                      <ArrowRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover/btn:translate-x-0.5
                        "
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-14 flex justify-center">
          <button
            style={{
              border: "2px solid #DCA64E",
            }}
            className="inline-flex h-12 items-center justify-center rounded-[8px] bg-white px-8 text-base font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#DCA64E] md:text-lg"
          >
            Load More Articles
          </button>
        </div>
      </Container>
    </section>
  );
}
