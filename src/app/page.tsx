import SiteHeader from "@/components/navigation/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import IdeaSection from "@/components/sections/IdeaSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ProofSection from "@/components/sections/ProofSection";
import StudioCokaSection from "@/components/sections/StudioCokaSection";
import LearnSection from "@/components/sections/LearnSection";
import CommunitySection from "@/components/sections/CommunitySection";
import VoiceSection from "@/components/sections/VoiceSection";
import ElevatedSection from "@/components/sections/ElevatedSection";
import DirectorySection from "@/components/sections/DirectorySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection, { SiteFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Every section is a SectionPanel: plain scrolling, no animation */}
        <HeroSection index={1} />
        <IdeaSection index={2} />
        <PrinciplesSection index={3} />
        <ProofSection index={4} />
        <StudioCokaSection index={5} />
        <LearnSection index={6} />
        <CommunitySection index={7} />
        <VoiceSection index={8} />
        <ElevatedSection index={9} />
        <DirectorySection index={10} />
        <AboutSection index={11} />
        <ContactSection index={12} />
      </main>
      <SiteFooter />
    </>
  );
}
