"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Get all services for sidebar
  const allServices: any[] = [];
  Object.values(PRACTICE_DATA).forEach((practiceArea) => {
    allServices.push(...practiceArea.services);
  });

  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          {/* SIDEBAR */}
          <aside className="h-fit rounded-[24px] border border-black/5 bg-white p-8 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-3xl font-bold uppercase text-black">
              Practice Areas
            </h3>

            <div className="mt-8 space-y-3">
              {allServices.slice(0, 10).map((item) => {
                const active = pathname === `/practice-areas/${item.slug}`;

                return (
                  <Link
                    key={item.slug}
                    href={`/practice-areas/${item.slug}`}
                    className={`flex items-center justify-between rounded-[10px] border px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                      active
                        ? "border-primary bg-primary text-black"
                        : "border-black/10 bg-[#F8F4EE] text-black hover:border-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            {/* <div className="mt-10 rounded-[18px] bg-[#031735] p-7 text-white">
              <h4 className="text-2xl font-bold">Need Legal Help?</h4>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Speak with our experienced property damage attorneys today.
              </p>

              <a
                href="tel:+18665551212"
                className="btn-primary mt-6 inline-flex h-12 items-center justify-center rounded-[8px] px-6 text-[11px] font-bold uppercase tracking-wide"
              >
                Call Now
              </a>
            </div> */}
          </aside>

          {/* CONTENT */}
          <div>
            {/* IMAGE */}
            <div className="relative h-[500px] overflow-hidden rounded-[24px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h1 className="mt-10 text-5xl font-bold text-black">
              {service.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-xl leading-9 text-[#555]">
              {service.description}
            </p>

            {/* CONTENT */}
            <div className="mt-8 space-y-6 text-lg leading-9 text-[#555]">
              {service.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
