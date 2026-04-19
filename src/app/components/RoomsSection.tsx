import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CalendarCheck } from "lucide-react";
import { ROOM01_IMAGE, ROOM02_IMAGE } from "@/app/assets/images";
import { whatsappSendUrl } from "@/app/config";

type RoomDef = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceSuffix: string;
  imageSrc: string | null;
  bookLabel: string;
  bookMessage: string;
  comingSoon?: boolean;
};

const rooms: RoomDef[] = [
  {
    id: "single-pool",
    title: "Single room",
    description: "Pool access included — perfect for solo travellers.",
    price: "5,000",
    priceSuffix: "/ night · LKR",
    imageSrc: ROOM01_IMAGE,
    bookLabel: "Book now",
    bookMessage:
      "Hi, I'd like to book the Single room with pool access (LKR 5,000/night). Please share availability.",
  },
  {
    id: "couple",
    title: "Couple room",
    description: "Spacious accommodation for two.",
    price: "8,000",
    priceSuffix: "/ night · LKR",
    imageSrc: ROOM02_IMAGE,
    bookLabel: "Book now",
    bookMessage:
      "Hi, I'd like to book the Couple room (LKR 8,000/night). Please share availability.",
  },
  {
    id: "room-3",
    title: "Suite three",
    description: "More room options coming soon — check back or contact us.",
    price: "—",
    priceSuffix: "",
    imageSrc: null,
    bookLabel: "Coming soon",
    bookMessage: "",
    comingSoon: true,
  },
  {
    id: "room-4",
    title: "Suite four",
    description: "More room options coming soon — check back or contact us.",
    price: "—",
    priceSuffix: "",
    imageSrc: null,
    bookLabel: "Coming soon",
    bookMessage: "",
    comingSoon: true,
  },
  {
    id: "room-5",
    title: "Suite five",
    description: "More room options coming soon — check back or contact us.",
    price: "—",
    priceSuffix: "",
    imageSrc: null,
    bookLabel: "Coming soon",
    bookMessage: "",
    comingSoon: true,
  },
];

export function RoomsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rooms" className="relative bg-[#faf7f2] py-20 sm:py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[360px] h-[360px] rounded-full bg-[#f3e4cf] blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#b8935a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Stay with us
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Rooms & <em className="text-[#b8935a]">rates</em>
          </h2>
          <p className="text-[#4a4a4a] text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Per-night rates in Sri Lankan Rupees. Three more suites will be listed here soon — reach out anytime to plan your stay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rooms.map((room, i) => (
            <motion.article
              key={room.id}
              className={`relative rounded-3xl overflow-hidden flex flex-col bg-white border transition-all duration-500 ${
                room.comingSoon
                  ? "border-[#e6e0d4] opacity-95"
                  : "border-[#e6e0d4] hover:border-[#d3c4a2] shadow-sm hover:shadow-[0_20px_40px_rgba(184,147,90,0.12)]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={room.comingSoon ? undefined : { y: -4 }}
            >
              <div className="aspect-[4/3] w-full bg-[#ebe6dc] relative">
                {room.imageSrc ? (
                  <img
                    src={room.imageSrc}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p
                      className="text-[#8a8279] text-sm tracking-wide uppercase"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Photo coming soon
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3
                  className="text-xl sm:text-2xl text-[#1a1a1a] capitalize mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {room.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {room.description}
                </p>
                {!room.comingSoon && (
                  <p className="mb-5">
                    <span
                      className="text-2xl sm:text-3xl text-[#b8935a]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {room.price}
                    </span>
                    <span className="text-[#4a4a4a] text-sm ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {room.priceSuffix}
                    </span>
                  </p>
                )}

                {room.comingSoon ? (
                  <span
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full border border-black/10 text-[#8a8279] text-xs tracking-widest uppercase cursor-default"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {room.bookLabel}
                  </span>
                ) : (
                  <motion.a
                    href={whatsappSendUrl(room.bookMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-full bg-[#b8935a] text-white text-xs tracking-widest uppercase hover:bg-[#a07d4a] transition-colors duration-300"
                    style={{ fontFamily: "'Cinzel', serif" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    {room.bookLabel}
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
