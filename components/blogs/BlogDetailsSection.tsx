"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Search, Phone, Mail, ChevronRight } from "lucide-react";

import Container from "components/shared/Container";
import { BLOG_POSTS, BlogPost } from "data/blog-data";

type BlogDetailsSectionProps = {
  post: BlogPost;
};

export default function BlogDetailsSection({ post }: BlogDetailsSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories and calculate counts
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  // Filter recent posts (excluding the current one) for bottom list
  const recentCases = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 4);

  // Filter sidebar posts dynamically based on search query
  const sidebarPosts = searchQuery.trim()
    ? BLOG_POSTS.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 4);

  return (
    <>
      <section className="bg-white py-10 lg:py-16">
        <Container>
          <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Main Content Column (Col Span 8) */}
            <article className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-[4px] border border-black/5 bg-[#F8F4EE] shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[16/8.5] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1280px) 1180px, 100vw"
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-medium text-[#666]">
                <span className="rounded-[3px] bg-primary/15 px-3 py-1 text-primary font-bold uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-primary" />
                  {post.date}
                </span>
              </div>

              <div className="mt-6 space-y-8 text-base leading-8 text-[#555] md:text-lg md:leading-9">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-bold leading-tight text-black md:text-[28px] border-l-4 border-primary pl-4">
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mt-4 text-justify">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-4 list-disc space-y-2 pl-7 text-[#666]">
                        {section.bullets.map((item, bIdx) => (
                          <li key={bIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>

            {/* Right Sidebar Column (Col Span 4) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Search Widget */}
              <div className="rounded-[10px] border border-black/5 bg-[#F8F4EE] p-6 shadow-sm">
                <h3 className="text-base font-bold text-black border-b border-black/10 pb-3 uppercase tracking-wider">
                  Search Articles
                </h3>
                <div className="relative mt-4">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-4 pr-10 rounded-[3px] border border-black/10 bg-white text-sm text-black placeholder-black/40 focus:border-primary focus:outline-none transition-colors duration-200"
                  />
                  <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="rounded-[10px] border border-black/5 bg-[#F8F4EE] p-6 shadow-sm">
                <h3 className="text-base font-bold text-black border-b border-black/10 pb-3 uppercase tracking-wider">
                  Categories
                </h3>
                <ul className="mt-4 space-y-3">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link
                        href="/blog"
                        className="flex items-center justify-between text-sm text-[#555] hover:text-primary transition-colors duration-200 group/cat"
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight size={14} className="text-primary transition-transform duration-200 group-hover/cat:translate-x-0.5" />
                          <span className="font-semibold">{cat}</span>
                        </div>
                        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] text-[#777] font-bold">
                          {BLOG_POSTS.filter((p) => p.category === cat).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Articles Widget */}
              <div className="rounded-[10px] border border-black/5 bg-[#F8F4EE] p-6 shadow-sm">
                <h3 className="text-base font-bold text-black border-b border-black/10 pb-3 uppercase tracking-wider">
                  {searchQuery.trim() ? "Search Results" : "Recent Articles"}
                </h3>
                <div className="mt-4 space-y-5">
                  {sidebarPosts.length > 0 ? (
                    sidebarPosts.map((item) => (
                      <article key={item.slug} className="flex gap-4 group">
                        <Link href={`/blog/${item.slug}`} className="relative h-14 w-18 shrink-0 overflow-hidden rounded-[3px] bg-[#EAE3D5]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="72px"
                          />
                        </Link>
                        <div className="space-y-1">
                          <h4 className="line-clamp-2 text-xs font-bold leading-snug text-black group-hover:text-primary transition-colors duration-200">
                            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                          </h4>
                          <div className="flex items-center gap-1.5 text-[11px] text-[#777]">
                            <CalendarDays size={12} className="text-primary" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <p className="text-sm text-[#777] italic text-center py-4">No matching articles found.</p>
                  )}
                </div>
              </div>

              {/* Free Case Review CTA Widget */}
              <div className="rounded-[10px] border border-primary/20 bg-[#001B35] p-7 text-white shadow-md text-center relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/10" />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide leading-tight">
                    Need Professional <span className="text-primary">Legal Help?</span>
                  </h3>
                  <p className="text-xs leading-5 text-white/80">
                    Get a free, no-obligation case evaluation with an experienced Florida insurance claims attorney.
                  </p>
                  <div className="space-y-3 text-left">
                    <a
                      href="tel:954-529-0695"
                      className="flex items-center gap-3 rounded-[3px] bg-white/5 p-3 hover:bg-white/10 transition-colors duration-200 border border-white/5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none">Call Us (Se Habla Español)</p>
                        <p className="text-base font-bold text-white mt-1">954-529-0695</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@melamedlawpllc.com"
                      className="flex items-center gap-3 rounded-[3px] bg-white/5 p-3 hover:bg-white/10 transition-colors duration-200 border border-white/5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none">Email Us</p>
                        <p className="text-xs font-bold text-white mt-1">info@melamedlawpllc.com</p>
                      </div>
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-primary text-[10px] font-bold uppercase tracking-wider text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-[#E7B862]"
                  >
                    Schedule Case Review
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </Container>
      </section>

      {/* Recent Cases Section at the bottom */}
      <section className="bg-[#F8F4EE] py-10 lg:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase leading-tight text-black md:text-4xl">
              Recent <span className="text-primary">Cases</span>
            </h2>

            <p className="mx-auto mt-3 max-w-[640px] text-sm leading-6 text-[#666] md:text-base">
              Practical guides and expert advice to help you protect your rights
              and your property.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {recentCases.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-[4px] border border-primary/20 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
              >
                <Link
                  href={`/blog/${item.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#F5F1EA]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <span className="absolute left-3 top-3 rounded-[3px] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm">
                    {item.category}
                  </span>
                </Link>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#777]">
                    <CalendarDays size={14} className="text-primary" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-tight text-black transition duration-300 group-hover:text-primary">
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>

                  <Link
                    href={`/blog/${item.slug}`}
                    className="group/btn mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-primary transition duration-300 hover:text-black"
                  >
                    Read More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
