import { motion } from "framer-motion";
import { Car, Cpu, Monitor, Wrench } from "lucide-react";

const capabilities = [
  {
    icon: Car,
    title: "Automotive Electronics Manufacturing",
    desc: "Advanced vehicle surveillance, dashcam systems, MDVR, and monitoring solutions for fleet and transport sectors.",
  },
  {
    icon: Cpu,
    title: "Embedded System Design",
    desc: "Custom embedded hardware and firmware engineering for industrial automation, IoT, and EV applications.",
  },
  {
    icon: Monitor,
    title: "Industrial LED Display Solutions",
    desc: "High-performance LED display boards, sign boards, and strip lighting for commercial and industrial environments.",
  },
  {
    icon: Wrench,
    title: "Custom Engineering & Integration",
    desc: "End-to-end product development from prototyping to manufacturing with seamless system integration.",
  },
];

const OurCapabilities = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          What We Do
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Our <span className="gradient-text">Capabilities</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            className="group bg-card border border-border rounded-2xl p-7 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
              <c.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurCapabilities;
