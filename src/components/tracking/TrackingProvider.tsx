"use client";

import { useEffect } from "react";
import { pushToDataLayer } from "@/lib/tracking";

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let hasScrolled75 = false;

    const handleScroll = () => {
      if (hasScrolled75) return;
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition / totalHeight >= 0.75) {
        hasScrolled75 = true;
        pushToDataLayer("scroll_75");
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";

      // Phone link tracking
      if (href.startsWith("tel:")) {
        pushToDataLayer("phone_click", { phone_number: href.replace("tel:", "") });
      }

      // WhatsApp link tracking
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        pushToDataLayer("whatsapp_click", {
          location: target.innerText || target.getAttribute("aria-label") || "whatsapp_link",
          href: href,
        });
      }

      // Map link tracking
      if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) {
        pushToDataLayer("map_click", { href: href });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}
