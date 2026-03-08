import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia & James Laurent",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    title: "An Unforgettable Escape",
    text: "Vila The Name exceeded every expectation. The infinity pool overlooking the forest at dawn, the private chef's exquisite creations, the absolute silence — it was genuinely transformative. We will return without a doubt.",
    stay: "7 nights — Honeymoon",
    initials: "SL",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    title: "Pure Luxury in Nature's Lap",
    text: "I've stayed in many luxury villas across Asia, but Vila The Name stands apart. The attention to detail is extraordinary — from the hand-picked flowers each morning to the curated sunset cocktail experience. Absolutely world-class.",
    stay: "5 nights — Family Retreat",
    initials: "AM",
  },
  {
    id: 3,
    name: "Charlotte & Liam Osei",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    title: "A Truly Private Paradise",
    text: "The exclusivity of the villa made our anniversary completely magical. No other guests, impeccable service, and the most breathtaking views we've ever seen. The sunrise yoga on the terrace was a highlight we'll never forget.",
    stay: "4 nights — Anniversary",
    initials: "CO",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    country: "Japan",
    flag: "🇯🇵",
    rating: 5,
    title: "Serenity Redefined",
    text: "From the moment we arrived, the team anticipated every need before we even expressed it. The wellness spa was exceptional — deeply restorative treatments in a truly serene setting. Vila The Name has raised the bar.",
    stay: "6 nights — Wellness Retreat",
    initials: "YT",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative bg-[#faf7f2] py-20 sm:py-24 md:py-36 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Guest Stories
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            What Our <em className="text-[#b8935a]">Guests Say</em>
          </h2>
        </motion.div>

        {/* Testimonial glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glass card */}
          <div className="relative rounded-3xl bg-white backdrop-blur-2xl border border-[#e3d6c5] p-8 sm:p-12 overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.06)]">
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0e4d4] to-transparent" />
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#f3e4cf] blur-2xl rounded-full" />

            {/* Quote icon */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-10 opacity-15">
              <Quote className="w-16 sm:w-24 h-16 sm:h-24 text-[#b8935a]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#b8935a] fill-[#b8935a]" />
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] mb-4 sm:mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  "{t.title}"
                </h3>

                {/* Text */}
                <p
                  className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f3e4cf] border border-[#e0c28f] flex items-center justify-center">
                    <span
                      className="text-[#7b6641] text-sm"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-[#1a1a1a] text-sm"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#8b8b8b] text-xs mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.stay} · {t.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 h-2 bg-[#b8935a]"
                      : "w-2 h-2 bg-[#e0d4c3] hover:bg-[#c2a581]"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white backdrop-blur-sm border border-[#e0d4c3] flex items-center justify-center text-[#7b6641] hover:border-[#b8935a] hover:text-[#b8935a] transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white backdrop-blur-sm border border-[#e0d4c3] flex items-center justify-center text-[#7b6641] hover:border-[#b8935a] hover:text-[#b8935a] transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
