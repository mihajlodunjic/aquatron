import { CtaBanner } from "@/components/site/CtaBanner";
import { IconRow } from "@/components/site/IconRow";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionImage } from "@/components/site/SectionImage";
import { Seo } from "@/components/site/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_IMAGES } from "@/content/site-images";
import { ABOUT_VALUES, COMPANY, PARTNERSHIP_POINTS, SEO, TRUST_ITEMS } from "@/content/site-content";

const AboutPage = () => {
  return (
    <PageShell>
      <Seo description={SEO.about.description} pathname="/o-nama" title={SEO.about.title} />

      <section className="container px-6 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            description="Aquatron posluje od 2009. godine u Beogradu i gradi ugled kroz doslednost, korektan odnos i prakticna resenja za vodu i aparate."
            eyebrow="O nama"
            title="Dugogodisnje prisustvo, jasan pristup i fokus na poverenje"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TRUST_ITEMS.map((item) => (
              <Card className="rounded-[1.5rem]" key={item.value}>
                <CardContent className="p-6">
                  <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <div className="section-shell rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Nasa prica</p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Od {COMPANY.founded}. do danas, sa istim fokusom na resenje za osvezenje
                </h2>
                <div className="space-y-4 text-base leading-7 text-muted-foreground">
                  <p>
                    Aquatron je zapoceo poslovanje {COMPANY.founded}. godine u Beogradu sa jasnom idejom da
                    korisnicima ponudi pregledno i pouzdano resenje za vodu i aparate za vodu.
                  </p>
                  <p>
                    Tokom godina poslovanje se razvijalo kroz uspesne saradnje, prepoznatljiv pristup komunikaciji i
                    fokus na potrebe prostora, a ne na genericka resenja.
                  </p>
                </div>
              </div>
              <SectionImage alt={SITE_IMAGES.aboutFeature.alt} aspect="landscape" overlay src={SITE_IMAGES.aboutFeature.src} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Vrednosti koje oblikuju svaki predlog saradnje i nacin na koji Aquatron pristupa klijentima."
            eyebrow="Vrednosti"
            title="Sta Aquatron stavlja u prvi plan"
          />
        </Reveal>
        <Reveal delay={120}>
          <IconRow className="mt-8" columns={3} items={ABOUT_VALUES} />
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Ugled se gradi kroz odnos, kontinuitet i spremnost da se saradnja prilagodi konkretnim potrebama."
            eyebrow="Partnerstva i saradnje"
            title="Dugorocni odnos umesto jednokratnog resenja"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {PARTNERSHIP_POINTS.map((point) => (
              <Card key={point}>
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBanner
        className="pt-6"
        description="Ako trazite partnera sa iskustvom, lokalnim prisustvom i jasnim pristupom, Aquatron je spreman za razgovor."
        title="Vazno vam je poverenje jednako kao i kvalitet usluge?"
      />
    </PageShell>
  );
};

export default AboutPage;
