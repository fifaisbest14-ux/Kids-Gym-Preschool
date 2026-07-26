import Link from "next/link";
import { Camera, MessageCircle, Calendar, ShieldCheck } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: `Campus Gallery | ${BUSINESS.name}`,
  description: "Campus gallery and facilities at Kids' Gym Preschool & Daycare in Model Town, Lahore.",
};

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-24 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Campus Showcase
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Campus Photos &amp; Facility Tour
          </h1>

          <p className="text-base text-ink-muted leading-relaxed max-w-2xl mx-auto">
            We prioritize child privacy. Official campus photography will be available online once verified with full parental consent.
          </p>
        </div>

        {/* Honest Placeholder Box */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-surface shadow-card space-y-6">
          {/* {{NEEDS_CLIENT_INPUT: 15-20 photos with parental consent confirmed}} */}
          <div className="w-16 h-16 bg-surface text-brand rounded-full flex items-center justify-center mx-auto">
            <Camera className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-ink">
              Schedule an In-Person Campus Visit
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-lg mx-auto">
              The best way to experience our kids gym apparatus and learning environment is to visit our branch in Model Town, Lahore.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact#lead-form"
              className="w-full sm:w-auto px-6 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-pill font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Campus Tour</span>
            </Link>

            <a
              href={buildWhatsAppUrl("Assalam-o-Alaikum, I would like to schedule a campus tour of your Model Town branch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-pill font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-ink-muted">
          <ShieldCheck className="w-4 h-4 text-teal-trust" />
          <span>Child Privacy Note: Parental consent is required before publishing photos showing a child&apos;s face.</span>
        </div>

      </div>
    </div>
  );
}
