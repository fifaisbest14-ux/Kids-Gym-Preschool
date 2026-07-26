import Link from "next/link";
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, Dumbbell, Sparkles } from "lucide-react";
import { PROGRAMS, BUSINESS, buildWhatsAppProgramUrl } from "@/lib/constants";

export const metadata = {
  title: `Programs & Early Years Curriculum | ${BUSINESS.name}`,
  description: "Explore our early years ladder: Playgroup, Nursery, Prep/KG, Extended Daycare, and Kids Gym physical gymnastics classes in Model Town, Lahore.",
};

export default function ProgramsPage() {
  return (
    <div className="py-12 sm:py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider">
            Curriculum &amp; Programs
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Our Early Years Educational Ladder
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            Every stage at Kids’ Gym Preschool is crafted to develop your child&apos;s physical coordination, emotional security, and academic readiness.
          </p>
        </div>

        {/* Detailed Program Blocks */}
        <div className="space-y-12">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              id={prog.id}
              className="bg-white rounded-card p-8 sm:p-10 border border-surface shadow-card hover:shadow-floating transition-all scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Col: Info & Highlights */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-brand/10 text-brand font-bold text-xs">
                      {prog.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface text-ink-muted font-bold text-xs">
                      Target Age: {prog.age}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-teal-trust">
                      <Clock className="w-4 h-4" />
                      {prog.timing}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                    {prog.title}
                  </h2>

                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">
                      Key Milestones &amp; Learning Activities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink font-medium">
                      {prog.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 bg-surface/60 p-2.5 rounded-lg border border-surface">
                          <CheckCircle2 className="w-4 h-4 text-teal-trust shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Action Box */}
                <div className="lg:col-span-4 bg-surface p-6 rounded-card border border-brand/10 text-center space-y-4">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block">
                    Admissions Open
                  </span>
                  
                  <div className="space-y-1">
                    <p className="font-heading font-extrabold text-xl text-ink">2026 Admissions</p>
                    <p className="text-xs text-ink-muted">Model Town Branch</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={buildWhatsAppProgramUrl(prog.title, prog.age)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-pill font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <span>Enquire Fees on WhatsApp</span>
                    </a>

                    <Link
                      href="/contact#lead-form"
                      className="w-full py-3 px-4 bg-brand hover:bg-brand-dark text-white rounded-pill font-bold text-xs block shadow-sm transition-colors"
                    >
                      Book a Free Visit
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
