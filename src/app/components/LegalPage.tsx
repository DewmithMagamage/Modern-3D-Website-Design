import { motion } from "motion/react";
import { ChevronLeft, X } from "lucide-react";

type LegalType = "privacy" | "terms";

export function LegalPage({
  type,
  onBack,
}: {
  type: LegalType;
  onBack: () => void;
}) {
  const isPrivacy = type === "privacy";

  return (
    <section className="fixed inset-0 bg-[#fafafa] z-50 overflow-y-auto">
      <div className="sticky top-0 z-10 border-b border-black/8 bg-white/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <button onClick={onBack} aria-label="Close legal page">
            <X size={20} className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors" />
          </button>
        </div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p
          className="text-[#b8935a] text-xs tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Legal
        </p>
        <h1
          className="text-3xl sm:text-5xl text-[#1a1a1a] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          {isPrivacy ? "Privacy Policy" : "Terms and Conditions"}
        </h1>

        <div className="space-y-7 text-[#4a4a4a] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {isPrivacy ? (
            <>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">1. Information We Collect</h2>
                <p>
                  We collect the details you provide through enquiries and booking communications,
                  such as your name, phone number, email address, stay dates, and special requests.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">2. How We Use Your Information</h2>
                <p>
                  Your information is used only to respond to enquiries, manage reservations, and
                  provide guest services before and during your stay.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">3. Data Protection</h2>
                <p>
                  We take reasonable steps to protect personal data and do not sell your information
                  to third parties. Data may be shared only with service providers needed to fulfill
                  your booking.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">4. Contact</h2>
                <p>
                  For privacy-related requests, contact us at vilathename@gmail.com or
                  07 43 48 86 87.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">1. Reservations and Payments</h2>
                <p>
                  Booking requests are subject to availability and are confirmed only after written
                  acceptance. Payment terms and deposit requirements are shared during confirmation.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">2. Check-in and Check-out</h2>
                <p>
                  Standard check-in is at 3:00 PM and check-out is at 11:00 AM, unless otherwise
                  agreed in writing.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">3. Guest Responsibility</h2>
                <p>
                  Guests are expected to respect property rules and local regulations. Any significant
                  damage or loss caused during the stay may incur additional charges.
                </p>
              </section>
              <section>
                <h2 className="text-[#1a1a1a] text-lg mb-2">4. Cancellation Policy</h2>
                <p>
                  Cancellation terms may vary by booking period and offer. The applicable policy will
                  be provided at the time of reservation confirmation.
                </p>
              </section>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
