"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import Container from "components/shared/Container";

const testimonials = [
  {
    name: "Michael T.",
    role: "Personal Injury Client",
    quote:
      "They fought for me every step of the way and got me the settlement I deserved.",

    youtubeUrl: "https://www.youtube.com/watch?v=O_LFQpzFyC0&t=3s",
  },

  {
    name: "Sarah M.",
    role: "Property Damage Client",
    quote:
      "Professional, responsive, and truly cared about my case from beginning to end.",

    youtubeUrl: "https://www.youtube.com/watch?v=YvRrkeJbziQ",
  },

  {
    name: "James R.",
    role: "Insurance Claim Client",
    quote: "Their legal team made a difficult process simple and stress-free.",

    youtubeUrl: "https://www.youtube.com/watch?v=jkD68d77Tu0",
  },

  {
    name: "Emily R.",
    role: "Hurricane Damage Client",
    quote:
      "They helped us recover compensation after our insurance company delayed everything.",

    youtubeUrl: "https://www.youtube.com/watch?v=B6HKidfkw5Q",
  },

  {
    name: "Daniel K.",
    role: "Slip & Fall Client",
    quote:
      "The attorneys were aggressive, knowledgeable, and always available.",

    youtubeUrl: "https://www.youtube.com/watch?v=uASrWeSGbuM",
  },

  {
    name: "Olivia P.",
    role: "Accident Victim",
    quote:
      "I couldn’t have asked for a better legal team during such a difficult time.",

    youtubeUrl: "https://www.youtube.com/watch?v=2Eq9FvFRWgo",
  },
];

export default function TestimonialsVideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // EXTRACT YOUTUBE ID
  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    const match = url.match(regExp);

    return match && match[1].length === 11 ? match[1] : "";
  };

  return (
    <section className="bg-[#FFFFFF] py-8 lg:py-16">
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
            Real Clients. <span className="text-primary">Real Results.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555]">
            Hear from people we've helped and the results we've achieved
            together.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => {
            const videoId = getYoutubeId(item.youtubeUrl);

            const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            return (
              <div key={index}>
                {/* VIDEO CARD */}
                <div className="group overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
                  {/* VIDEO AREA */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {activeVideo === videoId ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={item.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        {/* THUMBNAIL */}
                        <Image
                          src={thumbnail}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* PLAY BUTTON */}
                        <button
                          onClick={() => setActiveVideo(videoId)}
                          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary"
                        >
                          <Play
                            size={28}
                            className="ml-1 text-white"
                            fill="white"
                          />
                        </button>

                        {/* INFO */}
                        <div className="absolute bottom-5 left-5 z-10">
                          <h4 className="text-lg font-bold text-white">
                            {item.name}
                          </h4>

                          <p className="text-sm text-white/70">{item.role}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* QUOTE */}
                <div className="mt-5 flex gap-3">
                  <span className="text-3xl font-bold leading-none text-primary">
                    “
                  </span>

                  <p className="text-lg leading-8 text-black">{item.quote}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="mt-14 flex justify-center">
          <button
            style={{
              border: "2px solid #DCA64E",
            }}
            className="inline-flex h-12 items-center justify-center rounded-[8px] bg-white px-8 text-base font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#DCA64E] md:text-lg"
          >
            Load More Testimonials
          </button>
        </div>
      </Container>
    </section>
  );
}
