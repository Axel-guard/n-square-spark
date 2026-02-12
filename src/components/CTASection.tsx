import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-foreground/5 blur-[100px]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Ready to Power Your Business with Advanced Electronics?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Partner with N Square Electronics for reliable, innovative, and high-quality solutions tailored to your needs.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-card text-primary font-semibold text-lg hover:bg-card/90 transition-all duration-300 shadow-lg"
        >
          Get In Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
