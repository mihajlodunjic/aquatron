import { PhoneCall } from "lucide-react";

import { PRIMARY_PHONE } from "@/content/site-content";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
  return (
    <Button
      asChild
      aria-label={`Pozovi Aquatron na ${PRIMARY_PHONE.label}`}
      className="fixed bottom-4 right-4 z-40 rounded-full px-4 shadow-[var(--shadow-glow)] md:hidden"
      size="lg"
    >
      <a href={PRIMARY_PHONE.href}>
        <PhoneCall className="size-4" />
        Pozovi
      </a>
    </Button>
  );
}
