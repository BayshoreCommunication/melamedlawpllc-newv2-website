import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";

export const metadata = {
  title: "Disclaimer | Melamed Law PLLC",
  description: "Read the legal disclaimers and limitations of liability for Melamed Law PLLC.",
};

export default function DisclaimersPage() {
  return (
    <div>
      <PageBanner
        title="Legal"
        highlight="Disclaimers"
        description="Legal disclaimers, jurisdictional limitations, and terms of communication for Melamed Law PLLC."
        breadcrumbs={[
          {
            label: "Disclaimers",
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
                    href="#no-relationship"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    No Attorney-Client Relationship
                  </a>
                  <a
                    href="#advertising"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Attorney Advertising
                  </a>
                  <a
                    href="#jurisdiction"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Jurisdictional Limitations
                  </a>
                  <a
                    href="#no-guarantees"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    No Guarantees
                  </a>
                  <a
                    href="#third-party"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Third-Party Links
                  </a>
                  <a
                    href="#liability"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Limitation of Liability
                  </a>
                  <a
                    href="#intellectual-property"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Intellectual Property
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
              <section id="no-relationship" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  No Attorney-Client Relationship
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We provide the content on this website for informational purposes only and do not offer legal advice.
                  Transmission or receipt of information from this site does not create an attorney-client relationship
                  between you and Melamed Law PLLC. Please wait to send any confidential information until we have
                  officially established an attorney-client relationship.
                </p>
              </section>

              <section id="advertising" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Attorney Advertising
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  This website may be considered attorney advertising under the laws of certain jurisdictions. Prior
                  results do not guarantee a similar outcome.
                </p>
              </section>

              <section id="jurisdiction" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Jurisdictional Limitations
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Melamed Law PLLC practices law only in jurisdictions where it is properly authorized to do so. We do
                  not seek to represent anyone in a jurisdiction where this website does not comply with applicable laws
                  and bar rules.
                </p>
              </section>

              <section id="no-guarantees" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  No Guarantees
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Any descriptions or testimonials on this site are not intended to guarantee or predict the outcome of
                  any legal matter. Each case is different and we evaluate each case based on its unique circumstances.
                </p>
              </section>

              <section id="third-party" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Third-Party Links
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  This website may contain links to third-party websites for convenience. Melamed Law PLLC does not
                  endorse and is not responsible for the content of such external sites.
                </p>
              </section>

              <section id="liability" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Limitation of Liability
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Melamed Law PLLC expressly disclaims all liability for actions taken or not taken based on any or all
                  the contents of this site.
                </p>
              </section>

              <section id="intellectual-property" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Intellectual Property
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  All content on this website, including text, graphics, logos, and images, is the property of Melamed
                  Law PLLC and is protected by applicable intellectual property laws. Unauthorized use is prohibited.
                </p>
              </section>
            </article>
          </div>
        </Container>
      </div>
    </div>
  );
}
