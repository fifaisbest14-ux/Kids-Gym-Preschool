import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { PROGRAMS, buildWhatsAppProgramUrl } from "@/lib/constants";
import { MediaImage } from "@/components/media/MediaImage";

export function ProgramsSection() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs uppercase tracking-wider">
            Early Years Ladder
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Structured Programs Designed for Every Stage
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            From toddlers to primary-age children, our curriculum blends outdoor nature exploration, guided learning, and physical kids gym play.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-card border border-surface shadow-card hover:shadow-floating transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Program Photo Top */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-surface">
                <MediaImage
                  slot={prog.slot}
                  aspectRatio="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholderSubject={prog.title}
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand font-bold text-xs shadow-sm">
                    {prog.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-xs font-bold text-ink bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-pill shadow-sm">
                    Age: {prog.age}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-heading font-extrabold text-2xl text-ink group-hover:text-brand transition-colors">
                    {prog.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                    <Clock className="w-4 h-4 text-teal-trust" />
                    <span>{prog.timing}</span>
                  </div>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {prog.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-surface text-xs text-ink font-medium">
                    {prog.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-trust shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTAs */}
                <div className="pt-6 mt-6 border-t border-surface space-y-2">
                  <a
                    href={buildWhatsAppProgramUrl(prog.title, prog.age)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-surface hover:bg-surface/80 border border-brand/20 text-brand-text rounded-pill font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Enquire About 2026 Fees</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact#lead-form"
                    className="w-full py-2.5 px-4 bg-brand hover:bg-brand-dark text-white rounded-pill font-bold text-xs text-center block shadow-sm transition-colors"
                  >
                    Book a Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
