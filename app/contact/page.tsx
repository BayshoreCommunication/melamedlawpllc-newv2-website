import ContactSection from "components/contact/ContactSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import { Contact } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Contact Florida Property Damage Attorney | Free Review",
  description:
    "Contact Melamed Law PLLC for a free consultation on property damage and insurance claims. Speak with a Florida attorney today.",
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
