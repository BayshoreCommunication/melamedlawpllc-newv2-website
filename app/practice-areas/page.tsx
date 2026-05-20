import CTASection from "components/home/CTASection";
import JusticeProcessSection from "components/home/JusticeProcessSection";
import PracticeAreasSection from "components/practice-areas/PracticeAreasSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

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
