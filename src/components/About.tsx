import { motion } from "framer-motion";
import { Clock, ShieldCheck, Briefcase, Globe, Wrench, Cpu, FlaskConical, Cog } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "Pan India", label: "Client Network" },
  { icon: ShieldCheck, value: "100%", label: "Quality Assured" },
];

const capabilities = [
  "Design & Development",
  "Embedded Systems Engineering",
  "Prototyping & Testing",
  "Manufacturing & Integration",
];

const About = () => (
  <section id="about" className="py-24 bg-card overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            About <span className="gradient-text">N Square Electronics</span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground font-medium">– House of Solutions</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Established in 2012 in Bengaluru, N Square Electronics is a leading embedded systems and automotive electronics manufacturing company.
            </p>
            <p>We provide end-to-end engineering solutions including:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <p>
              Our team has 15+ years of experience in automotive electronics, industrial display systems, EV solutions, and smart automation technologies.
            </p>
          </div>
        </motion.div>

        {/* Right - Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-background border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
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
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
