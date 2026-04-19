import { motion } from "motion/react";
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle, ChevronUp } from "lucide-react";
import { LOGO_IMAGE } from "@/app/assets/images";
import { WHATSAPP_BUSINESS_NUMBER } from "@/app/config";

const socialLinks = [
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", Icon: Facebook, href: "https://facebook.com" },
  { label: "WhatsApp", Icon: MessageCircle, href: `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}` },
];

const contactInfo = [
  { label: "Tropical Highlands, Sri Lanka", Icon: MapPin },
  { label: "stay@vilaTheName.com", Icon: Mail },
  { label: "+94 77 000 0000", Icon: Phone },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#f5f5f5] border-t border-black/8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #b8935a60, transparent)" }} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-[#b8935a]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <motion.div className="mb-5" whileHover={{ scale: 1.02 }}>
              <img src={LOGO_IMAGE} alt="Vila The Name" className="h-20 sm:h-24 w-auto object-contain" />
            </motion.div>
            <p className="text-[#4a4a4a] text-sm leading-relaxed max-w-xs mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              An exclusive private villa retreat where luxury meets nature in perfect harmony.
              Where serenity truly finds its name.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/12 bg-black/4 flex items-center justify-center text-[#4a4a4a] hover:border-[#b8935a]/60 hover:text-[#b8935a] hover:bg-[#b8935a]/10 transition-all duration-300"
                  title={label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#b8935a] text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Cinzel', serif" }}>
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#4a4a4a] text-sm hover:text-[#b8935a] transition-colors duration-300 text-left"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[#b8935a] text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Cinzel', serif" }}>
              Contact
            </p>
            <ul className="space-y-4">
              {contactInfo.map(({ label, Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-black/5 border border-black/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#b8935a]/70" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#4a4a4a] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Book CTA */}
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#b8935a]/10 border border-[#b8935a]/35 text-[#b8935a] text-xs tracking-widest uppercase hover:bg-[#b8935a] hover:text-white hover:border-[#b8935a] transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Stay
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a4a4a]/60 text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Vila The Name. All rights reserved.
          </p>
          <p className="text-[#b8935a]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            Where Serenity Finds Its Name
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((t) => (
              <span
                key={t}
                className="text-[#4a4a4a]/50 text-xs hover:text-[#4a4a4a] cursor-pointer transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 rounded-full border border-[#b8935a]/45 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#b8935a] z-40 hover:bg-[#b8935a] hover:text-white hover:border-[#b8935a] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Back to top"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
}
