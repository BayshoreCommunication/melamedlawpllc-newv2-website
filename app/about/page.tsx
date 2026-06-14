import StorySection from "components/about/StorySection";
import AttorneySection from "components/home/AttorneySection";
import ClaimResultsSection from "components/home/ClaimResultsSection";
import TestimonialsSection from "components/home/TestimonialsSection";
import TrustedSection from "components/home/TrustedSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Windstorm Damage Claims lawyer in florida | Hurricane and Storm Damage Insurance Claims Florida Lawyer | Florida Property Damage Experts | Melamed Law PLLC | best public adjuster in florida |",
  description:
    "Melamed Law PLLC provides expert legal representation for Windstorm Damage Claims in Florida. As trusted Florida Property Damage Experts, we specialize in Hurricane and Storm Damage Insurance Claims. Whether you need a loss adjuster in Aventura, Florida, or the best public adjuster in Florida, our team is here to secure the compensation you deserve.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-USA",
    },
  }

};


const page = () => {
  return (
    <div>
      <PageBanner
        title="About"
        highlight="Melamed Law"
        description="Securing the full recovery clients are owed following storm, water, and property damage."
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
