import Link from "next/link";
import { Heart, Brain, Sparkles, ShieldCheck, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { MediaImage } from "@/components/media/MediaImage";
import { LeadForm } from "@/components/lead-form/LeadForm";

export const metadata = {
  title: `Autism & ADHD Support Programme | ${BUSINESS.name} Model Town`,
  description: "Guided support for children with ASD and ADHD in Model Town, Lahore. Nurturing cognitive development, sensory processing, life skills, and social confidence.",
};

export default function SpecialNeedsPage() {
  const features = [
    {
      icon: Brain,
      title: "Cognitive & Focus Development",
      description: "Customized activity routines to build attention span, task completion, and structured problem-solving skills.",
    },
    {
      icon: Sparkles,
      title: "Sensory Processing & Regulation",
      description: "Quiet sensory space and guided motor activities helping children manage sensory stimulation with comfort.",
    },
    {
      icon: Heart,
      title: "Life Skills & Independence",
      description: "Encouraging daily independence in self-care, routine habits, and emotional self-regulation.",
    },
    {
      icon: ShieldCheck,
      title: "Social Interaction & Inclusion",
      description: "Small group activities that build communication skills, turn-taking, and peer confidence.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
              Specialized Support • ASD &amp; ADHD
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Nurturing Support for Children with ASD &amp; ADHD
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Every child develops at their own pace. Our specialized support program in Model Town provides a calm, structured environment designed to strengthen life skills, sensory processing, and social confidence.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, I am inquiring about your Autism/ADHD support program in Model Town.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Inquire via WhatsApp</span>
              </a>

              <Link
                href="#lead-form"
                className="w-full sm:w-auto px-6 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Private Visit</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <MediaImage slot="special-services-1" aspectRatio="aspect-[4/3]" className="rounded-card border border-surface shadow-card" />
            <MediaImage slot="special-services-2" aspectRatio="aspect-[4/3]" className="rounded-card border border-surface shadow-card" />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-card border border-surface shadow-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-ink">{feat.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Client Input Marker */}
        <div className="bg-surface/60 p-6 rounded-card border border-brand/10 text-center space-y-2 max-w-3xl mx-auto">
          <p className="text-xs text-ink-muted">
            For specific program details, caregiver-to-child ratios, and personalized intake evaluations, please schedule a private campus tour with our lead coordinator.
          </p>
          <span className="hidden">
            {`{{NEEDS_CLIENT_INPUT: staff qualifications for the ASD/ADHD programme}}`}
          </span>
        </div>

        {/* Lead Form */}
        <div className="max-w-3xl mx-auto pt-4">
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
