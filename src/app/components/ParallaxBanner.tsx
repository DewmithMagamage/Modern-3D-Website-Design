import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const words = ["Serenity", "Luxury", "Nature", "Peace", "Bliss", "Wonder", "Escape"];

export function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 bg-[#f5f5f5]">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #fafafa 0%, #f5f0e8 50%, #fafafa 100%)",
          }}
        />
      </motion.div>

      {/* Top border */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, #b8935a60, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, #b8935a60, transparent)" }}
      />

      <motion.div style={{ opacity }} className="relative z-10">
        {/* Row 1 - moves left */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            style={{ x: x1 }}
          >
            {[...words, ...words, ...words].map((word, i) => (
              <span
                key={`row1-${i}`}
                className="text-5xl md:text-7xl lg:text-9xl font-light select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: i % 2 === 0 ? "rgba(184,147,90,0.15)" : "rgba(26,26,26,0.04)",
                  fontStyle: i % 3 === 1 ? "italic" : "normal",
                }}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Center content */}
        <motion.div
          className="relative flex flex-col items-center justify-center text-center py-8 sm:py-10 px-4 sm:px-6"
          style={{ scale }}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-6">
            <div className="h-px w-10 sm:w-16 md:w-32 bg-[#b8935a]/40" />
            <div className="w-2 h-2 rounded-full bg-[#b8935a]" />
            <div className="h-px w-10 sm:w-16 md:w-32 bg-[#b8935a]/40" />
          </div>

          <p
            className="text-[#b8935a] text-xs tracking-[0.5em] uppercase mb-4 sm:mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Vila The Name
          </p>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] max-w-3xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            "A place where every sunset tells a{" "}
            <em className="text-[#b8935a]">new story</em>"
          </h2>

          <div className="flex items-center gap-4 sm:gap-6 mt-5 sm:mt-6">
            <div className="h-px w-10 sm:w-16 md:w-32 bg-[#b8935a]/40" />
            <div className="w-2 h-2 rounded-full bg-[#b8935a]" />
            <div className="h-px w-10 sm:w-16 md:w-32 bg-[#b8935a]/40" />
          </div>
        </motion.div>

        {/* Row 2 - moves right */}
        <div className="overflow-hidden mt-4">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            style={{ x: x2 }}
          >
            {[...words.reverse(), ...words, ...words].map((word, i) => (
              <span
                key={`row2-${i}`}
                className="text-5xl md:text-7xl lg:text-9xl font-light select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: i % 2 === 0 ? "rgba(26,26,26,0.03)" : "rgba(184,147,90,0.12)",
                  fontStyle: i % 2 === 0 ? "italic" : "normal",
                }}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
