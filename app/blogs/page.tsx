import ArticlesSection from "components/blogs/ArticlesSection";
import CTASection from "components/home/CTASection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Our"
        highlight="Blogs"
        description="Focused on protecting policyholders and maximizing recovery for residential and commercial insurance claims."
        backgroundImage="/images/page-banner/page-banner-bg.png"
        breadcrumbs={[
          {
            label: "Blogs",
          },
        ]}
      />
      <ArticlesSection />
      <CTASection />
    </div>
  );
};

export default page;
