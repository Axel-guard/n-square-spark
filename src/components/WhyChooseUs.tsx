import { motion } from "framer-motion";
import { Award, Truck, Headphones, Lightbulb } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Quality", desc: "Products manufactured with strict quality control and testing." },
  { icon: Truck, title: "On-Time Delivery", desc: "Reliable logistics ensuring timely delivery across India." },
  { icon: Headphones, title: "Dedicated Support", desc: "Expert technical support and after-sales service." },
  { icon: Lightbulb, title: "Innovation First", desc: "Constantly evolving with the latest technology trends." },
];

const WhyChooseUs = () => (
  <section className="py-24 section-dark">
    <div className="container mx-auto px-4">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-primary-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Choose <span className="text-primary">Us</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mx-auto mb-4">
              <r.icon className="text-secondary" size={26} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-primary-foreground">{r.title}</h3>
            <p className="text-section-dark-foreground/60 text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
