import * as React from "react";

import { LOGO_SRC } from "@/components/site/BrandLogo";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  pathname?: string;
};

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
};

export function Seo({ title, description, image = LOGO_SRC, pathname }: SeoProps) {
  React.useEffect(() => {
    document.title = title;

    const descriptionMeta = ensureMeta('meta[name="description"]', { name: "description" });
    descriptionMeta.setAttribute("content", description);

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: "og:title" });
    ogTitle.setAttribute("content", title);

    const ogDescription = ensureMeta('meta[property="og:description"]', { property: "og:description" });
    ogDescription.setAttribute("content", description);

    const ogType = ensureMeta('meta[property="og:type"]', { property: "og:type" });
    ogType.setAttribute("content", "website");

    const ogImage = ensureMeta('meta[property="og:image"]', { property: "og:image" });
    ogImage.setAttribute("content", new URL(image, window.location.origin).toString());

    const themeColor = ensureMeta('meta[name="theme-color"]', { name: "theme-color" });
    themeColor.setAttribute("content", "#4B6BFF");

    if (pathname) {
      const ogUrl = ensureMeta('meta[property="og:url"]', { property: "og:url" });
      ogUrl.setAttribute("content", new URL(pathname, window.location.origin).toString());
    }
  }, [description, image, pathname, title]);

  return null;
}
