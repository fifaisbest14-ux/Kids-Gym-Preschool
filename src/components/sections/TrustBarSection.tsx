import { Star, Building2, Dumbbell, BookOpen } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function TrustBarSection() {
  const trustSignals = [
    {
      icon: Star,
      title: `${BUSINESS.googleRating}★ Google Rating`,
      description: `Based on ${BUSINESS.googleReviewCount} real parent reviews`,
      color: "text-honey-accent",
    },
    {
      icon: Building2,
      title: "Model Town Branch",
      description: `Serving local families since ${BUSINESS.operatingSince}`,
      color: "text-teal-trust",
    },
    {
      icon: Dumbbell,
      title: "Built-In Kids Gym",
      description: "Dedicated physical gymnastics apparatus",
      color: "text-brand",
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Activity-based phonics, math & speech growth",
      color: "text-brand-dark",
    },
  ];

  return (
    <section className="bg-surface py-8 border-y border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustSignals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-ink leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted leading-tight mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
