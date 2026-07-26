"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles, Lock } from "lucide-react";
import { LAHORE_AREAS, CHILD_AGE_OPTIONS, PROGRAMS } from "@/lib/constants";
import { validateWhatsAppNumber } from "@/lib/utils";

export function LeadForm() {
  const router = useRouter();

  // Form Fields State
  const [parentName, setParentName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [childAge, setChildAge] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [area, setArea] = useState("Model Town");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);

  // Bot protection & hidden fields
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt, setRenderedAt] = useState<number>(0);

  // Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    setRenderedAt(Date.now());
    
    // Store UTMs in sessionStorage if present in URL
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
      utmKeys.forEach((key) => {
        const val = urlParams.get(key);
        if (val) {
          sessionStorage.setItem(`kgp_${key}`, val);
        }
      });
      if (!sessionStorage.getItem("kgp_landing_page")) {
        sessionStorage.setItem("kgp_landing_page", window.location.href);
      }
      if (!sessionStorage.getItem("kgp_referrer") && document.referrer) {
        sessionStorage.setItem("kgp_referrer", document.referrer);
      }
    }
  }, []);

  const toggleProgram = (title: string) => {
    if (selectedPrograms.includes(title)) {
      setSelectedPrograms(selectedPrograms.filter((p) => p !== title));
    } else {
      setSelectedPrograms([...selectedPrograms, title]);
    }
    setErrors((prev) => ({ ...prev, programs: "" }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: string) => {
    const newErrors = { ...errors };

    if (field === "parentName") {
      if (!parentName.trim()) {
        newErrors.parentName = "Parent name is required";
      } else {
        delete newErrors.parentName;
      }
    }

    if (field === "whatsapp") {
      if (!whatsapp.trim()) {
        newErrors.whatsapp = "WhatsApp number is required";
      } else if (!validateWhatsAppNumber(whatsapp)) {
        newErrors.whatsapp = "Please enter a valid Pakistani number (e.g. 03331234567)";
      } else {
        delete newErrors.whatsapp;
      }
    }

    if (field === "childAge") {
      if (!childAge) {
        newErrors.childAge = "Please select child age";
      } else {
        delete newErrors.childAge;
      }
    }

    if (field === "programs") {
      if (selectedPrograms.length === 0) {
        newErrors.programs = "Select at least one program";
      } else {
        delete newErrors.programs;
      }
    }

    if (field === "area") {
      if (!area) {
        newErrors.area = "Please select your area in Lahore";
      } else {
        delete newErrors.area;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fire form_start tracking if first attempt
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "form_start" });
    }

    // Validate all required fields
    const isNameValid = validateField("parentName");
    const isPhoneValid = validateField("whatsapp");
    const isAgeValid = validateField("childAge");
    const isProgramValid = validateField("programs");
    const isAreaValid = validateField("area");

    if (!isNameValid || !isPhoneValid || !isAgeValid || !isProgramValid || !isAreaValid) {
      setTouched({ parentName: true, whatsapp: true, childAge: true, programs: true, area: true });
      return;
    }

    if (!consent) {
      setSubmitError("Please confirm your consent to be contacted.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Retrieve UTMs & attribution params
    const getStorage = (key: string) => (typeof window !== "undefined" ? sessionStorage.getItem(`kgp_${key}`) || "" : "");
    const payload = {
      parent_name: parentName.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim() || null,
      child_age: childAge,
      programs: selectedPrograms,
      area: area,
      preferred_time: preferredTime.trim() || null,
      message: message.trim() || null,
      consent: consent,
      honeypot: honeypot,
      rendered_at: renderedAt,
      // Attribution
      utm_source: getStorage("utm_source"),
      utm_medium: getStorage("utm_medium"),
      utm_campaign: getStorage("utm_campaign"),
      utm_term: getStorage("utm_term"),
      utm_content: getStorage("utm_content"),
      gclid: getStorage("gclid"),
      fbclid: getStorage("fbclid"),
      landing_page: getStorage("landing_page"),
      referrer: getStorage("referrer"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      // Push generate_lead event to dataLayer
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          program: selectedPrograms.join(", "),
          child_age: childAge,
          area: area,
          value: 8000,
          currency: "PKR",
        });
      }

      // Redirect to thank you destination
      router.push("/thank-you");
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(err.message || "An unexpected error occurred. Please try again or WhatsApp us directly.");
    }
  };

  return (
    <div id="lead-form" className="bg-white rounded-card p-6 sm:p-8 border border-surface shadow-floating space-y-6">
      
      {/* Form Header */}
      <div className="space-y-2 border-b border-surface pb-4">
        <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-honey-accent" />
          <span>Book a Free Visit &amp; Fee Enquiry</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-ink">
          Schedule Your Personal Campus Tour
        </h3>
        <p className="text-xs text-ink-muted leading-relaxed">
          Takes ~30 seconds. Meets staff, inspects facility &amp; receives 2026 fee breakdown.
        </p>
      </div>

      {submitError && (
        <div className="p-4 rounded-xl bg-status-error/10 border border-status-error/20 text-status-error text-xs flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        
        {/* Hidden Honeypot Field for Spam Protection */}
        <input
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* 1. Parent's Name (Required) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink uppercase tracking-wider">
            1. Parent&apos;s Full Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ayesha Malik"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            onBlur={() => handleBlur("parentName")}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink placeholder:text-ink-muted/50 bg-base focus:outline-none transition-colors ${
              touched.parentName && errors.parentName
                ? "border-status-error focus:ring-1 focus:ring-status-error"
                : "border-surface focus:border-brand focus:ring-1 focus:ring-brand"
            }`}
          />
          {touched.parentName && errors.parentName && (
            <p className="text-[11px] text-status-error font-medium">{errors.parentName}</p>
          )}
        </div>

        {/* 2. WhatsApp Number (Required) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink uppercase tracking-wider">
            2. WhatsApp Number <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              required
              placeholder="e.g. 0333 1234567"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              onBlur={() => handleBlur("whatsapp")}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-ink placeholder:text-ink-muted/50 bg-base focus:outline-none transition-colors ${
                touched.whatsapp && errors.whatsapp
                  ? "border-status-error focus:ring-1 focus:ring-status-error"
                  : "border-surface focus:border-brand focus:ring-1 focus:ring-brand"
              }`}
            />
            <Phone className="w-4 h-4 text-ink-muted absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
          {touched.whatsapp && errors.whatsapp && (
            <p className="text-[11px] text-status-error font-medium">{errors.whatsapp}</p>
          )}
        </div>

        {/* 3. Child's Age (Required) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink uppercase tracking-wider">
            3. Child&apos;s Age <span className="text-brand">*</span>
          </label>
          <select
            required
            value={childAge}
            onChange={(e) => {
              setChildAge(e.target.value);
              setErrors((prev) => ({ ...prev, childAge: "" }));
            }}
            onBlur={() => handleBlur("childAge")}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-base focus:outline-none transition-colors ${
              touched.childAge && errors.childAge
                ? "border-status-error focus:ring-1 focus:ring-status-error"
                : "border-surface focus:border-brand focus:ring-1 focus:ring-brand"
            }`}
          >
            <option value="" disabled>
              Select child age...
            </option>
            {CHILD_AGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt} years
              </option>
            ))}
          </select>
          {touched.childAge && errors.childAge && (
            <p className="text-[11px] text-status-error font-medium">{errors.childAge}</p>
          )}
        </div>

        {/* 4. Interested Programs (Required Multi-Select) */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-ink uppercase tracking-wider">
            4. Interested In <span className="text-brand">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {PROGRAMS.map((prog) => {
              const isSelected = selectedPrograms.includes(prog.title);
              return (
                <button
                  type="button"
                  key={prog.id}
                  onClick={() => toggleProgram(prog.title)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-brand/10 border-brand text-brand"
                      : "bg-base border-surface text-ink hover:bg-surface"
                  }`}
                >
                  <span>{prog.title}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />}
                </button>
              );
            })}
          </div>
          {touched.programs && errors.programs && (
            <p className="text-[11px] text-status-error font-medium">{errors.programs}</p>
          )}
        </div>

        {/* 5. Area in Lahore (Required Select ordered by Model Town proximity) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink uppercase tracking-wider">
            5. Your Area in Lahore <span className="text-brand">*</span>
          </label>
          <select
            required
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              setErrors((prev) => ({ ...prev, area: "" }));
            }}
            onBlur={() => handleBlur("area")}
            className="w-full px-4 py-3 rounded-xl border border-surface text-sm text-ink bg-base focus:border-brand focus:outline-none"
          >
            {LAHORE_AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* 6. Preferred Visit Time (Optional) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider">
            6. Preferred Visit Date / Time <span className="text-ink-muted font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Tomorrow morning around 10:30 AM"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-surface text-sm text-ink placeholder:text-ink-muted/50 bg-base focus:border-brand focus:outline-none"
          />
        </div>

        {/* 7. Message (Optional) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider">
            7. Message or Questions <span className="text-ink-muted font-normal">(Optional)</span>
          </label>
          <textarea
            rows={2}
            placeholder="Any specific questions for our staff..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-surface text-sm text-ink placeholder:text-ink-muted/50 bg-base focus:border-brand focus:outline-none resize-none"
          />
        </div>

        {/* 8. Email (Optional, Placed Last) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider">
            8. Email Address <span className="text-ink-muted font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            placeholder="e.g. parent@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-surface text-sm text-ink placeholder:text-ink-muted/50 bg-base focus:border-brand focus:outline-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-brand border-surface focus:ring-brand"
            />
            <span className="text-xs text-ink-muted leading-tight">
              I agree to be contacted via WhatsApp/Call regarding admissions and fee details.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-brand hover:bg-brand-dark text-white font-heading font-extrabold text-base rounded-pill shadow-soft-subtle hover:shadow-floating transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Confirm &amp; Book Free Visit</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-ink-muted pt-1">
          <Lock className="w-3 h-3 text-teal-trust" />
          <span>Your details are private &amp; never shared with third parties.</span>
        </div>

      </form>

    </div>
  );
}
