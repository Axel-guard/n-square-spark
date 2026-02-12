import { motion } from "framer-motion";
import { Cpu, Shield, Settings, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Advanced Technology", desc: "Cutting-edge electronics powered by the latest innovations in LED and surveillance tech.", color: "primary" },
  { icon: Shield, title: "Durable Products", desc: "Built to last with industrial-grade materials and rigorous quality testing standards.", color: "secondary" },
  { icon: Settings, title: "Custom Manufacturing", desc: "Tailored solutions designed to meet your specific commercial and industrial requirements.", color: "accent" },
  { icon: HeadphonesIcon, title: "Reliable Support", desc: "Dedicated technical assistance and after-sales service for all our products.", color: "primary" },
];

const WhyChooseUs = () => (
  <section className="py-24 section-dark relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Why Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
          Why Choose <span className="gradient-text">N Square</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="group glass-card rounded-2xl p-7 text-center hover:border-primary/30 transition-all duration-500 hover:glow-primary cursor-default"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <r.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3 text-primary-foreground">{r.title}</h3>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
