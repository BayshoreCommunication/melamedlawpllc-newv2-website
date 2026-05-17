"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  DollarSign,
  Phone,
  Star,
  Users,
} from "lucide-react";

import Container from "components/shared/Container";

const stats = [
  {
    icon: DollarSign,
    title: "No Fee",
    subtitle: "Unless We Win",
  },
  {
    icon: DollarSign,
    title: "Over $100M",
    subtitle: "Recovered",
  },
  {
    icon: Users,
    title: "Thousands",
    subtitle: "of Clients Helped",
  },
  {
    icon: BadgeCheck,
    title: "25+ Years",
    subtitle: "of Experience",
  },
];

const reviews = [
  {
    avatar: "SM",
    name: "Sara M.",
    review:
      "They truly care about their clients and got me the settlement I deserved.",
  },
  {
    avatar: "JA",
    name: "Jason",
    review: "Professional, responsive, and fought hard for my case.",
  },
  {
    avatar: "ER",
    name: "Emily R.",
    review: "Professional, responsive, and fought hard for my case.",
  },
];

function ReviewStars() {
  return (
    <div className="flex items-center gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#031735] text-white">
      <Image
        src="/images/home/hero/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#021126] via-[#082448]/88 to-[#061B38]/55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_20%,rgba(42,76,116,0.35),transparent_34%)]" />

      <Container>
        <div className="w-full pb-14 pt-[96px] sm:pt-[110px] lg:pb-16 lg:pt-[154px]">
          <div className="relative flex flex-col lg:block lg:min-h-[520px]">
            <div className="relative z-10 order-2 mt-8 max-w-[800px] lg:mt-0">
              <h1 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-white  lg:text-6xl xl:text-7xl">
                Property Damaged
                <br />
                By <span className="text-primary">Hurricane Milton?</span>
              </h1>

              <p className="mt-6 max-w-[585px] text-sm font-medium leading-7 text-white sm:text-lg">
                Let Us Help You Get The Compensation You Deserve - While You
                Focus on Recovery, We Handle the Fight Against Insurance
                Companies.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-3 rounded-[3px] bg-primary px-6 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_10px_26px_rgba(220,166,78,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7B862]"
                >
                  <CalendarDays size={14} />
                  Schedule A Free Case Review
                </Link>

                <a
                  href="tel:+18665551212"
                  className="inline-flex h-11 items-center justify-center gap-3 rounded-[3px] border border-white/45 px-6 text-[11px] font-bold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-black"
                >
                  <Phone size={14} />
                  Call Now (866) 555-1212
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:max-w-[800px]">
                {stats.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="relative flex items-center gap-3 pr-4 sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:h-7 sm:after:w-px sm:after:-translate-y-1/2 sm:after:bg-white/10 sm:last:after:hidden"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-semibold leading-4 text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm md:text-base leading-4 text-white">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-0 order-1 mx-auto h-[390px] w-full max-w-[430px] sm:h-[470px] sm:max-w-[560px] lg:absolute lg:-bottom-8 lg:right-[70px] lg:top-0 lg:mt-0 lg:h-auto lg:w-[460px] lg:max-w-none xl:right-[160px] xl:w-[650px]">
              <Image
                src="/images/home/hero/attorney.png"
                alt="Aaron D. Melamed, Esq."
                fill
                priority
                sizes="(min-width: 1280px) 650px, (min-width: 1024px) 460px, 90vw"
                className="object-contain object-bottom object-center"
              />

              <div className="absolute bottom-8 left-1/2 right-auto z-20 w-[min(86%,250px)] -translate-x-1/2 rounded-[9px] border border-primary bg-[#061A38]/88 px-4 py-3 shadow-2xl backdrop-blur-sm lg:left-auto lg:bottom-24 lg:-right-[50px] lg:w-auto lg:translate-x-0 lg:px-5 lg:py-4 xl:bottom-28 xl:-right-[110px]">
                <h3 className="text-lg font-bold leading-tight text-primary">
                  Aaron D. Melamed, Esq.
                </h3>

                <p className="mt-2 text-sm font-medium leading-5 text-white">
                  Founding Attorney
                </p>

                <p className="text-[13px] font-medium leading-5 text-white">
                  25+ Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-8 overflow-hidden rounded-[9px] bg-[#F3EEE7] text-black shadow-[0_22px_55px_rgba(0,0,0,0.22)] lg:mt-0">
            <div className="grid grid-cols-1 divide-y divide-black/10 lg:grid-cols-[265px_repeat(3,1fr)] lg:divide-x lg:divide-y-0">
              <div className="flex items-center gap-5 p-7 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full  shadow-sm">
                  <Image
                    src="/images/google-logo.svg"
                    alt="Google"
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px]"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] font-bold leading-none text-black">
                    Google
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[18px] font-bold leading-none text-black">
                      5.0
                    </span>
                    <ReviewStars />
                  </div>

                  <p className="mt-4 text-base md:text-lg leading-5 text-black/60">
                    Based on 27 Google reviews
                  </p>
                </div>
              </div>

              {reviews.map((item, index) => (
                <div key={index} className="p-7 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3657] text-[11px] font-bold text-white">
                      {item.avatar}
                    </div>

                    <div>
                      <ReviewStars />

                      <p className="mt-2 text-base md:text-lg leading-5 text-black/70">
                        {item.review}
                      </p>

                      <p className="mt-2 text-base md:text-lg font-semibold text-black">
                        - {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
