"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-glass border-t border-surface shadow-floating p-2 px-3">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Action 1: Call */}
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-card bg-surface hover:bg-surface/80 text-ink text-center transition-colors"
        >
          <Phone className="w-4 h-4 text-brand mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href={buildWhatsAppUrl("Assalam-o-Alaikum, I saw your website and want fee details on WhatsApp.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-card bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-center transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Action 3: Book Visit */}
        <Link
          href="/contact#lead-form"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-card bg-brand hover:bg-brand-dark text-white text-center transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
