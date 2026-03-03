import { Link } from "react-router-dom";

import { CTAButtonGroup } from "@/components/site/CTAButtonGroup";
import { COMPANY } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description: string;
  className?: string;
};

export function CtaBanner({ title, description, className }: CtaBannerProps) {
  return (
    <section className={cn("container", className)}>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[image:var(--gradient-primary)] px-6 py-10 text-white shadow-[var(--shadow-glow)] sm:px-10 lg:px-12">
        <div className="bubble-orbs pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">{COMPANY.name}</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <CTAButtonGroup />
            <Button asChild className="bg-white/10 text-white hover:bg-white/20" size="lg" variant="ghost">
              <Link to="/kontakt">Zatraži detalje</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
