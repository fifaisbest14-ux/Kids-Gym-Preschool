import Link from "next/link";
import { ShieldCheck, Calendar, Users } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `Safety & Facilities | ${BUSINESS.name}`,
  description: "Safety protocols and ratio standards at Kids' Gym Preschool & Daycare in Model Town, Lahore.",
};

export default function SafetyPage() {
  /*
    {{NEEDS_CLIENT_INPUT: CCTV installed and monitored? Y/N}}
    {{NEEDS_CLIENT_INPUT: Controlled secure entry/exit? Y/N}}
    {{NEEDS_CLIENT_INPUT: Staff trained in paediatric first aid? Y/N}}
    {{NEEDS_CLIENT_INPUT: Staff background/reference checks? Y/N}}
  */

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Safety &amp; Well-Being</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Our Safety &amp; Staff Ratio Standards
          </h1>

          <p className="text-base text-ink-muted leading-relaxed">
            We maintain high supervision standards for every child at our Model Town branch.
          </p>
        </div>

        {/* Confirmed Standards Grid */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-card border border-surface shadow-card space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-trust/10 text-teal-trust flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-xl text-ink">
                Child-to-Teacher Ratio ({BUSINESS.childTeacherRatio})
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                We maintain an attentive {BUSINESS.childTeacherRatio} child-to-teacher ratio in our preschool classes to ensure personalized guidance and constant supervision.
              </p>
            </div>
          </div>
        </div>

        {/* Tour CTA */}
        <div className="bg-surface p-8 sm:p-10 rounded-card border border-brand/10 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl text-ink">
            Inspect Our Branch in Person
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            We invite parents to visit our Model Town branch, meet our teaching staff, and inspect our facility firsthand.
          </p>
          <div className="pt-2">
            <Link
              href="/contact#lead-form"
              className="px-7 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-pill font-bold text-xs inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Campus Tour</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
