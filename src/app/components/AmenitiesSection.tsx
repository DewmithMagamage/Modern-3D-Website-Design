import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Waves,
  BedDouble,
  ChefHat,
  Leaf,
  Car,
  Sunrise,
  TreePine,
  Film,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

const amenities = [
  {
    Icon: Waves,
    title: "Infinity Pool",
    desc: "Two infinity pools with waterfall features and panoramic forest views",
  },
  {
    Icon: BedDouble,
    title: "5 Suites",
    desc: "Individually designed suites with king beds, ensuite baths & private balconies",
  },
  {
    Icon: ChefHat,
    title: "Private Chef",
    desc: "Bespoke menus crafted daily with fresh local produce and global techniques",
  },
  {
    Icon: Car,
    title: "Chauffeur",
    desc: "24/7 chauffeur service for seamless transfers and local exploration",
  },
  {
    Icon: Sunrise,
    title: "Sunrise Yoga",
    desc: "Daily sunrise yoga sessions on the panoramic terrace",
  },
  {
    Icon: TreePine,
    title: "Nature Trails",
    desc: "Guided nature walks through the surrounding tropical forest and hills",
  },
  {
    Icon: ShieldCheck,
    title: "Full Privacy",
    desc: "Exclusive use only — the entire villa is yours, no shared spaces",
  },
];

function AmenityCard({ amenity, index }: { amenity: typeof amenities[0]; index: number }) {
  const { Icon } = amenity;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl border border-black/8 bg-black/[0.02] backdrop-blur-xl p-6 sm:p-8 overflow-hidden hover:border-[#b8935a]/35 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      style={{
        boxShadow: "inset 0 1px 0 rgba(0,0,0,0.03)",
      }}
    >
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/12 to-transparent" />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#b8935a]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 border-r border-t border-[#b8935a]/60 transition-all duration-500 rounded-tr-2xl" />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center mb-5 group-hover:border-[#b8935a]/40 group-hover:bg-[#b8935a]/10 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#4a4a4a] group-hover:text-[#b8935a] transition-colors duration-300" strokeWidth={1.5} />
        </div>
        <h3
          className="text-[#1a1a1a] mb-3 group-hover:text-[#b8935a] transition-colors duration-300"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {amenity.title}
        </h3>
        <p
          className="text-[#4a4a4a] text-sm leading-relaxed group-hover:text-[#1a1a1a] transition-colors duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {amenity.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function AmenitiesSection() {
  return (
    <section id="amenities" className="relative bg-white py-20 sm:py-24 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #b8935a40, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #b8935a40, transparent)" }} />
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#b8935a]/6 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-[#b8935a]/6 blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Uncompromising Luxury
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            World-Class <em className="text-[#b8935a]">Amenities</em>
          </h2>
          <p className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Every detail has been considered so that your only task is to enjoy.
            From arrival to departure, your comfort is our absolute priority.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity, i) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2.5 px-10 sm:px-12 py-4 sm:py-5 rounded-full border border-[#b8935a] text-[#b8935a] text-xs tracking-widest uppercase overflow-hidden relative hover:text-white hover:shadow-[0_0_40px_rgba(184,147,90,0.3)] transition-all duration-500"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <CalendarCheck className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Inquire About Availability</span>
            <div className="absolute inset-0 bg-[#b8935a] translate-y-full group-hover:translate-y-0 transition-transform duration-400 rounded-full" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}