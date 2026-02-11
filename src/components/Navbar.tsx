import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-dark border-b border-border/10 backdrop-blur-md bg-section-dark/90">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="N Square Electronics" className="h-9 w-9 rounded" />
          <span className="font-heading text-lg font-bold text-primary-foreground">
            N Square <span className="text-primary">Electronics</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.path.startsWith("/#") ? (
              <Link
                key={l.label}
                to="/"
                onClick={() => handleNavClick(l.path)}
                className="text-section-dark-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "text-primary"
                    : "text-section-dark-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-section-dark-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden section-dark border-t border-border/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path.startsWith("/#") ? "/" : l.path}
              onClick={() => handleNavClick(l.path)}
              className="block py-3 text-section-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
