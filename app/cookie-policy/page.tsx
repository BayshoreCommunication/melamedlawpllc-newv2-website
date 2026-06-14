import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";

export const metadata = {
  title: "Cookie Policy | Melamed Law PLLC",
  description: "Read the cookie policy for Melamed Law PLLC to understand how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div>
      <PageBanner
        title="Cookie"
        highlight="Policy"
        description="Effective Date: January 26, 2025. This policy explains how we use cookies to improve your browsing experience."
        breadcrumbs={[
          {
            label: "Cookie Policy",
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
                    href="#what-are-cookies"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    What Are Cookies?
                  </a>
                  <a
                    href="#why-use"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Why We Use Cookies
                  </a>
                  <a
                    href="#types"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Types of Cookies We Use
                  </a>
                  <a
                    href="#third-party"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Third-Party Cookies
                  </a>
                  <a
                    href="#manage"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    How to Manage Cookies
                  </a>
                  <a
                    href="#consent"
                    className="text-sm font-medium text-[#555] hover:text-primary transition-all duration-300"
                  >
                    Your Consent
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
              <section id="what-are-cookies" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Cookie Policy for Melamed Law PLLC
                </h3>
                <p className="text-sm font-semibold italic text-black/60">
                  Effective Date: 26 January, 2025
                </p>
                <p className="text-base leading-7 text-[#444]">
                  Melamed Law PLLC (“we,” “our,” or “us”) is dedicated to safeguarding your privacy while you navigate
                  our website. This Cookie Policy is intended to provide you with a comprehensive understanding of how
                  we use cookies, the types of cookies employed, and the choices available to you regarding cookies. By
                  using our website, you consent to the use of cookies as outlined in this policy.
                </p>
                <p className="text-base leading-7 text-[#444]">
                  This policy is designed to comply with the applicable privacy laws, including the European
                  Union&apos;s General Data Protection Regulation (GDPR) and other relevant regulations.
                </p>
              </section>

              <section id="what-are-cookies-def" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  What Are Cookies?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  Cookies are small pieces of text data stored on your device (computer, tablet, or mobile) when you
                  visit a website. These cookies enable the website to recognize your device and remember certain
                  settings or preferences during and after your visit. Cookies can be either first-party (set by our
                  website) or third-party (set by external services or partners). Cookies can also be session-based
                  (which expire once you close your browser) or persistent (which remain on your device for a set period
                  or until you delete them).
                </p>
              </section>

              <section id="why-use" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Why Do We Use Cookies?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We use cookies to enhance your experience on our website, making it more efficient and tailored to
                  your preferences. Cookies help us remember your preferences, improve functionality, analyze usage
                  patterns, and provide personalized content and advertisements. Here is a breakdown of the specific
                  purposes cookies serve:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">
                      Improving Website Performance and User Experience:
                    </span>{" "}
                    Cookies help us understand how you interact with our website, including the pages you visit, how
                    often, and the actions you take. This information allows us to make improvements and provide a more
                    seamless and user-friendly browsing experience.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Personalizing Content and Features:</span> We use
                    cookies to remember your language preferences, region, and other settings, which helps us deliver
                    customized content that suits your needs. This may include remembering your preferences for
                    navigation, layout, and display options on the website.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Advertising and Marketing:</span> Cookies allow us to
                    show you relevant advertisements and promotions, particularly related to our legal services. By
                    analyzing your interactions on our site, cookies help us deliver ads based on your interests,
                    improving the chances of delivering the most relevant content.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Analytics and Reporting:</span> We use cookies to
                    track and analyze website traffic and usage data. This helps us understand the effectiveness of our
                    content and where improvements might be needed. Analytics cookies provide us with data about website
                    visitors, including the pages they visit, the time spent on each page, and any issues they
                    encounter.
                  </li>
                </ul>
              </section>

              <section id="types" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Types of Cookies We Use
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We use several different types of cookies on our website. These cookies are classified based on their
                  purpose and functionality. Here is a detailed description:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">Necessary Cookies:</span> These cookies are essential
                    for the operation of our website and cannot be disabled in our systems. They are typically set in
                    response to actions you take, such as logging in or filling out forms. These cookies enable basic
                    functionality like page navigation and security features.
                    <span className="block mt-1 text-sm text-black/60 italic">
                      Example: Cookies that keep track of your consent preferences.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Performance Cookies:</span> These cookies allow us to
                    measure and analyze how visitors use our website. The information collected helps us improve the
                    site’s performance by identifying the most frequently visited pages, errors, and overall user
                    behavior.
                    <span className="block mt-1 text-sm text-black/60 italic">
                      Example: Google Analytics cookies that track the number of visitors and how they use the site.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Functionality Cookies:</span> Functionality cookies
                    allow our website to remember the choices you make, such as your language or region preferences, and
                    provide a more personalized experience.
                    <span className="block mt-1 text-sm text-black/60 italic">
                      Example: Cookies that remember your preferred layout or font size.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Targeting and Advertising Cookies:</span> We use
                    these cookies to show you ads tailored to your interests, both on our website and elsewhere online.
                    They also help us evaluate how effective our advertising campaigns are.
                    <span className="block mt-1 text-sm text-black/60 italic">
                      Example: Third-party cookies that enable us to serve ads to users who have previously visited our
                      website.
                    </span>
                  </li>
                </ul>
              </section>

              <section id="third-party" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Third-Party Cookies
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  In addition to the cookies we set, third-party services may set cookies on your device when you
                  interact with our website. These third parties may include advertising networks, analytics providers,
                  and social media platforms. These third-party cookies enable these entities to collect information
                  about your online activities and help them deliver ads and content that match your interests.
                </p>
                <p className="text-base leading-7 text-[#444]">
                  For example, we may use Google Ads or Facebook Ads to track the effectiveness of our marketing
                  campaigns. You can manage the settings of these third-party cookies through their respective privacy
                  settings or by using tools like{" "}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Google Ads Settings
                  </a>{" "}
                  or Facebook Ad Preferences.
                </p>
              </section>

              <section id="manage" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  How Can You Manage Cookies?
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  You have the right to control the use of cookies on your device. Most browsers allow you to manage
                  cookie preferences, including blocking or deleting cookies. However, please be aware that if you
                  choose to block certain cookies, it may affect the functionality and features of our website.
                </p>
                <p className="text-base leading-7 text-[#444]">Here are some ways you can manage cookie preferences:</p>
                <ol className="list-decimal pl-6 space-y-3 text-base text-[#444] leading-7">
                  <li>
                    <span className="font-semibold text-[#001B35]">Browser Settings:</span> You can adjust your browser
                    settings to accept or reject cookies. Most browsers provide an option to disable cookies or prompt
                    you before accepting cookies. For instructions on how to manage cookies in your browser, refer to the
                    help section of your browser.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Cookie Consent Management:</span> On our website, you
                    may find a cookie consent management tool that allows you to adjust your cookie preferences. You can
                    update your preferences at any time by accessing the tool.
                  </li>
                  <li>
                    <span className="font-semibold text-[#001B35]">Third-Party Tools:</span> For third-party cookies,
                    you can visit websites like Your Online Choices or About Ads to manage your advertising preferences.
                  </li>
                </ol>
              </section>

              <section id="consent" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Your Consent
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  By continuing to browse our website, you consent to the use of cookies as described in this Cookie
                  Policy. You can change your cookie preferences at any time by following the instructions provided in
                  the “How Can You Manage Cookies?” section. If you do not agree with our use of cookies, please refrain
                  from using our website.
                </p>
              </section>

              <section id="changes" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Changes to This Cookie Policy
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  We may update this Cookie Policy periodically. We will post any updates to this page along with the
                  revised effective date. Be sure to check back periodically to stay informed about our use of cookies.
                </p>
              </section>

              <section id="contact" className="space-y-4 scroll-mt-28">
                <h3 className="font-sans text-2xl font-bold text-[#001B35] border-b border-black/5 pb-2">
                  Contact Us
                </h3>
                <p className="text-base leading-7 text-[#444]">
                  If you have any questions or concerns about this Cookie Policy or our data practices, please contact
                  us using the following contact details:
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
              </section>
            </article>
          </div>
        </Container>
      </div>
    </div>
  );
}
