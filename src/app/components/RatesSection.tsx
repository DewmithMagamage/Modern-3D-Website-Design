import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, CalendarCheck, Star, Sparkles, Info } from "lucide-react";

const packages = [
  {
    id: "classic",
    name: "Classic Retreat",
    tagline: "The essential villa experience",
    price: "2,200",
    period: "per night",
    minNights: 3,
    highlight: false,
    badge: null,
    includes: [
      "Exclusive use of entire villa",
      "5 luxury suites",
      "Daily breakfast for all guests",
      "Infinity pool & spa access",
      "Dedicated villa host",
      "Welcome amenities",
      "High-speed WiFi",
      "Airport transfer (one way)",
    ],
  },
  {
    id: "signature",
    name: "Signature Stay",
    tagline: "Our most beloved package",
    price: "3,500",
    period: "per night",
    minNights: 4,
    highlight: true,
    badge: "Most Popular",
    includes: [
      "Everything in Classic Retreat",
      "Full-board dining (3 meals/day)",
      "Private chef & custom menus",
      "Daily wellness spa session",
      "Airport transfers (both ways)",
      "Curated excursion per stay",
      "Sunrise yoga sessions",
      "Evening cocktail service",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate Escape",
    tagline: "The pinnacle of luxury",
    price: "5,200",
    period: "per night",
    minNights: 5,
    highlight: false,
    badge: "All-Inclusive",
    includes: [
      "Everything in Signature Stay",
      "Private butler 24/7",
      "Unlimited spa treatments",
      "Private cinema evenings",
      "All premium beverages",
      "Personal photographer session",
      "Helicopter transfer option",
      "Bespoke cultural experiences",
    ],
  },
];

export function RatesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rates" className="relative bg-[#faf7f2] py-20 sm:py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[360px] h-[360px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Investment in Bliss
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Rates & <em className="text-[#b8935a]">Packages</em>
          </h2>
          <p className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            All packages include exclusive use of the entire villa. Prices are quoted in USD and subject to seasonal variation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                pkg.highlight
                  ? "bg-gradient-to-b from-[#f3e4cf] via-[#f8efe2] to-[#fdf8f0] border border-[#e0c28f] shadow-[0_28px_60px_rgba(184,147,90,0.18)]"
                  : "bg-white border border-[#e6e0d4] hover:border-[#d3c4a2]"
              } backdrop-blur-xl`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Top shimmer */}
              <div
                className={`absolute top-0 left-0 right-0 h-px ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-transparent via-[#b8935a]/70 to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#e6ddcc] to-transparent"
                }`}
              />

              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-5 right-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase ${
                      pkg.highlight
                        ? "bg-[#c9a96e] text-black"
                        : "bg-white/10 border border-white/20 text-white/70"
                    }`}
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-7 sm:p-8">
                {/* Star icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    pkg.highlight
                      ? "bg-[#b8935a]/12 border border-[#b8935a]/40"
                      : "bg-[#f5eee2] border border-[#e4d8c4]"
                  }`}
                >
                  {pkg.highlight ? (
                    <Star className="w-5 h-5 text-[#b8935a] fill-[#b8935a]" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-[#b8935a]/70" strokeWidth={1.5} />
                  )}
                </div>

                {/* Name */}
                <h3
                  className={`text-lg sm:text-xl mb-1 ${pkg.highlight ? "text-[#b8935a]" : "text-[#1a1a1a]"}`}
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-[#777777] text-xs mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#efe4d3]">
                  <span
                    className={`text-4xl sm:text-5xl ${
                      pkg.highlight ? "text-[#b8935a]" : "text-[#1a1a1a]"
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    ${pkg.price}
                  </span>
                  <span
                    className="text-[#8b8b8b] text-sm ml-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    / night
                  </span>
                  <p
                    className="text-[#a0a0a0] text-xs mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Minimum {pkg.minNights} nights
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          pkg.highlight ? "bg-[#c9a96e]/20" : "bg-[#f3ebdd]"
                        }`}
                      >
                        <Check
                          className={`w-2.5 h-2.5 ${
                            pkg.highlight ? "text-[#b8935a]" : "text-[#b8935a]/70"
                          }`}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className="text-[#4a4a4a] text-xs leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full py-3.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "bg-[#b8935a] text-white hover:bg-[#a78245] shadow-[0_18px_40px_rgba(184,147,90,0.45)]"
                      : "border border-[#d3c4a2] text-[#7b6641] hover:border-[#b8935a] hover:text-[#b8935a] bg-white hover:bg-[#f9f3e7]"
                  }`}
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Reserve This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="flex items-start gap-3 rounded-2xl bg-white border border-[#e2d7c4] p-4 sm:p-5 max-w-2xl mx-auto shadow-[0_18px_45px_rgba(0,0,0,0.04)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Info className="w-4 h-4 text-[#b8935a]/80 mt-0.5 shrink-0" />
          <p
            className="text-[#6b6b6b] text-xs leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            All rates are per villa (not per room) and include exclusive use of the entire property.
            Taxes and service charge of 22% apply. Custom packages, extended stays, and special
            occasions are available on request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
