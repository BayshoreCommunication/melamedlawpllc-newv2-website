"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import Container from "components/shared/Container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title: string;
  highlight?: string;
  description: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageBanner({
  title,
  highlight,
  description,
  backgroundImage = "/images/page-banner/page-banner-bg.png",
  breadcrumbs = [],
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden  text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-20">
        <Image
          src={backgroundImage}
          alt="Page Banner Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#021126] via-[#082448]/88 to-[#061B38]/55" /> */}

      {/* BLUE GRADIENT */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_20%,rgba(42,76,116,0.35),transparent_34%)]" /> */}

      {/* CONTENT */}
      <Container className="relative z-20">
        <div className="flex min-h-[300px] flex-col justify-center py-16 pt-[140px] lg:min-h-[380px] lg:py-20 lg:pt-[170px]">
          {/* TITLE */}
          <h2 className="max-w-[950px] text-5xl font-bold uppercase leading-[1.16] tracking-normal text-white lg:text-6xl xl:text-7xl">
            {title}{" "}
            {highlight && <span className="text-primary">{highlight}</span>}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-[650px] text-sm font-medium leading-7 text-white/80 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>

      {/* BREADCRUMB */}
      <div className="relative z-30 border-t border-black/5 bg-[#F8F4ED]">
        <Container>
          <div className="flex flex-wrap items-center gap-3 py-3">
            {/* HOME */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                <Home size={16} />
              </div>

              <span className="text-sm font-medium text-[#555] transition-all duration-300 group-hover:text-primary">
                Home
              </span>
            </Link>

            {/* BREADCRUMB ITEMS */}
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* ARROW */}
                <ChevronRight size={16} className="text-primary" />

                {/* LINK / TEXT */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#555] transition-all duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold text-black">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
