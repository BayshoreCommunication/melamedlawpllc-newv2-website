"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "components/shared/Container";

const practiceAreas = [
  {
    title: "Hurricane Damage Claims",
    description:
      "We help homeowners recover compensation for severe hurricane and storm-related damages.",
    image: "/images/home/practice/img1.png",
  },
  {
    title: "Property Damage Claims",
    description:
      "Protect your property rights and recover losses caused by unexpected disasters.",
    image: "/images/home/practice/img2.png",
  },
  {
    title: "Roof Damage Claims",
    description:
      "We fight insurance companies that undervalue or deny roof repair claims.",
    image: "/images/home/practice/img3.png",
  },
  {
    title: "Fire Damage Claims",
    description:
      "Recover compensation for smoke, structural, and fire-related damages.",
    image: "/images/home/practice/img4.png",
  },
  {
    title: "Flood & Water Damage",
    description:
      "We assist property owners facing devastating flood and water damage issues.",
    image: "/images/home/practice/img5.png",
  },
  {
    title: "Mold Damage Claims",
    description:
      "Get legal support when mold damage impacts your home or business.",
    image: "/images/home/practice/img6.png",
  },
  {
    title: "Commercial Property Claims",
    description:
      "Helping businesses recover from property losses and insurance disputes.",
    image: "/images/home/practice/img7.png",
  },
  {
    title: "Insurance Claim Denials",
    description:
      "We challenge unfair insurance denials and maximize your recovery.",
    image: "/images/home/practice/img8.png",
  },
];

export default function PracticeAreasSection() {
  return (
    <section className="bg-[#ffffff] py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[720px_1fr] xl:gap-20">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl">
              <span className="text-primary">Practice</span> Areas
            </h2>

            <p className="mt-6 text-sm font-medium leading-7 text-[#555] sm:text-lg">
              Professionally handling Property Damage Claims, we're committed to
              protecting both your Property and your Peace of Mind in times of
              need.
            </p>

            <p className="mt-5 text-sm font-medium leading-7 text-[#555] sm:text-lg">
              Not Sure Which Claim Applies to You, Our legal team is here to
              guide you. Get a free consultation.
            </p>

            <Link
              href="/contact"
              className="btn-primary mt-10 inline-flex h-12 items-center justify-center gap-3 rounded-[6px] px-7 text-[11px] font-bold uppercase tracking-wide"
            >
              <CalendarDays size={15} />
              Schedule A Free Case Review
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {practiceAreas.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[18px] border border-black/5 bg-[#F8F4EE] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <div className="flex flex-col md:flex-row">
                  {/* IMAGE */}
                  <div className="relative h-[240px] w-full overflow-hidden md:h-auto md:w-[290px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col justify-center p-7 lg:p-8">
                    <h3 className="text-3xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[520px] text-sm md:text-base leading-7 text-[#5F5F5F]">
                      {item.description}
                    </p>

                    <div className="mt-6">
                      <Link
                        href="/practice-areas"
                        className="group/btn inline-flex h-11 items-center gap-3 rounded-[5px] border border-primary/30 bg-white px-5 text-[11px] font-bold uppercase tracking-wide text-black transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                      >
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
