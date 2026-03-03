export type SiteImage = {
  src: string;
  alt: string;
};

export const SITE_IMAGES = {
  homeHero: {
    src: "/images/hero-water.jpg",
    alt: "Casa vode u svetlom ambijentu",
  },
  servicesFeature: {
    src: "/images/services-water-setup.jpg",
    alt: "Aparat i voda u uredjenom poslovnom prostoru",
  },
  devicesFeature: {
    src: "/images/devices-workspace-water.jpg",
    alt: "Radni sto sa casom vode u modernom prostoru",
  },
  deliveryFeature: {
    src: "/images/delivery-water.jpg",
    alt: "Pripremljena voda za isporuku",
  },
  aboutFeature: {
    src: "/images/about-office.jpg",
    alt: "Uredan poslovni prostor za osvezenje",
  },
} as const;
