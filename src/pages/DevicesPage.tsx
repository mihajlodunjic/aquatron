import { Link } from "react-router-dom";

import { CtaBanner } from "@/components/site/CtaBanner";
import { IconRow } from "@/components/site/IconRow";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEVICE_CATEGORIES, RECOMMENDATION_FACTORS, SEO } from "@/content/site-content";

const DevicesPage = () => {
  return (
    <PageShell>
      <Seo description={SEO.devices.description} pathname="/aparati" title={SEO.devices.title} />

      <section className="container px-6 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            description="Umesto izmišljanja konkretnih modela, Aquatron pristupa izboru aparata kroz kategorije koje pomažu da lakše procenite kakvo rešenje odgovara vašem prostoru."
            eyebrow="Aparati"
            title="Pregled kategorija aparata za vodu"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {DEVICE_CATEGORIES.map((category) => {
              const Icon = category.icon;

              return (
                <Card key={category.title}>
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="pt-4 text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ul className="grid gap-3 text-sm leading-6 text-muted-foreground">
                      {category.benefits.map((benefit) => (
                        <li className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3" key={benefit}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline">
                      <Link to="/kontakt">Zatraži ponudu</Link>
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
            description="Preporuka nije univerzalna. Najbolji izbor zavisi od toga ko koristi aparat, gde će stajati i koliko je intenzivna svakodnevna potrošnja."
            eyebrow="Preporuka"
            title="Kako biramo odgovarajući aparat"
          />
        </Reveal>
        <Reveal delay={120}>
          <IconRow className="mt-8" columns={3} items={RECOMMENDATION_FACTORS} />
        </Reveal>
      </section>

      <CtaBanner
        className="pt-6"
        description="Pošaljite osnovne informacije o prostoru i očekivanoj potrošnji, a Aquatron će pomoći da izbor aparata bude jasan i praktičan."
        title="Treba vam preporuka kategorije aparata bez nagađanja?"
      />
    </PageShell>
  );
};

export default DevicesPage;
