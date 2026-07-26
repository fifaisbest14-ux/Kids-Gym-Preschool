import { LeadForm } from "@/components/lead-form/LeadForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `Contact & Book a Visit | ${BUSINESS.name}`,
  description: `Schedule your campus tour at Kids' Gym Preschool & Daycare in Model Town, Lahore. Call ${BUSINESS.phoneDisplay} or submit our online form.`,
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-base space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Admissions &amp; Visit Booking
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Book Your Free Campus Visit
          </h1>

          <p className="text-base text-ink-muted leading-relaxed">
            Fill out our quick 30-second form below to schedule a personal tour of our Model Town branch, meet our staff, and receive the 2026 fee structure.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <LeadForm />
        </div>

      </div>

      {/* Location & Map Section */}
      <LocationSection />
    </div>
  );
}
