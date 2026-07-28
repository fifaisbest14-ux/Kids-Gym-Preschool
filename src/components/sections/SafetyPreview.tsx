import Link from "next/link";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { MediaImage } from "@/components/media/MediaImage";

export function SafetyPreview() {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-surface via-white to-surface border border-teal-trust/20 rounded-card p-8 sm:p-12 shadow-card relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Parent Peace of Mind</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
                Your Child’s Safety &amp; Comfort Always Come First
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                We understand that leaving your child in someone else&apos;s care requires absolute trust. Our Model Town facility is designed with child-first routines and open communication with parents.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-surface">
                  <Heart className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-ink">Homely Caregivers</h4>
                    <p className="text-xs text-ink-muted mt-0.5">10:1 teacher-to-child ratio ensuring individual attention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-surface">
                  <Sparkles className="w-5 h-5 text-teal-trust shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-ink">Clean Environment</h4>
                    <p className="text-xs text-ink-muted mt-0.5">Clean play apparatus and learning spaces kept daily.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/safety"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-trust hover:underline"
                >
                  <span>Read our full Safety &amp; Staff Standards &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Photo of facility entrance grounds — zero claims in caption */}
            <div className="lg:col-span-5">
              <MediaImage
                slot="safety-entrance"
                aspectRatio="aspect-[16/9]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="rounded-card border border-surface shadow-card"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
