"use client";

import CountUp from "react-countup";
import { Building2, Wind, Shield, MapPin } from "lucide-react";

import Container from "components/shared/Container";
import FloatingStats from "./FloatingStats";

const claimCards = [
  {
    icon: Building2,
    amount: 4250000,
    subtitle: "Hurricane Damage",
  },
  {
    icon: Wind,
    amount: 4250000,
    subtitle: "Hurricane Damage",
  },
  {
    icon: Building2,
    amount: 4250000,
    subtitle: "Hurricane Damage",
  },
  {
    icon: Shield,
    amount: 4250000,
    subtitle: "Hurricane Damage",
  },
];

export default function ClaimResultsSection() {
  return (
    <section className="relative overflow-visible bg-[#031735] pb-10 pt-16 sm:pb-12 lg:pb-44 lg:pt-24">
      <Container>
        {/* HEADING */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-white lg:text-6xl xl:text-7xl">
            Insurance Companies{" "}
            <span className="text-primary">Delay, Deny,</span> and
            <br />
            <span className="text-primary">Underpay</span> Valid Claims Every
            Day.
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-sm font-medium leading-7 text-white/70 sm:text-lg">
            Melamed Law fights to recover the compensation policyholders
            deserve.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {claimCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[18px] border border-white/10 bg-[#071E44] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-[#031735]">
                  <Icon size={34} />
                </div>

                <h3 className="mt-7 text-4xl font-bold text-primary">
                  <CountUp
                    end={item.amount}
                    duration={2.4}
                    separator=","
                    prefix="$"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>

                <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-white">
                  {item.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Full policy recovery for a homeowner after the insurance
                  company wrongfully delayed and denied the claim.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <MapPin size={14} />
                    Orlando, FL
                  </div>

                  <div className="rounded-md border border-primary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-[#031735]">
                    Policy Limit
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* FLOATING COMPONENT */}
      <div className="relative mt-8 w-full lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:translate-y-1/2">
        <FloatingStats />
      </div>
    </section>
  );
}
