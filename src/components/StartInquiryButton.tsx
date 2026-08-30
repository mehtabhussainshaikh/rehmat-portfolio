import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { buttonClasses, ButtonSize, ButtonVariant } from "@/components/ui/Button";

interface StartInquiryButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Partial<Pick<LinkProps, "href">> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function StartInquiryButton({
  children,
  variant,
  size,
  className,
  href = "/contact",
  ...rest
}: StartInquiryButtonProps) {
  return (
    <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      {children ?? "Start an Inquiry"}
    </Link>
  );
}
