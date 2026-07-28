"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Calendar, Menu, X, Dumbbell } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/daycare", label: "Daycare" },
    { href: "/special-needs-support", label: "Special Support" },
    { href: "/kids-gym", label: "Kids Gym" },
    { href: "/about", label: "About" },
    { href: "/safety", label: "Safety" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-glass border-b border-surface">
      {/* Top Notification Bar */}
      <div className="bg-brand text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span>📍 Model Town, Lahore — Now Enrolling for 2026</span>
        <span className="hidden sm:inline">•</span>
        <a
          href={buildWhatsAppUrl("Assalam-o-Alaikum, I want 2026 fee details on WhatsApp.")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-honey-accent transition-colors font-semibold"
        >
          Get Fees on WhatsApp &rarr;
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-brand/10 text-brand flex items-center justify-center group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-brand" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-ink leading-tight tracking-tight">
                Kids’ Gym <span className="text-teal-trust font-normal">Preschool</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wide uppercase text-ink-muted">
                &amp; Daycare • Model Town
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface text-brand font-semibold"
                      : "text-ink hover:text-brand hover:bg-surface/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-brand px-3 py-2 rounded-pill hover:bg-surface transition-colors"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 px-3.5 py-2 rounded-pill text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact#lead-form"
              className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-pill text-xs font-bold shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366]/10 text-[#128C7E]"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-ink hover:bg-surface focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-base border-b border-surface px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-surface text-brand"
                      : "text-ink hover:bg-surface/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-surface flex flex-col space-y-2.5">
            <Link
              href="/contact#lead-form"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-brand text-white rounded-pill font-bold text-center text-sm shadow-sm"
            >
              Book a Free Visit
            </Link>
            
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="w-full py-3 border border-surface bg-surface/50 text-ink rounded-pill font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand" />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
