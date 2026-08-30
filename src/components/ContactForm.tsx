"use client";

import { FormEvent, useState } from "react";
import { PremiumButton } from "@/components/ui/Button";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please describe your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-primary-border bg-primary-bg-2 px-4 py-3 text-primary-text placeholder:text-primary-text-secondary transition-premium focus:border-primary-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="heading-3 text-primary-text">Send Us a Message</h2>

      {submitted && (
        <p className="rounded-lg border border-primary-accent-2 bg-[rgba(16,185,129,0.1)] px-4 py-3 text-sm text-primary-accent-2">
          Thanks — your message has been received. We&apos;ll be in touch soon.
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary-text">
          Name *
        </label>
        <input id="name" name="name" type="text" className={inputClasses} />
        {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary-text">
          Email *
        </label>
        <input id="email" name="email" type="email" className={inputClasses} />
        {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-primary-text">
          Company
        </label>
        <input id="company" name="company" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary-text">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary-text">
          Project Description *
        </label>
        <textarea id="message" name="message" rows={5} className={inputClasses} />
        {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
      </div>

      <PremiumButton type="submit" size="lg" className="mt-2 w-full sm:w-fit">
        Send Message
      </PremiumButton>
    </form>
  );
}
