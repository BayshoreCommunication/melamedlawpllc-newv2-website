"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Star } from "lucide-react";

import Container from "components/shared/Container";

const testimonials = [
  {
    name: "Michael T.",
    role: "Personal Injury Client",
    videoId: "B6HKidfkw5Q",
    quote:
      "They fought for me every step of the way and got me the settlement I deserved.",
  },
  {
    name: "Sarah M.",
    role: "Property Damage Client",
    videoId: "uASrWeSGbuM",
    quote: "Professional, responsive, and fought hard for my case.",
  },
  {
    name: "James R.",
    role: "Insurance Claim Client",
    videoId: "2Eq9FvFRWgo",
    quote:
      "They truly care about their clients and got me the settlement I deserved.",
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

function VideoCard({
  item,
  isPlaying,
  onPlay,
}: {
  item: (typeof testimonials)[0];
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const thumbnail = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
  const video = `https://www.youtube.com/embed/${item.videoId}`;

  return (
    <div>
      {/* VIDEO CARD */}
      <div className="group relative overflow-hidden rounded-md bg-black shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        <div className="relative h-[280px] w-full">
          {!isPlaying ? (
            <>
              {/* IMAGE */}
              <Image
                src={thumbnail}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* PLAY BUTTON */}
              <button
                onClick={onPlay}
                aria-label={`Play ${item.name} testimonial video`}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-black"
              >
                <Play size={24} fill="currentColor" className="ml-1" />
              </button>

              {/* CONTENT */}
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base font-bold text-white">{item.name}</h3>

                <p className="mt-1 text-xs text-white/80">{item.role}</p>
              </div>
            </>
          ) : (
            <iframe
              key={item.videoId}
              src={`${video}?autoplay=1`}
              title={item.name}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </div>
      </div>

      {/* QUOTE */}
      <div className="mt-6 flex gap-2 px-3">
        <span className="text-4xl font-bold leading-none text-primary">“</span>

        <p className="text-lg leading-7 text-black">{item.quote}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section className="bg-[#F8F4ED] py-8 lg:py-16">
      <Container>
        {/* HEADING */}
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-5xl font-bold uppercase leading-[1.16] tracking-normal text-black lg:text-6xl xl:text-7xl">
            Real Clients. <span className="text-primary">Real Results.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-sm font-medium leading-7 text-[#5C5C5C] sm:text-lg">
            Hear from people we've helped and the results we've achieved
            together.
          </p>
        </div>

        {/* VIDEO TESTIMONIALS */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <VideoCard
              key={`${item.videoId}-${index}`}
              item={item}
              isPlaying={playingVideoId === item.videoId}
              onPlay={() => setPlayingVideoId(item.videoId)}
            />
          ))}
        </div>

        {/* GOOGLE REVIEWS */}
        <div className="mt-16 overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {/* GOOGLE */}
            <div className="flex items-center gap-5 border-b border-black/10 p-8 lg:border-b-0 lg:border-r">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image
                  src="/images/google-logo.svg"
                  alt="Google"
                  width={52}
                  height={52}
                />
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-black">Google</h3>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-base md:text-lg font-bold text-black">
                    5.0
                  </span>

                  <ReviewStars />
                </div>

                <p className="mt-3 text-[#666] text-base md:text-lg">
                  Based on 27 Google reviews
                </p>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {reviews.map((item, index) => (
                <div key={index} className="relative p-8">
                  {/* SAME BORDER STYLE */}
                  {index !== reviews.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-black/10 md:block" />
                  )}

                  <div className="flex items-start gap-4">
                    {/* AVATAR */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F3657] text-sm font-bold text-white">
                      {item.avatar}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <ReviewStars />

                      <p className="mt-3 text-base md:text-lg leading-6 text-[#555]">
                        {item.review}
                      </p>

                      <p className="mt-4 text-base md:text-lg font-semibold text-black">
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
