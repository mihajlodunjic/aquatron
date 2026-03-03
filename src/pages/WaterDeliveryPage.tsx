import { CtaBanner } from "@/components/site/CtaBanner";
import { IconRow } from "@/components/site/IconRow";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionImage } from "@/components/site/SectionImage";
import { Seo } from "@/components/site/Seo";
import { SITE_IMAGES } from "@/content/site-images";
import { DELIVERY_BENEFITS, DELIVERY_PLANS, DELIVERY_STEPS, SEO } from "@/content/site-content";

const WaterDeliveryPage = () => {
  return (
    <PageShell>
      <Seo description={SEO.delivery.description} pathname="/dostava-vode" title={SEO.delivery.title} />

      <section className="container px-6 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            description="Dostava vode je organizovana tako da prati stvarne potrebe prostora, bilo da je saradnja jednokratna, redovna ili potpuno fleksibilna."
            eyebrow="Dostava vode"
            title="Kako funkcionise snabdevanje vodom"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <SectionImage alt={SITE_IMAGES.deliveryFeature.alt} aspect="wide" overlay src={SITE_IMAGES.deliveryFeature.src} />
            <IconRow columns={3} items={DELIVERY_STEPS} />
          </div>
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Aquatron pristupa dostavi kao delu sireg sistema osvezenja, sa ciljem da voda bude dostupna onda kada je korisnicima potrebna."
            eyebrow="Benefiti"
            title="Zasto organizovana dostava pravi razliku"
          />
        </Reveal>
        <Reveal delay={120}>
          <IconRow className="mt-8" columns={3} items={DELIVERY_BENEFITS} />
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            description="Saradnja moze biti prilagodjena intenzitetu koriscenja, sezonskim promenama i nacinu na koji vas prostor funkcionise."
            eyebrow="Planovi saradnje"
            title="Modeli dostave vode"
          />
        </Reveal>
        <Reveal delay={120}>
          <IconRow className="mt-8" columns={3} items={DELIVERY_PLANS} />
        </Reveal>
      </section>

      <CtaBanner
        className="pt-6"
        description="Javite se i definisemo ritam snabdevanja koji odgovara vasem prostoru, korisnicima i nacinu rada."
        title="Potrebna vam je dostava vode sa jasnim dogovorom i kontinuitetom?"
      />
    </PageShell>
  );
};

export default WaterDeliveryPage;
