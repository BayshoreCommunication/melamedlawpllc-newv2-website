import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";

export const metadata = {
  title: "Privacy Policy | Melamed Law PLLC",
  description: "Read the privacy policy for Melamed Law PLLC to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageBanner
        title="Privacy"
        highlight="Policy"
        description="Effective Date: January 26, 2025. This policy explains how we collect, use, disclose, and safeguard your personal information."
        breadcrumbs={[
          {
            label: "Privacy Policy",
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
                    href="#introduction"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Introduction
                  </a>
                  <a
                    href="#information-collected"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    What Information We Collect
                  </a>
                  <a
                    href="#how-we-use"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    How We Use Your Information
                  </a>
                  <a
                    href="#how-we-share"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    How We Share Your Information
                  </a>
                  <a
                    href="#data-security"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Data Security
                  </a>
                  <a
                    href="#rights-choices"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Your Rights and Choices
                  </a>
                  <a
                    href="#retention"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Data Retention
                  </a>
                  <a
                    href="#children-privacy"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Children's Privacy
                  </a>
                  <a
                    href="#international-transfers"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    International Transfers
                  </a>
                  <a
                    href="#changes"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Changes to This Policy
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#consent"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Consent
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
              <section id="introduction" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Privacy Policy
                </h3>
                <p className="text-sm font-semibold italic text-black/60">
                  Effective Date: 26 January, 2025
                </p>
                <p className="text-base leading-7 text-[#444]">
                  At Melamed Law PLLC (&quot;we,&quot; &quot;our,&quot; and &quot;the Firm&quot;), your privacy is important to us. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when
                  you visit our website, use our legal services, or engage with us in any way. We are committed to
                  protecting your privacy and ensuring that your personal information is handled with care, by the
                  applicable privacy laws.
                </p>
                <p className="text-base leading-7 text-[#444]">
                  The Website’s{" "}
                  <Link href="/terms-of-service" className="text-primary hover:underline font-medium">
                    Terms of Service
                  </Link>{" "}
                  (‘TOS’) are included as part of this policy. By accessing or using our website or services,
                  you consent to the collection and use of your personal information as described in this Privacy
                  Policy. If you do not agree with this Privacy Policy, please refrain from using our services or
                  website.
                </p>
              </section>

              <section id="information-collected" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  What Information We Collect?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We collect different types of personal information based on how you interact with us, including:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">Personal Identification Information:</span> This
                    includes your name, address, email address, phone number, and other contact details you provide to
                    us during our communication, such as when you request legal services or inquire about our practice.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Professional Information:</span> If you are a
                    business owner or homeowner seeking legal advice, we may collect information about your business or
                    property, including employment details, insurance policy information, property ownership details,
                    and other related professional or legal information relevant to your case.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Transactional Information:</span> This includes
                    details related to the services we provide to you, such as billing and payment information, client
                    records, and case-related data. We collect and maintain this information to ensure we provide you
                    with accurate legal services.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Website Usage Data:</span> We collect information on
                    how you interact with our website, including IP addresses, browser types, referring URLs, and other
                    usage data. This may include cookies and other tracking technologies used to gather information
                    about how our website is used and to improve our online services.
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  How We Use Your Information?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We collect and use information for several purposes, such as:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">To Provide Legal Services:</span> We use your
                    personal and professional information to represent you effectively, manage your legal matters, and
                    provide legal advice. This includes information related to property damage claims, insurance
                    disputes, and other related legal issues.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">To Communicate with You:</span> We use your contact
                    information to respond to inquiries, schedule consultations, send important updates about your legal
                    case, and provide you with information about our services. We may also send you newsletters or
                    informational emails if you have opted to receive them.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">To Improve Our Website and Services:</span> We
                    analyze usage data to improve the functionality of our website, personalize it to better meet the
                    needs of our clients, and enhance the overall user experience. We also use this information to
                    troubleshoot and resolve technical issues.
                    <span className="mt-2 block text-[#444]">
                      In addition, This Privacy Policy doesn’t cover third-party websites, resources, or any linked sites
                      you might visit from ours. Those sites have their own privacy policies, so we recommend checking
                      those out directly
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">To Comply with Legal and Regulatory Requirements:</span>{" "}
                    We may use your information to comply with applicable laws, regulations, and court orders, and to
                    protect the Firm’s rights and interests. This includes responding to legal requests or cooperating
                    with law enforcement when necessary.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">To Maintain Internal Records:</span> We may use your
                    personal information for internal administrative purposes, such as tracking case progress, managing
                    billing, and ensuring that we meet our legal obligations.
                  </li>
                </ul>
              </section>

              <section id="how-we-share" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  How Can We Share Your Information?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We take your privacy seriously, and we will never sell, rent, or share your personal information with
                  third parties for marketing purposes without your explicit consent. However, we may disclose your
                  information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">Service Providers:</span> We may share your
                    information with trusted third-party service providers who help us deliver our legal services. These
                    providers may include IT support, billing, and cloud storage companies. We require these providers
                    to protect your data and use it only for the purposes for which it was shared.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Legal and Regulatory Disclosures:</span> In certain
                    circumstances, we may be required to disclose your information to comply with legal obligations,
                    such as in response to subpoenas, court orders, or other legal processes. We may also disclose your
                    information to prevent fraud or protect our rights or the rights of others.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Business Transfers:</span> If our business undergoes
                    a merger, acquisition, or sale, we may transfer your personal information as part of the process to
                    ensure a smooth transition. We will take appropriate steps to ensure that your information is
                    protected during such transfers and inform you of any changes to this Privacy Policy.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">With Your Consent:</span> We may share your personal
                    information with third parties when you provide us with your consent, such as when you ask us to
                    share information with other professionals or partners involved in your case.
                  </li>
                </ul>
              </section>

              <section id="data-security" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  How Do We Provide Data Security?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We use trusted, industry-standard security measures to safeguard your personal information from
                  unauthorized access, misuse, or disclosure. These measures include physical, technical, and
                  administrative safeguards to protect your data in our custody.
                </p>
                <p className="text-base leading-7 text-[#444]">
                  However, please note that no system is entirely secure, and while we strive to protect your
                  information, we cannot guarantee absolute security.
                </p>
              </section>

              <section id="rights-choices" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Your Rights and Choices
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  As a client or visitor to our website, you have certain rights with respect to your personal
                  information, including:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">Right to Access:</span> You may request access to the
                    personal information we hold about you and inquire how it is used.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Right to Correct Information:</span> If any of the
                    information we hold about you is inaccurate or incomplete, you have the right to request that we
                    correct or update it.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Right to Delete Information:</span> You may request
                    that we delete your personal information, subject to certain legal obligations that may require us
                    to retain certain data (such as legal records related to your case).
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Right to Opt-Out of Marketing Communications:</span>{" "}
                    If you no longer wish to receive marketing emails or other communications from us, you can
                    unsubscribe by following the instructions in the communication or contacting us directly.
                  </li>
                </ul>
                <p className="text-base leading-7 text-[#444]">
                  To exercise these rights or if you have any concerns about how your information is being handled,
                  please contact us at the contact information provided below.
                </p>
              </section>

              <section id="retention" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Retention of Personal Information
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy and to comply with our legal and professional obligations. After the retention
                  period expires, we will securely delete or anonymize your personal information.
                </p>
              </section>

              <section id="children-privacy" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Our Policies for Children&apos;s Privacy
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Our services and website are not intended for individuals under the age of 13, and we do not knowingly
                  collect personal information from children. If we find out that we’ve accidentally gathered info from
                  someone under 13, we’ll delete it right away. If you think we might have info about a child under 13,
                  please let us know by emailing us at info@melamedlawpllc.com; we’ll take care of it!
                </p>
              </section>

              <section id="international-transfers" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  What about International Transfers?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  If you are located outside of the United States, please be aware that any personal information you
                  provide to us may be transferred to and processed in the United States, where our servers and service
                  providers are located. By using our website or engaging with our services, you consent to the transfer
                  of your personal information to the United States.
                </p>
              </section>

              <section id="changes" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Changes to This Privacy Policy
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We may revise this Privacy Policy occasionally to align with updates to our practices or to meet legal
                  obligations. When we make updates, we will post the revised policy on our website and update the
                  &quot;Effective Date&quot; at the top of the page. We recommend checking this Privacy Policy regularly
                  to stay updated on how we protect your personal information.
                </p>
              </section>

              <section id="contact" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Contact Us
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  If you have any questions or concerns about this Privacy Policy or our data practices, or if you wish to
                  exercise your rights regarding your personal information, please contact us using the following contact
                  details:
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

              <section id="consent" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Consent
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  By using our website or engaging our legal services, you consent to the collection, use, and sharing
                  of your personal information as described in this Privacy Policy.
                </p>
              </section>
            </article>
          </div>
        </Container>
      </div>
    </div>
  );
}
