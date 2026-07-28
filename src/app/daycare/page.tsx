import Link from "next/link";
import { Clock, ShieldCheck, Heart, Utensils, Moon, Smile, ArrowRight, MessageCircle, Calendar, Feather } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { LeadForm } from "@/components/lead-form/LeadForm";
import { MediaImage } from "@/components/media/MediaImage";
import { VideoEmbed } from "@/components/media/VideoEmbed";

export const metadata = {
  title: `Daycare in Model Town, Lahore | Extended Daycare for Working Parents`,
  description: "Full-day daycare in Model Town, Lahore. Safe, home-like environment, quiet rest routines, daily 4:00 PM bird feeding, and supervised play till 5:00 PM.",
};

export default function DaycarePage() {
  const daycareFeatures = [
    {
      icon: Clock,
      title: "Reliable Hours (8:00 AM – 5:00 PM)",
      description: "Operates Monday through Friday. Gives working mothers complete peace of mind while at work.",
      color: "text-brand bg-brand/10",
    },
    {
      icon: Feather,
      title: "Daily 4:00 PM Bird Feeding",
      description: "Our signature afternoon moment — children feed birds and learn kindness towards nature and animals.",
      color: "text-teal-trust bg-teal-trust/10",
    },
    {
      icon: Moon,
      title: "Peaceful Nap & Rest Time",
      description: "Quiet sleeping area so children wake up refreshed.",
      color: "text-honey-accent bg-honey-accent/20",
    },
    {
      icon: Heart,
      title: "Attentive Personal Care",
      description: "Caregivers who monitor your child's emotional wellbeing and social comfort.",
      color: "text-brand-dark bg-brand-dark/10",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs uppercase tracking-wider">
              Extended Daycare • Model Town Lahore
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              A Warm, Safe Home Away from Home for Your Child
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Designed specifically for working parents in Lahore. Our daycare provides a nurturing environment with quiet rest routines, daily 4:00 PM bird feeding, and active gym play until 5:00 PM.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={buildWhatsAppUrl("Assalam-o-Alaikum, I am looking for extended daycare in Model Town and want fee details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Daycare Fees on WhatsApp</span>
              </a>

              <Link
                href="#lead-form"
                className="w-full sm:w-auto px-6 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Daycare Tour</span>
              </Link>
            </div>
          </div>

          {/* Hero Daycare Photo */}
          <div className="lg:col-span-5">
            <MediaImage
              slot="program-daycare"
              aspectRatio="aspect-[4/3]"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-card border border-surface shadow-floating"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {daycareFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-card border border-surface shadow-card space-y-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-ink">{feat.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Video Preview */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h3 className="font-heading font-extrabold text-2xl text-ink">See Our Daycare Facilities in Action</h3>
            <p className="text-xs text-ink-muted">Watch how our toddlers enjoy their rest routines and outdoor play.</p>
          </div>
          <VideoEmbed title="Kids' Gym Daycare & Outdoor Play Video" />
        </div>

        {/* Embedded Lead Form */}
        <div className="max-w-3xl mx-auto pt-4">
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
