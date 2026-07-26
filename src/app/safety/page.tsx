import Link from "next/link";
import { ShieldCheck, Heart, Sparkles, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `Safety & Facilities | ${BUSINESS.name}`,
  description: "Child safety, hygiene protocols, and facility standards at Kids' Gym Preschool & Daycare in Model Town, Lahore.",
};

export default function SafetyPage() {
  const safetyProtocols = [
    {
      title: "Clean & Sanitized Play Equipment",
      description: "Our kids gym apparatus, play mats, and classroom learning tools undergo regular cleaning and sanitization routines.",
    },
    {
      title: "Homely & Nurturing Staff",
      description: "Caregivers and teachers are selected for their patient, attentive attitude towards young children, fostering a warm home-like atmosphere.",
    },
    {
      title: "Child-Safe Soft Play Flooring",
      description: "Kids gym spaces feature high-density shock-absorbing mats designed specifically to protect toddlers during physical play.",
    },
    {
      title: "Transparent Parent Communication",
      description: "We maintain an open-door policy for parents and communicate regularly regarding daily routines, eating habits, and milestone progress.",
    },
  ];

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
            Our Commitment to Safety &amp; Comfort
          </h1>

          <p className="text-base text-ink-muted leading-relaxed">
            We prioritize creating a clean, healthy, and emotionally supportive environment for every child entrusted to our care in Model Town.
          </p>
        </div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyProtocols.map((p, idx) => (
            <div key={idx} className="bg-white p-8 rounded-card border border-surface shadow-card space-y-3">
              <div className="flex items-center gap-2 text-teal-trust font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="font-heading font-extrabold text-xl text-ink">{p.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed pl-7">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Tour CTA */}
        <div className="bg-surface p-8 sm:p-10 rounded-card border border-brand/10 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl text-ink">
            Inspect Our Facility in Person
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            We invite parents to visit our Model Town branch, walk through our kids gym and classroom spaces, and meet our care staff.
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
