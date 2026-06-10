import CTASection from "components/home/CTASection";
import PageBanner from "components/shared/PageBanner";
import TestimonialsVideoSection from "components/testimonials/TestimonialsVideoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Trusted Counsel for"
        highlight="Florida Policyholders"
        description="Review how Melamed Law secures the full recovery homeowners and businesses are legally owed following denied or underpaid insurance claims."
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          {
            label: "Testimonials",
          },
        ]}
      />
      <TestimonialsVideoSection />
      <CTASection />
    </div>
  );
};

export default page;
