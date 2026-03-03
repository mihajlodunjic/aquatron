import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  priority?: boolean;
  overlay?: boolean;
  className?: string;
  imageClassName?: string;
};

const aspectClassName: Record<NonNullable<SectionImageProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export function SectionImage({
  src,
  alt,
  aspect = "landscape",
  priority = false,
  overlay = false,
  className,
  imageClassName,
}: SectionImageProps) {
  return (
    <div className={cn("section-image-shell group", aspectClassName[aspect], className)}>
      <img
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]",
          imageClassName,
        )}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        src={src}
      />
      {overlay ? <div aria-hidden="true" className="section-image-overlay" /> : null}
    </div>
  );
}
