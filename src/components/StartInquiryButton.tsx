"use client";

import { ButtonHTMLAttributes } from "react";
import { PremiumButton, ButtonSize, ButtonVariant } from "@/components/ui/Button";
import { useInquiryModal } from "@/components/InquiryModalProvider";

interface StartInquiryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function StartInquiryButton({
  children,
  variant,
  size,
  className,
  onClick,
  ...rest
}: StartInquiryButtonProps) {
  const { open } = useInquiryModal();

  return (
    <PremiumButton
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        open();
      }}
      {...rest}
    >
      {children ?? "Start an Inquiry"}
    </PremiumButton>
  );
}
