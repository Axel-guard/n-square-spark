import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-card border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24 section-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        <p className="text-center text-section-dark-foreground/60 mb-12">
          Have a question or need a quote? Drop us a message.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {(["name", "email", "phone", "message"] as const).map((field) => (
            <div key={field}>
              {field === "message" ? (
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={inputClass(field)}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                  className={inputClass(field)}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                />
              )}
              {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
