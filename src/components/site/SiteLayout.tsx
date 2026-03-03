import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BackToTopButton } from "@/components/site/BackToTopButton";
import { FloatingCallButton } from "@/components/site/FloatingCallButton";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Toaster } from "@/components/ui/toaster";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <BackToTopButton />
      <FloatingCallButton />
      <Toaster />
    </div>
  );
}
