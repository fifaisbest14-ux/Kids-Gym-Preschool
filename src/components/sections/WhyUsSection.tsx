import { Dumbbell, Smile, Sparkles } from "lucide-react";

export function WhyUsSection() {
  const pillars = [
    {
      icon: Dumbbell,
      title: "Built-In Kids Gym Integration",
      description: "Unlike traditional daycares, every child engages in structured physical apparatus play that builds posture, core strength, and motor confidence.",
      accent: "border-brand bg-brand/5 text-brand",
    },
    {
      icon: Sparkles,
      title: "Hands-On Guided Learning",
      description: "Activity-based phonics, early counting, creative arts, and sensory exploration that keep young minds excited and school-ready.",
      accent: "border-teal-trust bg-teal-trust/5 text-teal-trust",
    },
    {
      icon: Smile,
      title: "Warm, Homely Atmosphere",
      description: "Attentive teachers and staff who treat your child with individual care. Children genuinely look forward to attending every morning.",
      accent: "border-honey-accent bg-honey-accent/10 text-ink",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-surface/50 border-y border-brand/10 overflow-hidden">
      {/* Low-opacity ambient sand texture background */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/textures/sand.jpg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Why Model Town Parents Choose Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            A Unique Blend of Physical Fitness &amp; Early Education
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            We don&apos;t just watch over your child — we active-train their bodies and guide their early learning milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm rounded-card p-8 border border-surface shadow-card hover:shadow-floating transition-all space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-ink">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
