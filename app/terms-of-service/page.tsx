import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";

export const metadata = {
  title: "Terms of Service | Melamed Law PLLC",
  description: "Read the terms of service and legal terms governing the use of Melamed Law PLLC's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageBanner
        title="Terms of"
        highlight="Service"
        description="Please read these Legal Terms carefully before using our website and services."
        breadcrumbs={[
          {
            label: "Terms of Service",
          },
        ]}
      />

      <div className="bg-[#FAF8F5] py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* SIDEBAR */}
            <aside className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-[120px] space-y-8">
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h4 className="font-sans text-lg font-bold text-[#001B35] uppercase tracking-wide border-b border-black/5 pb-3">
                  Table of Contents
                </h4>
                <nav className="mt-4 flex flex-col gap-3">
                  <a
                    href="#agreement"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Agreement to Terms
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    1. Our Services
                  </a>
                  <a
                    href="#ip-rights"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    2. Intellectual Property Rights
                  </a>
                  <a
                    href="#representations"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    3. User Representations
                  </a>
                  <a
                    href="#registration"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    4. User Registration
                  </a>
                  <a
                    href="#prohibited"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    5. Prohibited Activities
                  </a>
                  <a
                    href="#contributions"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    6. User Contributions
                  </a>
                  <a
                    href="#license"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    7. Contribution License
                  </a>
                  <a
                    href="#privacy"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    8. Privacy Policy
                  </a>
                  <a
                    href="#copyright"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    9. Copyright Infringement
                  </a>
                  <a
                    href="#modifications"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    10. Modifications & Interruptions
                  </a>
                  <a
                    href="#userdata"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    11. User Data
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>

              {/* CONTACT WIDGET */}
              <div className="rounded-2xl bg-[#001B35] p-6 text-white shadow-sm space-y-4">
                <h4 className="font-sans text-lg font-bold text-primary uppercase tracking-wide">
                  Need Assistance?
                </h4>
                <p className="text-sm leading-relaxed text-white/80">
                  Contact us today to schedule a free, no-obligation case review with our experienced team.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary shrink-0" size={18} />
                    <a
                      href="tel:954-529-0695"
                      className="text-sm font-medium hover:text-primary transition-all"
                    >
                      954-529-0695
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary shrink-0" size={18} />
                    <a
                      href="mailto:info@melamedlawpllc.com"
                      className="text-sm font-medium hover:text-primary transition-all break-all"
                    >
                      info@melamedlawpllc.com
                    </a>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 block w-full py-3 px-4 bg-primary text-center text-[#001B35] font-semibold rounded-lg hover:bg-white hover:text-[#001B35] transition-all duration-300"
                >
                  Schedule Free Review
                </Link>
              </div>
            </aside>

            {/* CONTENT */}
            <article className="flex-1 rounded-2xl border border-black/5 bg-white p-8 lg:p-12 shadow-sm space-y-10">
              <section id="agreement" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  AGREEMENT TO OUR LEGAL TERMS
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  By using the services of Melamed Law, PLLC, including our website and related resources, you agree to
                  these Legal Terms. If you do not agree with these terms, please discontinue use of the Services
                  immediately. We reserve the right to update or modify these Legal Terms at any time. Changes will take
                  effect upon publication, and continued use of the Services constitutes acceptance of the updated
                  terms.
                </p>
              </section>

              <section id="services" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  1) OUR SERVICES
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  The Services provided by Melamed Law, PLLC are intended to assist clients with property damage and
                  insurance claims, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[#444] leading-7">
                  <li>Hurricane, windstorm, and storm damage claims</li>
                  <li>Roof, water, fire, mold, hail, plumbing, smoke damage claims</li>
                  <li>Bad faith insurance disputes</li>
                  <li>Vandalism and theft claims</li>
                </ul>
                <p className="text-base leading-7 text-[#444]">
                  Our Services are for lawful purposes only. Users are responsible for ensuring compliance with local
                  laws if accessing the Services from jurisdictions with specific legal restrictions.
                </p>
              </section>

              <section id="ip-rights" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  2) INTELLECTUAL PROPERTY RIGHTS
                </h3>
                <div className="space-y-4 text-base text-[#444] leading-7">
                  <p>
                    <span className="font-semibold text-[#001B35]">Our Rights:</span> Melamed Law, PLLC owns or licenses
                    all intellectual property related to the Services, including website design, text, images, software,
                    databases, and trademarks. These rights are protected under applicable copyright and trademark laws.
                  </p>
                  <p>
                    <span className="font-semibold text-[#001B35]">Your Use:</span> We grant you a limited,
                    non-exclusive, non-transferable, revocable license to access and use the Services for personal
                    purposes. Unauthorized use of our intellectual property is prohibited and may result in legal
                    action.
                  </p>
                  <p>
                    <span className="font-semibold text-[#001B35]">Your Submissions:</span> By submitting feedback or
                    content through our website or Services, you grant us the right to use, modify, and distribute such
                    content. Any intellectual property rights in these submissions will be assigned to Melamed Law,
                    PLLC.
                  </p>
                </div>
              </section>

              <section id="representations" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  3) USER REPRESENTATIONS
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  By using our Services, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[#444] leading-7">
                  <li>All information you provide is accurate, current, and complete.</li>
                  <li>You have the legal capacity to comply with these Legal Terms.</li>
                  <li>You are not a minor under your local jurisdiction.</li>
                  <li>You will not use automated means to access the Services.</li>
                  <li>You will not use the Services for unlawful purposes.</li>
                  <li>You will comply with all applicable laws and regulations.</li>
                </ul>
                <p className="text-base leading-7 text-[#444]">
                  Failure to comply with these representations may result in suspension or termination of access to our
                  Services.
                </p>
              </section>

              <section id="registration" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  4) USER REGISTRATION
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Certain features of our Services may require user registration. You are responsible for maintaining
                  the security of your account credentials. Melamed Law, PLLC reserves the right to remove, reclaim, or
                  modify usernames deemed inappropriate or misleading.
                </p>
              </section>

              <section id="prohibited" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  5) PROHIBITED ACTIVITIES
                </h3>
                <p className="text-base leading-7 text-[#444]">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[#444] leading-7">
                  <li>Use the Services for unauthorized commercial purposes.</li>
                  <li>Harvest data or use automated tools without our consent.</li>
                  <li>Circumvent security features or disrupt the Services.</li>
                  <li>Upload harmful software, such as viruses or malware.</li>
                  <li>Use the Services to defame, harass, or harm others.</li>
                  <li>Violate any applicable laws or regulations.</li>
                </ul>
                <p className="text-base leading-7 text-[#444]">
                  Engaging in prohibited activities may result in termination of your access and legal action.
                </p>
              </section>

              <section id="contributions" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  6) USER-GENERATED CONTRIBUTIONS
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Any content you submit must be truthful, lawful, and free of third-party rights violations. By
                  submitting content, you grant Melamed Law, PLLC the rights to use, modify, and distribute your
                  contributions as part of the Services.
                </p>
              </section>

              <section id="license" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  7) CONTRIBUTION LICENSE
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  By submitting content, you grant us an irrevocable, royalty-free, worldwide license to use, reproduce,
                  modify, and distribute your contributions in any format or medium. You also waive any moral rights
                  associated with your submissions.
                </p>
              </section>

              <section id="privacy" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  8) PRIVACY POLICY
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We respect your privacy and are committed to protecting your personal data. Please review our Privacy
                  Policy to understand how we collect, use, and protect your information. By using our Services, you
                  consent to the terms of our Privacy Policy.
                </p>
              </section>

              <section id="copyright" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  9) COPYRIGHT INFRINGEMENT
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Melamed Law, PLLC respects intellectual property rights. If you believe your copyrighted material has
                  been used without authorization, please contact us with the relevant details for review and
                  resolution.
                </p>
              </section>

              <section id="modifications" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  10) MODIFICATIONS AND INTERRUPTIONS
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We reserve the right to modify, suspend, or discontinue the Services at any time without prior notice.
                  Melamed Law, PLLC is not responsible for any interruptions or changes that may occur during such
                  modifications.
                </p>
              </section>

              <section id="userdata" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  11) USER DATA
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We may retain and use data related to your use of the Services. While we take measures to protect your
                  data, you are responsible for ensuring the security of any information you transmit to or through our
                  Services.
                </p>
              </section>

              <section id="contact" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Contact Us
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  For inquiries or issues related to the Services, please contact us at:
                </p>
                <div className="text-base leading-7 text-[#444] space-y-2 pt-2">
                  <p className="font-semibold">Melamed Law PLLC</p>
                  <p>
                    <span className="font-semibold text-[#001B35]">Location:</span> 3040 NE 190th St APT 303, Aventura,
                    FL 33180, United States
                  </p>
                  <p>
                    <span className="font-semibold text-[#001B35]">Contact:</span> 954-529-0695
                  </p>
                  <p>
                    <span className="font-semibold text-[#001B35]">Email:</span> info@melamedlawpllc.com
                  </p>
                </div>
                <p className="text-xs text-black/50 pt-4 border-t border-black/5">
                  © 2025 Melamed Law, PLLC. All Rights Reserved.
                </p>
              </section>
            </article>
          </div>
        </Container>
      </div>
    </div>
  );
}
