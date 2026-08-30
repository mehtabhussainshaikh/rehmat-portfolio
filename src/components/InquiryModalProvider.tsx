"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

interface InquiryModalContextValue {
  open: () => void;
  close: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextValue | null>(null);

export function useInquiryModal() {
  const ctx = useContext(InquiryModalContext);
  if (!ctx) {
    throw new Error("useInquiryModal must be used within InquiryModalProvider");
  }
  return ctx;
}

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <InquiryModalContext.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4"
          onClick={close}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card-on-paper shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-amber px-8 py-6">
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 text-navy/70 transition-premium hover:text-navy"
              >
                <X size={20} />
              </button>
              <h2 className="heading-3 text-navy">Start an Inquiry</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                Tell us what you&apos;re building. We&apos;ll reply within one business
                day with a next step.
              </p>
            </div>

            <div className="px-8 py-6">
              <InquiryForm submitLabel="Send Inquiry" onCancel={close} showHeading={false} />
            </div>
          </div>
        </div>
      )}
    </InquiryModalContext.Provider>
  );
}
