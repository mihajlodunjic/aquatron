import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

import { BrandLogo } from "@/components/site/BrandLogo";
import { CTAButtonGroup } from "@/components/site/CTAButtonGroup";
import { CtaBanner } from "@/components/site/CtaBanner";
import { IconRow } from "@/components/site/IconRow";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  COMPANY,
  PRIMARY_PHONE,
  PROCESS_STEPS,
  SEO,
  SERVICE_PREVIEW,
  TRUST_ITEMS,
  WHY_AQUATRON,
} from "@/content/site-content";

const Index = () => {
  return (
    <PageShell>
      <Seo description={SEO.home.description} pathname="/" title={SEO.home.title} />

      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6 py-12 sm:py-16">
        <div className="bubble-orbs pointer-events-none absolute inset-0" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="relative">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-sm font-medium text-primary shadow-[var(--shadow-soft)]">
                  {COMPANY.name} - {COMPANY.supportLine}
                </span>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    Resenje za <span className="gradient-text">osvezenje.</span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    Rentiranje i prodaja aparata za vodu + distribucija vode. Uz Vas od {COMPANY.founded}. godine.
                  </p>
                </div>
                <CTAButtonGroup />
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[var(--shadow-soft)]">
                    <PhoneCall className="size-4 text-primary" />
                    {PRIMARY_PHONE.label}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[var(--shadow-soft)]">
                    <ArrowRight className="size-4 text-primary" />
                    Beograd i okolina
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal className="relative" delay={120}>
              <div className="relative rounded-[2rem] section-shell px-6 py-8 sm:px-8 sm:py-10">
                <div className="bubble-orbs pointer-events-none absolute inset-0 opacity-80" />
                <BrandLogo className="hero-watermark absolute -right-8 top-6 w-52 sm:w-64" decorative />
                <div className="relative space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Check className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Aquatron usluge</p>
                      <p className="mt-1 text-sm text-muted-foreground">Pregled glavnih resenja za osvezenje</p>
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/75 bg-white/80 p-5 shadow-[var(--shadow-soft)]">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-sm font-medium text-foreground">
                      <Check className="size-4 text-primary" />
                      Resenje za osvezenje
                    </div>
                    <div className="mt-5 space-y-2">
                      <p className="text-lg font-semibold text-foreground">Rentiranje, prodaja i dostava u jednom toku</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Brz pregled usluga i jasan sledeci korak bez preopterecenja pocetne stranice.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {SERVICE_PREVIEW.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          className="flex items-start gap-4 rounded-[1.5rem] border border-white/75 bg-white/80 px-5 py-4 shadow-[var(--shadow-soft)]"
                          key={item.title}
                        >
                          <div className="mt-1 rounded-2xl bg-primary/10 p-3 text-primary">
                            <Icon className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                            <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="rounded-[1.5rem] border border-primary/10 bg-primary/5 px-5 py-4">
                    <p className="text-sm font-medium text-foreground">
                      Jedan kontakt, jasan predlog i dogovoreno resenje za aparat i distribuciju vode.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {TRUST_ITEMS.map((item, index) => (
              <Card className="rounded-[1.5rem]" key={item.value}>
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">#{index + 1}</p>
                  <p className="mt-4 text-3xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Tri pravca saradnje koji se uklapaju u razlicite prostore, navike koriscenja i modele snabdevanja."
            eyebrow="Usluge"
            title="Sta Aquatron pokriva"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {SERVICE_PREVIEW.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="pt-4 text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <Button asChild variant="outline">
                      <Link to="/usluge">Saznaj vise</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Proces je osmisljen tako da korisnik brzo razume sledeci korak i bez komplikacija stigne do predloga resenja."
            eyebrow="Proces"
            title="Kako izgleda saradnja"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card key={step.title}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Saradnja je vodjena prakticnoscu, jasnom komunikacijom i resenjima koja imaju smisla za svakodnevni rad ili boravak."
            eyebrow="Zasto Aquatron"
            title="Pouzdan partner za vodu i aparate"
          />
        </Reveal>
        <Reveal delay={120}>
          <IconRow className="mt-8" columns={4} items={WHY_AQUATRON} />
        </Reveal>
      </section>

      <CtaBanner
        className="pt-8"
        description="Pozovite Aquatron ili posaljite upit i dobicete jasan sledeci korak za aparat, dostavu vode ili kombinovano resenje."
        title="Treba vam jednostavno i pouzdano resenje za osvezenje?"
      />
    </PageShell>
  );
};

export default Index;
