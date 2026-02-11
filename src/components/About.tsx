import { motion } from "framer-motion";
import { Clock, ShieldCheck, Settings, MapPin } from "lucide-react";

const features = [
  { icon: Clock, title: "7+ Years Experience", desc: "Delivering quality since 2017" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "ISO-level quality standards" },
  { icon: Settings, title: "Custom Manufacturing", desc: "Tailored to your needs" },
  { icon: MapPin, title: "Pan India Supply", desc: "Nationwide delivery network" },
];

const About = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
          About <span className="text-primary">N Square Electronics</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          N Square Electronics is a leading manufacturer of LED Lighting, LED Display Boards,
          MDVR systems, Dashcams and Vehicle Monitoring Solutions based in Bengaluru, India.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-card border border-border rounded-xl p-6 text-center hover:glow-primary transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-card-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
