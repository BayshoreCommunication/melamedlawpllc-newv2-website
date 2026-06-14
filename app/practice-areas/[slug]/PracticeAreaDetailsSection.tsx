"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "components/shared/Container";
import { PRACTICE_DATA } from "data/practice-data";

type Props = {
  service: {
    title: string;
    slug: string;
    description: string;
    image: string;
    details_img: string;
    content: string;
  };
};

export default function PracticeAreaDetailsSection({ service }: Props) {
  const allServices = useMemo(
    () =>
      Object.values(PRACTICE_DATA).flatMap(
        (practiceArea) => practiceArea.services,
      ),
    [],
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="h-fit rounded-[24px] border border-black/5 bg-white p-8 shadow-sm lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <h3 className="text-3xl font-bold uppercase text-black">
              Practice Areas
            </h3>

            <div className="mt-8 space-y-3">
              {allServices.map((item) => {
                const active = service.slug === item.slug;

                return (
                  <Link
                    key={item.slug}
                    href={`/practice-areas/${item.slug}`}
                    scroll={false}
                    className={`relative isolate flex w-full items-center justify-between overflow-hidden rounded-[10px] border px-5 py-4 text-left text-lg font-semibold transition-all duration-300 ${
                      active
                        ? "border-primary text-black shadow-[0_14px_30px_rgba(220,166,78,0.22)]"
                        : "border-black/10 bg-[#F8F4EE] text-black hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-practice-area-tab"
                        className="absolute inset-0 -z-10 rounded-[10px] bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0 dxg-motion">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: -18 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.42,
                  ease: "easeOut",
                }}
              >
                <div className="relative h-[320px] overflow-hidden rounded-[24px] md:h-[420px] lg:h-[500px]">
                  <Image
                    src={service.details_img || service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) calc(100vw - 460px), 100vw"
                    priority
                  />
                </div>

                <div className="mt-8 text-base leading-8 text-[#555] md:text-lg md:leading-9 [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-black md:[&_h2]:text-[26px] [&_li]:mt-2 [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-black [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-7">
                  {parse(service.content.trim())}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
