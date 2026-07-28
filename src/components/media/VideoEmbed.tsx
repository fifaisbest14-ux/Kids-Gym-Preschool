"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { trackVideoPlay } from "@/lib/tracking";

interface VideoEmbedProps {
  title?: string;
  className?: string;
}

export function VideoEmbed({
  title = "Kids' Gym Preschool & Daycare Tour Video",
  className = "",
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    trackVideoPlay(title);
  };

  return (
    <div className={`relative w-full aspect-video rounded-card overflow-hidden bg-ink/90 border border-surface shadow-floating ${className}`}>
      {!isPlaying ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br from-brand-dark/90 via-ink/80 to-teal-trust/90">
          <button
            onClick={handlePlay}
            aria-label={`Play ${title}`}
            className="w-16 h-16 rounded-full bg-brand hover:bg-brand-dark text-white flex items-center justify-center shadow-floating transition-transform transform hover:scale-110 mb-4 group"
          >
            <Play className="w-8 h-8 fill-current ml-1 transition-transform group-hover:scale-105" />
          </button>
          
          <span className="font-heading font-extrabold text-base sm:text-lg max-w-md drop-shadow-sm">
            {title}
          </span>
          <span className="text-xs text-white/80 mt-1 font-medium">
            Click to watch campus video (1:30)
          </span>
        </div>
      ) : (
        <iframe
          src="https://www.youtube-nocookie.com/embed/N87pax-sjpc?autoplay=1&rel=0"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      )}
    </div>
  );
}
