import CTASection from "components/home/CTASection";
import JusticeProcessSection from "components/home/JusticeProcessSection";
import PracticeAreasSection from "components/practice-areas/PracticeAreasSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Residential Home Property Damage Claims Attorney | Hurricane Damage Claims Attorney in ojus, fl | Melamed Law PLLC | Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida",
  description:
    "Melamed Law PLLC specializes in Residential Home Property Damage Claims, offering expert legal representation for hurricane damage claims in Ojus, FL. As a trusted Florida Insurance Claims Attorney and Insurance Attorney in Aventura, Florida, we’re dedicated to protecting your rights and ensuring fair settlements. Contact us today for personalized support!",
  alternates: {
    canonical: "/practice-areas",
    languages: {
      "en-US": "/en-USA",
    },
  }

};


const page = () => {
  return (
    <div>
      <PageBanner
        title="Our"
        highlight="Practice Areas"
        description="Focused on protecting policyholders and maximizing recovery for residential and commercial insurance claims."
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          {
            label: "Practice Areas",
          },
        ]}
      />
      <PracticeAreasSection />
      <JusticeProcessSection />
      <CTASection />
    </div>
  );
};

export default page;
