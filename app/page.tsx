import AttorneySection from "components/home/AttorneySection";
import ClaimResultsSection from "components/home/ClaimResultsSection";
import HeroSection from "components/home/HeroSection";
import InsuranceClaimsSection from "components/home/InsuranceClaimsSection";
import PracticeAreasSection from "components/home/PracticeAreasSection";
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
    </div>
  );
}
