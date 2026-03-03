import * as React from "react";
import { Menu, PhoneCall } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { BrandLogo } from "@/components/site/BrandLogo";
import { NAV_ITEMS, PRIMARY_PHONE } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
    isActive && "bg-white/80 text-foreground shadow-[var(--shadow-soft)]",
  );

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 glass-header">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link aria-label="Aquatron početna" className="flex max-w-[180px] flex-none items-center" to="/">
          <BrandLogo alt="Aquatron logo" className="h-11 w-auto" priority />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink className={navLinkClassName} end={item.href === "/"} key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <Link to="/kontakt">Pošalji upit</Link>
          </Button>
          <Button asChild>
            <a aria-label={`Pozovi Aquatron na ${PRIMARY_PHONE.label}`} href={PRIMARY_PHONE.href}>
              <PhoneCall className="size-4" />
              Pozovi
            </a>
          </Button>
        </div>

        <Sheet onOpenChange={setOpen} open={open}>
          <SheetTrigger asChild className="lg:hidden">
            <Button aria-label="Otvori navigaciju" size="icon" variant="outline">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-white/60 bg-white/95 sm:max-w-sm" side="right">
            <SheetTitle className="sr-only">Navigacija</SheetTitle>
            <div className="mt-8 space-y-8">
              <Link aria-label="Aquatron početna" className="inline-flex max-w-[150px]" onClick={() => setOpen(false)} to="/">
                <BrandLogo alt="Aquatron logo" className="h-10 w-auto" />
              </Link>
              <nav aria-label="Mobilna navigacija" className="grid gap-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        "rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground",
                        isActive && "bg-primary/10 text-foreground",
                      )
                    }
                    end={item.href === "/"}
                    key={item.href}
                    onClick={() => setOpen(false)}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="grid gap-3">
                <Button asChild className="w-full">
                  <a aria-label={`Pozovi Aquatron na ${PRIMARY_PHONE.label}`} href={PRIMARY_PHONE.href}>
                    <PhoneCall className="size-4" />
                    Pozovi
                  </a>
                </Button>
                <Button asChild className="w-full" variant="outline">
                  <Link onClick={() => setOpen(false)} to="/kontakt">
                    Pošalji upit
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
