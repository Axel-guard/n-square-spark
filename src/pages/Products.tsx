import { useState } from "react";
import { motion } from "framer-motion";
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

const categories = ["All", "LED Lighting", "Display Systems", "Vehicle Surveillance"] as const;

const products = [
  { category: "LED Lighting", image: spotLight, title: "Spot Light", description: "High-performance LED spot light for commercial and industrial use." },
  { category: "LED Lighting", image: ledStrip, title: "Waterproof LED Strip Light", description: "Flexible waterproof LED strip for indoor and outdoor applications." },
  { category: "LED Lighting", image: signBoard, title: "LED Sign Board", description: "Custom illuminated signage for businesses and vehicles." },
  { category: "Display Systems", image: ledDisplay, title: "LED Display Board", description: "Bright scrolling LED displays for advertisements and information." },
  { category: "Display Systems", image: ledDisplay, title: "Electronic Display Board", description: "Programmable electronic boards for dynamic messaging." },
  { category: "Display Systems", image: signBoard, title: "Name Plate Display", description: "Illuminated name plates for offices and commercial spaces." },
  { category: "Vehicle Surveillance", image: mdvr, title: "MDVR", description: "Mobile Digital Video Recorder for fleet management and security." },
  { category: "Vehicle Surveillance", image: monitor, title: "Monitor", description: "High-resolution vehicle monitor for real-time camera feeds." },
  { category: "Vehicle Surveillance", image: dashcam, title: "Dashcam", description: "Advanced dashcam with GPS and night vision capabilities." },
  { category: "Vehicle Surveillance", image: reverseCamera, title: "Reverse Camera", description: "Wide-angle reverse camera for safe parking and reversing." },
];

const Products = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.h1
              className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our <span className="text-primary">Products</span>
            </motion.h1>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Explore our range of LED lighting, display systems, and vehicle surveillance solutions.
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={`${p.title}-${i}`} image={p.image} title={p.title} description={p.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
