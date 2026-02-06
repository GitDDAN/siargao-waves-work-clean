import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import CommunitySection from "@/components/sections/CommunitySection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import Promo from "@/components/sections/PromoBalcony";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import SiargaoSection from "@/components/sections/SiargaoSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";
import SectionWave from "@/components/ui/SectionWave";
import PhotoDivider from "@/components/ui/PhotoDivider";
import siargaoSurf from "@/assets/siargao-surf.jpg";
import siargaoPalm from "@/assets/siargao-palm.jpg";
import siargaoAerial from "@/assets/siargao-aerial.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Promo />
      <PhotoDivider src={siargaoSurf} alt="Siargao surfing" />
      <AccommodationSection />
      <PhotoDivider src={siargaoPalm} alt="Siargao palm trees" />
      <WorkspaceSection />
      <PhotoDivider src={siargaoAerial} alt="Siargao aerial view" />
      <BookingSection />
      <SiargaoSection />
      <SectionWave variant="reef" className="text-[hsl(215,28%,17%)] relative z-10 -mt-[50px] sm:-mt-[70px] md:-mt-[90px]" />
      <Footer />
    </div>
  );
};

export default Index;

<script type="module" src="/src/main.tsx"></script>
