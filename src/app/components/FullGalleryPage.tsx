import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { INFINITY_POOL_IMAGE, ROOM01_IMAGE, ROOM02_IMAGE, VILLA_IMAGE } from "@/app/assets/images";

const galleryItems = [
  { id: 1, src: VILLA_IMAGE, alt: "Villa exterior" },
  { id: 2,src: INFINITY_POOL_IMAGE,alt: "Infinity pool",},
  { id: 3, src: ROOM01_IMAGE, alt: "Single room" },
  { id: 4, src: ROOM02_IMAGE, alt: "Couple room" },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1760067537540-cc36c1700d7e?auto=format&fit=crop&w=1400&q=80",
    alt: "Outdoor dining",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1722480417258-62f2fe681219?auto=format&fit=crop&w=1400&q=80",
    alt: "Private spa",
  },
];

export function FullGalleryPage({ onBack }: { onBack: () => void }) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex([
      (index + newDirection + galleryItems.length) % galleryItems.length,
      newDirection,
    ]);
  };

  const image = galleryItems[index];

  return (
    <section className="fixed inset-0 bg-black text-white z-50 flex flex-col">

      {/* Top bar */}
      <div className="flex justify-between items-center p-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-white"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        <button onClick={onBack} aria-label="Close gallery">
          <X size={22} />
        </button>
      </div>

      {/* Gallery */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="w-[80%] max-w-5xl h-[70vh] object-cover rounded-3xl shadow-2xl"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Caption */}
        <div className="absolute bottom-16 text-center">
          <p className="text-sm tracking-widest uppercase text-white/60">
            Villa The Name
          </p>
          <p className="text-xl">{image.alt}</p>
        </div>

        {/* Controls */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-10 bg-black/40 p-3 rounded-full hover:bg-black/70"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-10 bg-black/40 p-3 rounded-full hover:bg-black/70"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}