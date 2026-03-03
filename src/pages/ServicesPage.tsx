import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionImage } from "@/components/site/SectionImage";
import { Seo } from "@/components/site/Seo";
import { SITE_IMAGES } from "@/content/site-images";
import { FAQ_ITEMS, SEO, SERVICES } from "@/content/site-content";

const ServicesPage = () => {
  return (
    <PageShell>
      <Seo description={SEO.services.description} pathname="/usluge" title={SEO.services.title} />

      <section className="container px-6 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            description="Aquatron objedinjuje rentiranje aparata za vodu, prodaju aparata i distribuciju vode u modelima saradnje koji prate potrebe korisnika."
            eyebrow="Usluge"
            title="Tri pravca saradnje, jedno jasno resenje"
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionImage
            alt={SITE_IMAGES.servicesFeature.alt}
            aspect="wide"
            className="mt-8"
            overlay
            src={SITE_IMAGES.servicesFeature.src}
          />
        </Reveal>

        <div className="mt-10 grid gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal delay={index * 80} key={service.id}>
                <section className="section-shell rounded-[2rem] px-6 py-8 sm:px-8" id={service.id}>
                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                    <div className="space-y-4">
                      <div className="flex size-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                        <Icon className="size-7" />
                      </div>
                      <div className="space-y-3">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{service.title}</h2>
                        <p className="text-base leading-7 text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <Card className="rounded-[1.5rem]" key={point}>
                          <CardContent className="p-6">
                            <p className="text-sm leading-6 text-muted-foreground">{point}</p>
                          </CardContent>
                        </Card>
                      ))}
                      <Card className="rounded-[1.5rem] sm:col-span-2">
                        <CardContent className="p-6">
                          <p className="text-sm font-medium leading-6 text-foreground">{service.note}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Najcesca pitanja koja pomazu da brze procenite koja vrsta saradnje ima najvise smisla za vas prostor."
            eyebrow="FAQ"
            title="Cesta pitanja"
          />
        </Reveal>
        <Reveal delay={120}>
          <Card className="mt-8 rounded-[2rem]">
            <CardContent className="p-6 sm:p-8">
              <Accordion className="w-full" collapsible type="single">
                {FAQ_ITEMS.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-left text-base text-foreground">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <CtaBanner
        className="pt-6"
        description="Javite se i opisite broj korisnika, prostor i ocekivani ritam potrosnje. Aquatron zatim predlaze najprakticniji model saradnje."
        title="Niste sigurni da li vam vise odgovara rentiranje, kupovina ili distribucija vode?"
      />
    </PageShell>
  );
};

export default ServicesPage;
