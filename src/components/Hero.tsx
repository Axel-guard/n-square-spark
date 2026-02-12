import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Abstract blurred shapes */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8">
            <Zap size={14} />
            Trusted Since 2017
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-primary-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Powering Innovation with
          <br />
          <span className="gradient-text">Advanced Electronics</span>
          <br />
          Solutions
        </motion.h1>

        <motion.p
          className="text-section-dark-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          LED Lighting · Display Boards · MDVR Systems · Dashcams · Vehicle Monitoring
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link
            to="/products"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--glow-primary)/0.6)]"
          >
            View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-primary-foreground font-semibold hover:bg-primary/10 transition-all duration-300 border border-primary/20 hover:border-primary/40"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
