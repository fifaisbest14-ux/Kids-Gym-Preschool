import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { BUSINESS, LAHORE_AREAS } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Branch Details & Proximity */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
              Visit Our Branch
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              Centrally Located in Model Town, Lahore
            </h2>

            <p className="text-base text-ink-muted leading-relaxed">
              Our branch is conveniently situated in Block D, Model Town — easily accessible for families across central and south Lahore.
            </p>

            {/* Address Card */}
            <div className="bg-surface p-6 rounded-card border border-brand/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-base text-ink">Exact Address</h4>
                  <p className="text-sm text-ink-muted leading-relaxed mt-0.5">
                    {BUSINESS.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-brand/10">
                <Clock className="w-5 h-5 text-teal-trust shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-ink uppercase tracking-wider">Operating Hours</h4>
                  <p className="text-xs text-ink-muted">{BUSINESS.hoursDisplay}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-brand/10">
                <Phone className="w-5 h-5 text-honey-accent shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-ink uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a href={`tel:${BUSINESS.phoneE164}`} className="text-xs font-bold text-brand hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Catchment Areas Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider">
                Proximity Catchment Areas:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {LAHORE_AREAS.slice(0, 8).map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-ink-muted border border-surface shadow-sm"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-2">
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-pill bg-brand hover:bg-brand-dark text-white font-heading font-bold text-xs inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-card overflow-hidden border border-surface shadow-floating">
              <iframe
                title="Kids' Gym Preschool & Daycare Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.607421875!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dfdf9d5c41%3A0x772ad7be011e3562!2sKids&#39;%20Gym%20Preschool%20%26%20Daycare!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
