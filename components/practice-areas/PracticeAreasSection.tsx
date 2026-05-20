"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "components/shared/Container";
import { PRACTICE_DATA } from "data/practice-data";

export default function PracticeAreasSection() {
  // all services flatten
  const allServices = Object.values(PRACTICE_DATA).flatMap(
    (category) => category.services,
  );

  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {allServices.map((item, index) => (
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
                <div className="flex flex-1 flex-col justify-center p-7">
                  {/* TITLE */}
                  <h3 className="text-3xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm leading-7 text-[#5F5F5F] md:text-base">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-6">
                    <Link
                      href={`/practice-areas/${item.slug}`}
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
      </Container>
    </section>
  );
}
