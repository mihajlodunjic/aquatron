import * as React from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      aria-label="Vrati se na vrh stranice"
      className={cn(
        "fixed bottom-20 right-4 z-40 h-11 w-11 rounded-full p-0 shadow-[var(--shadow-soft)] transition-all md:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      variant="outline"
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
