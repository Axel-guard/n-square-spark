import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="section-dark border-t border-border/10 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="N Square Electronics" className="h-8 w-8 rounded" />
            <span className="font-heading font-bold text-primary-foreground">
              N Square <span className="text-primary">Electronics</span>
            </span>
          </div>
          <p className="text-section-dark-foreground/50 text-sm leading-relaxed">
            Leading manufacturer of LED Lighting, Display Boards, MDVR Systems and Vehicle Monitoring Solutions.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-section-dark-foreground/50 hover:text-primary text-sm transition-colors">Home</Link>
            <Link to="/products" className="block text-section-dark-foreground/50 hover:text-primary text-sm transition-colors">Products</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-section-dark-foreground/50 text-sm">
            <p>Ground Floor, No 14, 19th Main</p>
            <p>Muneshwara Block, Bengaluru – 560026</p>
            <p>Phone: 8041011568</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10 mt-8 pt-8 text-center text-section-dark-foreground/40 text-sm">
        © {new Date().getFullYear()} N Square Electronics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
