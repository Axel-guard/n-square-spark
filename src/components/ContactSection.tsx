import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    title: "Registered Office",
    address: "#14, 19th Main Road, Muneswara Block,\nNear Ganesha Temple,\nBengaluru – 560026",
  },
  {
    title: "Work Office",
    address: "#39/39, 1st Cross,\nMaruthi Nagar Road, Sonnenahalli,\nBengaluru – 560056",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", requirement: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get("product");
    if (product) {
      setForm((prev) => ({ ...prev, requirement: `Enquiry about: ${product}` }));
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.search]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Valid 10-digit phone required";
    if (!form.requirement.trim()) e.requirement = "Requirement is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast({ title: "Enquiry Submitted!", description: "We'll get back to you shortly." });
    setForm({ name: "", company: "", phone: "", email: "", requirement: "" });
  };

  const fields = [
    { key: "name", type: "text", label: "Your Name" },
    { key: "company", type: "text", label: "Company Name" },
    { key: "phone", type: "text", label: "Phone Number" },
    { key: "email", type: "email", label: "Email Address" },
    { key: "requirement", type: "textarea", label: "Your Requirement" },
  ] as const;

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? Let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left - Info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {offices.map((office, i) => (
              <div key={office.title} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{office.title}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line mt-0.5">{office.address}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Email</p>
                <p className="text-muted-foreground text-sm mt-0.5">nsquareelectronics24@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Contact</p>
                <p className="text-muted-foreground text-sm mt-0.5">+91 8548867793</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 space-y-5 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {fields.map((field) => (
              <div key={field.key} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === field.key || form[field.key]
                      ? "top-1.5 text-[10px] text-primary font-semibold"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    className={`w-full px-4 pt-6 pb-3 rounded-xl bg-background border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none ${
                      errors[field.key] ? "border-destructive" : "border-border"
                    }`}
                    value={form[field.key]}
                    onFocus={() => setFocused(field.key)}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  />
                ) : (
                  <input
                    type={field.type}
                    className={`w-full px-4 pt-6 pb-3 rounded-xl bg-background border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 ${
                      errors[field.key] ? "border-destructive" : "border-border"
                    }`}
                    value={form[field.key]}
                    onFocus={() => setFocused(field.key)}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  />
                )}
                {errors[field.key] && (
                  <motion.p
                    className="text-destructive text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors[field.key]}
                  </motion.p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit Enquiry <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
