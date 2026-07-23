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
  href?: string;
}

interface ServiceFeature extends IconCard {
  chips: string[];
  cta: string;
  href?: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  address: "Ablekuma Curve - Accra",
  addressShort: "Ablekuma Curve - Accra",
  phone: "+233 534 493 357",
  phoneHref: "tel:+23353449357",
  email: "info@agricomassurance.com",
  hours: "Mon – Fri, 8:00 – 18:00 GMT",
};

export const HERO_STATS = [
  { value: "48K+", label: "Farmers insured" },
  { value: "₵12.4B", label: "Claims paid out" },
  { value: "72hr", label: "Avg. payout time" },
];

export const TRUST_LOGOS = [
  "GreenFields Co-op",
  "Savanna Mills",
  "RiverDelta Agro",
  "HarvestLink",
  "Sahel Growers",
];

// Partner logos — drop the image files into /public/partners/.
export const PARTNERS = [
  { name: "ALX", logo: "/partners/alx.png" },
  { name: "BIMA Lab Africa", logo: "/partners/bimalab.png" },
  { name: "Fidelity Bank", logo: "/partners/fidelity.png" },
  { name: "FSD Africa", logo: "/partners/fsdafrica.png" },
  { name: "National Insurance Commission", logo: "/partners/nic.png" },
  { name: "Orange Corners Ghana", logo: "/partners/orangecorners.png" },
  { name: "University of Ghana RID", logo: "/partners/ugrid.png" },
  { name: "UNDP", logo: "/partners/undp.png" },
  { name: "UNICEF Startup Lab", logo: "/partners/unicef.png" },
  { name: "United Actuaries & Consultants", logo: "/partners/united.png" },
];

// Home services preview (6 cards)
export const SERVICES: IconCard[] = [
  {
    icon: "crop",
    title: "Crop Insurance",
    desc: "Protect your farm against drought, floods, pests, and other climate risks with our technology-driven insurance.",
    href: "/products/crop-insurance",
  },
  {
    icon: "users",
    title: "FarmerCare MicroPensions",
    desc: "A flexible micro-pension and protection solution designed for farmers and informal sector workers to build financial security.",
    href: "/products/farmercare",
  },
  {
    icon: "globe",
    title: "Agricom Platform",
    desc: "Our digital platform helping insurers, agribusinesses, and financial institutions manage farmers more efficiently.",
    href: "/products/agricom-platform",
  },
  {
    icon: "input",
    title: "Input Financing",
    desc: "Access seeds, fertilizers, and other essential inputs at the beginning of the season and repay after harvest.",
    href: "/products/input-financing",
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
  {
    step: "1",
    title: "Enrol your farm",
    desc: "Map your plot in minutes via app, agent or USSD.",
  },
  {
    step: "2",
    title: "Pick your cover",
    desc: "Choose modular protection sized to your crop & budget.",
  },
  {
    step: "3",
    title: "We monitor",
    desc: "Weather & satellite data watch your fields all season.",
  },
  {
    step: "4",
    title: "Get paid fast",
    desc: "Verified losses pay out to your wallet within 72 hours.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "When the rains failed last season, the payout reached my cooperative before the next planting. Agricom kept 200 families farming.",
    name: "Amina Bello",
    role: "Chair, GreenFields Cooperative",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "The claim was settled in 48 hours no adjuster, no paperwork. I had cash to replant while it still mattered.",
    name: "Kwame Mensah",
    role: "Maize farmer, RiverDelta",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Premiums that scale to my plot size mean cover finally makes sense for a smallholder like me.",
    name: "Fatima Sani",
    role: "Horticulture grower, Sahel",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Our lenders gained confidence the moment we enrolled. Credit-linked cover kept the mill running through a hard year.",
    name: "Joseph Adeyemi",
    role: "Director, Savanna Mills",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "I enrolled the whole co-op from a basic phone over USSD. Every member is covered, even offline.",
    name: "Grace Achieng",
    role: "Secretary, HarvestLink Co-op",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Transparent terms, no jargon. For the first time I know exactly what I pay for and when it pays out.",
    name: "Daniel Okoro",
    role: "Cooperative lead, GreenFields",
    image:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=600&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Satellite-verified claims meant no one came to argue about my losses. The data spoke, and we got paid.",
    name: "Esther Banda",
    role: "Grain farmer, Savanna belt",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
  },
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    icon: "crop",
    title: "Crop Insurance",
    desc: "Protect your farm against drought, floods, excessive rainfall, pests, and other climate risks. Our technology-driven insurance combines satellite intelligence, weather data, and digital claims processing to help farmers recover quickly and continue farming with confidence.",
    chips: ["Drought & flood protection", "Weather-index insurance", "Fast digital claims", "Satellite-based farm monitoring", "Affordable premiums"],
    cta: "Learn More",
    href: "/products/crop-insurance",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Crop field",
    reverse: false,
  },
  {
    icon: "users",
    title: "FarmerCare MicroPensions",
    desc: "FarmerCare is a flexible micro-pension and protection solution designed for farmers and informal sector workers. Save small amounts at your own pace while building long-term financial security and accessing valuable protection benefits.",
    chips: ["Flexible contributions", "Retirement savings", "Hospital cash support", "Life protection", "Financial security for the future"],
    cta: "Learn More",
    href: "/products/farmercare",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "FarmerCare MicroPensions",
    reverse: true,
  },
  {
    icon: "globe",
    title: "Agricom Platform",
    desc: "Our digital platform helps insurers, governments, agribusinesses, NGOs, cooperatives, and financial institutions manage farmers more efficiently. From digital farmer registration and geospatial mapping to climate intelligence, insurance management, and analytics, everything is available in one powerful platform.",
    chips: ["Farmer registration & profiling", "GPS & farm mapping", "Climate intelligence dashboard", "Insurance & claims management", "Real-time analytics & reporting", "API integrations"],
    cta: "Learn More",
    href: "/products/agricom-platform",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Agricom Platform",
    reverse: false,
  },
  {
    icon: "input",
    title: "Input Financing",
    desc: "Quality farm inputs shouldn't be out of reach because of cash flow. Through our input financing solution, farmers can access seeds, fertilizers, agrochemicals, and other essential inputs at the beginning of the season and repay after harvest.",
    chips: ["Buy now, pay after harvest", "Affordable repayment plans", "Access to quality farm inputs", "Increased productivity", "Improved farm profitability"],
    cta: "Learn More",
    href: "/products/input-financing",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Input Financing",
    reverse: true,
  },
];

export interface AgricomService {
  icon: IconName;
  title: string;
  short: string;
  long: string;
}

// Services page the full Agricom services offering.
export const AGRICOM_SERVICES: AgricomService[] = [
  {
    icon: "rows",
    title: "Agricom Product",
    short:
      "A suite of Agricom solutions bundling finance, advisory, and protection in one place.",
    long: "The Agricom Product stack brings together micro-insurance, credit facilitation, and agronomic advisory into a single, easy-to-use experience. Designed to strengthen resilience and profitability across the value chain.",
  },
  {
    icon: "crop",
    title: "Agricom Yield",
    short:
      "Tools and services focused on boosting yields through data, inputs, and timely support.",
    long: "Agricom Yield focuses on improving productivity with data-driven recommendations, improved input access, and season-long support. Track performance and close gaps to consistently harvest more from every acre.",
  },
  {
    icon: "agribusiness",
    title: "Agricom Data-Driven Insights",
    short:
      "Actionable analytics turning farm data into better decisions and lower risk.",
    long: "Our data-driven insights translate raw field and market data into clear actions what to plant, when to apply inputs, and how to manage weather risk. Make confident, timely decisions that improve outcomes and reduce losses.",
  },
  {
    icon: "shieldCheck",
    title: "Agricom Insurance",
    short:
      "Affordable, transparent crop insurance tailored for farmers and agribusinesses.",
    long: "Our Agricom Insurance products protect farmers and agribusinesses against climate, pest, and market risks. We provide clear coverage terms, fair premiums, and timely claims support so you can focus on production with confidence.",
  },
  {
    icon: "globe",
    title: "Satellite",
    short:
      "Satellite-powered monitoring for risk assessment, farm mapping, and early-warning insights.",
    long: "We leverage satellite imagery to assess weather patterns, detect crop stress, and monitor field boundaries. These insights improve underwriting accuracy, enable proactive advisory, and help reduce losses through early detection.",
  },
  {
    icon: "users",
    title: "Pensions",
    short:
      "Flexible pension plans helping farmers and agri-workers save consistently for the future.",
    long: "Our Pensions offering encourages long-term savings with simple contributions aligned to seasonal cashflows. Build retirement security with transparent terms, flexible top-ups, and mobile-friendly access for rural communities.",
  },
];

// About values
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
  { value: "₵12.4B", label: "Claims paid out" },
  { value: "320+", label: "Cooperatives served" },
  { value: "72hr", label: "Average payout" },
];

export const TEAM = [
  {
    name: "Derric Awumey",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/derric-awumey" },
  },
  {
    name: "Daniel Arhin Oduro",
    role: "Head of Claims",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/daniel-arhin-oduro" },
  },
  {
    name: "Christopher Dzorkpui",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/christopher-dzorkpui" },
  },
  {
    name: "Albert Osei",
    role: "HR & AI Lead",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/albert-osei" },
  },
  {
    name: "Seth Ketsi",
    role: "Head of Operations & Product Lead",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/albert-osei" },
  },
  {
    name: "Maxwell ",
    role: "Head of Designs",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80&auto=format&fit=crop",
    socials: { linkedin: "https://www.linkedin.com/in/albert-osei" },
  },
];

/** Format an ISO date string as e.g. "18 May 2026". */
export function formatDate(iso: string | Date): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface BlogPost {
  slug: string;
  cat: string[];
  tag: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  body: string[];
}

export const BLOG_FILTERS = [
  { value: "all", label: "All posts" },
  { value: "crop", label: "Crop" },
  { value: "livestock", label: "Livestock" },
  { value: "index", label: "Weather-Index" },
  { value: "agri", label: "Agribusiness" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "greenfields-drought-shield",
    cat: ["crop"],
    tag: "Crop",
    title: "How a drought shield paid out before the next planting",
    desc: "Yield-index cover for 200 maize farmers meant the GreenFields cooperative had cash in hand before the next planting window.",
    date: "2026-05-18",
    readTime: "5 min read",
    author: "Amara Okonkwo",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop",
    body: [
      "When the rains arrived late and left early, 200 maize farmers in the GreenFields cooperative faced a harvest worth a fraction of what they had planted for. In most seasons that gap would have forced families to sell assets or take on debt just to plant again.",
      "Because their plots were enrolled under a yield-index policy, loss was assessed against verified regional yields rather than a slow, plot-by-plot inspection. The shortfall was confirmed remotely within days of the official harvest data.",
      "The payout reached the cooperative before the next planting window opened early enough to buy seed and fertiliser at the right time. No family had to sit out a season, and the co-op kept every one of its members farming.",
    ],
  },
  {
    slug: "sahel-herd-protection",
    cat: ["livestock"],
    tag: "Livestock",
    title: "Protecting 5,400 head across three states",
    desc: "Mortality and outbreak cover for pastoralist cattle herds, settled with vet-verified claims across three states.",
    date: "2026-04-29",
    readTime: "6 min read",
    author: "Daniel Mensah",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80&auto=format&fit=crop",
    body: [
      "Pastoralist herds move across wide ranges and state lines, which has always made them hard to insure. A single outbreak can wipe out years of accumulated wealth in weeks.",
      "Our livestock programme pairs mortality and epidemic-outbreak cover with a network of field vets who verify claims on the ground. Confirmation happens fast enough to settle before a loss spreads to the rest of the stock.",
      "Across three states, 5,400 head were brought under cover with a 96% uptake among eligible herders a sign that protection designed around how pastoralists actually live gets used.",
    ],
  },
  {
    slug: "riverdelta-rainfall-trigger",
    cat: ["index"],
    tag: "Weather-Index",
    title: "Parametric rainfall cover, settled in 48 hours",
    desc: "Automatic payouts triggered by rainfall data zero loss adjusters, settled in 48 hours for 1,100 farms.",
    date: "2026-04-10",
    readTime: "4 min read",
    author: "Fatima Sani",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    body: [
      "The slowest part of most insurance claims is the loss assessment the visits, the paperwork, the disputes. Parametric cover removes that step entirely.",
      "In RiverDelta, payouts were tied to a rainfall index measured by satellite and ground stations. When cumulative rainfall crossed the agreed trigger, the claim paid automatically no adjuster, no negotiation.",
      "1,100 farms were settled within 48 hours of the trigger being met. For smallholders, the speed is the point: money arrives while it can still change the outcome of the season.",
    ],
  },
  {
    slug: "savanna-mills-supply-cover",
    cat: ["agri"],
    tag: "Agribusiness",
    title: "Keeping a regional mill solvent through a volatile harvest",
    desc: "Credit-linked revenue protection that carried Savanna Mills through a volatile harvest with zero defaults.",
    date: "2026-03-22",
    readTime: "7 min read",
    author: "Joseph Adeyemi",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=800&q=80&auto=format&fit=crop",
    body: [
      "A mill is only as stable as the harvests that feed it. When supply swings, revenue swings with it and so does the mill's ability to service the loans that keep it running.",
      "Savanna Mills took credit-linked revenue protection that topped up shortfalls when throughput fell below the insured threshold. The cover was structured around their loan repayments rather than a generic policy.",
      "Through a volatile season that would have triggered defaults elsewhere, the mill stayed solvent and current on ₵2.1B in insured exposure with zero defaults across the programme.",
    ],
  },
  {
    slug: "harvestlink-horticulture",
    cat: ["crop", "index"],
    tag: "Crop",
    title: "Multi-peril cover for year-round vegetable growers",
    desc: "Cover for 860 high-value vegetable farms supplying urban markets across four straight seasons.",
    date: "2026-03-05",
    readTime: "5 min read",
    author: "Amara Okonkwo",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop",
    body: [
      "Horticulture growers supplying urban markets can't afford to lose a cycle their buyers expect produce every week of the year. That makes continuity of cover as important as the cover itself.",
      "HarvestLink growers took multi-peril protection sized to high-value vegetable crops, combining named perils with a weather-index layer for drought and heat stress.",
      "860 farms have now run four consecutive seasons under the programme, supplying city markets without a gap proof that intensive growers can be insured profitably when the product fits the crop.",
    ],
  },
  {
    slug: "cooperative-input-fund",
    cat: ["agri", "livestock"],
    tag: "Agribusiness",
    title: "De-risking seed and fertiliser loans for 12 cooperatives",
    desc: "Bundled input protection across a 12-cooperative network, de-risking loans for 7,800 members.",
    date: "2026-02-14",
    readTime: "6 min read",
    author: "Joseph Adeyemi",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
    body: [
      "Input loans are the engine of smallholder farming and their biggest risk. If a season fails before crops establish, members are left repaying loans on a harvest that never came.",
      "We bundled input protection across a 12-cooperative network so that the cost of seed, fertiliser and agro-inputs is covered when a season fails at establishment. Lenders gain confidence; members gain a safety net.",
      "The fund now de-risks input loans for 7,800 members. With losses absorbed by cover rather than households, cooperatives can extend credit further and members can plant with less fear.",
    ],
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
  {
    cat: ["people"],
    caption: "Dawn harvest, GreenFields co-op",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["crops"],
    caption: "Young maize under cover",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["land", "harvest"],
    caption: "Golden hour, Savanna belt",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["people"],
    caption: "Pastoralist herd inspection",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["harvest"],
    caption: "Market-ready produce",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["land"],
    caption: "Highland grazing land",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["crops", "harvest"],
    caption: "Mechanised harvest",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["people", "crops"],
    caption: "Sowing the next season",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["land", "crops"],
    caption: "Insured plots, RiverDelta",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop",
  },
  {
    cat: ["crops"],
    caption: "Drip-irrigated nursery",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80&auto=format&fit=crop&sat=-20",
  },
  {
    cat: ["harvest"],
    caption: "Cooperative grading day",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=700&q=80&auto=format&fit=crop&crop=top",
  },
  {
    cat: ["land"],
    caption: "End of the growing season",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format&fit=crop&crop=bottom",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "Crop Insurance", href: "/products" },
      { label: "Weather-Index", href: "/products" },
      { label: "Agribusiness", href: "/products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
