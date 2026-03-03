import { Link } from "react-router-dom";

import { CTAButtonGroup } from "@/components/site/CTAButtonGroup";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { SEO } from "@/content/site-content";

const NotFound = () => {
  return (
    <PageShell className="flex min-h-[70vh] items-center">
      <Seo description={SEO.notFound.description} title={SEO.notFound.title} />
      <section className="container px-6 py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="section-shell rounded-[2.25rem] px-6 py-12 sm:px-10 sm:py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">404</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ova stranica nije pronađena
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Moguće je da je link promenjen ili da stranica više nije dostupna. Vratite se na početnu ili nas
              kontaktirajte direktno.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CTAButtonGroup centered />
              <Button asChild variant="ghost">
                <Link to="/">Nazad na početnu</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
};

export default NotFound;
