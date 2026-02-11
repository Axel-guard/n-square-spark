import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => (
  <motion.div
    className="bg-card border border-border rounded-xl overflow-hidden hover:glow-primary transition-shadow duration-300 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="aspect-[4/3] overflow-hidden bg-muted">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-semibold text-lg mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <a
        href="#contact"
        className="inline-flex items-center px-5 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
      >
        Inquire Now
      </a>
    </div>
  </motion.div>
);

export default ProductCard;
