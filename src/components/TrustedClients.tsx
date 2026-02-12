import { motion } from "framer-motion";

import infosys from "@/assets/clients/infosys.jpeg";
import toyota from "@/assets/clients/toyota.jpeg";
import samsung from "@/assets/clients/samsung.jpeg";
import volvo from "@/assets/clients/volvo.jpeg";
import flixbus from "@/assets/clients/flixbus.jpeg";
import intercity from "@/assets/clients/intercity.jpeg";
import tcs from "@/assets/clients/tcs.jpeg";
import tataElectronics from "@/assets/clients/tata-electronics.jpeg";
import honda from "@/assets/clients/honda.jpeg";
import techMahindra from "@/assets/clients/tech-mahindra.jpeg";

const clients = [
  { name: "Infosys", logo: infosys },
  { name: "Toyota", logo: toyota },
  { name: "Samsung", logo: samsung },
  { name: "Volvo", logo: volvo },
  { name: "FlixBus", logo: flixbus },
  { name: "IntrCity SmartBus", logo: intercity },
  { name: "TCS", logo: tcs },
  { name: "Tata Electronics", logo: tataElectronics },
  { name: "Honda", logo: honda },
  { name: "Tech Mahindra", logo: techMahindra },
];

const TrustedClients = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Our Clients
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Trusted By <span className="gradient-text">Industry Leaders</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Partnering with leading enterprises across automotive, IT, and transportation sectors.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            className="bg-background border border-border rounded-2xl p-6 flex items-center justify-center aspect-[4/3] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedClients;
