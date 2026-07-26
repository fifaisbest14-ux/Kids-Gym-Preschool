"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kgp_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("kgp_cookie_consent", "granted");
    setShowBanner(false);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("kgp_cookie_consent", "denied");
    setShowBanner(false);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-base border border-surface shadow-floating rounded-card p-4 text-xs text-ink">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-teal-trust/10 text-teal-trust rounded-full shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-ink leading-relaxed">
            We use privacy-friendly analytics to improve your experience on our website. No personal or child information is ever sold.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-brand text-white rounded-pill font-bold hover:bg-brand-dark transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="px-3.5 py-1.5 bg-surface text-ink-muted rounded-pill font-medium hover:bg-surface/80 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
