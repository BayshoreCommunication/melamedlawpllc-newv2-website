"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import Container from "components/shared/Container";

type InsuranceCard = {
  image: string;
  title: string;
  description: string;
};

const topCards = [
  {
    image: "/images/home/insurance/img1.png",
    title: "Unfair Delays",
    description: "Insurance companies stall and drag out the process.",
  },
  {
    image: "/images/home/insurance/img2.png",
    title: "Claim Denials",
    description: "They wrongfully deny valid claims to protect their profits.",
  },
  {
    image: "/images/home/insurance/img3.png",
    title: "Lowball Offers",
    description:
      "They undervalue your claim and offer far less than you deserve.",
  },
  {
    image: "/images/home/insurance/img4.png",
    title: "Policyholder Stress",
    description:
      "You're left frustrated, worried, and unsure of your next step.",
  },
] satisfies InsuranceCard[];

const bottomCards = [
  {
    image: "/images/home/insurance/img5.png",
    title: "We Act Fast",
    description:
      "We move quickly to handle your claim and stop unnecessary delays.",
  },
  {
    image: "/images/home/insurance/img6.png",
    title: "We Fight Back",
    description:
      "We challenge unfair denials and hold insurance companies accountable.",
  },
  {
    image: "/images/home/insurance/img7.png",
    title: "Maximize Recovery",
    description:
      "We negotiate aggressively to recover the full compensation you deserve.",
  },
  {
    image: "/images/home/insurance/img8.png",
    title: "Stand With You",
    description:
      "We handle the legal fight so you can focus on your life and recovery.",
  },
];

function Connector() {
  return (
    <div className="relative flex h-16 items-center justify-center">
      {/* LINE */}
      <span className="absolute top-0 h-full w-px bg-primary/30" />

      {/* ICON */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-md border border-primary bg-[#F8F4EC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <ChevronDown size={14} className="text-primary" />
      </div>
    </div>
  );
}

function ClaimCard({
  item,
  accent = false,
}: {
  item: InsuranceCard;
  accent?: boolean;
}) {
  return (
    <div
      className={`group flex min-h-[300px] flex-col items-center overflow-visible rounded-[20px] bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 ${
        accent
          ? "hover:shadow-[0_24px_55px_rgba(220,166,78,0.16)]"
          : "hover:shadow-[0_24px_55px_rgba(0,0,0,0.1)]"
      }`}
    >
      <Image
        src={item.image}
        alt=""
        width={112}
        height={112}
        className="h-16 w-16 object-contain transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 group-hover:drop-shadow-[0_18px_22px_rgba(0,0,0,0.16)]"
      />

      {/* TITLE */}
      <h3 className="mt-8 text-3xl font-bold leading-tight text-black">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="mt-5 text-sm leading-7 text-[#5F5F5F] md:text-base">
        {item.description}
      </p>
    </div>
  );
}

export default function InsuranceClaimsSection() {
  return (
    <section className="bg-[#F8F4ED] py-8 lg:py-16">
      <Container>
        {/* HEADING */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl xl:text-7xl">
            Insurance Companies{" "}
            <span className="text-primary">Delay, Deny,</span> and
            <br />
            <span className="text-primary">Underpay</span> Valid Claims Every
            Day.
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-sm font-medium leading-7 text-[#5C5C5C] sm:text-lg">
            Melamed Law fights to recover the compensation policyholders
            deserve.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {topCards.map((topItem, index) => {
            const bottomItem = bottomCards[index];

            return (
              <div key={index} className="flex flex-col">
                {/* TOP CARD */}
                <ClaimCard item={topItem} />

                {/* CONNECTOR */}
                <Connector />

                {/* BOTTOM CARD */}
                <ClaimCard item={bottomItem} accent />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
