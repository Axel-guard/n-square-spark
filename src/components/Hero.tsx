import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

import ledDisplay from "@/assets/products/led-display.png";
import signBoard from "@/assets/products/sign-board.png";
import ledStrip from "@/assets/products/led-strip.png";
import spotLight from "@/assets/products/spot-light.png";

const floatingImages = [
  { src: ledDisplay, alt: "LED Display Board", className: "w-44 h-44 top-0 right-4", delay: 0 },
  { src: signBoard, alt: "LED Sign Board", className: "w-40 h-40 top-8 left-0", delay: 0.2 },
  { src: ledStrip, alt: "LED Strip Light", className: "w-44 h-44 bottom-8 right-0", delay: 0.4 },
  { src: spotLight, alt: "Spot Light", className: "w-36 h-36 bottom-0 left-12", delay: 0.6 },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle abstract shapes */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap size={14} />
              Trusted Since 2017
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
              Powering Innovation
              <br />
              with{" "}
              <span className="gradient-text">Advanced Electronics</span>
              <br />
              Solutions
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              LED Lighting · Display Boards · MDVR Systems · Dashcams · Vehicle Monitoring
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right - Product Collage */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-primary/8 blur-[80px]" />
            </div>

            {floatingImages.map((img, i) => (
              <motion.div
                key={img.alt}
                className={`absolute ${img.className}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + img.delay }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="bg-card rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-500 border border-border"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-contain" loading="lazy" />
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
