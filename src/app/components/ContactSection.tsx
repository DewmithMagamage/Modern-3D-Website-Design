import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Mail, Phone, Clock, Sparkles, Send } from "lucide-react";
import { LOGO_IMAGE } from "@/app/assets/images";
import { whatsappSendUrl } from "@/app/config";

const contactDetails = [
  { label: "Location", value: "Tropical Highlands, Sri Lanka", Icon: MapPin },
  { label: "Email", value: "stay@vilaTheName.com", Icon: Mail },
  { label: "Phone", value: "+94 77 000 0000", Icon: Phone },
  { label: "Check-in / Check-out", value: "3:00 PM / 11:00 AM", Icon: Clock },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestsLabel =
      formState.guests === "10+" ? "10+" : `${formState.guests} guest(s)`;
    const body = [
      "New enquiry — Vila The Name",
      "",
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone || "—"}`,
      `Preferred dates: ${formState.dates || "—"}`,
      `Guests: ${guestsLabel}`,
      "",
      "Special requests:",
      formState.message || "—",
    ].join("\n");

    window.open(whatsappSendUrl(body), "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", dates: "", guests: "2", message: "" });
  };

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-24 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#b8935a]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#b8935a]/8 blur-3xl" />
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
          <p className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Reserve Your Sanctuary
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Begin Your <em className="text-[#b8935a]">Journey</em>
          </h2>
          <p className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Let us tailor your perfect escape. Contact our concierge team to
            reserve your dates and craft a bespoke experience.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src={LOGO_IMAGE} alt="Vila The Name" className="h-16 sm:h-20 w-auto object-contain" />
            </div>

            {/* Tagline */}
            <div>
              <p
                className="text-xl sm:text-2xl text-[#1a1a1a] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300 }}
              >
                "Where Serenity"
                <br />
                "Finds Its Name"
              </p>
              <div className="h-px w-24 bg-[#b8935a]/50" />
            </div>

            {/* Contact details — glass cards */}
            <div className="space-y-3">
              {contactDetails.map(({ label, value, Icon }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 rounded-xl bg-black/[0.02] backdrop-blur-xl border border-black/8 p-4 relative overflow-hidden"
                  style={{ boxShadow: "inset 0 1px 0 rgba(0,0,0,0.03)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                  <div className="w-9 h-9 rounded-lg bg-[#b8935a]/15 border border-[#b8935a]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#b8935a]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#b8935a] text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif" }}>
                      {label}
                    </p>
                    <p className="text-[#4a4a4a] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form — glass card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="rounded-3xl bg-black/[0.02] backdrop-blur-2xl border border-black/10 p-6 sm:p-8 md:p-10 relative overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(0,0,0,0.04), 0 25px 50px rgba(0,0,0,0.05)" }}
            >
              {/* Shimmer lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8935a]/20 to-transparent" />
              {/* Corner gold accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-[#b8935a]/60 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-[#b8935a]/60 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-[#b8935a]/60 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#b8935a]/60 rounded-br-3xl" />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#b8935a]/15 border border-[#b8935a]/40 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-[#b8935a]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-2xl text-[#1a1a1a] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    Thank You
                  </h3>
                  <p className="text-[#4a4a4a] text-sm max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    WhatsApp should open with your details. If it did not, use the contact
                    details on the left to reach us directly.
                  </p>
                  <div className="mt-6 h-px w-24 bg-[#b8935a]/50" />
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm placeholder-black/25 focus:border-[#b8935a]/60 focus:bg-black/[0.04] focus:outline-none transition-all duration-300"
                        placeholder="Your name"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm placeholder-black/25 focus:border-[#b8935a]/60 focus:bg-black/[0.04] focus:outline-none transition-all duration-300"
                        placeholder="your@email.com"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm placeholder-black/25 focus:border-[#b8935a]/60 focus:bg-black/[0.04] focus:outline-none transition-all duration-300"
                        placeholder="+1 (000) 000 0000"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    {/* Dates */}
                    <div className="space-y-2">
                      <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                        Preferred Dates
                      </label>
                      <input
                        type="text"
                        value={formState.dates}
                        onChange={(e) => setFormState({ ...formState, dates: e.target.value })}
                        className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm placeholder-black/25 focus:border-[#b8935a]/60 focus:bg-black/[0.04] focus:outline-none transition-all duration-300"
                        placeholder="e.g. Apr 10–17, 2026"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                      Number of Guests
                    </label>
                    <select
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm focus:border-[#b8935a]/60 focus:outline-none transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                        <option key={n} value={n} className="bg-white">
                          {n} {n === "1" ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[#b8935a] text-[10px] tracking-widest uppercase block" style={{ fontFamily: "'Cinzel', serif" }}>
                      Special Requests
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={3}
                      className="w-full bg-black/[0.02] rounded-xl border border-black/10 px-4 py-3 text-[#1a1a1a] text-sm placeholder-black/25 focus:border-[#b8935a]/60 focus:bg-black/[0.04] focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Any special requests or requirements..."
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2.5 py-4 sm:py-5 rounded-full bg-[#b8935a] text-white text-xs tracking-widest uppercase relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,147,90,0.4)]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send className="w-3.5 h-3.5 relative z-10" />
                    <span className="relative z-10">Send via WhatsApp</span>
                    <div className="absolute inset-0 bg-black/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
