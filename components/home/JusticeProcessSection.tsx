"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

import Container from "components/shared/Container";

const steps = [
  {
    number: "1",
    icon: "images/home/justice/img1.png",
    title: "Consultation",
    description:
      "We listen, understand your situation, and provide clear legal guidance.",
  },
  {
    number: "2",
    icon: "images/home/justice/img2.png",
    title: "Review",
    description:
      "We investigate the details, analyze the facts, and build a strong case strategy.",
  },
  {
    number: "3",
    icon: "images/home/justice/img3.png",
    title: "Negotiation",
    description:
      "We negotiate with opposing parties to pursue a fair and favorable resolution.",
  },
  {
    number: "4",
    icon: "images/home/justice/img4.png",
    title: "Litigation",
    description:
      "If necessary, we are fully prepared to litigate and advocate for your rights in court.",
  },
  {
    number: "5",
    icon: "images/home/justice/img5.png",
    title: "Recovery",
    description:
      "We fight to secure the compensation you deserve and help you move forward.",
  },
];

function VerticalConnector() {
  return (
    <div className="relative flex h-10 items-center justify-center sm:h-14">
      {/* LINE */}
      <span className="absolute top-0 h-full w-px bg-primary/30" />

      {/* ICON BOX */}
      <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-md border border-primary/40 bg-[#F8F4EC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-8 sm:w-8">
        <ChevronDown
          size={13}
          className="text-primary sm:h-[14px] sm:w-[14px]"
        />
      </div>
    </div>
  );
}

function HorizontalConnector() {
  return (
    <div className="hidden items-center xl:flex">
      {/* LINE */}
      <span className="h-px flex-1 bg-primary/30" />

      {/* BOX */}
      <div className="mx-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-[#F8F4EC] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
        <ChevronRight size={14} className="text-primary" aria-hidden="true" />
      </div>

      {/* LINE */}
      <span className="h-px flex-1 bg-primary/30" />
    </div>
  );
}

export default function JusticeProcessSection() {
  return (
    <section className="overflow-hidden bg-[#FFFFFF] py-8 lg:py-16">
      <Container>
        {/* HEADING */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold uppercase leading-[1.16] tracking-normal text-black sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Your Path To Justice,{" "}
            <span className="text-primary">Step By Step</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-sm font-medium leading-7 text-[#5C5C5C] sm:text-lg">
            Your Path to Justice, Step by Step
          </p>
        </div>

        {/* PROCESS */}
        <div className="mt-10 sm:mt-16">
          <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0 xl:gap-y-0">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="relative flex w-full justify-center"
                >
                  {/* STEP */}
                  <div className="relative z-10 flex w-full max-w-[300px] flex-col items-center px-2 xl:max-w-none">
                    {/* TOP NUMBER */}
                    <div className="relative z-20 mb-[-18px] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg sm:mb-[-22px] sm:h-16 sm:w-16 sm:text-3xl">
                      {step.number}
                    </div>

                    {/* CIRCLE */}
                    <div className="group relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-1 border-black/80 bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-2 sm:h-[220px] sm:w-[220px] lg:h-[190px] lg:w-[190px] 2xl:h-[220px] 2xl:w-[220px]">
                      {/* ICON */}
                      <div className="flex h-20 w-20 items-center justify-center rounded-full text-black transition-all duration-300 group-hover:scale-110 sm:h-28 sm:w-28 lg:h-24 lg:w-24 2xl:h-28 2xl:w-28">
                        <Image
                          src={`/${step.icon}`}
                          alt=""
                          width={112}
                          height={112}
                          className="h-16 w-16 object-contain sm:h-24 sm:w-24 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24"
                        />
                      </div>
                    </div>

                    {/* VERTICAL CONNECTOR */}
                    <VerticalConnector />

                    {/* CONTENT */}
                    <div className="max-w-[260px] text-center">
                      <h3 className="text-2xl font-bold text-black sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#5F5F5F] sm:mt-4 md:text-base md:leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* HORIZONTAL CONNECTOR */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[calc(50%+95px)] right-[calc(-50%+95px)] top-[137px] hidden xl:block 2xl:left-[calc(50%+110px)] 2xl:right-[calc(-50%+110px)] 2xl:top-[152px]">
                      <HorizontalConnector />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
