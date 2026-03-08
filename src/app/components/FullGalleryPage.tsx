import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VILLA_IMAGE } from "@/app/assets/images";

const fullGalleryItems: { id: number; src: string; alt: string }[] = [
  { id: 1, src: VILLA_IMAGE, alt: "Villa exterior at golden hour" },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1758612853656-def5033bccb5?auto=format&fit=crop&w=1400&q=80",
    alt: "Infinity pool at dusk",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1764760764956-fcb78be107a5?auto=format&fit=crop&w=1400&q=80",
    alt: "Master suite interior",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?auto=format&fit=crop&w=1400&q=80",
    alt: "Outdoor dining under the stars",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1722480417258-62f2fe681219?auto=format&fit=crop&w=1400&q=80",
    alt: "Private spa pavilion",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1767429659300-5f7d368a0f48?auto=format&fit=crop&w=1400&q=80",
    alt: "Forest trails surrounding the villa",
  },
];

type FullGalleryPageProps = {
  onBack: () => void;
};

export function FullGalleryPage({ onBack }: FullGalleryPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % fullGalleryItems.length);
  const goPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? fullGalleryItems.length - 1 : prev - 1,
    );

  return (
    <section className="fixed inset-0 z-[90] bg-[#050507] text-white flex flex-col">
      {/* Top bar with back button */}
      <div className="relative z-20 px-4 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back
        </button>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-colors duration-300"
          aria-label="Close gallery"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Background cylinder glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#b8935a]/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-260px] h-[520px] bg-radial from-[#b8935a]/14 to-transparent opacity-90" />
      </div>

      {/* Cylinder-style infinite carousel */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 pb-10">
        <motion.div
          className="relative w-full max-w-5xl h-[420px] sm:h-[520px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center perspective-[1400px]">
            <div className="relative w-full h-full">
              {fullGalleryItems.map((item, index) => {
                const total = fullGalleryItems.length;
                const offset =
                  (index - activeIndex + total) % total; // 0,1,2...
                const normalized =
                  offset > total / 2 ? offset - total : offset; // center around 0

                const angle = normalized * 28; // degrees around cylinder
                const radius = 360;
                const scale = 1 - Math.abs(normalized) * 0.1;
                const opacity = 1 - Math.abs(normalized) * 0.18;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-y-10 sm:inset-y-6 left-1/2 w-[72%] max-w-[620px] -translate-x-1/2 rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
                    style={{
                      transformOrigin: "50% 50%",
                    }}
                    animate={{
                      transform: `translateX(-50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                      opacity,
                      scale,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                        <div>
                          <p
                            className="text-[11px] tracking-[0.25em] uppercase text-white/60 mb-1"
                            style={{ fontFamily: "'Cinzel', serif" }}
                          >
                            Vila The Name
                          </p>
                          <p
                            className="text-sm sm:text-base text-white"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.alt}
                          </p>
                        </div>
                        <span
                          className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-white/70"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {index + 1}/{fullGalleryItems.length}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-6">
            <button
              type="button"
              onClick={goPrev}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/18 bg-black/40 text-white/80 hover:border-white hover:text-white hover:bg-black/65 transition-all duration-300 backdrop-blur"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/18 bg-black/40 text-white/80 hover:border-white hover:text-white hover:bg-black/65 transition-all duration-300 backdrop-blur"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* Hint text */}
        <div className="mt-6 text-center">
          <p
            className="text-[11px] tracking-[0.24em] uppercase text-white/60"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Scroll through the cylinder of memories
          </p>
        </div>
      </div>
    </section>
  );
}

