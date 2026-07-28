import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function TestimonialsSection() {
  // {{NEEDS_CLIENT_INPUT: 3-4 real review quotes, copied by the owner from his Google profile, each with reviewer first name}}
  const reviews: Array<{ name: string; role: string; text: string; rating: number }> = [];

  return (
    <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
      {/* Low-opacity ambient leaf texture background */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/textures/leaves.jpg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-accent/20 text-ink font-bold text-xs">
            <Star className="w-4 h-4 text-honey-accent fill-current" />
            <span>Verified Google Reviews</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Rated 4.5 out of 5 across 35 Google reviews
          </h2>
          
          <p className="text-base text-ink-muted leading-relaxed">
            Real feedback from parents visiting our Model Town branch in Lahore.
          </p>
        </div>

        {/* If reviews exist, render cards. Otherwise render intentional Google Reviews link state */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm rounded-card p-6 sm:p-8 border border-surface shadow-card space-y-4"
              >
                <div className="flex text-honey-accent">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-ink leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-surface flex items-center justify-between text-xs">
                  <div>
                    <span className="font-heading font-extrabold text-ink block text-sm">
                      {rev.name}
                    </span>
                    <span className="text-ink-muted">{rev.role}</span>
                  </div>
                  <span className="text-[11px] font-bold text-teal-trust bg-teal-trust/10 px-2.5 py-1 rounded-full">
                    via Google Reviews
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-sm rounded-card p-8 sm:p-12 border border-surface shadow-card text-center max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center text-honey-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="font-heading font-bold text-xl text-ink">
              35 Parent Reviews on Google Maps
            </p>
            <p className="text-xs text-ink-muted leading-relaxed">
              Read transparent feedback directly on Google Maps from parents who visit our Model Town branch.
            </p>
          </div>
        )}

        {/* Footer Link to Google Maps Reviews */}
        <div className="text-center pt-10">
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-surface hover:bg-surface/80 border border-brand/20 text-brand-text font-bold text-xs transition-colors shadow-sm"
          >
            <span>Read all 35 Google Reviews on Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
