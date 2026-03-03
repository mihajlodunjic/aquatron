import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Clock3,
  Droplets,
  Handshake,
  MapPin,
  MessageSquare,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Waves,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ContactPhone = {
  label: string;
  href: string;
  primary?: boolean;
};

export type SeoEntry = {
  title: string;
  description: string;
};

export type SiteFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceSection = {
  id: string;
  title: string;
  description: string;
  points: string[];
  note: string;
  icon: LucideIcon;
};

export type DeviceCategory = {
  title: string;
  benefits: string[];
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const COMPANY = {
  name: "Aquatron",
  city: "Beograd, Srbija",
  tagline: "Rešenje za osveženje.",
  supportLine: "Uz Vas od 2009. godine",
  founded: "2009",
  summary:
    "Rentiranje i prodaja aparata za vodu, kao i distribucija vode za poslovne i privatne korisnike u Beogradu.",
};

export const CONTACT = {
  phones: [
    { label: "064/11-22-537", href: "tel:0641122537", primary: true },
    { label: "062/87-55-996", href: "tel:0628755996" },
    { label: "064/57-46-287", href: "tel:0645746287" },
  ] satisfies ContactPhone[],
  email: "aquatron01@yahoo.com",
  emailHref: "mailto:aquatron01@yahoo.com",
};

export const PRIMARY_PHONE = CONTACT.phones.find((phone) => phone.primary) ?? CONTACT.phones[0];

export const NAV_ITEMS: NavItem[] = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "Aparati", href: "/aparati" },
  { label: "Dostava vode", href: "/dostava-vode" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SEO: Record<string, SeoEntry> = {
  home: {
    title: "Aquatron | Rentiranje aparata za vodu, prodaja i distribucija vode",
    description:
      "Aquatron iz Beograda od 2009. nudi rentiranje i prodaju aparata za vodu, kao i distribuciju vode za firme i domaćinstva.",
  },
  services: {
    title: "Usluge | Aquatron",
    description:
      "Pregled Aquatron usluga: rentiranje aparata za vodu, prodaja rešenja prema potrebama i distribucija vode po dogovoru.",
  },
  devices: {
    title: "Aparati | Aquatron",
    description:
      "Istražite Aquatron kategorije aparata za vodu i saznajte kako biramo preporuku prema prostoru, broju korisnika i potrošnji.",
  },
  delivery: {
    title: "Dostava vode | Aquatron",
    description:
      "Saznajte kako funkcioniše Aquatron dostava vode, koje su prednosti redovnog snabdevanja i kako izgleda saradnja po dogovoru.",
  },
  about: {
    title: "O nama | Aquatron",
    description:
      "Aquatron posluje u Beogradu od 2009. godine i gradi ugled kroz pouzdanost, kvalitet usluge i saradnje sa klijentima.",
  },
  contact: {
    title: "Kontakt | Aquatron",
    description:
      "Kontaktirajte Aquatron telefonom ili emailom i pošaljite upit za rentiranje, prodaju aparata za vodu ili distribuciju vode.",
  },
  notFound: {
    title: "Stranica nije pronađena | Aquatron",
    description: "Tražena stranica ne postoji. Vratite se na početnu stranicu Aquatron sajta.",
  },
};

export const TRUST_ITEMS = [
  { value: "Od 2009.", label: "kontinuitet poslovanja" },
  { value: "10+ godina", label: "iskustva u radu sa klijentima" },
  { value: "Beograd", label: "lokalno prisustvo i saradnja" },
];

export const SERVICE_PREVIEW: SiteFeature[] = [
  {
    title: "Rentiranje aparata",
    description: "Fleksibilno rešenje za kancelarije, ordinacije, salone i druge prostore.",
    icon: Droplets,
  },
  {
    title: "Prodaja aparata",
    description: "Izbor aparata prema broju korisnika, ritmu korišćenja i prostoru.",
    icon: Sparkles,
  },
  {
    title: "Distribucija vode",
    description: "Jednokratna ili redovna dostava vode u skladu sa dogovorom i potrebama.",
    icon: Truck,
  },
];

export const PROCESS_STEPS: SiteFeature[] = [
  {
    title: "Kontakt",
    description: "Javite se telefonom ili preko upita i opišite potrebe svog prostora.",
    icon: PhoneCall,
  },
  {
    title: "Predlog rešenja",
    description: "Predlažemo model saradnje i vrstu aparata prema broju korisnika i dinamici potrošnje.",
    icon: MessageSquare,
  },
  {
    title: "Isporuka i instalacija",
    description: "Dogovaramo isporuku aparata ili vode i početak saradnje u tempu koji vam odgovara.",
    icon: PackageCheck,
  },
];

export const WHY_AQUATRON: SiteFeature[] = [
  {
    title: "Pouzdana saradnja",
    description: "Dugogodišnje poslovanje i jasan dogovor bez komplikovanja procesa.",
    icon: ShieldCheck,
  },
  {
    title: "Brza komunikacija",
    description: "Kontakt kanali su jednostavni, a odgovor usmeren na konkretno rešenje.",
    icon: Clock3,
  },
  {
    title: "Rešenja po meri prostora",
    description: "Ponuda se usklađuje sa obimom korišćenja, rasporedom i tipom korisnika.",
    icon: Building2,
  },
  {
    title: "Dostupnost i kontinuitet",
    description: "Distribucija vode i aparati planiraju se tako da osveženje bude stalno dostupno.",
    icon: Waves,
  },
];

export const SERVICES: ServiceSection[] = [
  {
    id: "rentiranje",
    title: "Rentiranje aparata za vodu",
    description:
      "Praktična opcija za firme i prostore koji žele funkcionalno rešenje bez dodatnog opterećenja kupovine opreme unapred.",
    points: [
      "Pogodno za kancelarije, salone, ordinacije i druge poslovne prostore.",
      "Model saradnje može da se uskladi sa obimom korišćenja i brojem korisnika.",
      "Detalji podrške i održavanja definišu se po dogovoru i u skladu sa potrebama.",
    ],
    note: "Fokus je na tome da aparat i snabdevanje budu usklađeni sa realnim ritmom korišćenja.",
    icon: Droplets,
  },
  {
    id: "prodaja",
    title: "Prodaja aparata za vodu",
    description:
      "Za klijente koji žele trajno rešenje, Aquatron pomaže pri izboru kategorije aparata prema prostoru i nameni.",
    points: [
      "Izbor aparata može da prati broj zaposlenih, raspoloživi prostor i dnevnu potrošnju.",
      "Naglasak je na praktičnosti, pouzdanosti i lakoći uklapanja u postojeći ambijent.",
      "Preporuka se daje prema vašim prioritetima, bez nametanja nepotrebno kompleksnih rešenja.",
    ],
    note: "Kupovina je namenjena onima koji žele sopstveni uređaj i jasan pregled opcija pre odluke.",
    icon: Sparkles,
  },
  {
    id: "distribucija",
    title: "Distribucija vode",
    description:
      "Organizovana dostava vode za kontinuirano snabdevanje, uz mogućnost saradnje jednokratno, redovno ili po dogovoru.",
    points: [
      "Funkcioniše za klijente koji već koriste aparat ili planiraju uvođenje novog rešenja.",
      "Tempo isporuke može da se prilagodi učestalosti korišćenja i sezonskim promenama.",
      "Cilj je kontinuitet snabdevanja bez zastoja u svakodnevnom radu ili boravku.",
    ],
    note: "Aquatron pristupa distribuciji kao delu šireg rešenja za osveženje, a ne samo pojedinačnoj isporuci.",
    icon: Truck,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Kako da izaberem odgovarajući aparat?",
    answer:
      "Preporuka se zasniva na broju korisnika, raspoloživom prostoru i očekivanoj potrošnji, kako bi rešenje bilo praktično i održivo.",
  },
  {
    question: "Da li je moguće redovno snabdevanje vodom?",
    answer:
      "Da. Aquatron nudi modele saradnje koji mogu da budu redovni ili organizovani po dogovoru, u skladu sa vašim ritmom korišćenja.",
  },
  {
    question: "Da li je rentiranje namenjeno samo firmama?",
    answer:
      "Rentiranje je posebno korisno za poslovne prostore, ali način saradnje može da se razmotri i za druge potrebe, u zavisnosti od situacije.",
  },
  {
    question: "Kako izgleda početni dogovor?",
    answer:
      "Dovoljno je da pošaljete upit ili pozovete. Nakon osnovnih informacija o prostoru i potrebama, predlaže se adekvatan model saradnje.",
  },
  {
    question: "Da li mogu prvo da zatražim ponudu pa da donesem odluku?",
    answer:
      "Da. Aquatron pristupa ponudi kao informativnom koraku koji pomaže da lakše procenite koja opcija vam najviše odgovara.",
  },
];

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    title: "Aparat za kancelarije",
    benefits: ["Praktičan za timove sa svakodnevnom potrošnjom.", "Lako se uklapa u radne prostore.", "Podržava organizovano osveženje tokom dana."],
    icon: Users,
  },
  {
    title: "Aparat za ugostiteljstvo",
    benefits: ["Pogodan za prostore sa čestim prometom korisnika.", "Pomaže kontinuitetu usluge.", "Biramo ga prema ritmu korišćenja i raspoloživom mestu."],
    icon: Building2,
  },
  {
    title: "Kompaktan aparat",
    benefits: ["Za manje prostore i diskretnije pozicioniranje.", "Jednostavno uklapanje u enterijer.", "Dobro rešenje kada je važna ekonomija prostora."],
    icon: BadgeCheck,
  },
  {
    title: "Premium aparat",
    benefits: ["Za reprezentativne prostore i veći komfor.", "Naglasak na utisku, funkciji i prisustvu u prostoru.", "Prilagođava se potrebama korisnika i ambijentu."],
    icon: Sparkles,
  },
];

export const RECOMMENDATION_FACTORS: SiteFeature[] = [
  {
    title: "Broj korisnika",
    description: "Koliko ljudi aparat koristi tokom dana utiče na izbor kapaciteta i tipa rešenja.",
    icon: Users,
  },
  {
    title: "Prostor",
    description: "Pozicija aparata i raspoloživa kvadratura važni su za funkcionalnost i svakodnevnu upotrebu.",
    icon: MapPin,
  },
  {
    title: "Potrošnja",
    description: "Učestalost dopune i očekivani ritam korišćenja usmeravaju preporuku i način saradnje.",
    icon: Droplets,
  },
];

export const DELIVERY_STEPS: SiteFeature[] = [
  {
    title: "Dogovor potreba",
    description: "Utvrđujemo da li vam odgovara jednokratna, redovna ili fleksibilna dostava.",
    icon: MessageSquare,
  },
  {
    title: "Plan isporuke",
    description: "Dinamika isporuke se prilagođava prostoru, broju korisnika i očekivanoj potrošnji.",
    icon: Truck,
  },
  {
    title: "Kontinuitet snabdevanja",
    description: "Cilj je da voda bude dostupna kada vam je potrebna, bez nepotrebnog zastoja.",
    icon: Waves,
  },
];

export const DELIVERY_BENEFITS: SiteFeature[] = [
  {
    title: "Pouzdanost",
    description: "Snabdevanje se organizuje tako da podrži stabilan dnevni ritam korisnika.",
    icon: ShieldCheck,
  },
  {
    title: "Dostupnost",
    description: "Komunikacija i dogovor ostaju jednostavni, uz fokus na praktičnu isporuku.",
    icon: PhoneCall,
  },
  {
    title: "Kontinuitet",
    description: "Redovna distribucija pomaže da osveženje bude stalno prisutno u prostoru.",
    icon: Droplets,
  },
];

export const DELIVERY_PLANS: SiteFeature[] = [
  {
    title: "Jednokratno",
    description: "Za pojedinačne potrebe, dopunu zaliha ili povremenu nabavku vode.",
    icon: PackageCheck,
  },
  {
    title: "Redovno",
    description: "Za prostore sa stabilnom potrošnjom i potrebom za planiranim snabdevanjem.",
    icon: Clock3,
  },
  {
    title: "Po dogovoru",
    description: "Za promenljive potrebe i fleksibilnu dinamiku saradnje tokom vremena.",
    icon: Handshake,
  },
];

export const ABOUT_VALUES: SiteFeature[] = [
  {
    title: "Pouzdanost",
    description: "Od 2009. Aquatron gradi dugoročan odnos kroz dosledan pristup i jasan dogovor.",
    icon: ShieldCheck,
  },
  {
    title: "Kvalitet usluge",
    description: "Fokus je na tome da predlog rešenja bude praktičan, pregledan i koristan za svakodnevnu upotrebu.",
    icon: BadgeCheck,
  },
  {
    title: "Dostupnost",
    description: "Komunikacija ostaje jednostavna kako bi korisnik brzo došao do odgovora i sledećeg koraka.",
    icon: PhoneCall,
  },
];

export const PARTNERSHIP_POINTS = [
  "Aquatron razvija saradnje kroz dugoročan i profesionalan odnos sa klijentima.",
  "Poverenje se gradi kroz doslednost, korektan dogovor i razumevanje realnih potreba prostora.",
  "Pristup je podjednako prilagođen poslovnim korisnicima i privatnim klijentima koji traže pouzdano rešenje za osveženje.",
];

export const CONTACT_CHANNELS: SiteFeature[] = [
  {
    title: "Pozovite nas",
    description: "Brz dogovor o potrebama, ponudi i sledećem koraku saradnje.",
    icon: PhoneCall,
  },
  {
    title: "Pošaljite email",
    description: "Pošaljite detalje upita i vratimo se sa predlogom rešenja.",
    icon: MessageSquare,
  },
  {
    title: "Beograd, Srbija",
    description: "Lokalno prisustvo i fokus na korisnike kojima je važna pouzdana isporuka.",
    icon: MapPin,
  },
];
