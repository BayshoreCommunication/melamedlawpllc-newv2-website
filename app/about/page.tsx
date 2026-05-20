import StorySection from "components/about/StorySection";
import AttorneySection from "components/home/AttorneySection";
import ClaimResultsSection from "components/home/ClaimResultsSection";
import TestimonialsSection from "components/home/TestimonialsSection";
import TrustedSection from "components/home/TrustedSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="About"
        highlight="Melamed Law"
        description="Helping clients recover the compensation they deserve after storm, water, and property damage."
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          {
            label: "About",
          },
        ]}
      />
      <StorySection />
      <TrustedSection />
      <ClaimResultsSection />
      <AttorneySection />
      <TestimonialsSection />
    </div>
  );
};

export default page;
