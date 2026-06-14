import AttorneySection from "components/home/AttorneySection";
import BlogSection from "components/home/BlogSection";
import ClaimResultsSection from "components/home/ClaimResultsSection";
import CTASection from "components/home/CTASection";
import HeroSection from "components/home/HeroSection";
import InsuranceClaimsSection from "components/home/InsuranceClaimsSection";
import JusticeProcessSection from "components/home/JusticeProcessSection";
import PracticeAreasSection from "components/home/PracticeAreasSection";
import TestimonialsSection from "components/home/TestimonialsSection";
import TrustedSection from "components/home/TrustedSection";

export const metadata = {
  title: "Property Damage Attorney in Florida | Insurance attorney in Ojus, Florida | property damage lawyer in ojus, florida | Melamed Law PLLC | Florida Insurance Claims & Property Damage Lawyers | insurance bad faith attorney",
  description:
    "Melamed Law PLLC is your trusted Property Damage Attorney in Florida, specializing in insurance claims. Whether you need an Insurance Attorney in Ojus, Florida, or a Property Damage Lawyer in Ojus, Florida, we’re here to help. Our Florida Insurance Claims & Property Damage Lawyers, including experienced loss adjuster lawyers in Florida, ensure your rights are protected.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  }

};


export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustedSection />
      <InsuranceClaimsSection />
      <PracticeAreasSection />
      <ClaimResultsSection />
      <AttorneySection />
      <JusticeProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
