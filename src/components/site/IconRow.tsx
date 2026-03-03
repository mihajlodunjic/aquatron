import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type IconRowItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IconRowProps = {
  items: IconRowItem[];
  className?: string;
  columns?: 2 | 3 | 4;
};

const columnClassName: Record<NonNullable<IconRowProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

export function IconRow({ items, className, columns = 3 }: IconRowProps) {
  return (
    <div className={cn("grid gap-4", columnClassName[columns], className)}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card className="group" key={item.title}>
            <CardContent className="p-6">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-6" />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
