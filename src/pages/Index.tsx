import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import CommunitySection from "@/components/sections/CommunitySection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import SiargaoSection from "@/components/sections/SiargaoSection";
import ApplicationSection from "@/components/sections/ApplicationSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CommunitySection />
      <AccommodationSection />
      <WorkspaceSection />
      <SiargaoSection />
      <ApplicationSection />
      <Footer />
    </div>
  );
};

export default Index;
