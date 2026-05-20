import ContactSection from "components/contact/ContactSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import { Contact } from "lucide-react";
import React from "react";

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
