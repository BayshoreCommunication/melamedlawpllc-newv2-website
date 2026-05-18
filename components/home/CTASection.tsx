"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CircleDollarSign,
  Clock3,
  Phone,
  Scale,
  Users,
} from "lucide-react";

import Container from "components/shared/Container";

const stats = [
  {
    icon: CircleDollarSign,
    title: "No Fee",
    subtitle: "Unless We Win",
  },
  {
    icon: CircleDollarSign,
    title: "Over $100M",
    subtitle: "Recovered",
  },
  {
    icon: Users,
    title: "Thousands",
    subtitle: "of Clients Helped",
  },
  {
    icon: Scale,
    title: "25+ Years",
    subtitle: "of Experience",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#031735] py-8 lg:py-16">
      <Container>
        <Image
          src="/images/home/cta/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover object-center"
        />
        <div className="relative overflow-hidden rounded-[10px] border border-primary  px-6 py-10 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute inset-0 z-[1] " />
          <div className="absolute inset-0 z-[1] bg-[#031735]/10" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,720px)_1fr] lg:gap-10">
            <div className="max-w-[720px]">
              <h2 className="text-4xl font-bold uppercase leading-[1.18] tracking-normal text-white sm:text-5xl lg:text-6xl">
                Don&apos;t Let Insurance
                <br />
                Companies{" "}
                <span className="text-primary">
                  Take
                  <br />
                  Advantage Of You.
                </span>
              </h2>

              <p className="mt-6 max-w-[390px] text-sm font-medium leading-7 text-white/85 sm:text-base">
                Insurance companies have teams of lawyers. You deserve one on
                your side too.
              </p>

              <div className="mt-10 grid max-w-[420px] grid-cols-2 gap-x-8 gap-y-6">
                {stats.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                        <Icon size={15} />
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-semibold leading-4 text-white">
                          {item.title}
                        </h3>

                        <p className="text-base md:text-lg leading-4 text-white">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex h-16 min-w-[350px] items-center justify-center gap-3 rounded-[3px] px-6 text-base font-bold uppercase tracking-wide md:text-lg"
                >
                  <CalendarDays size={26} className="shrink-0" />
                  <span className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-black md:text-lg">
                    Schedule A Free Case Review
                  </span>
                </Link>

                <a
                  href="tel:+18665551212"
                  className="inline-flex h-16 min-w-[300px] items-center justify-center gap-3 rounded-[3px] border border-white/40 bg-transparent px-6 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black md:text-lg"
                >
                  <Phone size={26} className="shrink-0" />
                  <span className="whitespace-nowrap">
                    Call Now (866) 555-1212
                  </span>
                </a>
              </div>
            </div>

            <div className="flex min-h-[260px] items-center justify-center lg:min-h-[420px]">
              <Image
                src="/images/home/cta/cta-badge.png"
                alt="We take on the insurance companies so you don't have to."
                width={360}
                height={532}
                className="w-[220px] drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)] sm:w-[280px] lg:w-[300px] xl:w-[340px]"
              />
            </div>
          </div>

          <div className="relative z-10 mt-8 overflow-hidden rounded-[10px] bg-[#08264E]/95 lg:mt-5">
            <div className="grid grid-cols-1 divide-y divide-white/15 lg:grid-cols-[1fr_360px] lg:divide-x lg:divide-y-0">
              <div className="flex items-center gap-4 px-5 py-5 lg:px-10">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Clock3 size={15} />
                </div>

                <p className="text-sm font-medium leading-6 text-white sm:text-base">
                  Time Is Critical. The sooner you act, the stronger your claim.
                </p>
              </div>

              <div className="flex items-center justify-center px-5 py-5">
                <p className="text-center text-sm font-bold uppercase tracking-wide text-primary sm:text-base">
                  Let Us Help You Move Forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
