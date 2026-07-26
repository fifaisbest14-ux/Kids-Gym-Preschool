import Link from "next/link";
import { Star, ShieldCheck, Dumbbell, Calendar, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface/60 via-base to-base pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8622C08_1px,transparent_1px),linear-gradient(to_bottom,#E8622C08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversion Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Verified Google Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-surface shadow-soft-subtle text-xs font-semibold text-ink mx-auto lg:mx-0">
              <div className="flex text-honey-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold">{BUSINESS.googleRating}★</span>
              <span className="text-ink-muted">({BUSINESS.googleReviewCount} Google Reviews)</span>
              <span className="text-teal-trust font-bold">• Model Town</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.15] text-balance">
              Preschool &amp; Daycare in Model Town with a{" "}
              <span className="text-brand underline decoration-honey-accent decoration-4 underline-offset-4">
                Built-In Kids Gym
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Build physical confidence, social skills, and school readiness in a warm, activity-based environment parents love. Serving families in Model Town, Lahore.
            </p>

            {/* Conversion CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              
              {/* Primary CTA */}
              <Link
                href="/contact#lead-form"
                className="w-full sm:w-auto px-7 py-4 rounded-pill bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-base shadow-soft-subtle hover:shadow-floating transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, I want to book a Trial Class for Rs 1,500.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-pill bg-surface hover:bg-surface/80 border border-brand/20 text-ink font-heading font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-honey-accent" />
                <span>Trial Class — Rs 1,500</span>
              </a>
            </div>

            {/* Tertiary Lead Magnet Link */}
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, please send me the 2026 fee structure for your programs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-text hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                <span>Get 2026 fee structure sent directly to your WhatsApp &rarr;</span>
              </a>
            </div>

            {/* Quick Micro-Trust Signals */}
            <div className="pt-4 border-t border-surface flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-ink-muted font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-trust" />
                Homely &amp; Attentive Environment
              </span>
              <span className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-brand" />
                Daily Gymnastics &amp; Physical Play
              </span>
            </div>
          </div>

          {/* Right Column: Visual Component Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 sm:p-8 rounded-card border border-surface shadow-floating space-y-6">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-surface pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-ink">
                      Active Early Years
                    </h3>
                    <p className="text-xs text-ink-muted">Early Childhood • Model Town</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs">
                  Now Enrolling
                </span>
              </div>

              {/* Dynamic Feature Grid inside Card */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-brand block">🤸‍♂️ Kids Gym</span>
                  <p className="text-[11px] text-ink-muted">Motor skills, core posture &amp; agility play</p>
                </div>
                <div className="bg-surface p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-teal-trust block">🎨 Guided Learning</span>
                  <p className="text-[11px] text-ink-muted">Activity-based learning &amp; early phonics</p>
                </div>
                <div className="bg-surface p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-honey-accent block">🧸 Extended Care</span>
                  <p className="text-[11px] text-ink-muted">After-school daycare till 5:00 PM</p>
                </div>
                <div className="bg-surface p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-brand-dark block">🎓 School Prep</span>
                  <p className="text-[11px] text-ink-muted">Prepared for top Lahore school admissions</p>
                </div>
              </div>

              {/* Card Callout Footer */}
              <div className="p-4 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-ink">Campus Tour + Free Consultation</p>
                  <p className="text-[11px] text-ink-muted">No charge, no commitment</p>
                </div>
                <Link
                  href="/contact#lead-form"
                  className="px-3.5 py-2 bg-brand text-white rounded-pill text-xs font-bold hover:bg-brand-dark transition-colors"
                >
                  Schedule
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
