import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import Container from "components/shared/Container";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Blog", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const legalAreas = [
  "Insurance Claim Denials",
  "Property Damage Claims",
  "Hurricane Claims",
  "Bad Faith Insurance",
  "Commercial Claims",
  "Policy Disputes",
];

const practiceAreas = [
  "Personal Injury",
  "Slip & Fall",
  "Car Accidents",
  "Truck Accidents",
  "Wrongful Death",
  "Catastrophic Injuries",
  "Insurance Bad Faith",
  "Property Damage",
];

const policies = [
  { label: "Disclaimers", href: "/disclaimers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "/" },
  { icon: FaInstagram, href: "/" },
  { icon: FaLinkedinIn, href: "/" },
  { icon: FaYoutube, href: "/" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="relative inline-block font-sans text-[17px] font-medium uppercase leading-none tracking-normal text-primary">
      {children}
      <span className="absolute -bottom-[14px] left-0 h-px w-[60px] bg-primary" />
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-sans text-[15px] leading-[1.15] text-white transition duration-300 hover:text-primary"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#001B35] text-white">
      <Container>
        <div className="pt-8 md:pt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[160px_205px_175px_155px_251px] lg:justify-between">
            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="mt-11 space-y-[11px]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Legal Areas</FooterHeading>
              <ul className="mt-11 space-y-[11px]">
                {legalAreas.map((item) => (
                  <li key={item}>
                    <FooterLink href="/practice-areas">{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Practice Areas</FooterHeading>
              <ul className="mt-11 space-y-[11px]">
                {practiceAreas.map((item) => (
                  <li key={item}>
                    <FooterLink href="/practice-areas">{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Policies</FooterHeading>
              <ul className="mt-11 space-y-[11px]">
                {policies.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Contact Us</FooterHeading>
              <div className="mt-11 space-y-[22px] font-sans">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-[15px] font-medium uppercase leading-none text-primary">
                      Location
                    </h4>
                    <p className="mt-[9px] text-[14px] leading-[17px] text-white">
                      3040 NE 190th St APT 303,
                      <br />
                      Aventura, FL 33180,
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-[15px] font-medium uppercase leading-none text-primary">
                      Contact
                    </h4>
                    <a
                      href="tel:+19545290695"
                      className="mt-[9px] block text-[14px] leading-none text-white transition duration-300 hover:text-primary"
                    >
                      954-529-0695
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-[15px] font-medium uppercase leading-none text-primary">
                      Email
                    </h4>
                    <a
                      href="mailto:info@melamedlawpllc.com"
                      className="mt-[9px] block break-all text-[14px] leading-none text-white transition duration-300 hover:text-primary"
                    >
                      info@melamedlawpllc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[62px] flex items-center gap-7">
            <div className="h-px flex-1 bg-white/15" />
            <div className="flex items-center gap-[22px]">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    aria-label={`Social link ${index + 1}`}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-primary text-primary transition duration-300 hover:bg-primary hover:text-[#001B35]"
                  >
                    <Icon size={13} />
                  </Link>
                );
              })}
            </div>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="py-[42px] font-sans">
            <p className="max-w-[1150px] text-[14px] leading-[20px] text-white">
              <span className="font-bold uppercase text-primary">
                Attorney Advertising:
              </span>{" "}
              This website is designed for general information only. The
              information presented at this site should not be construed to be
              formal legal advice nor the formation of a lawyer/client
              relationship. Prior results do not guarantee a similar outcome.
            </p>
          </div>

          <div className="grid items-center gap-5 border-t border-white/15 py-[18px] text-center font-sans lg:grid-cols-3 lg:text-left">
            <p className="text-[14px] leading-none text-white">
              2026{" "}
              <span className="font-semibold text-primary">Melamed Law.</span>{" "}
              All Rights Reserved.
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Melamed Law Firm"
                width={148}
                height={28}
                className="h-auto w-[148px]"
              />
            </div>

            <p className="text-[14px] leading-none text-white lg:text-right">
              Design & Developed by{" "}
              <Link
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="text-primary transition duration-300 hover:text-white"
              >
                BayShore Communication
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
