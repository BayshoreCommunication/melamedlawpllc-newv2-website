"use client";

import CountUp from "react-countup";
import { CircleDollarSign, Scale, Users, type LucideIcon } from "lucide-react";

type FloatingStat = {
  icon: LucideIcon;
  value?: number;
  label?: string;
  prefix?: string;
  suffix?: string;
  title: string;
};

const floatingStats: FloatingStat[] = [
  {
    icon: CircleDollarSign,
    value: 500,
    prefix: "$",
    suffix: "M+",
    title: "Recovered for our clients",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    title: "Clients helped and counting",
  },
  {
    icon: Scale,
    value: 25,
    suffix: "+",
    title: "Years of Experience Fighting",
  },
  {
    icon: CircleDollarSign,
    label: "NO FEE",
    title: "You Pay Nothing upfront",
  },
];

export default function FloatingStats() {
  return (
    <div className="relative z-30 mx-auto w-full max-w-[1280px] px-4 sm:px-6">
      <div className="overflow-hidden rounded-[16px] border border-black/5 bg-[#F8F4EE] shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:rounded-[18px]">
        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 md:grid-cols-4">
          {floatingStats.map((item, index) => {
            const Icon = item.icon;
            const isLastItem = index === floatingStats.length - 1;
            const isTwoColumnLeftItem = index % 2 === 0;
            const isTwoColumnTopRow = index < 2;

            return (
              <div
                key={index}
                className="relative flex min-h-[84px] items-center gap-3 p-4 sm:gap-4 sm:p-5 md:min-h-[116px] md:p-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary sm:h-12 sm:w-12">
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold uppercase leading-tight text-black sm:text-xl md:text-2xl">
                    {typeof item.value === "number" ? (
                      <CountUp
                        end={item.value}
                        duration={2.4}
                        separator=","
                        prefix={item.prefix}
                        suffix={item.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    ) : (
                      item.label
                    )}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#5C5C5C] sm:text-sm">
                    {item.title}
                  </p>
                </div>

                {!isLastItem && (
                  <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-black/10 min-[560px]:hidden" />
                )}

                {isTwoColumnLeftItem && (
                  <span className="pointer-events-none absolute bottom-5 right-0 top-5 hidden w-px bg-black/15 min-[560px]:block md:hidden" />
                )}

                {isTwoColumnTopRow && (
                  <span className="pointer-events-none absolute bottom-0 left-5 right-5 hidden h-px bg-black/10 min-[560px]:block md:hidden" />
                )}

                {!isLastItem && (
                  <span className="pointer-events-none absolute bottom-7 right-0 top-7 hidden w-px bg-black/15 md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
