import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyOverview from "@/components/PropertyOverview";
import PlotsForSale from "@/components/PlotsForSale";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyOverview />
      <PlotsForSale />
      <Features />
      <Gallery />
      <FloorPlans />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
