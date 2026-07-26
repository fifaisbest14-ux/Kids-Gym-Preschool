import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `Terms of Service | ${BUSINESS.name}`,
  description: `Terms of service and center policies for ${BUSINESS.name} in Model Town, Lahore.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-ink-muted leading-relaxed">
        <h1 className="font-heading font-extrabold text-3xl text-ink">Terms of Service</h1>
        <p className="text-xs text-ink-muted">Last Updated: July 2026</p>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">1. Campus Visit &amp; Admissions</h2>
          <p>
            Campus visits and initial tours are free of charge. Trial classes are offered at Rs 1,500 per session. Formal enrollment is finalized after completing center registration documentation and fee payment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">2. Operating Hours</h2>
          <p>
            {BUSINESS.name} operates Monday through Friday from 8:00 AM to 5:00 PM. The center is closed on Saturdays and Sundays. Parents are expected to pick up their children strictly by closing time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">3. Transport &amp; Pickup</h2>
          <p>
            No van or transport services are provided. Parents or authorized guardians are responsible for dropping off and picking up their children at Plot # 132, 3, Block D, Model Town, Lahore.
          </p>
        </section>
      </div>
    </div>
  );
}
