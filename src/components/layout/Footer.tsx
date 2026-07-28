import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Heart } from "lucide-react";
import { BUSINESS, LAHORE_AREAS, buildWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-base pt-16 pb-28 md:pb-12 border-t border-surface/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: NAP & Brand Identity */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-white">
              {BUSINESS.nameRendered}
            </h3>
            <p className="text-sm text-base/80 leading-relaxed">
              Model Town’s trusted early learning center &amp; kids gym. Nurturing active bodies and happy, confident minds.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-honey-accent text-ink">
                ★ {BUSINESS.googleRating} Rating
              </span>
              <span className="text-xs text-base/70">
                ({BUSINESS.googleReviewCount} real Google reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Exact Location & Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Location &amp; Hours
            </h4>
            <ul className="space-y-3 text-sm text-base/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-teal-trust shrink-0" />
                <span>{BUSINESS.hoursDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-honey-accent shrink-0" />
                <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-brand transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="pt-1">
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand hover:underline gap-1"
              >
                <span>Get Google Maps Directions &rarr;</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Explore Programs
            </h4>
            <ul className="space-y-2 text-sm text-base/80">
              <li>
                <Link href="/programs#playgroup" className="hover:text-brand transition-colors">
                  Playgroup (2 – 3 yrs)
                </Link>
              </li>
              <li>
                <Link href="/programs#nursery" className="hover:text-brand transition-colors">
                  Nursery (3 – 4 yrs)
                </Link>
              </li>
              <li>
                <Link href="/programs#prep-kg" className="hover:text-brand transition-colors">
                  Prep / KG (4 – 5 yrs)
                </Link>
              </li>
              <li>
                <Link href="/daycare" className="hover:text-brand transition-colors">
                  Extended Daycare (2 – 9 yrs)
                </Link>
              </li>
              <li>
                <Link href="/special-needs-support" className="hover:text-brand transition-colors">
                  Special Support (ASD &amp; ADHD)
                </Link>
              </li>
              <li>
                <Link href="/kids-gym" className="hover:text-brand transition-colors">
                  Kids Gym Classes (1 – 8 yrs)
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-brand transition-colors">
                  Safety &amp; Hygiene Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Lahore Geo-Targets */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Serving Families Near You
            </h4>
            <p className="text-xs text-base/70 leading-relaxed">
              Conveniently located for parents living or working in:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {LAHORE_AREAS.slice(0, 10).map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-full text-[11px] bg-white/10 text-base/90 border border-white/5"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-base/60">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.nameRendered}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-base transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-base transition-colors">
              Terms of Service
            </Link>
            <a
              href={buildWhatsAppUrl("Assalam-o-Alaikum, I have an admissions enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base transition-colors flex items-center gap-1 text-[#25D366]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
