"use client";

import Image from "next/image";

import Container from "components/shared/Container";

export default function StorySection() {
  return (
    <section className="bg-[#FFFFFF] py-8 lg:py-16">
      <Container>
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_480px] lg:items-start lg:gap-16">
          {/* LEFT */}
          <div>
            <h2 className="max-w-[820px] text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl xl:text-7xl">
              Fighting For Justice.
              <br />
              Delivering <span className="text-primary">Results.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-5">
            {/* AVATARS */}
            <div className="flex items-center">
              {[
                "/images/about/story/avatar1.png",
                "/images/about/story/avatar2.png",
                "/images/about/story/avatar3.png",
                "/images/about/story/avatar2.png",
              ].map((avatar, index) => (
                <div
                  key={index}
                  className={`relative h-16 w-16 overflow-hidden rounded-full ${
                    index !== 0 ? "-ml-4" : ""
                  }`}
                >
                  <Image
                    src={avatar}
                    alt="Attorney"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* TEXT */}
            <p className="mt-6 max-w-[520px] text-sm font-medium leading-8 text-[#555] sm:text-lg">
              Our team of experienced attorneys brings unmatched dedication,
              strategic thinking, and relentless advocacy to every case we
              handle.
            </p>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* IMAGE 1 */}
          <div className="group relative overflow-hidden rounded-[28px]">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/about/story/img1.png"
                alt="Court Building"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* IMAGE 2 */}
          <div className="group relative overflow-hidden rounded-[28px]">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/about/story/img2.png"
                alt="Justice"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr] lg:gap-16">
          {/* LABEL */}
          <div>
            <h3 className="text-3xl font-bold uppercase text-black">
              Our Story
            </h3>
          </div>

          {/* DESC */}
          <div>
            <p className="max-w-[980px] text-sm font-medium leading-8 text-[#555] sm:text-xl">
              Founded on integrity, built on experience, and driven by results -
              Melamed Law has recovered millions for homeowners and businesses
              facing insurance disputes and property damage claims.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
