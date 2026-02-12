import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

import ledDisplay from "@/assets/products/led-display.png";
import signBoard from "@/assets/products/sign-board.png";
import ledStrip from "@/assets/products/led-strip.png";
import spotLight from "@/assets/products/spot-light.png";

const floatingImages = [
  { src: ledDisplay, alt: "LED Display Board", className: "w-48 h-48 top-0 right-0 z-20", delay: 0 },
  { src: signBoard, alt: "LED Sign Board", className: "w-40 h-40 top-4 left-0 z-10", delay: 0.2 },
  { src: ledStrip, alt: "LED Strip Light", className: "w-44 h-44 bottom-4 right-4 z-10", delay: 0.4 },
  { src: spotLight, alt: "Spot Light", className: "w-36 h-36 bottom-0 left-8 z-20", delay: 0.6 },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Abstract blurred shapes */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8">
              <Zap size={14} />
              Trusted Since 2017
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-primary-foreground">
              Powering Innovation
              <br />
              with{" "}
              <span className="gradient-text">Advanced Electronics</span>
              <br />
              Solutions
            </h1>

            <p className="text-section-dark-foreground/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              LED Lighting · Display Boards · MDVR Systems · Dashcams · Vehicle Monitoring
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </motion.div>

          {/* Right side - Product Image Collage */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Glow behind images */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-primary/15 blur-[80px]" />
            </div>

            {floatingImages.map((img, i) => (
              <motion.div
                key={img.alt}
                className={`absolute ${img.className}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + img.delay }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="glass-card rounded-2xl p-4 hover:glow-primary transition-shadow duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
