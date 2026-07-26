"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are your operating hours and timings?",
      a: `Our center operates Monday through Friday from 8:00 AM to 5:00 PM. Preschool morning sessions (Playgroup, Nursery, Prep/KG) run during half-day morning hours, while our Extended Daycare continues through 5:00 PM. We are closed on Saturdays and Sundays.`,
    },
    {
      q: "How much does a trial class or campus visit cost?",
      a: `Campus visits and initial parent tours are completely FREE with no commitment required. If you'd like your child to experience our active kids gym and preschool environment, we offer a hands-on Trial Class for Rs 1,500.`,
    },
    {
      q: "How can I get your 2026 fee structure?",
      a: `Per center policy, detailed monthly fee structures are provided directly via WhatsApp or during your personal campus visit. You can click any of our "Get Fees on WhatsApp" buttons to receive the details immediately on your phone.`,
    },
    {
      q: "Do you provide van or pickup/drop-off transport service?",
      a: `No, we do not offer transport or van services. All children are dropped off and picked up directly by parents or guardians at our Model Town branch (Plot # 132, 3, Block D, Model Town, Lahore).`,
    },
    {
      q: "What age groups are accepted for preschool and daycare?",
      a: `We cater to children from ages 2 to 9 years across our programs: Playgroup (2–3 yrs), Nursery (3–4 yrs), Prep/KG (4–5 yrs), Extended Daycare, and Kids Gym physical classes. Contact us directly for specific age inquiries.`,
    },
    {
      q: "What makes Kids’ Gym Preschool special?",
      a: `Our differentiator is our built-in Kids Gym! Every child receives structured gymnastics apparatus play designed to improve core strength, posture, and motor coordination alongside early phonics and hands-on learning.`,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface/50 border-t border-brand/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-trust/10 text-teal-trust font-bold text-xs">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base text-ink-muted leading-relaxed">
            Everything you need to know about our Model Town branch, timings, and admissions process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-card border border-surface shadow-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-heading font-bold text-base sm:text-lg text-ink flex items-center justify-between gap-4 hover:text-brand transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-ink-muted leading-relaxed border-t border-surface/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-10">
          <p className="text-xs text-ink-muted">
            Have a question that isn&apos;t listed here?{" "}
            <a
              href={buildWhatsAppUrl("Assalam-o-Alaikum, I have a question about admissions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-bold underline"
            >
              Ask us on WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
