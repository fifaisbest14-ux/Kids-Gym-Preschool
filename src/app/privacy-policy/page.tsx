import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy | ${BUSINESS.name}`,
  description: `Privacy Policy and child data protection commitments of ${BUSINESS.name} in Model Town, Lahore.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-ink-muted leading-relaxed">
        <h1 className="font-heading font-extrabold text-3xl text-ink">Privacy Policy</h1>
        <p className="text-xs text-ink-muted">Last Updated: July 2026</p>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">1. Information We Collect</h2>
          <p>
            When you submit an enquiry form on our website, we collect your parent name, WhatsApp phone number, child age, interested programs, and area in Lahore. We do not sell or share this information with any third-party advertisers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">2. How Information is Used</h2>
          <p>
            Your details are strictly used by the admissions team at {BUSINESS.name} to respond to your enquiry via WhatsApp, phone, or email, schedule campus visits, and send requested fee breakdowns.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">3. Child Privacy &amp; Data Security</h2>
          <p>
            We take child privacy with absolute seriousness. No child names or identifying details are sent to external analytics pixels. Photographs of children are strictly used with prior explicit parental consent.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-ink">4. Contact Us</h2>
          <p>
            For any privacy inquiries or to request deletion of your contact record, please call us directly at {BUSINESS.phoneDisplay} or visit our branch at {BUSINESS.address}.
          </p>
        </section>
      </div>
    </div>
  );
}
