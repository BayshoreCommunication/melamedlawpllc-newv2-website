"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Star } from "lucide-react";

import Container from "components/shared/Container";

type TrustedStat = {
  icon?: string;
  logo?: string;
  number?: number;
  suffix?: string;
  decimals?: number;
  title: string;
  subtitle: string;
  badgeLabel?: string;
  stars?: boolean;
};

const stats: TrustedStat[] = [
  {
    icon: "/images/home/trusted/img1.png",
    title: "Top Ranked",
    subtitle: "Personal Injury Law Firm",
    badgeLabel: "U.S. News",
  },
  {
    logo: "/images/home/trusted/img2.png",
    number: 4.9,
    decimals: 1,
    title: "Google Rating",
    subtitle: "Based on 215 Reviews",
    stars: true,
  },
  {
    icon: "/images/home/trusted/img3.png",
    number: 100,
    suffix: "M+",
    title: "Millions Recovered",
    subtitle: "For Our Clients",
  },
  {
    icon: "/images/home/trusted/img6.png",
    number: 25,
    suffix: "+",
    title: "Years of Experience",
    subtitle: "Fighting for Justice",
  },
  {
    icon: "/images/home/trusted/img4.png",
    number: 10000,
    suffix: "+",
    title: "Clients Helped",
    subtitle: "And Counting",
  },
  {
    icon: "/images/home/trusted/img5.png",
    title: "No Fee",
    subtitle: "You Pay Nothing Unless We Win",
  },
];

function Stars() {
  return (
    <div className="mt-3 flex items-center justify-center gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TrustedSection() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-[#F5F5F5] shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:rounded-[28px]">
          <div className="flex items-center justify-center gap-4 px-4 py-8 text-center sm:gap-5 md:py-10">
            <span className="hidden h-px w-14 bg-primary sm:block md:w-16" />

            <h2 className="text-base font-bold uppercase leading-7 tracking-[2px] text-[#0B1736] sm:text-xl sm:tracking-[4px] md:text-[26px]">
              Trusted. Proven. Recognized.
            </h2>

            <span className="hidden h-px w-14 bg-primary sm:block md:w-16" />
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#E9E9E9] min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {stats.map((item) => {
              const imageSrc = item.logo ?? item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex min-h-[210px] flex-col items-center justify-center bg-[#F5F5F5] px-5 py-8 text-center transition duration-300 hover:bg-[#faf8f4] sm:min-h-[230px] lg:px-6"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full  text-primary transition duration-300 group-hover:scale-105  group-hover:text-white sm:h-20 sm:w-20">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="h-12 w-12 object-contain sm:h-20 sm:w-20"
                      />
                    )}
                  </div>

                  {item.badgeLabel && (
                    <p className="mt-4 text-xs font-bold uppercase tracking-[1.8px] text-primary">
                      {item.badgeLabel}
                    </p>
                  )}

                  {item.stars && <Stars />}

                  {typeof item.number === "number" ? (
                    <h3 className="mt-4 text-4xl font-bold leading-none text-[#0B1736] sm:text-5xl">
                      <CountUp
                        end={item.number}
                        duration={2.5}
                        decimals={item.decimals ?? 0}
                        separator=","
                      />
                      {item.suffix}
                    </h3>
                  ) : (
                    <h3 className="mt-4 text-3xl font-bold leading-tight text-[#0B1736] sm:text-4xl">
                      {item.title}
                    </h3>
                  )}

                  {typeof item.number === "number" && (
                    <h4 className="mt-4 text-base font-semibold leading-6 text-[#0B1736] sm:text-lg">
                      {item.title}
                    </h4>
                  )}

                  <p className="mt-2 max-w-[190px] text-sm leading-6 text-[#5B6475] sm:text-base sm:leading-7">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
