import Link from "next/link";
import { Dumbbell, Sparkles, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { MediaImage } from "@/components/media/MediaImage";

export const metadata = {
  title: `Kids Gym & Physical Gymnastics in Model Town, Lahore | ${BUSINESS.name}`,
  description: "Our signature kids gym program in Model Town, Lahore. Child-safe gymnastics apparatus, motor skill development, posture, and core strength for ages 2–9.",
};

export default function KidsGymPage() {
  const gymBenefits = [
    {
      title: "Core Posture & Balance",
      description: "Custom gymnastics apparatus built to help young children develop proper posture, spine alignment, and spatial balance.",
    },
    {
      title: "Gross Motor Skill Mastery",
      description: "Structured obstacle courses, vaulting mats, and balance beams that refine running, jumping, and landing coordination.",
    },
    {
      title: "Confidence & Resilience",
      description: "Overcoming physical apparatus challenges builds immense self-esteem, focus, and emotional courage early in life.",
    },
    {
      title: "Energy Channeling & Social Play",
      description: "Releases excess toddler energy constructively in a safe indoor environment supervised by caring instructors.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
              <Dumbbell className="w-4 h-4" />
              <span>Our Core Differentiator</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
              Kids Gym &amp; Physical Gymnastics Classes
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Model Town early learning center with a dedicated indoor Kids Gym. Available as an integrated daily program and standalone physical classes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, I want to book a Trial Kids Gym Class for Rs 1,500.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-honey-accent" />
                <span>Book Trial Class — Rs 1,500</span>
              </a>

              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, please send fee details for Kids Gym standalone classes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Gym Fees on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MediaImage
              slot="program-nature"
              aspectRatio="aspect-[16/9]"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-card border border-surface shadow-floating"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gymBenefits.map((b, idx) => (
            <div key={idx} className="bg-white p-8 rounded-card border border-surface shadow-card space-y-3">
              <div className="flex items-center gap-2 text-brand font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-trust" />
                <h3 className="font-heading font-extrabold text-xl text-ink">{b.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed pl-7">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Offer Callout */}
        <div className="bg-surface border border-brand/20 p-8 sm:p-10 rounded-card text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-honey-accent/20 text-ink font-bold text-xs">
            Trial Class Offer
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
            Experience a Kids Gym Class for Just Rs 1,500
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Bring your child to our Model Town center for a full 45-minute physical gymnastics session. Meet our trainers and see your child glow with confidence!
          </p>
          <div className="pt-2">
            <Link
              href="/contact#lead-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white rounded-pill font-extrabold text-xs shadow-sm hover:bg-brand-dark transition-colors"
            >
              <span>Schedule Trial Class Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
