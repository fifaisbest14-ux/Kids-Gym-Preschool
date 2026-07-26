"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Sparkles, BookOpen, ShieldCheck, X, Calendar, Lock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { trackGalleryOpen } from "@/lib/tracking";

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  // SVG / Visual representations adhering to design tokens and privacy guidelines
  const galleryItems = [
    {
      id: 1,
      title: "Kids Gym Gymnastics Area",
      category: "Kids Gym",
      color: "from-brand/20 to-surface",
      icon: Dumbbell,
      description: "Dedicated child-safe gymnastics apparatus including vaulting blocks, balance beams, and soft landing mats.",
    },
    {
      id: 2,
      title: "Activity Learning Station",
      category: "Montessori",
      color: "from-teal-trust/20 to-surface",
      icon: BookOpen,
      description: "Hands-on alphabet phonics, counting tools, and creative sensory exploration tables.",
    },
    {
      id: 3,
      title: "Sanitized Play Space",
      category: "Facilities",
      color: "from-honey-accent/20 to-surface",
      icon: Sparkles,
      description: "Clean, hygienic indoor play environment maintained daily for toddler health & safety.",
    },
    {
      id: 4,
      title: "Extended Daycare Rest Room",
      category: "Daycare",
      color: "from-brand-dark/20 to-surface",
      icon: ShieldCheck,
      description: "Quiet, peaceful sleeping space for afternoon rest & nap routines.",
    },
  ];

  const handleOpen = (idx: number) => {
    setActiveImage(idx);
    trackGalleryOpen(`gallery_item_${galleryItems[idx].id}`);
  };

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Campus Showcase
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Inside Our Model Town Branch
          </h1>

          <p className="text-base text-ink-muted leading-relaxed">
            Take a visual tour of our kids gym apparatus, activity learning stations, and clean facility spaces.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-ink-muted bg-surface px-3 py-1.5 rounded-full border border-surface">
            <Lock className="w-3.5 h-3.5 text-teal-trust" />
            <span>Child Privacy Note: Original campus photos shown in-person during center tours.</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleOpen(idx)}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-card border border-surface shadow-card hover:shadow-floating transition-all cursor-pointer space-y-4 group`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-ink">
                    {item.category}
                  </span>
                  <Icon className="w-6 h-6 text-brand group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-ink group-hover:text-brand transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 text-xs font-bold text-brand group-hover:underline flex items-center gap-1">
                  <span>Click to expand feature view &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox */}
        {activeImage !== null && (
          <div className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-card p-8 max-w-lg w-full space-y-4 relative border border-surface shadow-floating">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink rounded-full bg-surface"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold">
                {galleryItems[activeImage].category}
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-ink">
                {galleryItems[activeImage].title}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed">
                {galleryItems[activeImage].description}
              </p>

              <div className="pt-4 border-t border-surface flex items-center justify-between">
                <Link
                  href="/contact#lead-form"
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-2.5 bg-brand text-white rounded-pill text-xs font-bold hover:bg-brand-dark transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Person Tour</span>
                </Link>

                <button
                  onClick={() => setActiveImage(null)}
                  className="text-xs font-bold text-ink-muted hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
