import Link from "next/link";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

export function SafetyPreview() {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-surface via-white to-surface border border-teal-trust/20 rounded-card p-8 sm:p-12 shadow-card relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Parent Peace of Mind</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              Your Child’s Safety &amp; Comfort Always Come First
            </h2>

            <p className="text-base text-ink-muted leading-relaxed">
              We understand that leaving your child in someone else&apos;s care requires absolute trust. Our Model Town facility is designed with clean play spaces, child-first routines, and open communication with parents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-surface">
                <Heart className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">Homely &amp; Caring Staff</h4>
                  <p className="text-xs text-ink-muted mt-0.5">Experienced caregivers who nurture each child individually.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-surface">
                <Sparkles className="w-5 h-5 text-teal-trust shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">Clean &amp; Well-Maintained</h4>
                  <p className="text-xs text-ink-muted mt-0.5">Play apparatus and learning spaces kept clean daily.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-trust hover:underline"
              >
                <span>Read our full Safety &amp; Staff Ratio Standards &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
