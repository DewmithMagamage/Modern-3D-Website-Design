import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { CalendarCheck, ChevronDown, Compass } from "lucide-react";
import { VILLA_IMAGE, LOGO_IMAGE } from "@/app/assets/images";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y, scale }}>
        <img src={VILLA_IMAGE} alt="Vila The Name" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/40" />
      </motion.div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6"
        style={{ opacity }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <img
              src={LOGO_IMAGE}
              alt="Vila The Name Logo"
              className="h-24 sm:h-32 md:h-40 w-auto object-contain"
            />
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="flex items-center gap-4 mb-5"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#b8935a]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8935a]" />
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#b8935a]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-[#b8935a] text-xs sm:text-sm tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where Serenity Finds Its Name
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] leading-none mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="italic text-[#8b7043]">An Exclusive</span>
            <br />
            <span className="text-[#1a1a1a]">Retreat</span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            className="text-[#4a4a4a] text-sm sm:text-base max-w-md tracking-wider font-light mb-8 sm:mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A sanctuary of unparalleled luxury nestled in nature's embrace
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-[#b8935a] text-white text-xs tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,147,90,0.4)]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <CalendarCheck className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Reserve Your Stay</span>
              <div className="absolute inset-0 bg-black/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </button>
            <button
              onClick={scrollToAbout}
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full border border-[#1a1a1a]/20 text-[#4a4a4a] text-xs tracking-widest uppercase hover:border-[#b8935a] hover:text-[#b8935a] hover:bg-[#b8935a]/5 transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Compass className="w-3.5 h-3.5" />
              Discover More
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
      >
        <span className="text-[#4a4a4a] text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-[#b8935a]/60" />
        </motion.div>
      </motion.div>

      {/* Corner decorations — hidden on small screens */}
      <div className="hidden sm:block absolute top-24 left-6 sm:left-8 w-14 h-14 border-l border-t border-[#b8935a]/30" />
      <div className="hidden sm:block absolute top-24 right-6 sm:right-8 w-14 h-14 border-r border-t border-[#b8935a]/30" />
      <div className="hidden sm:block absolute bottom-10 left-6 sm:left-8 w-14 h-14 border-l border-b border-[#b8935a]/30" />
      <div className="hidden sm:block absolute bottom-10 right-6 sm:right-8 w-14 h-14 border-r border-b border-[#b8935a]/30" />
    </section>
  );
}
