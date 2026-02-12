import { motion } from "framer-motion";
import { Building2, User, MapPin, Phone, FileText } from "lucide-react";

const details = [
  { icon: Building2, label: "Established", value: "21st July, 2017" },
  { icon: User, label: "CEO", value: "Narasimhamurthy Nayan" },
  { icon: FileText, label: "GST", value: "29AGJPN3838Q1ZG" },
  { icon: Phone, label: "Phone", value: "8041011568" },
  { icon: MapPin, label: "Registered Address", value: "Ground Floor, No 14, 19th Main,\nMuneshwara Block, Bengaluru – 560026,\nKarnataka, India" },
];

const CompanyDetails = () => (
  <section className="py-24 section-dark relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Corporate Info
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
          Company <span className="gradient-text">Details</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {details.map((d, i) => (
          <motion.div
            key={d.label}
            className={`glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 hover:glow-primary transition-all duration-500 ${
              i === details.length - 1 && details.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <d.icon className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{d.label}</p>
              <p className="font-heading font-bold text-primary-foreground whitespace-pre-line leading-relaxed">{d.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyDetails;
