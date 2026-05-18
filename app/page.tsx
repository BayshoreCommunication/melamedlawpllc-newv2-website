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
