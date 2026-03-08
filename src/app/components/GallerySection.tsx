import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { VILLA_IMAGE } from "@/app/assets/images";

const galleryItems = [
  {
    id: 1,
    src: VILLA_IMAGE,
    alt: "Villa Exterior",
    label: "Grand Exterior",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    height: "h-96",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMG5pZ2h0JTIwbGlnaHRzfGVufDF8fHx8MTc3MjgwNTgxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Pool at Night",
    label: "Pool at Dusk",
    colSpan: "",
    rowSpan: "",
    height: "h-44",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1764760764956-fcb78be107a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yJTIwYmVkcm9vbSUyMHN1bnNldHxlbnwxfHx8fDE3NzI4MDU4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Bedroom",
    label: "Master Suite",
    colSpan: "",
    rowSpan: "",
    height: "h-44",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHZpbGxhJTIwb3V0ZG9vciUyMGRpbmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzI4MDU4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dining",
    label: "Outdoor Dining",
    colSpan: "",
    rowSpan: "",
    height: "h-48",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1722480417258-62f2fe681219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzcyUyMHJlc29ydCUyMGFtZW5pdGllc3xlbnwxfHx8fDE3NzI4MDU4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Spa",
    label: "Wellness Spa",
    colSpan: "",
    rowSpan: "",
    height: "h-48",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1767429659300-5f7d368a0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG5hdHVyZSUyMGZvcmVzdCUyMHBlYWNlZnVsJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzI4MDU4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Nature",
    label: "Forest Trails",
    colSpan: "",
    rowSpan: "",
    height: "h-48",
  },
];

type GallerySectionProps = {
  onViewFullGallery?: () => void;
};

export function GallerySection({ onViewFullGallery }: GallerySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="gallery" ref={containerRef} className="relative bg-[#fafafa] py-20 sm:py-24 md:py-36 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#b8935a]/8 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-between gap-6 sm:flex-row mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center sm:text-left">
            <p
              className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Visual Journey
            </p>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Our <em className="text-[#b8935a]">Gallery</em>
            </h2>
          </div>

          {/* See more photos button */}
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <button
              type="button"
              onClick={onViewFullGallery}
              className="group inline-flex items-center gap-2 rounded-full border border-[#d3c4a2] bg-white/80 px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-[#7b6641] hover:border-[#b8935a] hover:text-[#b8935a] hover:bg-[#f9f3e7] transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8935a] group-hover:scale-110 transition-transform duration-300" />
              See More Photos
            </button>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Feature image */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setLightboxImg(galleryItems[0].src)}
          >
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "480px", minHeight: "240px" }}>
              <motion.img
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                  className="text-[#b8935a] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {galleryItems[0].label}
                </p>
                <div className="w-10 h-px bg-[#b8935a]" />
              </div>
            </div>
          </motion.div>

          {/* Smaller images */}
          {galleryItems.slice(1).map((item, i) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setLightboxImg(item.src)}
            >
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "230px", minHeight: "120px" }}>
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p
                    className="text-[#b8935a] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#b8935a]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#b8935a]" />
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#b8935a] bg-black/40 backdrop-blur-sm transition-all duration-300"
              onClick={() => setLightboxImg(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}