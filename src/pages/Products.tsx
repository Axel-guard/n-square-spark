import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Monitor, ShieldCheck, LayoutGrid } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

import spotLight from "@/assets/products/spot-light.png";
import ledStrip from "@/assets/products/led-strip.png";
import signBoard from "@/assets/products/sign-board.png";
import ledDisplay from "@/assets/products/led-display.png";
import mdvr from "@/assets/products/mdvr.png";
import monitor from "@/assets/products/monitor.png";
import dashcam from "@/assets/products/dashcam.png";
import reverseCamera from "@/assets/products/reverse-camera.png";

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "LED Lighting", icon: Lightbulb },
  { label: "Display Systems", icon: Monitor },
  { label: "Vehicle Surveillance", icon: ShieldCheck },
] as const;

const products = [
  { category: "LED Lighting", image: spotLight, title: "Spot Light", description: "High-performance LED spot light for commercial and industrial illumination with energy-efficient technology." },
  { category: "LED Lighting", image: ledStrip, title: "Waterproof LED Strip Light", description: "Flexible waterproof LED strip rated IP65 for stunning indoor and outdoor lighting applications." },
  { category: "LED Lighting", image: signBoard, title: "LED Sign Board", description: "Custom illuminated LED signage for businesses, vehicles, and commercial branding." },
  { category: "Display Systems", image: ledDisplay, title: "LED Display Board", description: "High-brightness scrolling LED display boards for advertisements and public information systems." },
  { category: "Display Systems", image: ledDisplay, title: "Electronic Display Board", description: "Programmable electronic message boards with remote control and scheduling capabilities." },
  { category: "Display Systems", image: signBoard, title: "Name Plate Display", description: "Premium illuminated name plates for offices, hotels, and commercial establishments." },
  { category: "Vehicle Surveillance", image: mdvr, title: "MDVR", description: "Mobile Digital Video Recorder with 4-channel support for comprehensive fleet monitoring and security." },
  { category: "Vehicle Surveillance", image: monitor, title: "Monitor", description: "7-inch high-resolution vehicle monitor with multiple input support for real-time camera feeds." },
  { category: "Vehicle Surveillance", image: dashcam, title: "Dashcam", description: "Advanced dual-lens dashcam with GPS tracking, night vision, and loop recording." },
  { category: "Vehicle Surveillance", image: reverseCamera, title: "Reverse Camera", description: "170° wide-angle IR reverse camera with night vision for safe parking and maneuvering." },
];

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero banner */}
        <section className="relative py-20 section-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/8 blur-[100px]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                Product Catalog
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="text-section-dark-foreground/50 text-lg max-w-xl mx-auto">
                Explore our range of LED lighting, display systems, and vehicle surveillance solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category tabs + grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Category filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categories.map((cat) => {
                const isActive = active === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActive(cat.label)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    <cat.icon size={16} />
                    {cat.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Count */}
            <p className="text-muted-foreground text-sm mb-8">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
              {active !== "All" && <> in <span className="text-primary font-semibold">{active}</span></>}
            </p>

            {/* Product grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((p, i) => (
                  <ProductCard
                    key={`${p.title}-${i}`}
                    image={p.image}
                    title={p.title}
                    description={p.description}
                    category={p.category}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
