"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
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

  const allServices = Object.values(PRACTICE_DATA).flatMap(
    (practiceArea) => practiceArea.services,
  );

  return (
    <section className="bg-white py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="h-fit rounded-[24px] border border-black/5 bg-white p-8 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-3xl font-bold uppercase text-black">
              Practice Areas
            </h3>

            <div className="mt-8 space-y-3">
              {allServices.map((item) => {
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
          </aside>

          <div>
            <div className="relative h-[320px] overflow-hidden rounded-[24px] md:h-[420px] lg:h-[500px]">
              <Image
                src={service.details_img || service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) calc(100vw - 460px), 100vw"
              />
            </div>

            <div className="mt-8 text-base leading-8 text-[#555] md:text-lg md:leading-9 [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-black md:[&_h2]:text-[26px] [&_li]:mt-2 [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-black [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-7">
              {parse(service.content.trim())}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
