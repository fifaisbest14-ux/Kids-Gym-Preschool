import Link from "next/link";
import { Heart, Building2, Dumbbell, Star, Calendar, MessageCircle } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";
import { FounderSection } from "@/components/sections/FounderSection";
import { VideoEmbed } from "@/components/media/VideoEmbed";
import { MediaImage } from "@/components/media/MediaImage";

export const metadata = {
  title: `About Us | ${BUSINESS.name}`,
  description: `Learn about Kids' Gym Preschool & Daycare in Model Town, Lahore. Founded by Batool Ishaque with a 4.5★ Google rating from 35+ local parent reviews.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Model Town • Lahore
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Nurturing Active Bodies &amp; Confident Minds
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            Combining structured gymnastics fitness with hands-on early childhood education and daily nature discovery.
          </p>
        </div>

        {/* Founder Bio Section */}
        <FounderSection />

        {/* Video Tour Embed */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-2xl text-ink">
              Watch Our Campus &amp; Activities Video
            </h2>
            <p className="text-xs text-ink-muted">
              Get a 90-second preview of life at Kids’ Gym Preschool &amp; Daycare in Model Town.
            </p>
          </div>
          <VideoEmbed title="Kids' Gym Preschool & Daycare Campus Video" />
        </div>

        {/* Center Story & Fast Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
              Our Educational Approach
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              We believe early childhood should be filled with joyful movement, curiosity, and emotional security. Traditional classrooms keep young children seated for long hours; at Kids’ Gym, we know young brains learn best when their bodies are active.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Our Model Town branch maintains a proud <strong className="text-ink">{BUSINESS.googleRating}★ Google Rating</strong> across {BUSINESS.googleReviewCount}+ real parent reviews.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-card border border-brand/10 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-ink">Center Specs</h3>
            <ul className="space-y-4 text-xs sm:text-sm text-ink font-medium">
              <li className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-brand shrink-0" />
                <span>Operating in Model Town, Lahore</span>
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
                <span>Homely, warm atmosphere with 10:1 teacher ratio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* High-Intent CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppUrl("Assalam-o-Alaikum, I am inquiring about admissions after reading about your campus.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Inquire on WhatsApp</span>
          </a>

          <Link
            href="/contact#lead-form"
            className="w-full sm:w-auto px-7 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Visit with Batool</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
