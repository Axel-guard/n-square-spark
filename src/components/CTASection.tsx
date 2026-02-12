import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Ready to Power Your Business with{" "}
          <span className="gradient-text">Advanced Electronics?</span>
        </h2>
        <p className="text-section-dark-foreground/60 text-lg mb-10 max-w-xl mx-auto">
          Partner with N Square Electronics for reliable, innovative, and high-quality solutions tailored to your needs.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-[0_0_40px_-5px_hsl(var(--glow-primary)/0.4)] hover:shadow-[0_0_50px_-5px_hsl(var(--glow-primary)/0.6)]"
        >
          Get In Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
