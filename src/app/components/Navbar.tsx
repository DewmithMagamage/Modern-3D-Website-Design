import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CalendarCheck, X, Menu } from "lucide-react";
import { LOGO_IMAGE } from "@/app/assets/images";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Rates", href: "#rates" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl border-b border-black/8 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("#hero")}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LOGO_IMAGE}
              alt="Vila The Name"
              className={`transition-all duration-700 ${scrolled ? "h-9 sm:h-10" : "h-11 sm:h-14"} w-auto object-contain`}
            />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-xs tracking-widest uppercase font-light text-[#4a4a4a] hover:text-[#b8935a] transition-colors duration-300 group"
                style={{ fontFamily: "'Cinzel', serif" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b8935a] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#b8935a] text-[#b8935a] text-xs tracking-widest uppercase hover:bg-[#b8935a] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            Book Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden w-10 h-10 rounded-full border border-black/12 flex items-center justify-center text-[#4a4a4a] hover:border-[#b8935a]/50 hover:text-[#b8935a] transition-all duration-300 backdrop-blur-sm bg-black/5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 xl:hidden overflow-y-auto py-20"
        style={{
          background: "rgba(250,250,250,0.97)",
          backdropFilter: "blur(24px)",
          pointerEvents: menuOpen ? "all" : "none",
        }}
        initial={{ opacity: 0, clipPath: "circle(0% at 95% 4%)" }}
        animate={
          menuOpen
            ? { opacity: 1, clipPath: "circle(150% at 95% 4%)" }
            : { opacity: 0, clipPath: "circle(0% at 95% 4%)" }
        }
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {navLinks.map((link, i) => (
          <motion.button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-2xl sm:text-3xl font-light tracking-widest uppercase text-[#1a1a1a] hover:text-[#b8935a] transition-colors duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.05 * i + 0.2 }}
          >
            {link.label}
          </motion.button>
        ))}
        <motion.button
          onClick={() => scrollTo("#contact")}
          className="mt-4 flex items-center gap-2 px-10 py-3.5 rounded-full border border-[#b8935a] text-[#b8935a] text-sm tracking-widest uppercase hover:bg-[#b8935a] hover:text-white transition-all duration-300"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <CalendarCheck className="w-4 h-4" />
          Book Now
        </motion.button>
      </motion.div>
    </>
  );
}
