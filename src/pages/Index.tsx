import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductsPreview from "@/components/ProductsPreview";
import CompanyDetails from "@/components/CompanyDetails";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <ProductsPreview />
      <CompanyDetails />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
