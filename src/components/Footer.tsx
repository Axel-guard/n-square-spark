import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.png";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="N Square Electronics Logo" className="h-9 w-9 md:h-[45px] md:w-[45px] rounded object-contain" />
            <span className="font-heading font-bold text-foreground">
              N Square <span className="text-primary">Electronics</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Leading manufacturer of LED Lighting, Display Boards, MDVR Systems and Vehicle Monitoring Solutions.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link>
            <Link to="/products" className="block text-muted-foreground hover:text-primary text-sm transition-colors">Products</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>#14, 19th Main Road, Muneswara Block</p>
            <p>Bengaluru – 560026</p>
            <p>+91 8548867793</p>
            <p>nsquareelectronics24@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
        © 2026 Axel-Guard. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
