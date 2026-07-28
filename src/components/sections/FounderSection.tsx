import { Heart, Award, Sparkles } from "lucide-react";
import { MediaImage } from "@/components/media/MediaImage";

export function FounderSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <MediaImage
                slot="founder-portrait"
                aspectRatio="aspect-[3/4]"
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="rounded-card shadow-floating border border-surface"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand text-white p-4 rounded-2xl shadow-card hidden sm:block max-w-[200px]">
                <p className="font-heading font-extrabold text-xs">Batool Ishaque</p>
                <p className="text-[11px] text-white/90">Founder &amp; Head Educator</p>
              </div>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs">
              <Award className="w-4 h-4" />
              <span>Meet Our Founder</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink leading-tight">
              Guided by Passion for Early Childhood Growth
            </h2>

            <p className="text-base text-ink-muted leading-relaxed">
              Founded by <strong className="text-ink font-semibold">Batool Ishaque</strong>, Kids’ Gym Preschool was created with a clear vision: combining active physical play with nurturing early childhood learning in Model Town.
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              With a background in early child development and Montessori-influenced teaching practices, Batool personally ensures that every child receives individualized attention, emotional warmth, and a safe environment to thrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-surface/50 p-4 rounded-xl border border-surface text-left">
                <Heart className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">Personal Nurturing</h4>
                  <p className="text-xs text-ink-muted mt-0.5">Every morning greeting and daily care supervised personally.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-surface/50 p-4 rounded-xl border border-surface text-left">
                <Sparkles className="w-5 h-5 text-teal-trust shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">Child-Centred Learning</h4>
                  <p className="text-xs text-ink-muted mt-0.5">Building confidence, motor skills, and lifelong curiosity.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
