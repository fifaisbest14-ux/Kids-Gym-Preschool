import Image from "next/image";
import { Slot, MediaItem, getMediaForSlot, getMediaDimensions } from "@/lib/media";

interface MediaImageProps {
  slot?: Slot;
  item?: MediaItem;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string; // e.g. "aspect-[4/3]"
  placeholderSubject?: string;
}

export function MediaImage({
  slot,
  item: providedItem,
  alt: providedAlt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  aspectRatio = "aspect-[4/3]",
  placeholderSubject = "campus scene",
}: MediaImageProps) {
  const item = providedItem || (slot ? getMediaForSlot(slot) : undefined);

  // Rule 3: Graceful Degradation & Designed Placeholder
  if (!item) {
    const slotName = slot || "custom-slot";
    return (
      <div
        className={`relative w-full overflow-hidden bg-surface border border-brand/10 rounded-card flex flex-col items-center justify-center p-6 text-center shadow-card ${aspectRatio} ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3">
          <span className="text-xl">🌿</span>
        </div>
        <span className="font-heading font-bold text-sm text-ink capitalize mb-1">
          {slotName.replace(/-/g, " ")}
        </span>
        <p className="text-[11px] text-ink-muted leading-tight max-w-[200px]">
          Natural learning environment
        </p>
        <span className="hidden">
          {`{{NEEDS_CLIENT_INPUT: photo needed — ${slotName}, ${aspectRatio}, ${placeholderSubject}}}`}
        </span>
      </div>
    );
  }

  const dims = getMediaDimensions(item.src);
  const finalAlt = providedAlt || item.alt;

  // Render optimized responsive picture element or next/image
  return (
    <div className={`relative w-full overflow-hidden ${aspectRatio} ${className}`}>
      <Image
        src={`${item.src}-768.jpg`}
        alt={finalAlt}
        width={dims?.width || 800}
        height={dims?.height || 600}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        placeholder={dims?.blurDataURL ? "blur" : "empty"}
        blurDataURL={dims?.blurDataURL}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
