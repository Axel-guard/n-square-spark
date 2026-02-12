import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ledDisplay from "@/assets/products/led-display.png";
import mdvr from "@/assets/products/mdvr.png";
import dashcam from "@/assets/products/dashcam.png";
import spotLight from "@/assets/products/spot-light.png";

const featured = [
  { image: ledDisplay, title: "LED Display Board", category: "Display Systems" },
  { image: spotLight, title: "Spot Light", category: "LED Lighting" },
  { image: mdvr, title: "MDVR System", category: "Vehicle Surveillance" },
  { image: dashcam, title: "Dashcam", category: "Vehicle Surveillance" },
];

const ProductsPreview = () => (
  <section className="py-24 section-light overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="gradient-text">Products</span>
          </h2>
        </div>
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          Explore All Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.title}
            className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/15">
                {p.category}
              </span>
            </div>
            <div className="aspect-square bg-background overflow-hidden relative">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsPreview;
