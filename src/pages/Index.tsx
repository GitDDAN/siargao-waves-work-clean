import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import CommunitySection from "@/components/sections/CommunitySection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import Promo from "@/components/sections/Promo"; 
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import SiargaoSection from "@/components/sections/SiargaoSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AccommodationSection />
      <WorkspaceSection />
      <BookingSection />
      <SiargaoSection />
      <Footer />
    </div>
  );
};

export default Index;

<script type="module" src="/src/main.tsx"></script>
