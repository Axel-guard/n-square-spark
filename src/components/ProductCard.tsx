import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProductCard = ({ image, title, description, category }: ProductCardProps) => (
  <motion.div
    className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -4 }}
  >
    <div className="absolute top-4 left-4 z-10">
      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/15">
        {category}
      </span>
    </div>

    <div className="relative aspect-square overflow-hidden bg-background">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    <div className="p-5 space-y-3">
      <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="pt-2">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
        >
          Inquire Now
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProductCard;
