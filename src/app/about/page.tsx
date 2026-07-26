import Link from "next/link";
import { Heart, Building2, Dumbbell, BookOpen, Star, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: `About Us | ${BUSINESS.name}`,
  description: "Learn about Kids' Gym Preschool & Daycare in Model Town, Lahore. Operating since 2020 with a 4.5★ Google rating from 35+ local parent reviews.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Established {BUSINESS.operatingSince} • Model Town
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Nurturing Active Bodies &amp; Confident Minds
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            Founded with a vision to revolutionize early childhood education in Lahore by combining physical gymnastics fitness with hands-on Montessori learning.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
              Our Philosophy &amp; Mission
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              We believe that early childhood should be filled with joyful movement, curiosity, and emotional security. Traditional preschool classrooms keep children seated for long hours; at Kids’ Gym, we know that young brains learn best when their bodies are active.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Since {BUSINESS.operatingSince}, our Model Town branch has welcomed hundreds of toddlers and pre-schoolers, maintaining a proud <strong className="text-ink">{BUSINESS.googleRating}★ Google Rating</strong> across {BUSINESS.googleReviewCount}+ real parent reviews.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-card border border-brand/10 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-ink">Center Fast Facts</h3>
            <ul className="space-y-4 text-xs sm:text-sm text-ink font-medium">
              <li className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-brand shrink-0" />
                <span>Operating in Model Town, Lahore since {BUSINESS.operatingSince}</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-honey-accent shrink-0 fill-current" />
                <span>{BUSINESS.googleRating}★ Google Rating ({BUSINESS.googleReviewCount} real parent reviews)</span>
              </li>
              <li className="flex items-center gap-3">
                <Dumbbell className="w-5 h-5 text-teal-trust shrink-0" />
                <span>Built-in indoor Kids Gym physical apparatus</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-brand-dark shrink-0" />
                <span>Homely, warm atmosphere with attentive care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <Link
            href="/contact#lead-form"
            className="px-8 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-colors inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Meet Our Teachers — Book a Visit</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
