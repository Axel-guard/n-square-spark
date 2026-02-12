import { motion } from "framer-motion";
import { Cpu, Shield, Settings, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Advanced Technology", desc: "Cutting-edge electronics powered by the latest innovations in LED and surveillance tech." },
  { icon: Shield, title: "Durable Products", desc: "Built to last with industrial-grade materials and rigorous quality testing standards." },
  { icon: Settings, title: "Custom Manufacturing", desc: "Tailored solutions designed to meet your specific commercial and industrial requirements." },
  { icon: HeadphonesIcon, title: "Reliable Support", desc: "Dedicated technical assistance and after-sales service for all our products." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Why Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Why Choose <span className="gradient-text">N Square</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="group bg-card border border-border rounded-2xl p-7 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
              <r.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
