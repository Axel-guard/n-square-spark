import { motion } from "framer-motion";
import { ArrowRight, Bus, Car, Zap, Building2, GraduationCap, Factory, Lightbulb, Monitor, ShieldCheck, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import busLedLight from "@/assets/products/bus-led-light.jpg";
import bmsEv from "@/assets/products/bms-ev.png";
import micAssembly from "@/assets/products/mic-assembly.jpg";
import doorInterlock from "@/assets/products/door-interlock.jpg";
import homeAutomation from "@/assets/products/home-automation.webp";
import waterSoftener from "@/assets/products/water-softener.jpg";
import routeDisplay from "@/assets/products/route-display.jpg";
import busDestinationBoard from "@/assets/products/bus-destination-board.jpg";
import spotLightImg from "@/assets/products/spot-light-new.png";
import ledStripImg from "@/assets/products/led-strip-new.png";
import ledSignBoardImg from "@/assets/products/led-sign-board.png";
import ledDisplayBoardImg from "@/assets/products/led-display-board.png";
import mdvrImg from "@/assets/products/mdvr-new.png";
import monitorImg from "@/assets/products/monitor-new.png";
import dashcamImg from "@/assets/products/dashcam-new.png";
import bulletCameraImg from "@/assets/products/bullet-camera.png";

const automotiveProducts = [
  { image: busLedLight, title: "BUS LED Light", description: "High-brightness LED tail lights and indicator lights designed for buses and commercial vehicles with IP67 waterproof rating." },
  { image: bmsEv, title: "BMS for Electric Vehicle", description: "Advanced Battery Management System for EVs with real-time monitoring, cell balancing, and thermal management." },
  { image: micAssembly, title: "MIC Assembly for Bus", description: "Multi-tone public address and siren system with microphone assembly for buses, featuring horn, wail, and siren modes." },
];

const ledLightingProducts = [
  { image: spotLightImg, title: "Spot Light", description: "High-performance recessed LED spot light for commercial and industrial illumination with energy-efficient technology." },
  { image: ledStripImg, title: "Waterproof LED Strip Light", description: "Flexible waterproof LED strip rated IP65 for stunning indoor and outdoor lighting applications." },
  { image: ledSignBoardImg, title: "LED Sign Board", description: "Custom illuminated LED signage for businesses, vehicles, and commercial safety branding." },
];

const displayProducts = [
  { image: ledDisplayBoardImg, title: "LED Display Board", description: "High-brightness scrolling LED display boards for advertisements, route info, and public information systems." },
  { image: routeDisplay, title: "Electronic Display Board", description: "Programmable electronic message boards with remote control, GPS integration, and scheduling capabilities." },
  { image: busDestinationBoard, title: "Name Plate Display", description: "Premium illuminated name plates and destination boards for offices, hotels, and commercial vehicles." },
];

const surveillanceProducts = [
  { image: mdvrImg, title: "MDVR", description: "Mobile Digital Video Recorder with 4-channel support for comprehensive fleet monitoring and security." },
  { image: monitorImg, title: "Monitor", description: "7-inch high-resolution vehicle monitor with multiple input support for real-time camera feeds." },
  { image: dashcamImg, title: "Dashcam", description: "Advanced dual-lens dashcam with GPS tracking, night vision, and loop recording." },
  { image: bulletCameraImg, title: "Bullet Camera", description: "Heavy-duty IR bullet camera with night vision, weatherproof housing, and wide-angle lens for vehicle surveillance." },
];

const embeddedProducts = [
  { image: doorInterlock, title: "Inter Door Locking System", description: "Electromagnetic door interlock system for clean rooms ensuring only one door opens at a time, maintaining air pressure integrity." },
  { image: homeAutomation, title: "Home Automation (Lighting Solutions)", description: "Smart lighting control system with Wi-Fi connectivity, scheduling, and remote control for residential and commercial spaces." },
  { image: waterSoftener, title: "Water Softener Control System", description: "Programmable electronic control valve for water softeners with timer-based regeneration and service cycle management." },
  { image: routeDisplay, title: "Digital Route Display System", description: "LED scrolling destination display board for buses with remote programming, GPS integration, and multilingual support." },
];

const industries = [
  { icon: Bus, title: "Bus & Transport Operators", desc: "LED displays, surveillance, and PA systems for fleet operators." },
  { icon: Car, title: "Automotive OEM Manufacturers", desc: "Custom electronics and embedded solutions for vehicle OEMs." },
  { icon: Zap, title: "EV Manufacturers", desc: "BMS, charging controllers, and power electronics for EVs." },
  { icon: Building2, title: "IT & Corporate Campuses", desc: "Display boards, automation, and access control systems." },
  { icon: GraduationCap, title: "Educational Institutions", desc: "Digital signage, display boards, and smart classroom solutions." },
  { icon: Factory, title: "Industrial Units", desc: "LED lighting, clean room interlocks, and process automation." },
];

const galleryImages = [
  { src: routeDisplay, alt: "Bus LED Route Display Installation" },
  { src: busDestinationBoard, alt: "Colored Bus Destination Sign Board" },
  { src: busLedLight, alt: "Bus LED Tail Light Installation" },
  { src: doorInterlock, alt: "Clean Room Door Interlock System" },
];

interface SolutionCardProps {
  image: string;
  title: string;
  description: string;
}

const SolutionCard = ({ image, title, description }: SolutionCardProps) => (
  <motion.div
    className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -4 }}
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-background">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="p-5 space-y-3">
      <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
      <div className="pt-2">
        <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300">
          Inquire Now
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

interface SectionHeaderProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const SectionHeader = ({ icon: Icon, title, subtitle }: SectionHeaderProps) => (
  <motion.div className="flex items-center gap-3 mb-10" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="text-primary" size={24} />
    </div>
    <div>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
  </motion.div>
);

const Products = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">Product Catalog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Products</span> & Engineering Solutions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">End-to-end electronics solutions for automotive, embedded systems, industrial automation, and display technologies.</p>
          </motion.div>
        </div>
      </section>

      {/* Automotive Solutions */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <SectionHeader icon={ShieldCheck} title="Automotive Solutions" subtitle="Vehicle electronics, BMS, and transport systems" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {automotiveProducts.map((p, i) => <SolutionCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* LED Lighting */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader icon={Lightbulb} title="LED Lighting" subtitle="Energy-efficient lighting solutions for commercial and industrial use" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ledLightingProducts.map((p, i) => <SolutionCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* Display Systems */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <SectionHeader icon={Monitor} title="Display Systems" subtitle="Digital signage, route displays, and electronic boards" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {displayProducts.map((p, i) => <SolutionCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* Vehicle Surveillance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader icon={Camera} title="Vehicle Surveillance" subtitle="MDVR, cameras, and monitoring systems for fleet security" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {surveillanceProducts.map((p, i) => <SolutionCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* Embedded & Automation Solutions */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <SectionHeader icon={Monitor} title="Embedded & Automation Solutions" subtitle="Smart systems for industrial and residential applications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {embeddedProducts.map((p, i) => <SolutionCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">Our Reach</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Industries We <span className="gradient-text">Serve</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -3 }}>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ind.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">Our Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Project <span className="gradient-text">Gallery</span></h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Real-world installations and deployments across India.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-muted" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end p-4">
                  <p className="text-card font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Products;
