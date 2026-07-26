import Link from "next/link";
import { CheckCircle2, MessageCircle, Calendar, ArrowRight, Phone, Home } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: `Thank You | ${BUSINESS.name}`,
  description: "Thank you for contacting Kids' Gym Preschool & Daycare in Model Town, Lahore. We will contact you via WhatsApp shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/40 to-base">
      <div className="max-w-2xl w-full bg-white rounded-card p-8 sm:p-12 border border-surface shadow-floating text-center space-y-8">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-status-success/10 text-status-success rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title & Headline */}
        <div className="space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs uppercase tracking-wider">
            Enquiry Received!
          </span>
          
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Thank You for Contacting Kids’ Gym!
          </h1>
          
          <p className="text-base text-ink-muted leading-relaxed max-w-lg mx-auto">
            We have received your details. Our admissions coordinator will reach out to you via WhatsApp within <strong className="text-ink">2 hours (9:00 AM – 5:00 PM)</strong>.
          </p>
        </div>

        {/* Next Steps Box */}
        <div className="bg-surface p-6 rounded-card border border-brand/10 text-left space-y-4">
          <h3 className="font-heading font-bold text-base text-ink flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand" />
            <span>What Happens Next?</span>
          </h3>

          <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted font-medium">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-brand text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Our team verifies your preferred visit date and sends a map pin via WhatsApp.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-brand text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>During your campus tour, you meet our teachers and inspect the kids gym equipment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-brand text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>You receive the complete 2026 fee breakdown and trial class details.</span>
            </li>
          </ul>
        </div>

        {/* Double-Dip WhatsApp Action */}
        <div className="pt-2 space-y-4">
          <p className="text-xs font-bold text-ink">
            Want an immediate response right now?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buildWhatsAppUrl("Assalam-o-Alaikum, I just submitted the enquiry form on your website!")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle hover:shadow-floating transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat Immediately on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 bg-surface hover:bg-surface/80 text-ink font-heading font-bold text-sm rounded-pill transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-brand" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
