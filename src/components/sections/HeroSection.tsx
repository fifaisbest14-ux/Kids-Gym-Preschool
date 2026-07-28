import Link from "next/link";
import { Star, ShieldCheck, Sparkles, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { MediaImage } from "@/components/media/MediaImage";

export function HeroSection() {
  return (
    <section className="relative bg-base pt-6 pb-12 sm:pt-12 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & High-Intent CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-heading font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Now Enrolling for 2026</span>
              </span>

              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-honey-accent/20 text-ink font-heading font-bold text-xs flex items-center gap-1.5 hover:bg-honey-accent/30 transition-colors"
              >
                <Star className="w-3.5 h-3.5 text-brand fill-current" />
                <span>{BUSINESS.googleRating}★ on Google ({BUSINESS.googleReviewCount} reviews)</span>
              </a>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl text-ink leading-[1.15] tracking-tight">
              Preschool &amp; Daycare in Model Town with a Built-In Kids Gym
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Model Town&apos;s trusted early childhood centre. Combining outdoor nature discovery, guided learning, and daily kids gym physical apparatus play for children ages 2 to 9.
            </p>

            {/* High-Intent Conversion Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, I am inquiring about admissions and 2026 fee details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get 2026 Fees on WhatsApp</span>
              </a>

              <Link
                href="#lead-form"
                className="w-full sm:w-auto px-7 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Free Visit</span>
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-ink-muted font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-trust" />
                <span>Model Town Branch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-trust" />
                <span>10:1 Child to Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-trust" />
                <span>Ages 2 to 9 Years</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photography Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Mat background */}
              <div className="absolute inset-0 bg-surface/80 rounded-card transform rotate-1 scale-105" />

              {/* Primary 4:5 Photo */}
              <div className="relative z-10 rounded-card overflow-hidden shadow-floating border border-surface">
                <MediaImage
                  slot="hero-primary"
                  aspectRatio="aspect-[4/5]"
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  placeholderSubject="outdoor nature play"
                />
              </div>

              {/* Overlapping Secondary Image A (Top Right) */}
              <div className="absolute -top-6 -right-6 z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-card overflow-hidden border-2 border-white shadow-floating hidden sm:block">
                <MediaImage
                  slot="hero-secondary-a"
                  aspectRatio="aspect-square"
                  sizes="150px"
                  placeholderSubject="garden exploration"
                />
              </div>

              {/* Overlapping Secondary Image B (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-card overflow-hidden border-2 border-white shadow-floating hidden sm:block">
                <MediaImage
                  slot="hero-secondary-b"
                  aspectRatio="aspect-square"
                  sizes="150px"
                  placeholderSubject="creative learning"
                />
              </div>

              {/* Repositioned Floating Badge */}
              <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-surface shadow-card flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-bold text-ink">Model Town Campus</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
