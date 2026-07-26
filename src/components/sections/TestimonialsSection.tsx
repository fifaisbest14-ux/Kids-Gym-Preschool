import { Star, Quote, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Fatima K.",
      role: "Model Town Parent",
      text: "The combination of kids gym gymnastics and preschool learning is unmatched. My 3-year-old son asks to go every morning and his speech confidence has skyrocketed!",
      rating: 5,
    },
    {
      name: "Usman A.",
      role: "Garden Town Parent",
      text: "Extremely attentive staff and a clean, safe homely atmosphere. We tried two other daycare centers in Lahore before Kids’ Gym — nothing compares to their care.",
      rating: 5,
    },
    {
      name: "Zainab M.",
      role: "Faisal Town Parent",
      text: "Their activity-based Montessori approach helped prepare my daughter for her formal school admission interviews smoothly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Bilal R.",
      role: "Model Town Parent",
      text: "Great physical gym equipment for toddlers and wonderful teachers. My child has built amazing motor skills and posture within just a few months.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-accent/20 text-ink font-bold text-xs">
            <Star className="w-4 h-4 text-honey-accent fill-current" />
            <span>Verified Parent Reviews</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Loved by Over 35+ Model Town Families
          </h2>
          
          <p className="text-base text-ink-muted leading-relaxed">
            Rated {BUSINESS.googleRating} out of 5 stars on Google based on real feedback from parents across Lahore.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card p-6 sm:p-8 border border-surface shadow-card hover:shadow-floating transition-all space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-brand/15 absolute top-6 right-6" />

              {/* Rating Stars */}
              <div className="flex text-honey-accent">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Copy */}
              <p className="text-sm sm:text-base text-ink leading-relaxed italic">
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Attribution */}
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

        {/* Footer Link to Google Maps Reviews */}
        <div className="text-center pt-12">
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-surface hover:bg-surface/80 border border-brand/20 text-brand-text font-bold text-xs transition-colors"
          >
            <span>Read all 35+ Google Reviews on Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
