import * as React from "react";

import { cn } from "@/lib/utils";

export const LOGO_SOURCES = ["/aquatron-logo.png", "/logo.png", "/aquatron.png", "/logo.jpg"] as const;
export const LOGO_SRC = LOGO_SOURCES[0];

type BrandLogoProps = {
  alt?: string;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

export function BrandLogo({ alt = "Aquatron logo", className, decorative = false, priority = false }: BrandLogoProps) {
  const [sourceIndex, setSourceIndex] = React.useState(0);

  const handleError = React.useCallback(() => {
    setSourceIndex((current) => (current < LOGO_SOURCES.length - 1 ? current + 1 : current));
  }, []);

  return (
    <img
      alt={decorative ? "" : alt}
      aria-hidden={decorative}
      className={cn("h-auto w-full object-contain", className)}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      onError={handleError}
      src={LOGO_SOURCES[sourceIndex]}
    />
  );
}
