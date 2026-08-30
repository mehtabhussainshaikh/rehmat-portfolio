import { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2.4h3.1l-6.8 7.8 8 10.4h-6.3l-4.9-6.4-5.6 6.4H3.3l7.3-8.4-7.7-9.8h6.4l4.4 5.9 5.2-5.9zm-1.1 16.3h1.7L7.3 4.2H5.5l12.3 14.5z" />
    </svg>
  );
}
