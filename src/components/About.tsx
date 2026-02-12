import { motion } from "framer-motion";
import { Clock, ShieldCheck, Briefcase, Globe } from "lucide-react";

import ledDisplay from "@/assets/products/led-display.png";
import mdvr from "@/assets/products/mdvr.png";

const stats = [
  { icon: Clock, value: "7+", label: "Years Experience" },
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "Pan India", label: "Client Network" },
  { icon: ShieldCheck, value: "100%", label: "Quality Assured" },
];

const About = () => (
  <section className="py-24 bg-card overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-background rounded-2xl p-6 overflow-hidden border border-border shadow-sm">
                <img src={ledDisplay} alt="LED Display Board" className="w-full h-48 object-contain" loading="lazy" />
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                <p className="font-heading text-3xl font-bold text-primary">2017</p>
                <p className="text-muted-foreground text-sm mt-1">Established</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                <p className="font-heading text-3xl font-bold gradient-text">500+</p>
                <p className="text-muted-foreground text-sm mt-1">Projects</p>
              </div>
              <div className="bg-background rounded-2xl p-6 overflow-hidden border border-border shadow-sm">
                <img src={mdvr} alt="MDVR System" className="w-full h-48 object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            About <span className="gradient-text">N Square Electronics</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              N Square Electronics, established in 2017, is a Bengaluru-based electronics manufacturing company specializing in LED Lighting Solutions, Electronic Display Systems, and Vehicle Surveillance Technology.
            </p>
            <p>
              We design and manufacture high-performance Waterproof LED Strip Lights, LED Display Boards, Sign Boards, MDVR systems, Dashcams, and Vehicle Monitoring Solutions.
            </p>
            <p>
              Our focus is on durability, innovation, and reliable technology for commercial, transportation, and industrial sectors.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="text-primary" size={22} />
            </div>
            <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
