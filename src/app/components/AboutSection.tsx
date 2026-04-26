import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Waves, UtensilsCrossed, Users, Compass } from "lucide-react";
import { VILLA_IMAGE, LOGO_IMAGE } from "@/app/assets/images";

const stats = [
  { value: "5", label: "Bedrooms", suffix: "" },
  { value: "1", label: "Infinity Pools", suffix: "" },
  { value: "1", label: "Acre", suffix: "+" },
  { value: "360", label: "Views", suffix: "°" },
];

const tags = [
  { label: "Private Pool", Icon: Waves },
  { label: "Concierge", Icon: Users },
  { label: "Chef Service", Icon: UtensilsCrossed },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div
        className="text-4xl sm:text-5xl md:text-6xl text-[#b8935a] mb-2 transition-transform duration-300 group-hover:scale-110"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        {stat.value}<span className="text-2xl sm:text-3xl">{stat.suffix}</span>
      </div>
      <div className="text-[#4a4a4a] text-xs tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={containerRef} className="relative bg-[#fafafa] overflow-hidden py-20 sm:py-24 md:py-36">
      {/* Background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-black/[0.02] whitespace-nowrap select-none pointer-events-none"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        VILA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Our Story
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Vila <em className="text-[#b8935a]">The Name</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#b8935a]/50" />
            <div className="w-1 h-1 bg-[#b8935a] rounded-full" />
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#b8935a]/50" />
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          {/* Image side */}
          <motion.div className="relative" style={{ x: imageX }}>
            <motion.div className="relative overflow-hidden rounded-2xl" style={{ scale: imageScale }}>
              {/* Glass frame decorations */}
              <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
                <div className="absolute top-0 left-0 w-14 h-14 border-l-2 border-t-2 border-[#b8935a] rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-r-2 border-b-2 border-[#b8935a] rounded-br-2xl" />
              </div>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={VILLA_IMAGE}
                  alt="Vila The Name Villa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Floating glass badge */}
            <motion.div
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#b8935a]/90 backdrop-blur-xl border border-[#b8935a] flex flex-col items-center justify-center p-4 shadow-2xl"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <span className="text-white text-3xl sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>5★</span>
              <span className="text-white/80 text-[10px] text-center tracking-wider uppercase mt-1" style={{ fontFamily: "'Cinzel', serif" }}>Luxury</span>
            </motion.div>

            {/* Logo glass overlay */}
            <motion.div
              className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/90 backdrop-blur-xl border border-[#b8935a]/30 flex items-center justify-center p-2 shadow-xl"
              style={{ boxShadow: "inset 0 1px 0 rgba(0,0,0,0.03)" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={LOGO_IMAGE} alt="Logo" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div ref={textRef} style={{ x: textX }} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                "A sanctuary where{" "}
                <em className="text-[#b8935a]">time slows down</em>, and every
                moment becomes a cherished memory."
              </p>
              <div className="h-px bg-gradient-to-r from-[#b8935a]/50 to-transparent mb-5" />
              <p className="text-[#4a4a4a] leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Nestled amidst lush tropical landscapes, Vila The Name is more than a
                destination — it's an experience. With its iconic architecture,
                cascading water features, and panoramic views, every detail has
                been thoughtfully crafted to awaken your senses.
              </p>
            </motion.div>

            <motion.p
              className="text-[#4a4a4a] leading-relaxed text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The villa harmoniously blends contemporary design with the warmth
              of traditional craftsmanship, offering an environment where serenity
              truly finds its name.
            </motion.p>

            {/* Glass tag pills */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {tags.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#b8935a]/25 bg-[#b8935a]/8 backdrop-blur-sm text-[#b8935a] hover:border-[#b8935a]/50 hover:bg-[#b8935a]/15 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span className="text-xs tracking-wider uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => document.querySelector("#experiences")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#1a1a1a]/20 text-[#4a4a4a] text-xs tracking-widest uppercase hover:border-[#b8935a] hover:text-[#b8935a] hover:bg-[#b8935a]/8 transition-all duration-300"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
                Explore Experiences
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats — glass panel */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 sm:py-12 rounded-2xl bg-black/[0.03] backdrop-blur-xl border border-black/8 px-6 sm:px-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ boxShadow: "inset 0 1px 0 rgba(0,0,0,0.04)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
