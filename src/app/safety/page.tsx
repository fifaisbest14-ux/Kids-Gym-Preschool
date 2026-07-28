import Link from "next/link";
import { ShieldCheck, Heart, Users, CheckCircle, Calendar, MessageCircle } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { MediaImage } from "@/components/media/MediaImage";

export const metadata = {
  title: `Safety Standards & Supervision | ${BUSINESS.name}`,
  description: "Learn about our 10:1 teacher-to-child ratio and child safety practices at Kids' Gym Preschool & Daycare in Model Town, Lahore.",
};

export default function SafetyPage() {
  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs uppercase tracking-wider">
            Safety &amp; Well-Being
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Child Safety &amp; Supervision Standards
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            We know that as parents, your child&apos;s physical safety and emotional security are your highest priority.
          </p>
        </div>

        {/* Photo & Confirmed Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl text-ink">
              Verified Supervision Ratio
            </h2>
            
            <div className="bg-white p-6 rounded-card border border-surface shadow-card space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-trust/10 text-teal-trust flex items-center justify-center font-heading font-extrabold text-xl">
                  {BUSINESS.childTeacherRatio}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-ink">Strict 10:1 Child-to-Teacher Ratio</h3>
                  <p className="text-xs text-ink-muted">Ensures no child is left unattended during play, learning, or rest routines.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-ink-muted leading-relaxed">
              Our Model Town branch operates with continuous teacher and caregiver supervision across all indoor classrooms, outdoor discovery areas, and kids gym apparatus play.
            </p>
          </div>

          <div className="lg:col-span-6">
            <MediaImage
              slot="safety-entrance"
              aspectRatio="aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-card border border-surface shadow-floating"
            />
          </div>
        </div>

        {/* Client Input Verification Section */}
        <div className="bg-surface p-8 rounded-card border border-brand/10 space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="font-heading font-extrabold text-lg text-ink">Facility Protocol Confirmations</h3>
          </div>
          
          <p className="text-xs text-ink-muted leading-relaxed">
            We believe in complete transparency. Specific facility protocols are verified directly with parents during your personal campus tour:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ink-muted">
            <div className="p-4 bg-white rounded-xl border border-surface font-mono text-[11px]">
              {`{{NEEDS_CLIENT_INPUT: CCTV installed and monitored? Y/N}}`}
            </div>
            <div className="p-4 bg-white rounded-xl border border-surface font-mono text-[11px]">
              {`{{NEEDS_CLIENT_INPUT: Controlled secure entry/exit? Y/N}}`}
            </div>
            <div className="p-4 bg-white rounded-xl border border-surface font-mono text-[11px]">
              {`{{NEEDS_CLIENT_INPUT: Staff trained in paediatric first aid? Y/N}}`}
            </div>
            <div className="p-4 bg-white rounded-xl border border-surface font-mono text-[11px]">
              {`{{NEEDS_CLIENT_INPUT: Staff background/reference checks? Y/N}}`}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/contact#lead-form"
            className="px-8 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-colors inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Inspect Our Facility — Book a Visit</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
