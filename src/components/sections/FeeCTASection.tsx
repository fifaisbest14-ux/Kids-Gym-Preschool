import Link from "next/link";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";

export function FeeCTASection() {
  return (
    <section className="py-16 sm:py-20 bg-brand text-white relative overflow-hidden">
      {/* Low-opacity ambient water texture background */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/textures/water.jpg')" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-honey-accent" />
          2026 Admissions Open
        </span>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Want the Complete 2026 Fee Breakdown?
        </h2>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          We keep our admissions process straightforward. Click below to receive our full fee structure sent directly to your WhatsApp inbox or schedule a personal campus tour.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppUrl("Assalam-o-Alaikum, please send me the 2026 fee structure for your programs.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-base rounded-pill shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Get Fees on WhatsApp</span>
          </a>

          <Link
            href="/contact#lead-form"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-surface text-ink font-heading font-extrabold text-base rounded-pill shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <Calendar className="w-5 h-5 text-brand" />
            <span>Book a Free Visit</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
