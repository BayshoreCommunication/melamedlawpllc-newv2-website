import CTASection from "components/home/CTASection";
import PageBanner from "components/shared/PageBanner";
import TestimonialsVideoSection from "components/testimonials/TestimonialsVideoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Trusted by"
        highlight="Florida Policyholders"
        description="See how Melamed Law has helped homeowners and businesses recover the compensation they deserve after denied and underpaid insurance claims."
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
