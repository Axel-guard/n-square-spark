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
    className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.25)]"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6 }}
  >
    {/* Category badge */}
    <div className="absolute top-4 left-4 z-10">
      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/15 text-primary backdrop-blur-sm border border-primary/20">
        {category}
      </span>
    </div>

    {/* Image area */}
    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-5 space-y-3">
      <h3 className="font-heading font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
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
