import { Link } from "react-router-dom";

import { BrandLogo } from "@/components/site/BrandLogo";
import { COMPANY, CONTACT, NAV_ITEMS } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/90">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div className="space-y-4">
          <Link aria-label="Aquatron početna" className="inline-flex max-w-[150px]" to="/">
            <BrandLogo alt="Aquatron logo" className="h-10 w-auto" />
          </Link>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{COMPANY.summary}</p>
          <p className="text-sm font-medium text-foreground">Uz Vas od {COMPANY.founded}.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Navigacija</h2>
          <nav aria-label="Footer navigacija" className="grid gap-3 text-sm text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <Link className="transition-colors hover:text-foreground" key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</h2>
          <div className="grid gap-3 text-sm text-muted-foreground">
            {CONTACT.phones.map((phone) => (
              <a className="transition-colors hover:text-foreground" href={phone.href} key={phone.href}>
                {phone.label}
              </a>
            ))}
            <a className="transition-colors hover:text-foreground" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>
            <p>{COMPANY.city}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
