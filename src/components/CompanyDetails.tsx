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
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Corporate Info
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Company <span className="gradient-text">Details</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {details.map((d, i) => (
          <motion.div
            key={d.label}
            className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <d.icon className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{d.label}</p>
              <p className="font-heading font-bold text-foreground whitespace-pre-line leading-relaxed">{d.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyDetails;
