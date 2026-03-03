import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CtaBanner } from "@/components/site/CtaBanner";
import { IconRow } from "@/components/site/IconRow";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, CONTACT_CHANNELS, COMPANY, SEO } from "@/content/site-content";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Unesite ime i prezime."),
  phone: z.string().min(6, "Unesite broj telefona."),
  email: z.string().email("Unesite ispravnu email adresu."),
  message: z.string().min(10, "Poruka treba da sadrži bar 10 karaktera."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    const body = [
      "Upit sa Aquatron sajta",
      "",
      `Ime i prezime: ${values.fullName}`,
      `Telefon: ${values.phone}`,
      `Email: ${values.email}`,
      "",
      "Poruka:",
      values.message,
    ].join("\n");

    const query = new URLSearchParams({
      subject: `Aquatron upit - ${values.fullName}`,
      body,
    });

    toast({
      title: "Upit je pripremljen",
      description: "Otvaramo vaš email klijent sa popunjenim podacima.",
    });

    form.reset();

    window.setTimeout(() => {
      window.location.href = `${CONTACT.emailHref}?${query.toString()}`;
    }, 150);
  };

  return (
    <PageShell>
      <Seo description={SEO.contact.description} pathname="/kontakt" title={SEO.contact.title} />

      <section className="container px-6 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            description="Pozovite nas direktno ili pošaljite upit. Aquatron odgovara na potrebe vezane za aparate za vodu, rentiranje i distribuciju vode."
            eyebrow="Kontakt"
            title="Javite se i dogovorimo sledeći korak"
          />
        </Reveal>

        <Reveal delay={120}>
          <IconRow className="mt-8" columns={3} items={CONTACT_CHANNELS} />
        </Reveal>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <Card className="h-full rounded-[2rem]">
              <CardContent className="space-y-8 p-6 sm:p-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Direktan kontakt</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">Pozovite ili pišite</h2>
                </div>

                <div className="grid gap-4">
                  {CONTACT.phones.map((phone) => (
                    <a
                      className="rounded-[1.5rem] border border-white/75 bg-white/80 px-5 py-4 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                      href={phone.href}
                      key={phone.href}
                    >
                      {phone.label}
                    </a>
                  ))}
                  <a
                    className="rounded-[1.5rem] border border-white/75 bg-white/80 px-5 py-4 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                    href={CONTACT.emailHref}
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div className="rounded-[1.75rem] border border-primary/10 bg-primary/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Lokacija</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">{COMPANY.city}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Informativni blok bez dodatnog embed-a, kako bi stranica ostala lagana i bez spoljnog API ključa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="rounded-[2rem]">
              <CardContent className="p-6 sm:p-8">
                <Form {...form}>
                  <form className="grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ime i prezime</FormLabel>
                            <FormControl>
                              <Input placeholder="Vaše ime i prezime" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input placeholder="Broj telefona" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="vas@email.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Poruka</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[160px]"
                              placeholder="Opišite potrebe, broj korisnika i tip prostora."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm leading-6 text-muted-foreground">
                        Slanjem forme pripremate email upit ka adresi {CONTACT.email}.
                      </p>
                      <Button disabled={form.formState.isSubmitting} size="lg" type="submit">
                        Pošalji upit
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        className="pt-6"
        description="Ako vam je potrebna brza informacija, poziv je najkraći put. Za detaljniji opis potreba, pošaljite upit i Aquatron će odgovoriti sa predlogom sledećeg koraka."
        title="Spremni ste za razgovor o aparatu ili dostavi vode?"
      />
    </PageShell>
  );
};

export default ContactPage;
