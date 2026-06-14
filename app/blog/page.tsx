import ArticlesSection from "components/blogs/ArticlesSection";
import CTASection from "components/home/CTASection";
import PageBanner from "components/shared/PageBanner";
import React from "react";


export const metadata = {
  title: "Florida Insurance Claims & Property Damage Lawyers | Florida Insurance Claims Attorney | Insurance attorney in Aventura, Florida",
  description:
    "Melamed Law PLLC offers expert legal representation as a trusted Insurance attorney lawyer in Florida. Our team specializes in property damage cases and serves as Florida Insurance Claims & Property Damage Lawyers. If you need a dedicated Florida Insurance Claims Attorney or an insurance attorney in Aventura, Florida, contact us today for skilled and reliable legal support.",
  alternates: {
    canonical: "/blog",
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
        highlight="Blogs"
        description="We protect policyholders and secure full recovery for residential and commercial insurance claims."
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
