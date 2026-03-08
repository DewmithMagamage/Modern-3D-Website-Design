import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const experiences = [
  {
    id: 1,
    number: "01",
    title: "Infinity Pool",
    subtitle: "Merge with the Horizon",
    description:
      "Immerse yourself in our stunning infinity pool that seemingly merges with the lush tropical canopy. A waterfall cascades gently as you float in absolute tranquility.",
    image: "https://images.unsplash.com/photo-1760943006664-3278c14068d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGluZmluaXR5JTIwcG9vbCUyMHRyb3BpY2FsfGVufDF8fHx8MTc3MjgwNTgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#1a3a4a",
  },
  {
    id: 2,
    number: "02",
    title: "Nature Retreat",
    subtitle: "Breathe in Serenity",
    description:
      "Surrounded by over an acre of pristine tropical forest, wake up to birdsong and the rustling of ancient trees. Nature trails wind through the estate for morning explorations.",
    image: "https://images.unsplash.com/photo-1767429659300-5f7d368a0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG5hdHVyZSUyMGZvcmVzdCUyMHBlYWNlZnVsJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzI4MDU4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#1a3a2a",
  },
  {
    id: 3,
    number: "03",
    title: "Culinary Art",
    subtitle: "Taste the Extraordinary",
    description:
      "Our private chef curates bespoke menus inspired by local flavors and global cuisine. Dine under the stars or in the elegant indoor dining hall — every meal is a masterpiece.",
    image: "https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHZpbGxhJTIwb3V0ZG9vciUyMGRpbmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzI4MDU4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#3a2a1a",
  },
  {
    id: 4,
    number: "04",
    title: "Wellness Spa",
    subtitle: "Restore Your Soul",
    description:
      "Indulge in holistic wellness treatments curated just for you. From Ayurvedic rituals to contemporary spa therapies, emerge refreshed and renewed in body and spirit.",
    image: "https://images.unsplash.com/photo-1722480417258-62f2fe681219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzcyUyMHJlc29ydCUyMGFtZW5pdGllc3xlbnwxfHx8fDE3NzI4MDU4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#2a1a3a",
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden cursor-pointer group"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.7 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"
          style={{ opacity: hovered ? 0.95 : 0.75 }}
        />

        {/* Number */}
        <div
          className="absolute top-6 left-6 text-7xl font-black opacity-8 text-[#1a1a1a] select-none"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {exp.number}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p
            className="text-[#b8935a] text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {exp.subtitle}
          </p>
          <h3
            className="text-3xl text-[#1a1a1a] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {exp.title}
          </h3>

          <motion.div
            className="overflow-hidden"
            animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="text-[#4a4a4a] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {exp.description}
            </p>
            <div className="flex items-center gap-2 text-[#b8935a] text-xs tracking-widest uppercase">
              <span style={{ fontFamily: "'Cinzel', serif" }}>Explore</span>
              <div className="w-8 h-px bg-[#b8935a]" />
            </div>
          </motion.div>

          {/* Line */}
          <motion.div
            className="mt-4 h-px bg-[#b8935a]"
            animate={{ scaleX: hovered ? 1 : 0.3, originX: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ExperiencesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="experiences" ref={containerRef} className="relative bg-white py-20 sm:py-24 md:py-36 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#b8935a]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b8935a]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <p
            className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Curated for You
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Signature <em className="text-[#b8935a]">Experiences</em>
          </h2>
          <p
            className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Each experience at Vila The Name is thoughtfully designed to create moments
            that linger long after your departure.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
