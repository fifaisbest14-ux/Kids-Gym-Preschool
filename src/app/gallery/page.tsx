"use client";

import { useState, useEffect } from "react";
import { MEDIA_REGISTRY, MediaCategory, MediaItem } from "@/lib/media";
import { MediaImage } from "@/components/media/MediaImage";
import { trackGalleryOpen } from "@/lib/tracking";
import { ShieldCheck, X, ChevronLeft, ChevronRight, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/constants";
import Link from "next/link";

const CATEGORIES: { label: string; key: MediaCategory | "all" }[] = [
  { label: "All Campus Photos", key: "all" },
  { label: "Outdoor & Nature", key: "outdoor" },
  { label: "Learning Spaces", key: "learning-spaces" },
  { label: "Activities", key: "activities" },
  { label: "Special Support", key: "special-services" },
  { label: "Our Team", key: "team" },
  { label: "Entrance", key: "entrance" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = MEDIA_REGISTRY.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Handle opening lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    const item = filteredItems[index];
    if (item) {
      trackGalleryOpen(item.id);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation & body lock for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Campus Photo Gallery
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Inside Kids’ Gym Preschool &amp; Daycare
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            Explore real photographs of our Model Town learning environment, outdoor nature grounds, and student activity spaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const count = cat.key === "all"
              ? MEDIA_REGISTRY.length
              : MEDIA_REGISTRY.filter((i) => i.category === cat.key).length;

            if (count === 0 && cat.key !== "all") return null;

            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-pill font-heading font-bold text-xs transition-all ${
                  isActive
                    ? "bg-brand text-white shadow-sm"
                    : "bg-white text-ink-muted border border-surface hover:bg-surface"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-card overflow-hidden border border-surface shadow-card hover:shadow-floating transition-all cursor-pointer group"
            >
              <MediaImage
                item={item}
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="p-3 bg-white border-t border-surface/50">
                <p className="text-xs font-semibold text-ink truncate">{item.caption || item.alt}</p>
                <span className="text-[10px] text-brand font-bold uppercase tracking-wider capitalize">
                  {item.category.replace("-", " ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Child Privacy Note */}
        <div className="bg-surface p-6 rounded-card border border-brand/10 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-trust">
            <ShieldCheck className="w-4 h-4" />
            <span>Child Privacy Policy</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            All photographs displayed on this page have been published directly from our official center records. If you are a parent and wish to modify photo permissions for your child, please contact center management.
          </p>
        </div>

        {/* Conversion CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppUrl("Assalam-o-Alaikum, I looked at your photo gallery and would like fee details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-extrabold text-sm rounded-pill shadow-soft-subtle transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Get Fee Structure on WhatsApp</span>
          </a>

          <Link
            href="/contact#lead-form"
            className="w-full sm:w-auto px-7 py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-sm rounded-pill transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Campus Tour</span>
          </Link>
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image View"
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full bg-white rounded-card overflow-hidden shadow-floating"
            >
              <MediaImage item={activeItem} aspectRatio="aspect-video" sizes="100vw" priority={true} />
              <div className="p-4 bg-white border-t border-surface flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="font-heading font-bold text-sm text-ink">{activeItem.caption || activeItem.alt}</p>
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
