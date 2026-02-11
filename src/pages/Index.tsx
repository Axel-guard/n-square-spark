import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanyDetails from "@/components/CompanyDetails";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <CompanyDetails />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
