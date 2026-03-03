import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

import { PRIMARY_PHONE } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonGroupProps = {
  className?: string;
  centered?: boolean;
};

export function CTAButtonGroup({ className, centered = false }: CTAButtonGroupProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", centered && "justify-center", className)}>
      <Button asChild size="lg">
        <a aria-label={`Pozovi Aquatron na ${PRIMARY_PHONE.label}`} href={PRIMARY_PHONE.href}>
          <PhoneCall className="size-4" />
          Pozovi odmah
        </a>
      </Button>
      <Button asChild size="lg" variant="outline">
        <Link to="/kontakt">
          Pošalji upit
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
