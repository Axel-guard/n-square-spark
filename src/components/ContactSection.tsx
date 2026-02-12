import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Ground Floor, No 14, 19th Main,\nMuneshwara Block, Bengaluru – 560026" },
  { icon: Phone, label: "Phone", value: "8041011568" },
  { icon: Mail, label: "Email", value: "info@nsquareelectronics.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Valid 10-digit phone required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const fields = [
    { key: "name", type: "text", label: "Your Name" },
    { key: "email", type: "email", label: "Email Address" },
    { key: "phone", type: "text", label: "Phone Number" },
    { key: "message", type: "textarea", label: "Your Message" },
  ] as const;

  return (
    <section id="contact" className="py-24 bg-card">
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
            Have a question or need a quote? We'd love to hear from you.
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
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                className="flex items-start gap-4 bg-background border border-border rounded-xl p-5 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{c.label}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line mt-0.5">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background border border-border rounded-2xl p-8 space-y-5 shadow-sm"
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
                    className={`w-full px-4 pt-6 pb-3 rounded-xl bg-card border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none ${
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
                    className={`w-full px-4 pt-6 pb-3 rounded-xl bg-card border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 ${
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
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
