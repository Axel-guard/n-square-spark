import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurCapabilities from "@/components/OurCapabilities";
import TrustedClients from "@/components/TrustedClients";
import ProductsPreview from "@/components/ProductsPreview";
import CompanyDetails from "@/components/CompanyDetails";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <OurCapabilities />
      <TrustedClients />
      <ProductsPreview />
      <CompanyDetails />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </>
  );
};

export default Index;
