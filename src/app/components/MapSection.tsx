import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Navigation, Mountain, Clock, CalendarCheck } from "lucide-react";

const nearbyAttractions = [
  { name: "Kandy City Centre", distance: "45 min", Icon: Navigation },
  { name: "Horton Plains", distance: "1.5 hrs", Icon: Mountain },
  { name: "Tea Plantations", distance: "15 min", Icon: MapPin },
  { name: "Colombo Airport", distance: "3.5 hrs", Icon: Clock },
];

export function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
      className="relative bg-[#faf7f2] py-20 sm:py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(to right, transparent, #e4cfaa, transparent)" }}
        />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Our <em className="text-[#b8935a]">Location</em>
          </h2>
          <p
            className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled in the lush tropical highlands of Sri Lanka, Vila The Name is your gateway to paradise.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Map — spans 2 cols */}
          <motion.div
            className="lg:col-span-2 relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* Glass shimmer overlay on top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent z-10" />

            {/* Map iframe */}
            <div className="relative rounded-2xl overflow-hidden bg-[#f1e5d7]" style={{ height: "420px" }}>
              <iframe
                title="Vila The Name Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63365.48651474448!2d80.543!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2slk!4v1700000000000"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-transparent pointer-events-none rounded-2xl" />

              {/* Custom animated pin */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none"
                style={{ marginTop: "-10px" }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#b8935a] border-4 border-white shadow-[0_0_20px_rgba(201,169,110,0.8)] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-0.5 h-4 bg-[#c9a96e]" />
                  <div className="w-2 h-1 rounded-full bg-[#c9a96e]/50 blur-sm" />
                </motion.div>
              </div>

              {/* Label card */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-xl bg-white/95 backdrop-blur-xl border border-[#e0c28f] p-3 sm:p-4 z-20"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f3e4cf] to-transparent rounded-t-xl" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3e4cf] border border-[#e0c28f] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#7b6641]" />
                  </div>
                  <div>
                    <p
                      className="text-[#1a1a1a] text-xs"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Vila The Name
                    </p>
                    <p
                      className="text-[#6b6b6b] text-xs mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Tropical Highlands, Sri Lanka
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {/* Nearby card — glass */}
            <div
              className="rounded-2xl bg-white backdrop-blur-xl border border-[#eadfce] p-5 sm:p-6 relative overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f3e4cf] to-transparent" />
              <p
                className="text-[#b8935a] text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Nearby
              </p>
              <div className="space-y-3">
                {nearbyAttractions.map(({ name, distance, Icon }, i) => (
                  <motion.div
                    key={name}
                    className="flex items-center justify-between gap-3 group"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#f5eee2] border border-[#e4d8c4] flex items-center justify-center shrink-0 group-hover:border-[#b8935a]/40 transition-colors duration-300">
                        <Icon
                          className="w-3.5 h-3.5 text-[#8b8b8b] group-hover:text-[#b8935a] transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span
                        className="text-[#4a4a4a] text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {name}
                      </span>
                    </div>
                    <span
                      className="text-[#b8935a]/80 text-xs shrink-0"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {distance}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How to get here — glass */}
            <div
              className="rounded-2xl bg-white backdrop-blur-xl border border-[#eadfce] p-5 sm:p-6 relative overflow-hidden flex-1"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f3e4cf] to-transparent" />
              <p
                className="text-[#b8935a] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Getting Here
              </p>
              <p
                className="text-[#4a4a4a] text-xs leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Private chauffeur transfers available from Bandaranaike International Airport. Helicopter arrivals welcome for the Ultimate Escape package.
              </p>
              <div className="h-px bg-[#efe4d3] mb-4" />
              <div className="space-y-2.5">
                {[
                  { label: "Private Chauffeur", Icon: Navigation },
                  { label: "Helicopter Transfer", Icon: Mountain },
                  { label: "Self-Drive Welcome", Icon: MapPin },
                ].map(({ label, Icon: ItemIcon }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#f3e4cf] border border-[#e0c28f] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-3 h-3 text-[#7b6641]" strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-[#4a4a4a] text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA + Open in Maps */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group w-full sm:w-auto flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#b8935a] border border-[#b8935a] text-white text-xs tracking-widest uppercase hover:bg-[#a78245] hover:border-[#a78245] transition-all duration-300 backdrop-blur-sm shadow-[0_14px_32px_rgba(184,147,90,0.38)]"
                style={{ fontFamily: "'Cinzel', serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                Plan Your Visit
              </motion.button>
              <a
                href="https://maps.app.goo.gl/vVkigih2pPyeiYmEA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-[#d3c4a2] text-[#7b6641] text-xs tracking-widest uppercase hover:border-[#b8935a] hover:text-[#b8935a] bg-white/80 hover:bg-white transition-all duration-300"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}