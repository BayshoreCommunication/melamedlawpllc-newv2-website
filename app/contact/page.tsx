import ContactSection from "components/contact/ContactSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import { Contact } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Contact Property Damage & Insurance Claims Attorney in Florida | Free Case Review | Melamed Law PLLC",
  description:
    "Contact Melamed Law PLLC for expert legal representation with your property damage or insurance claims in Florida. Schedule a free consultation with a dedicated Florida Insurance Claims Attorney in Aventura & Ojus, FL today to discuss your case and secure the compensation you deserve.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-US": "/en-USA",
    },
  }
};

const page = () => {
  return (
    <div>
      <PageBanner
        title="Let’s"
        highlight="Discuss Your Case"
        description="Speak directly with an experienced property insurance attorney today and get the legal guidance you need."
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          {
            label: "Contact",
          },
        ]}
      />
      <ContactSection />
      <GoogleMapSection />
    </div>
  );
};

export default page;
