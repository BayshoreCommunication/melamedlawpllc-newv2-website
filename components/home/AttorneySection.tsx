"use client";

import Image from "next/image";
import { Shield, Scale, Trophy, Users } from "lucide-react";

import Container from "components/shared/Container";

const features = [
  {
    icon: Shield,
    title: "Dedicated to Property Owners",
    subtitle: "Thousands of clients helped across Florida.",
  },
  {
    icon: Scale,
    title: "Litigator at Heart",
    subtitle: "Not afraid to take on big insurance companies and win.",
  },
  {
    icon: Trophy,
    title: "Dedicated to Property Owners",
    subtitle: "Thousands of clients helped across Florida.",
  },
  {
    icon: Users,
    title: "Dedicated to Property Owners",
    subtitle: "Thousands of clients helped across Florida.",
  },
];

export default function AttorneySection() {
  return (
    <section className="bg-[#FFFFFF] pb-16 pt-10 sm:pt-12 lg:pb-24 lg:pt-52">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[520px_1fr] lg:gap-20">
          {/* LEFT */}
          <div className="group overflow-hidden rounded-[18px] bg-[#031735] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
            <div className="relative h-[430px] w-full sm:h-[520px] lg:h-[650px]">
              <Image
                src="/images/home/attorney/attorney.png"
                alt="Attorney"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <p className="text-lg italic leading-8 text-white/80">
                &ldquo;Started Melamed Law with a simple mission: to level the
                playing field for policyholders and hold insurance companies
                accountable.&rdquo;
              </p>

              <p className="mt-5 text-xl font-semibold text-primary">
                Aaron Melamed
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl">
              Meet <span className="text-primary">Aaron Melamed, Esq.</span>
            </h2>

            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-black">
              Founder & Managing Attorney, Melamed Law
            </p>

            <p className="mt-6 max-w-[760px] text-sm leading-7 text-[#555] sm:text-base">
              Before founding Melamed Law, Aaron Melamed spent years defending
              insurance companies. He saw firsthand how they delay, deny, and
              underpay valid claims, leaving families and businesses devastated.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-5 rounded-[16px] border-b border-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#666]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="group mt-8 rounded-[18px] border border-primary/30 bg-gradient-to-r from-[#FFF4E0] to-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-bold text-primary">My Story</h3>

              <p className="mt-4 text-sm leading-7 text-[#555] sm:text-base">
                I have always believed in fairness and standing up for the
                underdog. That is why I built this firm, to be a voice for those
                who have been treated unfairly by powerful insurance companies.
                When you hire us, you get my team, my experience, and my
                personal commitment to your case.
              </p>

              <div className="mt-4 text-right text-3xl font-bold leading-none text-primary transition-transform duration-300 group-hover:translate-x-1">
                &rdquo;
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
