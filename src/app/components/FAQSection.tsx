import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is the villa exclusively ours during our stay?",
    a: "Absolutely. Vila The Name operates on an exclusive-use basis. When you book, the entire property — all five suites, both pools, all dining areas, and the full grounds — is reserved solely for your group. No other guests will be present.",
  },
  {
    q: "What is the maximum number of guests?",
    a: "The villa comfortably accommodates up to 10 adults across its five luxury suites. For larger groups or events, please contact us directly to discuss bespoke arrangements.",
  },
  {
    q: "Are meals included in the rate?",
    a: "Breakfast is included in the Classic Retreat package. The Signature Stay and Ultimate Escape packages include full-board dining with our private chef. Custom dietary requirements and special menus can be arranged.",
  },
  {
    q: "How do we get to Vila The Name?",
    a: "We offer private chauffeur transfers from the nearest international airport. Journey time is approximately 2.5 hours by road through beautiful highland scenery. Helicopter transfers are also available on request for the Ultimate Escape package.",
  },
  {
    q: "Can the villa host events or celebrations?",
    a: "Yes — Vila The Name is perfect for intimate weddings, milestone celebrations, corporate retreats, and family gatherings. Our events team will work closely with you to create a bespoke experience tailored to your vision.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations made 60+ days prior to arrival receive a full refund less a 10% administration fee. Cancellations within 30–59 days incur a 50% charge. Cancellations within 30 days are non-refundable. We recommend travel insurance.",
  },
  {
    q: "Is the villa child-friendly?",
    a: "We warmly welcome families with children. Baby cots, high chairs, and child-friendly menus are available on request. We do advise supervision near the pool areas, and our team can arrange nanny services if required.",
  },
  {
    q: "What languages does the villa team speak?",
    a: "Our team is fluent in English, Sinhala, and Tamil. French, German, and Japanese interpretation can be arranged with advance notice for the Signature and Ultimate Escape packages.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#e0c28f] bg-white backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          : "border-[#e6e0d4] bg-white/70 hover:border-[#d3c4a2]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        className="w-full flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 text-left"
        onClick={onToggle}
      >
        <span
          className="text-[#1a1a1a] text-sm sm:text-base transition-colors"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {item.q}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "border-[#b8935a] bg-[#f3e4cf] text-[#7b6641]"
            : "border-[#d3c4a2] text-[#8b8b8b]"
        }`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="h-px bg-[#efe4d3] mb-4" />
              <p
                className="text-[#4a4a4a] text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative bg-[#faf7f2] py-20 sm:py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(to right, transparent, #e4cfaa, transparent)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Questions & Answers
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Frequently <em className="text-[#c9a96e]">Asked</em>
          </h2>
          <p
            className="text-[#4a4a4a] text-sm max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need to know before your stay. Can't find an answer? Our concierge team is always available.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-[#8b8b8b] text-sm mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Still have a question?
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full border border-[#d3c4a2] text-[#7b6641] text-xs tracking-widest uppercase hover:bg-[#f9f3e7] hover:border-[#b8935a] hover:text-[#b8935a] transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Contact Our Concierge
          </button>
        </motion.div>
      </div>
    </section>
  );
}
