"use client";

import { FormEvent, useState } from "react";
import { PremiumButton } from "@/components/ui/Button";

interface FormErrors {
  name?: string;
  email?: string;
  inquiryRegarding?: string;
  message?: string;
}

interface InquiryFormProps {
  submitLabel?: string;
  onCancel?: () => void;
  showHeading?: boolean;
}

export function InquiryForm({
  submitLabel = "Send Inquiry",
  onCancel,
  showHeading = true,
}: InquiryFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const inquiryRegarding = String(form.get("inquiryRegarding") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!inquiryRegarding) nextErrors.inquiryRegarding = "Let us know what this is regarding.";
    if (!message) nextErrors.message = "Please describe your inquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border-on-paper bg-card-on-paper px-4 py-3 text-ink placeholder:text-text-ink-secondary transition-premium focus:border-emerald focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {showHeading && <h2 className="heading-3 text-ink">Send Us a Message</h2>}

      {submitted && (
        <p className="rounded-xl border border-teal bg-[rgba(13,148,136,0.1)] px-4 py-3 text-sm text-teal">
          Thanks — your inquiry has been received. We&apos;ll be in touch soon.
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
          Name *
        </label>
        <input id="name" name="name" type="text" className={inputClasses} />
        {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
          Email *
        </label>
        <input id="email" name="email" type="email" className={inputClasses} />
        {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
          Company
        </label>
        <input id="company" name="company" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="inquiryRegarding" className="mb-2 block text-sm font-medium text-ink">
          Inquiry Regarding *
        </label>
        <input
          id="inquiryRegarding"
          name="inquiryRegarding"
          type="text"
          placeholder="e.g. Custom Software Development"
          className={inputClasses}
        />
        {errors.inquiryRegarding && (
          <p className="mt-2 text-xs text-red-600">{errors.inquiryRegarding}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Inquiry Details *
        </label>
        <textarea id="message" name="message" rows={5} className={inputClasses} />
        {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="mt-2 flex gap-3">
        {onCancel && (
          <PremiumButton type="button" variant="secondary" size="lg" onClick={onCancel}>
            Cancel
          </PremiumButton>
        )}
        <PremiumButton type="submit" size="lg" className={onCancel ? "flex-1" : "w-full sm:w-fit"}>
          {submitLabel}
        </PremiumButton>
      </div>
    </form>
  );
}
