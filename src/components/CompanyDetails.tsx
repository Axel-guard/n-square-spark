import { motion } from "framer-motion";
import { Building2, User, MapPin, Phone, FileText } from "lucide-react";

const details = [
  { icon: Building2, label: "Established", value: "21st July, 2017" },
  { icon: User, label: "CEO", value: "Narasimhamurthy Nayan" },
  { icon: FileText, label: "GST", value: "29AGJPN3838Q1ZG" },
  { icon: Phone, label: "Phone", value: "8041011568" },
];

const CompanyDetails = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Company <span className="text-primary">Details</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{d.label}</p>
                <p className="font-semibold text-card-foreground">{d.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-start gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
            <MapPin className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Registered Address</p>
            <p className="font-semibold text-card-foreground">
              Ground Floor, No 14, 19th Main,
              <br />
              Muneshwara Block, Bengaluru – 560026,
              <br />
              Karnataka, India
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyDetails;
