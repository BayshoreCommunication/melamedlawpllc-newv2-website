"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Container from "components/shared/Container";
import Image from "next/image";

const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT US",
    href: "/about",
  },
  {
    label: "PRACTICE AREAS",
    href: "/practice-areas",
    dropdown: true,
  },
  {
    label: "TESTIMONIALS",
    href: "/testimonials",
  },
  {
    label: "BLOGS",
    href: "/blogs",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-[100] border-b border-white/10 bg-transparent text-white">
      <Container>
        <div className="flex h-[90px] items-center justify-between">
          {/* LEFT */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Melamed Law Firm"
              width={200}
              height={80}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative flex items-center gap-1 text-[14px] font-medium tracking-wide transition-all duration-300 hover:text-primary ${
                    isActive ? "text-primary" : "text-white"
                  }`}
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown size={16} className="mt-[1px]" />
                  )}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Free Consultation
              </p>

              <a
                href="tel:+112326545456"
                className="text-xl font-semibold tracking-wide transition-all duration-300 hover:text-primary"
              >
                +11 2326545456
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-primary hover:text-primary lg:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <div
        className={`absolute inset-x-0 top-full z-[100] overflow-hidden border-t border-white/10 bg-[#031735]/95 shadow-2xl backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[520px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <Container>
          <div className="flex flex-col py-6">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:translate-x-1 hover:text-primary ${
                    isActive ? "text-primary" : "text-white"
                  }`}
                >
                  {item.label}

                  {item.dropdown && <ChevronDown size={16} />}
                </Link>
              );
            })}

            {/* MOBILE PHONE */}
            <div className="mt-6 rounded-2xl border border-primary/20 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-primary">
                Free Consultation
              </p>

              <a
                href="tel:+112326545456"
                className="mt-2 block text-xl font-semibold text-white transition-all duration-300 hover:text-primary"
              >
                +11 2326545456
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
