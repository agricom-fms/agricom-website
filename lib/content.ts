// Central content/data for the Agricom Assurance site.
// Keeping copy + imagery here keeps page components clean and declarative.

export type IconName =
  | "crop"
  | "livestock"
  | "weather"
  | "equipment"
  | "agribusiness"
  | "mobile"
  | "input"
  | "rows"
  | "globe"
  | "shieldCheck"
  | "users";

interface IconCard {
  icon: IconName;
  title: string;
  desc: string;
}

interface ServiceFeature extends IconCard {
  chips: string[];
  cta: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  address: "12 Harvest Way, Victoria Island, Lagos, Nigeria",
  addressShort: "12 Harvest Way, Lagos",
  phone: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  email: "hello@agricomassurance.com",
  hours: "Mon – Fri, 8:00 – 18:00 WAT",
};

export const HERO_STATS = [
  { value: "48K+", label: "Farmers insured" },
  { value: "₦12.4B", label: "Claims paid out" },
  { value: "72hr", label: "Avg. payout time" },
];

export const TRUST_LOGOS = [
  "GreenFields Co-op",
  "Savanna Mills",
  "RiverDelta Agro",
  "HarvestLink",
  "Sahel Growers",
];

// Home services preview (6 cards)
export const SERVICES: IconCard[] = [
  {
    icon: "crop",
    title: "Crop Insurance",
    desc: "Multi-peril and yield-index cover that shields your harvest against drought, flooding, pests and disease.",
  },
  {
    icon: "livestock",
    title: "Livestock Cover",
    desc: "Protect cattle, poultry and dairy herds against mortality, theft and epidemic outbreak with rapid vet verification.",
  },
  {
    icon: "weather",
    title: "Weather-Index Insurance",
    desc: "Automatic, parametric payouts triggered by rainfall and temperature data — no lengthy assessments, no disputes.",
  },
  {
    icon: "equipment",
    title: "Equipment & Asset Cover",
    desc: "Tractors, irrigation systems and storage — insured against breakdown, fire and accidental damage.",
  },
  {
    icon: "agribusiness",
    title: "Agribusiness Cover",
    desc: "Revenue protection, supply-chain and credit-linked cover for cooperatives, mills and processors.",
  },
  {
    icon: "mobile",
    title: "Mobile Microcover",
    desc: "Pay-as-you-grow policies for smallholders, managed entirely from a feature phone or our mobile app.",
  },
];

export const WHY_US = [
  {
    title: "Satellite-verified claims",
    desc: "Loss is confirmed remotely in hours, not weeks.",
  },
  {
    title: "Transparent pricing",
    desc: "See exactly what you pay for, with no hidden terms.",
  },
  {
    title: "Built for rural reach",
    desc: "Enroll and claim from any phone, even offline.",
  },
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Enrol your farm", desc: "Map your plot in minutes via app, agent or USSD." },
  { step: "2", title: "Pick your cover", desc: "Choose modular protection sized to your crop & budget." },
  { step: "3", title: "We monitor", desc: "Weather & satellite data watch your fields all season." },
  { step: "4", title: "Get paid fast", desc: "Verified losses pay out to your wallet within 72 hours." },
];

export const TESTIMONIAL = {
  quote:
    "When the rains failed last season, the payout reached my cooperative before the next planting. Agricom kept 200 families farming.",
  name: "Amina Bello",
  role: "Chair, GreenFields Cooperative",
  image:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
};

// Services page — three feature rows
export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    icon: "crop",
    title: "Crop Insurance",
    desc: "Multi-peril and yield-index cover that shields your harvest against drought, flooding, pests, fire and disease. Premiums scale to plot size and crop type, with payouts benchmarked to verified regional yields.",
    chips: ["Maize & grains", "Tubers", "Horticulture", "Cash crops"],
    cta: "Quote crop cover",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Crop field",
    reverse: false,
  },
  {
    icon: "livestock",
    title: "Livestock Cover",
    desc: "Protect cattle, poultry and dairy herds against mortality, theft and epidemic outbreak. Rapid veterinary verification means claims are settled before the loss spreads to the rest of your stock.",
    chips: ["Cattle", "Poultry", "Dairy", "Small ruminants"],
    cta: "Quote livestock cover",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Livestock",
    reverse: true,
  },
  {
    icon: "weather",
    title: "Weather-Index Insurance",
    desc: "Parametric cover with automatic payouts triggered by rainfall and temperature thresholds. No loss adjusters, no lengthy assessments, no disputes — when the data crosses the line, you get paid.",
    chips: ["Rainfall index", "Drought trigger", "Heat stress"],
    cta: "Quote index cover",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Weather over fields",
    reverse: false,
  },
];

// Services page — "also available" grid
export const ALSO_AVAILABLE: IconCard[] = [
  {
    icon: "equipment",
    title: "Equipment & Asset",
    desc: "Tractors, pumps, irrigation and storage insured against breakdown, fire and accidental damage.",
  },
  {
    icon: "agribusiness",
    title: "Agribusiness",
    desc: "Revenue protection, supply-chain and credit-linked cover for cooperatives, mills and processors.",
  },
  {
    icon: "mobile",
    title: "Mobile Microcover",
    desc: "Pay-as-you-grow policies for smallholders, managed end-to-end from a feature phone.",
  },
  {
    icon: "input",
    title: "Input Protection",
    desc: "Cover the cost of seed, fertiliser and agro-inputs if a season fails before establishment.",
  },
  {
    icon: "rows",
    title: "Greenhouse & Aqua",
    desc: "Controlled-environment and aquaculture cover for high-value, intensive operations.",
  },
  {
    icon: "globe",
    title: "Climate Resilience",
    desc: "Advisory and cover bundles that help farmers adapt to longer-term climate shifts.",
  },
];

// About — values
export const VALUES: IconCard[] = [
  {
    icon: "shieldCheck",
    title: "Transparency first",
    desc: "Plain-language policies. You always know what you pay for and exactly when cover pays out.",
  },
  {
    icon: "agribusiness",
    title: "Data over guesswork",
    desc: "Satellite imagery and weather indices replace slow, subjective loss assessments.",
  },
  {
    icon: "users",
    title: "Farmers at the centre",
    desc: "Every product is designed with cooperatives and smallholders, not just for them.",
  },
];

export const ABOUT_STATS = [
  { value: "48K+", label: "Farmers insured" },
  { value: "₦12.4B", label: "Claims paid out" },
  { value: "320+", label: "Cooperatives served" },
  { value: "72hr", label: "Average payout" },
];

export const TEAM = [
  {
    name: "Amara Okonkwo",
    role: "Chief Agronomist",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Daniel Mensah",
    role: "Head of Claims",
    image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Fatima Sani",
    role: "Data & Satellite Lead",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Joseph Adeyemi",
    role: "Field Network Director",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80&auto=format&fit=crop",
  },
];

// Portfolio
export const PORTFOLIO_FILTERS = [
  { value: "all", label: "All work" },
  { value: "crop", label: "Crop" },
  { value: "livestock", label: "Livestock" },
  { value: "index", label: "Weather-Index" },
  { value: "agri", label: "Agribusiness" },
];

export const PROJECTS = [
  {
    cat: ["crop"],
    tag: "Crop",
    title: "GreenFields drought shield",
    desc: "Yield-index cover for 200 maize farmers. Payout reached the cooperative before the next planting window.",
    stats: ["200 farms", "₦480M paid"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop",
  },
  {
    cat: ["livestock"],
    tag: "Livestock",
    title: "Sahel herd protection",
    desc: "Mortality & outbreak cover for pastoralist cattle herds, with vet-verified claims across three states.",
    stats: ["5,400 head", "96% uptake"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80&auto=format&fit=crop",
  },
  {
    cat: ["index"],
    tag: "Weather-Index",
    title: "RiverDelta rainfall trigger",
    desc: "Parametric rainfall cover with automatic payouts — zero loss adjusters, settled in 48 hours.",
    stats: ["48hr payout", "1,100 farms"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
  },
  {
    cat: ["agri"],
    tag: "Agribusiness",
    title: "Savanna Mills supply cover",
    desc: "Credit-linked revenue protection that kept a regional mill solvent through a volatile harvest.",
    stats: ["₦2.1B insured", "0 defaults"],
    image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=800&q=80&auto=format&fit=crop",
  },
  {
    cat: ["crop", "index"],
    tag: "Crop",
    title: "HarvestLink horticulture",
    desc: "Multi-peril cover for high-value vegetable growers supplying urban markets year round.",
    stats: ["860 farms", "4 seasons"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop",
  },
  {
    cat: ["agri", "livestock"],
    tag: "Agribusiness",
    title: "Cooperative input fund",
    desc: "Bundled input protection across a 12-cooperative network, de-risking seed and fertiliser loans.",
    stats: ["12 co-ops", "7,800 members"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
  },
];

// Gallery
export const GALLERY_FILTERS = [
  { value: "all", label: "Everything" },
  { value: "crops", label: "Crops" },
  { value: "people", label: "People" },
  { value: "land", label: "Landscapes" },
  { value: "harvest", label: "Harvest" },
];

export const GALLERY = [
  { cat: ["people"], caption: "Dawn harvest, GreenFields co-op", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900&q=80&auto=format&fit=crop" },
  { cat: ["crops"], caption: "Young maize under cover", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&auto=format&fit=crop" },
  { cat: ["land", "harvest"], caption: "Golden hour, Savanna belt", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop" },
  { cat: ["people"], caption: "Pastoralist herd inspection", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&auto=format&fit=crop" },
  { cat: ["harvest"], caption: "Market-ready produce", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=80&auto=format&fit=crop" },
  { cat: ["land"], caption: "Highland grazing land", image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=900&q=80&auto=format&fit=crop" },
  { cat: ["crops", "harvest"], caption: "Mechanised harvest", image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=900&q=80&auto=format&fit=crop" },
  { cat: ["people", "crops"], caption: "Sowing the next season", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&auto=format&fit=crop" },
  { cat: ["land", "crops"], caption: "Insured plots, RiverDelta", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop" },
  { cat: ["crops"], caption: "Drip-irrigated nursery", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80&auto=format&fit=crop&sat=-20" },
  { cat: ["harvest"], caption: "Cooperative grading day", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=700&q=80&auto=format&fit=crop&crop=top" },
  { cat: ["land"], caption: "End of the growing season", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format&fit=crop&crop=bottom" },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Crop Insurance", href: "/services" },
      { label: "Livestock Cover", href: "/services" },
      { label: "Weather-Index", href: "/services" },
      { label: "Agribusiness", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
