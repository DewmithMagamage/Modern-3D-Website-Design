import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { ParallaxBanner } from "./components/ParallaxBanner";
import { GallerySection } from "./components/GallerySection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { RoomsSection } from "./components/RoomsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { MapSection } from "./components/MapSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FullGalleryPage } from "./components/FullGalleryPage";
import { LegalPage } from "./components/LegalPage";

// Loading screen
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#fafafa] flex flex-col items-center justify-center px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p
            className="text-4xl sm:text-5xl md:text-7xl text-[#1a1a1a]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Vila <em className="text-[#b8935a]">The Name</em>
          </p>
        </motion.div>

        <motion.p
          className="text-[#b8935a]/70 text-xs tracking-[0.5em] uppercase"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Where Serenity Finds Its Name
        </motion.p>

        {/* Loading bar */}
        <div className="mt-12 w-48 h-px bg-black/10 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-[#b8935a]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.1, ease: "easeInOut", delay: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [legalPage, setLegalPage] = useState<"privacy" | "terms" | null>(null);
  const overlayOpen = showFullGallery || legalPage !== null;

  return (
    <div className="bg-white min-h-screen">
      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main className={overlayOpen ? "pointer-events-none blur-sm" : ""}>
              <HeroSection />
              <AboutSection />
              <ParallaxBanner />
              <ExperiencesSection />
              <GallerySection onViewFullGallery={() => setShowFullGallery(true)} />
              <AmenitiesSection />
              <RoomsSection />
              <TestimonialsSection />
              <MapSection />
              <FAQSection />
              <ContactSection />
            </main>
            <Footer
              onOpenPrivacy={() => setLegalPage("privacy")}
              onOpenTerms={() => setLegalPage("terms")}
            />

            {/* Full gallery "separate" page overlay */}
            <AnimatePresence>
              {showFullGallery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <FullGalleryPage
                    onBack={() => {
                      setShowFullGallery(false);
                      document
                        .querySelector("#gallery")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {legalPage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <LegalPage type={legalPage} onBack={() => setLegalPage(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}