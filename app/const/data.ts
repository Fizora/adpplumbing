import { LangCode } from "@/app/context/LanguageContext";

export interface NavItem {
  label: string;
  href: string;
}

export interface SuburbPageData {
  slug: string;
  name: string;
  postcode: string;
  region: string;
  responseEta: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  localAngleTitle: string;
  localAngleDescription: string;
  commonLocalIssues: string[];
  localLandmarkNote: string;
  localReview: {
    name: string;
    street: string;
    service: string;
    text: string;
    timeAgo: string;
  };
}

export const languagesList: { code: LangCode; label: string; name: string }[] =
  [
    { code: "en", label: "EN", name: "English" },
    { code: "id", label: "ID", name: "Indonesia" },
    { code: "ja", label: "日本語", name: "日本語" },
    { code: "zh", label: "中文", name: "中文" },
    { code: "th", label: "ไทย", name: "ไทย" },
    { code: "vi", label: "VI", name: "Tiếng Việt" },
  ];

export const contactInfo = {
  brandName: "ADP Plumbing",
  phone: "+61 2 8000 4920",
  displayPhone: "02 8000 4920",
  email: "dispatch@adpplumbing.com.au",
  operationalHours: "24/7 Emergency Dispatch • Office: Mon–Sat 7AM–6PM",
  licenseNumber: "NSW Fair Trading Lic #384920C",
};

export const suburbPages: SuburbPageData[] = [
  {
    slug: "parramatta",
    name: "Parramatta",
    postcode: "2150",
    region: "Western Sydney",
    responseEta: "35 Mins",
    metaTitle: "24/7 Emergency Plumber Parramatta (2150) | ADP Plumbing",
    metaDescription:
      "Fast, licensed plumber in Parramatta 2150. Same-day blocked drain clearing, burst pipe repairs, and hot water installations with $0 call-out fee.",
    badge: "Local Parramatta Van On Standby • 35-Min ETA",
    heroTitle: "Trusted 24/7 Emergency Plumber in Parramatta",
    heroDescription:
      "Struggling with a blocked sewer drain, burst pipe, or cold shower in Parramatta (2150)? Our local Western Sydney plumbing truck is stationed minutes from Church Street for rapid same-day dispatch and upfront flat-rate pricing.",
    localAngleTitle: "Plumbing Solutions Tailored for Parramatta Homes & Units",
    localAngleDescription:
      "From heritage federation cottages near Parramatta Park to high-rise apartments along the riverfront, we understand the exact pipework, tree-root intrusion, and strata water-pressure issues common across 2150.",
    commonLocalIssues: [
      "Tree-root intrusion in older clay sewer lines around North Parramatta",
      "Strata-compliant hot water system replacements in high-rise apartments",
      "High water-pressure valve regulation & burst flexi-hose repairs",
    ],
    localLandmarkNote:
      "Rapid dispatch covering Parramatta CBD, North Parramatta, Harris Park, and Westmead.",
    localReview: {
      name: "Brendan Gallagher",
      street: "Near Prince Alfred Square, Parramatta",
      service: "Blocked Sewer & CCTV Inspection",
      text: "Our backyard drain overflowed on a Sunday morning. ADP Plumbing arrived in 30 minutes, ran a CCTV camera down the line, cleared the tree roots with an emerald hydro-jetter, and charged the exact flat rate quoted.",
      timeAgo: "1 week ago",
    },
  },
  {
    slug: "chatswood",
    name: "Chatswood",
    postcode: "2067",
    region: "Lower North Shore",
    responseEta: "40 Mins",
    metaTitle: "Licensed Plumber Chatswood (2067) | Hot Water & Blocked Drains",
    metaDescription:
      "Need an emergency plumber in Chatswood 2067? ADP Plumbing delivers upfront fixed-price pipe relining, gas fitting, and hot water repairs across the North Shore.",
    badge: "Lower North Shore Dispatch • 40-Min ETA",
    heroTitle: "Fast, Clean Residential Plumber in Chatswood",
    heroDescription:
      "Serving Chatswood (2067) homeowners and strata managers with precision leak detection, continuous-flow hot water upgrades, and no-dig pipe relining—backed by our 100% upfront price guarantee.",
    localAngleTitle:
      "Protecting North Shore Properties Without Digging Up Gardens",
    localAngleDescription:
      "Chatswood's leafy streets and established homes are prone to stubborn root-damaged stormwater and sewer pipes. We use trenchless pipe relining to restore broken drains without excavating your driveway or landscaped yard.",
    commonLocalIssues: [
      "Trenchless no-dig pipe relining for root-damaged earthenware pipes",
      "Rheem & Rinnai continuous-flow gas hot water installations",
      "Acoustic thermal leak detection behind tiled bathroom walls",
    ],
    localLandmarkNote:
      "Servicing Chatswood, Chatswood West, Roseville, and Willoughby with zero travel surcharges.",
    localReview: {
      name: "Michelle Chen",
      street: "Victoria Avenue, Chatswood",
      service: "Rinnai Hot Water Replacement",
      text: "Our old storage tank burst overnight. ADP Plumbing had a new Rinnai gas continuous-flow unit installed before lunchtime. Spotless cleanup and very polite technician.",
      timeAgo: "2 weeks ago",
    },
  },
  {
    slug: "bondi",
    name: "Bondi",
    postcode: "2026",
    region: "Eastern Suburbs",
    responseEta: "30 Mins",
    metaTitle:
      "Emergency Plumber Bondi (2026) | Salt-Air Corrosion & Drain Experts",
    metaDescription:
      "24/7 local plumber in Bondi 2026. Experts in coastal salt-air corroded pipework, blocked apartment drains, and urgent leak repairs with fixed upfront pricing.",
    badge: "Eastern Suburbs Mobile Unit • 30-Min ETA",
    heroTitle: "Same-Day Coastal Plumber in Bondi & Bondi Beach",
    heroDescription:
      "Coastal salt air and aging terrace plumbing require specialized care. Our Bondi (2026) plumbers arrive equipped with marine-grade fittings, high-pressure jetters, and thermal leak cameras to fix your issue on the first visit.",
    localAngleTitle: "Built for Bondi's Coastal Salt Air & Heritage Terraces",
    localAngleDescription:
      "Properties near Bondi Beach and Campbell Parade experience accelerated corrosion on outdoor copper pipes, gas lines, and hot water valves. We install corrosion-resistant fittings designed to last in coastal conditions.",
    commonLocalIssues: [
      "Salt-air corroded outdoor hot water tempering valves & copper pipes",
      "Blocked kitchen & bathroom stacks in coastal walk-up apartments",
      "Emergency burst pipe shut-offs and strata compliance reports",
    ],
    localLandmarkNote:
      "Fast local response across Bondi Beach, North Bondi, Bondi Junction, and Tamarama.",
    localReview: {
      name: "Lachlan Vance",
      street: "Hall Street, Bondi Beach",
      service: "Burst Pipe & Valve Replacement",
      text: "Salt air rusted through our outdoor water main valve. ADP Plumbing got here in under 30 minutes, replaced the corroded copper section with marine-grade brass, and left zero mess.",
      timeAgo: "3 weeks ago",
    },
  },
  {
    slug: "cronulla",
    name: "Cronulla",
    postcode: "2230",
    region: "Sutherland Shire",
    responseEta: "45 Mins",
    metaTitle: "Plumber Cronulla (2230) | 24/7 Blocked Drains & Gas Fitting",
    metaDescription:
      "Reliable Sutherland Shire plumber in Cronulla 2230. Upfront flat-rate pricing for blocked stormwater drains, gas BBQ points, and emergency plumbing repairs.",
    badge: "Sutherland Shire Rapid Unit • 45-Min ETA",
    heroTitle: "Reliable Local Plumber in Cronulla & The Shire",
    heroDescription:
      "From beachside units near The Esplanade to family homes in South Cronulla (2230), ADP Plumbing delivers honest, punctual plumbing and gas-fitting services with zero hidden call-out fees.",
    localAngleTitle: "Stormwater, Sewer & Gas Experts for Cronulla Homes",
    localAngleDescription:
      "Heavy coastal downpours and sandy soil shifting can quickly overwhelm residential stormwater pits and sewer junctions in Cronulla. We clear sand and root blockages fast and certify outdoor gas installations.",
    commonLocalIssues: [
      "Sand-blocked stormwater drains and coastal flood-prevention pit clearing",
      "Licensed natural gas & LPG bayonet installations for outdoor entertaining",
      "Leaking toilet cisterns, tapware upgrades, and roof-gutter downpipe repairs",
    ],
    localLandmarkNote:
      "Covering Cronulla, Woolooware, Caringbah, and Miranda with fixed upfront quotes.",
    localReview: {
      name: "Trevor McAllister",
      street: "Gerrale Street, Cronulla",
      service: "Stormwater Jetting & Gas Bayonet",
      text: "Honest bloke who actually turns up on time. Cleared our sand-choked stormwater drain and installed a new gas point on the back deck in one visit. Fair price and top workmanship.",
      timeAgo: "1 month ago",
    },
  },
];

export const navLinksByLang: Record<LangCode, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Suburbs", href: "/#suburb" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Book Plumber", href: "/#booking" },
  ],
  id: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/#about" },
    { label: "Layanan", href: "/#services" },
    { label: "Area Suburb", href: "/#suburb" },
    { label: "Ulasan", href: "/#reviews" },
    { label: "Pesan Teknisi", href: "/#booking" },
  ],
  ja: [
    { label: "ホーム", href: "/" },
    { label: "会社概要", href: "/#about" },
    { label: "サービス", href: "/#services" },
    { label: "対応エリア", href: "/#suburb" },
    { label: "口コミ", href: "/#reviews" },
    { label: "予約する", href: "/#booking" },
  ],
  zh: [
    { label: "首页", href: "/" },
    { label: "关于我们", href: "/#about" },
    { label: "服务项目", href: "/#services" },
    { label: "服务区域", href: "/#suburb" },
    { label: "客户评价", href: "/#reviews" },
    { label: "立即预约", href: "/#booking" },
  ],
  th: [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/#about" },
    { label: "บริการ", href: "/#services" },
    { label: "พื้นที่ให้บริการ", href: "/#suburb" },
    { label: "รีวิว", href: "/#reviews" },
    { label: "จองช่างประปา", href: "/#booking" },
  ],
  vi: [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "/#about" },
    { label: "Dịch vụ", href: "/#services" },
    { label: "Khu vực", href: "/#suburb" },
    { label: "Đánh giá", href: "/#reviews" },
    { label: "Đặt lịch", href: "/#booking" },
  ],
};

// ─────────────────────────────────────────────────────────────
// ENGLISH CONTENT
// ─────────────────────────────────────────────────────────────
const enContent = {
  hero: {
    badge: "24/7 Emergency Dispatch • $0 Call-Out Fee",
    title: "Fast, Licensed Sydney Plumbers & Blocked Drain Specialists",
    description:
      "Burst pipe, overflowing sewer, or no hot water? Our fully licensed NSW plumbers arrive on time in stocked vans, diagnose the issue with CCTV & thermal tech, and give you a fixed upfront price before lifting a wrench.",
    primaryCta: { text: "Get an Upfront Quote", href: "#booking" },
    secondaryCta: {
      text: `Call ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "ADP Plumbing licensed plumber inspecting copper pipework and water pressure",
    },
  },
  suburbs: {
    badge: "Dedicated Local Suburb Pages",
    heading: "Fast Local Dispatch Across Key Sydney Suburbs",
    subheading:
      "Select your suburb below to inspect local dispatch ETAs, regional plumbing issues, and instant local availability.",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "Western Sydney",
        eta: "35 Mins",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "Lower North Shore",
        eta: "40 Mins",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "Eastern Suburbs",
        eta: "30 Mins",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "Sutherland Shire",
        eta: "45 Mins",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "Zero travel surcharges across all surrounding Greater Sydney suburbs.",
    cta: { text: "Check Availability in Your Suburb", href: "#booking" },
  },
  about: {
    badge: "About ADP Plumbing",
    heading: "Sydney's Most Reliable Residential Plumbers—Zero Surprises",
    subheadline:
      "Upfront flat-rate pricing, live van tracking, and spotless clean-ups on every job.",
    paragraphs: [
      "ADP Plumbing was founded to set a higher standard for Sydney homeowners and strata managers. No vague hourly rates that drag out the clock, and no muddy footprints left across your hallway.",
      "Every plumber on our team is NSW Fair Trading licensed, insured, and equipped with high-pressure hydro-jetters, CCTV drain cameras, and acoustic leak detectors—solving complex plumbing issues faster and cleaner.",
    ],
    floatingBadge: { number: "$0", text: "Call-Out Fee During Standard Hours" },
    pillars: [
      {
        title: "60-Min Rapid Response",
        description:
          "GPS-dispatched vans stationed across Sydney for urgent leaks and blockages.",
      },
      {
        title: "Fixed Flat-Rate Pricing",
        description:
          "You approve the exact written price before we start any repair work.",
      },
      {
        title: "Lifetime Labour Guarantee",
        description:
          "Every pipe repair and installation is backed by our written workmanship warranty.",
      },
      {
        title: "Spotless Home Protection",
        description:
          "Boot covers, drop sheets, and full sanitization before we pack up.",
      },
    ],
    stats: [
      { value: "15+", label: "Years Serving Sydney" },
      { value: "4.9★", label: "Verified Google Rating" },
      { value: "4,800+", label: "Jobs Completed" },
      { value: "24/7", label: "Emergency Support" },
    ],
    cta: { text: "Book a Local Plumber", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "ADP Plumbing uniformed technician reviewing a fixed-price quote with a homeowner",
    },
  },
  services: {
    badge: "Complete Plumbing & Gas",
    heading: "Residential Plumbing Services Done Right First Time",
    subheading:
      "From midnight burst pipes to trenchless pipe relining and hot water upgrades, we quote a fixed price upfront.",
    items: [
      {
        title: "24/7 Emergency Plumbing Repairs",
        tag: "60-Min Response",
        priceHint: "Fixed Upfront Quote",
        description:
          "Burst flexi-hoses, overflowing toilets, or sudden water leaks? Our emergency vans carry 500+ replacement parts for immediate on-the-spot fixes.",
        image: {
          src: "/img/hero.jpg",
          alt: "Emergency plumber repairing a burst indoor water pipe",
        },
        cta: "Request Emergency Plumber",
        href: "#booking",
      },
      {
        title: "Blocked Drains & Hydro-Jetting",
        tag: "Most Popular",
        priceHint: "Includes CCTV Camera Check",
        description:
          "We blast through stubborn tree roots, grease, and debris using 5,000 PSI water jetters and verify a 100% clear pipe on HD CCTV.",
        image: {
          src: "/img/about.jpg",
          alt: "High-pressure hydro jetter clearing a blocked residential sewer drain",
        },
        cta: "Clear My Drain",
        href: "#booking",
      },
      {
        title: "Hot Water System Repairs & Installs",
        tag: "Same-Day Hot Water",
        priceHint: "Rheem, Rinnai & Dux",
        description:
          "No hot water? We repair thermostats and valves or supply and install energy-efficient gas, electric, and heat-pump hot water systems.",
        image: {
          src: "/img/hero.jpg",
          alt: "Newly installed continuous flow gas hot water system on an exterior wall",
        },
        cta: "Get Hot Water Quote",
        href: "#booking",
      },
      {
        title: "No-Dig Trenchless Pipe Relining",
        tag: "35-Year Material Warranty",
        priceHint: "Zero Excavation",
        description:
          "Fix cracked or root-damaged underground sewer pipes from the inside without digging up your driveway, patio, or landscaped garden.",
        image: {
          src: "/img/about.jpg",
          alt: "Trenchless pipe relining equipment repairing an underground sewer line",
        },
        cta: "Book Pipe Inspection",
        href: "#booking",
      },
      {
        title: "Concealed Water Leak Detection",
        tag: "Non-Invasive Tech",
        priceHint: "Acoustic & Thermal Scan",
        description:
          "High water bill or damp wall patch? We pinpoint hidden slab and behind-wall leaks accurately without unnecessary demolition.",
        image: {
          src: "/img/hero.jpg",
          alt: "Plumber using thermal imaging camera to detect a concealed wall water leak",
        },
        cta: "Locate My Leak",
        href: "#booking",
      },
      {
        title: "Licensed Gas Fitting & Safety Checks",
        tag: "Certified Gas Fitters",
        priceHint: "Compliance Certificate",
        description:
          "Gas leak repairs, new gas cooktop & oven connections, outdoor BBQ bayonets, and carbon monoxide safety testing.",
        image: {
          src: "/img/about.jpg",
          alt: "Licensed gas fitter pressure testing a residential gas line",
        },
        cta: "Book Gas Fitter",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "Verified Google Reviews",
    heading: "Rated 4.9★ by Sydney Homeowners",
    subheading:
      "Real feedback from local families and strata managers who trust ADP Plumbing.",
    overallRating: "4.9",
    basedOnLabel: "Based on",
    totalReviews: "410+ Google Reviews",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "Blocked Sewer & CCTV",
        rating: 5,
        timeAgo: "1 week ago",
        text: "Our backyard drain overflowed on a Sunday morning. ADP Plumbing arrived in 30 minutes, ran a CCTV camera down the line, cleared the tree roots with a hydro-jetter, and charged the exact flat rate quoted.",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "Hot Water Replacement",
        rating: 5,
        timeAgo: "2 weeks ago",
        text: "Our old storage tank burst overnight. ADP Plumbing had a new Rinnai gas continuous-flow unit installed before lunchtime. Spotless cleanup and very polite technician.",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "Burst Pipe Repair",
        rating: 5,
        timeAgo: "3 weeks ago",
        text: "Salt air rusted through our outdoor water main valve. ADP Plumbing got here in under 30 minutes, replaced the corroded copper section with marine-grade brass, and left zero mess.",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "Stormwater & Gas Fitting",
        rating: 5,
        timeAgo: "1 month ago",
        text: "Honest bloke who actually turns up on time. Cleared our sand-choked stormwater drain and installed a new gas point on the back deck in one visit. Fair price and top workmanship.",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "Concealed Leak Detection",
        rating: 5,
        timeAgo: "3 weeks ago",
        text: "Our water bill doubled with no visible leak. They used thermal imaging to pinpoint a tiny pinhole leak under the laundry floor without tearing up the whole room. Saved us thousands.",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "Trenchless Pipe Relining",
        rating: 5,
        timeAgo: "1 month ago",
        text: "Another company quoted $14k to dig up our courtyard. ADP relined the damaged sewer pipe from an existing access point in one day for less than half the cost. Brilliant job.",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "One-Tap Online Booking",
    heading: "Book a Licensed Plumber in 60 Seconds",
    subheading:
      "Select your suburb and plumbing issue below. Our Sydney dispatch desk will confirm your arrival window within 10 minutes.",
    urgentCallLabel: "Burst Pipe or Flood? Call 24/7 Emergency Line",
    formLabels: {
      name: "Full Name *",
      namePlaceholder: "Liam Wilson",
      phone: "Mobile Number *",
      phonePlaceholder: "0400 000 000",
      suburb: "Suburb / Postcode *",
      suburbPlaceholder: "e.g. Parramatta 2150",
      service: "Plumbing Service Needed",
      urgency: "How Urgent Is This?",
      notes: "Brief Issue Description (Optional)",
      notesPlaceholder:
        "e.g. Kitchen sink is completely blocked and overflowing...",
    },
    successState: {
      title: "Plumber Dispatch Request Received!",
      thanks: "Thanks",
      desc1: "Our Sydney dispatch team will call or SMS",
      desc2: "within 10 minutes to confirm your booking for",
      resetBtn: "Submit another booking",
    },
    serviceOptions: [
      "24/7 Emergency Plumbing Repair",
      "Blocked Drains & Hydro-Jetting",
      "Hot Water System Repair / Install",
      "No-Dig Trenchless Pipe Relining",
      "Concealed Water Leak Detection",
      "Licensed Gas Fitting & Safety Check",
    ],
    urgencyOptions: [
      "Emergency (Immediate 60-Min Dispatch)",
      "Same-Day Service",
      "Within 2–3 Days / Free Quote",
    ],
    submitText: "Lock In My Upfront Quote",
    disclaimer:
      "$0 call-out fee during standard hours. Fixed price approved before work starts.",
  },
  footer: {
    description:
      "NSW Fair Trading licensed residential plumbers & gas fitters delivering 60-minute emergency response, hydro-jet drain clearing, and upfront flat-rate pricing across Sydney.",
    license: `${contactInfo.licenseNumber} • Fully Insured ($20M Public Liability)`,
    navTitle: "Navigation",
    servicesTitle: "Core Services",
    suburbsTitle: "Service Areas (Pages)",
    contactTitle: "24/7 Sydney Dispatch",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Our Services", href: "/#services" },
      { label: "Customer Reviews", href: "/#reviews" },
      { label: "Book Online", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "24/7 Emergency Plumbing", href: "/#services" },
      { label: "Blocked Drains & Jetting", href: "/#services" },
      { label: "Hot Water Repairs & Installs", href: "/#services" },
      { label: "Trenchless Pipe Relining", href: "/#services" },
    ],
    suburbLinks: [
      { label: "Plumber Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "Plumber Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "Plumber Bondi (2026)", href: "/suburb/bondi" },
      { label: "Plumber Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright: "© 2026 ADP Plumbing Pty Ltd. All rights reserved.",
  },
};

// ─────────────────────────────────────────────────────────────
// INDONESIAN CONTENT
// ─────────────────────────────────────────────────────────────
const idContent: typeof enContent = {
  hero: {
    badge: "Darurat 24/7 • Biaya Panggilan $0",
    title: "Ahli Saluran Mampet & Tukang Ledeng Sydney Berlisensi Cepat",
    description:
      "Pipa bocor, saluran pembuangan meluap, atau air panas mati? Teknisi NSW berlisensi kami hadir tepat waktu, mendiagnosis masalah dengan teknologi CCTV & termal, serta memberikan harga tetap di awal sebelum bekerja.",
    primaryCta: { text: "Dapatkan Penawaran", href: "#booking" },
    secondaryCta: {
      text: `Telepon ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "Teknisi ADP Plumbing memeriksa pipa tembaga dan tekanan air",
    },
  },
  suburbs: {
    badge: "Halaman Area Suburb Khusus",
    heading: "Pengiriman Cepat ke Seluruh Suburb Utama Sydney",
    subheading:
      "Pilih suburb Anda di bawah untuk melihat estimasi waktu kedatangan (ETA), masalah pipa lokal, dan ketersediaan teknisi.",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "Sydney Barat",
        eta: "35 Menit",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "Sydney Utara Bawah",
        eta: "40 Menit",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "Suburb Timur",
        eta: "30 Menit",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "Sutherland Shire",
        eta: "45 Menit",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "Bebas biaya tambahan perjalanan di seluruh wilayah Greater Sydney.",
    cta: { text: "Cek Ketersediaan di Suburb Anda", href: "#booking" },
  },
  about: {
    badge: "Tentang ADP Plumbing",
    heading:
      "Tukang Ledeng Residensial Paling Terpercaya di Sydney—Tanpa Kejutan Biaya",
    subheadline:
      "Harga tetap transparan di awal, pelacakan van secara langsung, dan pembersihan rapi di setiap pekerjaan.",
    paragraphs: [
      "ADP Plumbing didirikan untuk menetapkan standar yang lebih tinggi bagi pemilik rumah dan pengelola strata di Sydney. Tanpa tarif per jam yang tidak jelas atau jejak kaki kotor di lorong rumah Anda.",
      "Setiap teknisi dalam tim kami berlisensi NSW Fair Trading, diasuransikan, dan dilengkapi dengan alat hydro-jet tekanan tinggi, kamera CCTV saluran, serta detektor kebocoran akustik—menyelesaikan masalah pipa lebih cepat dan bersih.",
    ],
    floatingBadge: {
      number: "$0",
      text: "Biaya Panggilan Selama Jam Kerja Standar",
    },
    pillars: [
      {
        title: "Respons Cepat 60 Menit",
        description:
          "Van berbasis GPS yang disiagakan di berbagai titik Sydney untuk kebocoran mendesak.",
      },
      {
        title: "Harga Tetap Transparan",
        description:
          "Anda menyetujui harga tertulis yang pasti sebelum kami mulai memperbaiki.",
      },
      {
        title: "Garansi Kerja Seumur Hidup",
        description:
          "Setiap perbaikan dan instalasi pipa didukung oleh garansi pengerjaan tertulis.",
      },
      {
        title: "Perlindungan Kebersihan Rumah",
        description:
          "Pelindung sepatu, alas kerja, dan sterilisasi total sebelum kami merapikan alat.",
      },
    ],
    stats: [
      { value: "15+", label: "Tahun Melayani Sydney" },
      { value: "4.9★", label: "Rating Google Terverifikasi" },
      { value: "4.800+", label: "Pekerjaan Selesai" },
      { value: "24/7", label: "Dukungan Darurat" },
    ],
    cta: { text: "Pesan Teknisi Lokal", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "Teknisi ADP Plumbing meninjau penawaran harga bersama pemilik rumah",
    },
  },
  services: {
    badge: "Layanan Pipa & Gas Lengkap",
    heading: "Layanan Pipa Residensial yang Tuntas Sejak Kunjungan Pertama",
    subheading:
      "Mulai dari pipa pecah tengah malam hingga pelapisan ulang pipa tanpa galian dan upgrade air panas, kami berikan harga pasti di awal.",
    items: [
      {
        title: "Perbaikan Pipa Darurat 24/7",
        tag: "Respons 60 Menit",
        priceHint: "Penawaran Tetap di Awal",
        description:
          "Selang fleksibel pecah, toilet meluap, atau kebocoran air mendadak? Van darurat kami membawa 500+ suku cadang untuk perbaikan instan di tempat.",
        image: {
          src: "/img/hero.jpg",
          alt: "Teknisi memperbaiki pipa air indoor yang pecah",
        },
        cta: "Minta Teknisi Darurat",
        href: "#booking",
      },
      {
        title: "Saluran Mampet & Hydro-Jetting",
        tag: "Paling Populer",
        priceHint: "Termasuk Cek Kamera CCTV",
        description:
          "Kami menghancurkan akar pohon, lemak, dan kotoran membandel menggunakan penyemprot air 5.000 PSI dan memastikan pipa bersih 100% via CCTV HD.",
        image: {
          src: "/img/about.jpg",
          alt: "Hydro jetting bertekanan tinggi membersihkan saluran pembuangan",
        },
        cta: "Bersihkan Saluran Saya",
        href: "#booking",
      },
      {
        title: "Perbaikan & Pemasangan Pemanas Air",
        tag: "Air Panas Hari Ini",
        priceHint: "Rheem, Rinnai & Dux",
        description:
          "Air tidak panas? Kami memperbaiki termostat dan katup, atau menyuplai & memasang pemanas air gas, elektrik, dan pompa panas yang hemat energi.",
        image: {
          src: "/img/hero.jpg",
          alt: "Pemanas air gas yang baru dipasang di dinding luar",
        },
        cta: "Dapatkan Harga Air Panas",
        href: "#booking",
      },
      {
        title: "Pelapisan Ulang Pipa Tanpa Galian",
        tag: "Garansi Material 35 Tahun",
        priceHint: "Tanpa Ekskavasi",
        description:
          "Perbaiki pipa bawah tanah yang retak atau rusak karena akar dari dalam tanpa membongkar jalan masuk, teras, atau taman indah Anda.",
        image: {
          src: "/img/about.jpg",
          alt: "Peralatan pelapisan pipa tanpa galian",
        },
        cta: "Pesan Inspeksi Pipa",
        href: "#booking",
      },
      {
        title: "Deteksi Kebocoran Air Tersembunyi",
        tag: "Teknologi Non-Invasif",
        priceHint: "Pemindaian Akustik & Termal",
        description:
          "Tagihan air melonjak atau dinding basah? Kami melacak kebocoran tersembunyi di balik dinding atau lantai secara akurat tanpa pembongkaran sia-sia.",
        image: {
          src: "/img/hero.jpg",
          alt: "Teknisi menggunakan kamera termal mendeteksi kebocoran dinding",
        },
        cta: "Cari Kebocoran Saya",
        href: "#booking",
      },
      {
        title: "Pemasangan Gas Berlisensi & Uji Aman",
        tag: "Ahli Gas Bersertifikat",
        priceHint: "Sertifikat Kepatuhan",
        description:
          "Perbaikan kebocoran gas, sambungan kompor & oven gas baru, selang BBQ luar ruangan, dan pengujian keamanan karbon monoksida.",
        image: {
          src: "/img/about.jpg",
          alt: "Ahli gas berlisensi menguji tekanan saluran gas",
        },
        cta: "Pesan Ahli Gas",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "Ulasan Google Terverifikasi",
    heading: "Dinilai 4.9★ oleh Pemilik Rumah di Sydney",
    subheading:
      "Ulasan jujur dari keluarga lokal dan pengelola strata yang mempercayai ADP Plumbing.",
    overallRating: "4.9",
    basedOnLabel: "Berdasarkan",
    totalReviews: "410+ Ulasan Google",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "Saluran Mampet & CCTV",
        rating: 5,
        timeAgo: "1 minggu lalu",
        text: "Saluran air halaman belakang kami meluap pada Minggu pagi. ADP Plumbing tiba dalam 30 menit, memasang kamera CCTV, membersihkan akar pohon dengan hydro-jet, dan menagih biaya tetap persis seperti yang dikutip.",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "Penggantian Pemanas Air",
        rating: 5,
        timeAgo: "2 minggu lalu",
        text: "Tangki air lama kami pecah semalaman. ADP Plumbing memasang unit gas kontinu Rinnai baru sebelum jam makan siang. Pembersihan sangat rapi dan teknisinya ramah.",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "Perbaikan Pipa Pecah",
        rating: 5,
        timeAgo: "3 minggu lalu",
        text: "Udara asin melubangi katup utama air luar ruangan kami. ADP Plumbing datang kurang dari 30 menit, mengganti bagian tembaga korosi dengan kuningan kelas marinir, dan tidak meninggalkan kotoran.",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "Air Hujan & Pemasangan Gas",
        rating: 5,
        timeAgo: "1 bulan lalu",
        text: "Pria jujur yang benar-benar tepat waktu. Membersihkan saluran air hujan yang tersumbat pasir dan memasang titik gas baru di dek belakang dalam satu kunjungan. Harga wajar dan pengerjaan jempolan.",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "Deteksi Kebocoran Tersembunyi",
        rating: 5,
        timeAgo: "3 minggu lalu",
        text: "Tagihan air kami berlipat ganda tanpa kebocoran yang terlihat. Mereka menggunakan pencitraan termal untuk menemukan kebocoran jarum kecil di bawah lantai tanpa merusak seluruh ruangan. Menghemat banyak biaya.",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "Pelapisan Ulang Pipa",
        rating: 5,
        timeAgo: "1 bulan lalu",
        text: "Perusahaan lain mematok $14k untuk membongkar halaman kami. ADP melapisi kembali pipa limbah yang rusak dari titik akses yang ada dalam sehari dengan setengah biaya. Pekerjaan brilian.",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "Pemesanan Online 1-Klik",
    heading: "Pesan Teknisi Berlisensi dalam 60 Detik",
    subheading:
      "Pilih suburb dan masalah pipa Anda di bawah. Meja dispatch Sydney kami akan mengkonfirmasi jadwal kedatangan Anda dalam 10 menit.",
    urgentCallLabel: "Pipa Pecah atau Banjir? Telepon Darurat 24/7",
    formLabels: {
      name: "Nama Lengkap *",
      namePlaceholder: "Liam Wilson",
      phone: "Nomor Ponsel *",
      phonePlaceholder: "0400 000 000",
      suburb: "Suburb / Kode Pos *",
      suburbPlaceholder: "misal: Parramatta 2150",
      service: "Layanan Pipa yang Dibutuhkan",
      urgency: "Seberapa Mendesak Ini?",
      notes: "Deskripsi Singkat Masalah (Opsional)",
      notesPlaceholder: "misal: Wastafel dapur tersumbat total dan meluap...",
    },
    successState: {
      title: "Permintaan Teknisi Berhasil Diterima!",
      thanks: "Terima kasih",
      desc1: "Tim dispatch Sydney kami akan menelepon atau SMS",
      desc2: "dalam 10 menit untuk mengonfirmasi pemesanan Anda untuk",
      resetBtn: "Kirim pemesanan lain",
    },
    serviceOptions: [
      "Perbaikan Pipa Darurat 24/7",
      "Saluran Mampet & Hydro-Jetting",
      "Perbaikan / Pemasangan Pemanas Air",
      "Pelapisan Pipa Tanpa Galian",
      "Deteksi Kebocoran Air Tersembunyi",
      "Pemasangan Gas Berlisensi & Uji Aman",
    ],
    urgencyOptions: [
      "Darurat (Pengiriman Instan 60 Menit)",
      "Layanan Hari yang Sama",
      "Dalam 2–3 Hari / Penawaran Gratis",
    ],
    submitText: "Kunci Penawaran Harga Saya",
    disclaimer:
      "Biaya panggilan $0 selama jam kerja standar. Harga tetap disetujui sebelum pekerjaan dimulai.",
  },
  footer: {
    description:
      "Tukang ledeng residensial & ahli gas berlisensi NSW Fair Trading menyediakan respons darurat 60 menit, pembersihan saluran hydro-jet, dan harga tetap transparan di seluruh Sydney.",
    license: `${contactInfo.licenseNumber} • Diasuransikan Penuh (Tanggung Gugat Publik $20M)`,
    navTitle: "Navigasi",
    servicesTitle: "Layanan Utama",
    suburbsTitle: "Area Layanan (Halaman)",
    contactTitle: "Dispatch Sydney 24/7",
    privacyLabel: "Kebijakan Privasi",
    termsLabel: "Ketentuan Layanan",
    quickLinks: [
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "/#about" },
      { label: "Layanan Kami", href: "/#services" },
      { label: "Ulasan Pelanggan", href: "/#reviews" },
      { label: "Pesan Online", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "Pipa Darurat 24/7", href: "/#services" },
      { label: "Saluran Mampet & Jetting", href: "/#services" },
      { label: "Perbaikan & Pasang Air Panas", href: "/#services" },
      { label: "Pelapisan Ulang Pipa", href: "/#services" },
    ],
    suburbLinks: [
      { label: "Plumber Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "Plumber Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "Plumber Bondi (2026)", href: "/suburb/bondi" },
      { label: "Plumber Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright:
      "© 2026 ADP Plumbing Pty Ltd. Hak cipta dilindungi undang-undang.",
  },
};

// ─────────────────────────────────────────────────────────────
// JAPANESE CONTENT (日本語)
// ─────────────────────────────────────────────────────────────
const jaContent: typeof enContent = {
  hero: {
    badge: "24時間365日緊急対応 • 出張費$0",
    title: "迅速・公認シドニー配管工 & 排水管詰まり専門",
    description:
      "配管破裂、下水道の溢れ、お湯が出ない？NSW公認の配管工が時間通りに道具を積んだバンで到着し、CCTVとサーマル技術で問題を診断し、作業前に固定価格をご提示します。",
    primaryCta: { text: "事前見積もりを依頼", href: "#booking" },
    secondaryCta: {
      text: `お電話 ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "ADP Plumbingの公認配管工が銅管と水圧を検査",
    },
  },
  suburbs: {
    badge: "地域別専用ページ",
    heading: "シドニー主要郊外へ迅速に配達",
    subheading:
      "以下の郊外を選択して、現地の配達ETA、地域の配管問題、即時の可用性を確認してください。",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "西シドニー",
        eta: "35分",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "ローワー・ノースショア",
        eta: "40分",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "イースタン・サバーブ",
        eta: "30分",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "サザーランド・シャイア",
        eta: "45分",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "グレーターシドニー全域の郊外で追加出張費ゼロ。",
    cta: { text: "お住まいの郊外の空き状況を確認", href: "#booking" },
  },
  about: {
    badge: "ADP Plumbingについて",
    heading: "シドニーで最も信頼される住宅配管工—予想外の費用なし",
    subheadline: "事前固定価格、バンのライブ追跡、すべての作業で完璧な清掃。",
    paragraphs: [
      "ADP Plumbingは、シドニーの住宅所有者とストラタマネージャーにより高い基準を設定するために設立されました。時間を引き延ばす曖昧な時給制や、廊下に泥だらけの足跡を残すことはありません。",
      "チームのすべての配管工はNSW Fair Tradingの公認を受け、保険に加入し、高圧ハイドロジェッター、CCTV排水管カメラ、音響漏水探知機を装備しています—複雑な配管問題をより速く、よりきれいに解決します。",
    ],
    floatingBadge: { number: "$0", text: "標準時間帯の出張費" },
    pillars: [
      {
        title: "60分迅速対応",
        description:
          "緊急の漏水や詰まりに対応するため、シドニー全域にGPS配車されたバン。",
      },
      {
        title: "固定定額価格",
        description:
          "修理作業を開始する前に、書面による正確な価格をご承認いただきます。",
      },
      {
        title: "生涯労働保証",
        description:
          "すべての配管修理と設置は、書面による施工保証で裏付けられています。",
      },
      {
        title: "完璧な住まいの保護",
        description: "シューズカバー、養生シート、作業終了前の完全消毒。",
      },
    ],
    stats: [
      { value: "15+", label: "シドニーで15年以上の実績" },
      { value: "4.9★", label: "Google認定評価" },
      { value: "4,800+", label: "完了した作業" },
      { value: "24/7", label: "緊急サポート" },
    ],
    cta: { text: "地元の配管工を予約", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "ADP Plumbingの制服を着た技術者が住宅所有者と固定価格の見積もりを確認",
    },
  },
  services: {
    badge: "配管 & ガス全般",
    heading: "初回で正しく完了する住宅配管サービス",
    subheading:
      "深夜の配管破裂から非開削パイプライニング、給湯器のアップグレードまで、事前に固定価格をお見積りします。",
    items: [
      {
        title: "24時間365日緊急配管修理",
        tag: "60分対応",
        priceHint: "事前固定見積もり",
        description:
          "フレキシホースの破裂、トイレの溢れ、突然の水漏れ？緊急バンには500以上の交換部品を積んでおり、その場で即修理します。",
        image: {
          src: "/img/hero.jpg",
          alt: "屋内の破裂した水道管を修理する緊急配管工",
        },
        cta: "緊急配管工を依頼",
        href: "#booking",
      },
      {
        title: "排水管詰まり & ハイドロジェッティング",
        tag: "一番人気",
        priceHint: "CCTVカメラ検査込み",
        description:
          "5,000 PSIのウォータージェッターで頑固な木の根、油脂、堆積物を吹き飛ばし、HD CCTVで100%きれいな配管を確認します。",
        image: {
          src: "/img/about.jpg",
          alt: "高圧ハイドロジェッターで詰まった住宅下水管を清掃",
        },
        cta: "排水管を清掃",
        href: "#booking",
      },
      {
        title: "給湯器の修理 & 設置",
        tag: "当日給湯",
        priceHint: "Rheem, Rinnai & Dux",
        description:
          "お湯が出ない？サーモスタットやバルブを修理するか、省エネのガス・電気・ヒートポンプ給湯器を供給・設置します。",
        image: {
          src: "/img/hero.jpg",
          alt: "外壁に新しく設置された連続流ガス給湯器",
        },
        cta: "給湯見積もりを取得",
        href: "#booking",
      },
      {
        title: "非開削パイプライニング",
        tag: "材料35年保証",
        priceHint: "掘削ゼロ",
        description:
          "ひび割れた地下下水管や木の根で損傷した管を、車道、パティオ、庭を掘り起こさずに内側から修理します。",
        image: {
          src: "/img/about.jpg",
          alt: "地下下水管を修理する非開削パイプライニング装置",
        },
        cta: "配管検査を予約",
        href: "#booking",
      },
      {
        title: "隠れた漏水探知",
        tag: "非侵襲技術",
        priceHint: "音響 & サーマルスキャン",
        description:
          "水道代が高い、壁に湿った跡？不要な解体なしで、床下や壁裏の隠れた漏水を正確に特定します。",
        image: {
          src: "/img/hero.jpg",
          alt: "サーマルカメラで壁の漏水を検出する配管工",
        },
        cta: "漏水を特定",
        href: "#booking",
      },
      {
        title: "公認ガス設備 & 安全点検",
        tag: "認定ガス設備士",
        priceHint: "適合証明書",
        description:
          "ガス漏れ修理、新しいガスコンロ & オーブンの接続、屋外BBQ用ガス口、一酸化炭素安全テスト。",
        image: {
          src: "/img/about.jpg",
          alt: "住宅ガス管の圧力テストを行う公認ガス設備士",
        },
        cta: "ガス設備士を予約",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "Google認定レビュー",
    heading: "シドニーの住宅所有者から4.9★の評価",
    subheading:
      "ADP Plumbingを信頼する地元の家族やストラタマネージャーからの実際の声。",
    overallRating: "4.9",
    basedOnLabel: "基づく",
    totalReviews: "410+ Googleレビュー",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "排水管詰まり & CCTV",
        rating: 5,
        timeAgo: "1週間前",
        text: "日曜日の朝に裏庭の排水管が溢れました。ADP Plumbingは30分で到着し、CCTVカメラを配管に通し、ハイドロジェッターで木の根を除去し、見積もり通りの固定料金を請求しました。",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "給湯器交換",
        rating: 5,
        timeAgo: "2週間前",
        text: "古い貯湯タンクが夜中に破裂しました。ADP Plumbingは昼前に新しいRinnaiガス瞬間給湯器を設置しました。完璧な後片付けととても丁寧な技術者でした。",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "配管破裂修理",
        rating: 5,
        timeAgo: "3週間前",
        text: "塩害で屋外の水道メーターのバルブが錆びました。ADP Plumbingは30分以内に到着し、腐食した銅管部分を船舶グレードの真鍮に交換し、汚れを一切残しませんでした。",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "雨水 & ガス設備",
        rating: 5,
        timeAgo: "1ヶ月前",
        text: "本当に時間通りに来てくれる正直な人。砂で詰まった雨水排水管を清掃し、裏デッキに新しいガス口を一度の訪問で設置。適正価格と最高の仕事ぶり。",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "隠れた漏水探知",
        rating: 5,
        timeAgo: "3週間前",
        text: "目に見える漏水がないのに水道代が倍に。サーマルイメージングを使って洗濯室の床下の小さなピンホール漏水を部屋全体を壊さずに特定しました。何千ドルも節約できました。",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "非開削パイプライニング",
        rating: 5,
        timeAgo: "1ヶ月前",
        text: "別の会社は中庭を掘り起こすのに$14kと見積もりました。ADPは既存のアクセスポイントから損傷した下水管を1日で半分以下のコストでライニングしました。素晴らしい仕事。",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "ワンタップオンライン予約",
    heading: "60秒で公認配管工を予約",
    subheading:
      "以下の郊外と配管問題を選択してください。シドニーディスパッチデスクが10分以内に到着時間を確認します。",
    urgentCallLabel: "配管破裂や洪水？24時間緊急回線に電話",
    formLabels: {
      name: "氏名 *",
      namePlaceholder: "Liam Wilson",
      phone: "携帯番号 *",
      phonePlaceholder: "0400 000 000",
      suburb: "郊外 / 郵便番号 *",
      suburbPlaceholder: "例: Parramatta 2150",
      service: "必要な配管サービス",
      urgency: "どのくらい緊急ですか？",
      notes: "問題の簡単な説明（任意）",
      notesPlaceholder: "例: キッチンシンクが完全に詰まり溢れています...",
    },
    successState: {
      title: "配管工派遣リクエストを受け付けました！",
      thanks: "ありがとうございます",
      desc1: "シドニーディスパッチチームがお電話またはSMSで",
      desc2: "10分以内にご予約を確認するためにご連絡します",
      resetBtn: "別の予約を送信",
    },
    serviceOptions: [
      "24時間365日緊急配管修理",
      "排水管詰まり & ハイドロジェッティング",
      "給湯器の修理 / 設置",
      "非開削パイプライニング",
      "隠れた漏水探知",
      "公認ガス設備 & 安全点検",
    ],
    urgencyOptions: [
      "緊急（即時60分配車）",
      "当日サービス",
      "2〜3日以内 / 無料見積もり",
    ],
    submitText: "事前見積もりを確定",
    disclaimer:
      "標準時間帯は出張費$0。作業開始前に固定価格をご承認いただきます。",
  },
  footer: {
    description:
      "NSW Fair Trading公認の住宅配管工 & ガス設備士が、60分の緊急対応、ハイドロジェット排水管清掃、事前固定価格をシドニー全域で提供。",
    license: `${contactInfo.licenseNumber} • 完全保険加入（公共賠償責任$20M）`,
    navTitle: "ナビゲーション",
    servicesTitle: "主要サービス",
    suburbsTitle: "サービスエリア（ページ）",
    contactTitle: "24時間シドニーディスパッチ",
    privacyLabel: "プライバシーポリシー",
    termsLabel: "利用規約",
    quickLinks: [
      { label: "ホーム", href: "/" },
      { label: "会社概要", href: "/#about" },
      { label: "サービス", href: "/#services" },
      { label: "お客様の声", href: "/#reviews" },
      { label: "オンライン予約", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "24時間緊急配管", href: "/#services" },
      { label: "排水管詰まり & ジェッティング", href: "/#services" },
      { label: "給湯修理 & 設置", href: "/#services" },
      { label: "非開削パイプライニング", href: "/#services" },
    ],
    suburbLinks: [
      { label: "配管工 Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "配管工 Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "配管工 Bondi (2026)", href: "/suburb/bondi" },
      { label: "配管工 Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright: "© 2026 ADP Plumbing Pty Ltd. All rights reserved.",
  },
};

// ─────────────────────────────────────────────────────────────
// CHINESE CONTENT (中文 - 简体)
// ─────────────────────────────────────────────────────────────
const zhContent: typeof enContent = {
  hero: {
    badge: "24/7紧急派遣 • $0上门费",
    title: "快速、持证悉尼水管工及下水道堵塞专家",
    description:
      "管道爆裂、下水道溢出或没有热水？我们持NSW牌照的水管工准时到达，配备齐全的工具车，使用CCTV和热成像技术诊断问题，并在动工前给您固定报价。",
    primaryCta: { text: "获取预报价", href: "#booking" },
    secondaryCta: {
      text: `致电 ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "ADP Plumbing持证水管工检查铜管和水压",
    },
  },
  suburbs: {
    badge: "专属本地城区页面",
    heading: "悉尼主要城区快速本地派遣",
    subheading:
      "选择您所在的城区，查看本地派遣预计到达时间、区域水管问题及即时可用性。",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "西悉尼",
        eta: "35分钟",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "下北岸",
        eta: "40分钟",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "东区",
        eta: "30分钟",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "萨瑟兰郡",
        eta: "45分钟",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "大悉尼地区所有周边城区零差旅附加费。",
    cta: { text: "查询您所在城区的可用性", href: "#booking" },
  },
  about: {
    badge: "关于ADP Plumbing",
    heading: "悉尼最可靠的住宅水管工——零意外",
    subheadline: "预先固定价格、实时车辆追踪，每项工作都干净整洁。",
    paragraphs: [
      "ADP Plumbing的创立旨在为悉尼房主和物业经理树立更高标准。没有拖沓计时的模糊小时费率，也不会在您的走廊上留下泥脚印。",
      "我们团队的每位水管工均持有NSW Fair Trading牌照、有保险，并配备高压水射流机、CCTV管道摄像机和声学漏水探测器——更快更干净地解决复杂水管问题。",
    ],
    floatingBadge: { number: "$0", text: "标准时段上门费" },
    pillars: [
      {
        title: "60分钟快速响应",
        description: "GPS派遣车辆分布在悉尼各地，应对紧急漏水和堵塞。",
      },
      {
        title: "固定统一价格",
        description: "在我们开始任何维修工作前，您需批准确切的书面价格。",
      },
      {
        title: "终身工艺保证",
        description: "每项管道维修和安装均有书面工艺保修支持。",
      },
      {
        title: "无痕家居保护",
        description: "鞋套、防尘布，打包前全面消毒。",
      },
    ],
    stats: [
      { value: "15+", label: "年服务悉尼" },
      { value: "4.9★", label: "Google认证评分" },
      { value: "4,800+", label: "完成工作" },
      { value: "24/7", label: "紧急支持" },
    ],
    cta: { text: "预约本地水管工", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "ADP Plumbing穿制服的技师与房主审阅固定价格报价",
    },
  },
  services: {
    badge: "完整水管与燃气服务",
    heading: "一次做对的住宅水管服务",
    subheading:
      "从午夜爆管到非开挖管道内衬和热水器升级，我们预先提供固定报价。",
    items: [
      {
        title: "24/7紧急水管维修",
        tag: "60分钟响应",
        priceHint: "预先固定报价",
        description:
          "软管爆裂、马桶溢出或突发漏水？我们的紧急车辆携带500多种替换零件，可现场即时修复。",
        image: {
          src: "/img/hero.jpg",
          alt: "紧急水管工修理室内爆裂水管",
        },
        cta: "请求紧急水管工",
        href: "#booking",
      },
      {
        title: "下水道堵塞与高压水射流",
        tag: "最受欢迎",
        priceHint: "含CCTV摄像头检查",
        description:
          "我们使用5,000 PSI水射流机冲开顽固树根、油脂和杂物，并通过高清CCTV验证管道100%畅通。",
        image: {
          src: "/img/about.jpg",
          alt: "高压水射流机疏通住宅污水管",
        },
        cta: "疏通我的下水道",
        href: "#booking",
      },
      {
        title: "热水器维修与安装",
        tag: "当天热水",
        priceHint: "Rheem、Rinnai和Dux",
        description:
          "没有热水？我们维修恒温器和阀门，或供应和安装节能燃气、电力和热泵热水系统。",
        image: {
          src: "/img/hero.jpg",
          alt: "新安装在外墙的燃气即热式热水器",
        },
        cta: "获取热水报价",
        href: "#booking",
      },
      {
        title: "非开挖管道内衬",
        tag: "材料35年保修",
        priceHint: "零开挖",
        description:
          "无需挖开车道、露台或景观花园，从内部修复破裂或被树根损坏的地下污水管。",
        image: {
          src: "/img/about.jpg",
          alt: "非开挖管道内衬设备修复地下污水管",
        },
        cta: "预约管道检查",
        href: "#booking",
      },
      {
        title: "隐藏漏水检测",
        tag: "非侵入技术",
        priceHint: "声学与热成像扫描",
        description:
          "水费高或墙壁潮湿？我们准确确定隐藏的楼板和墙内漏水，无需不必要的拆除。",
        image: {
          src: "/img/hero.jpg",
          alt: "水管工使用热成像相机检测墙壁隐藏漏水",
        },
        cta: "定位我的漏水",
        href: "#booking",
      },
      {
        title: "持证燃气安装与安全检查",
        tag: "认证燃气安装工",
        priceHint: "合规证书",
        description:
          "燃气泄漏维修、新燃气灶和烤箱连接、户外烧烤燃气接口以及一氧化碳安全检测。",
        image: {
          src: "/img/about.jpg",
          alt: "持证燃气安装工对住宅燃气管道进行压力测试",
        },
        cta: "预约燃气安装工",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "Google认证评论",
    heading: "悉尼房主评为4.9★",
    subheading: "来自信任ADP Plumbing的本地家庭和物业经理的真实反馈。",
    overallRating: "4.9",
    basedOnLabel: "基于",
    totalReviews: "410+ Google评论",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "下水道堵塞与CCTV",
        rating: 5,
        timeAgo: "1周前",
        text: "周日早上我们的后院下水道溢出了。ADP Plumbing30分钟内到达，将CCTV摄像头送入管道，用高压水射流机清除树根，并收取了报价的准确统一价格。",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "热水器更换",
        rating: 5,
        timeAgo: "2周前",
        text: "我们的旧储水罐夜间爆裂。ADP Plumbing在午餐前安装了一台新的Rinnai燃气即热式热水器。清理一尘不染，技师非常有礼貌。",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "爆管维修",
        rating: 5,
        timeAgo: "3周前",
        text: "盐雾腐蚀了我们的户外主水阀。ADP Plumbing不到30分钟就到达，用船用级黄铜更换了腐蚀的铜段，没有留下任何脏乱。",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "雨水与燃气安装",
        rating: 5,
        timeAgo: "1个月前",
        text: "诚实的人，真的准时到达。一次上门就清理了我们被沙子堵塞的雨水渠，并在后甲板安装了新的燃气接口。价格公道，工艺一流。",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "隐藏漏水检测",
        rating: 5,
        timeAgo: "3周前",
        text: "没有可见漏水，但水费翻倍。他们使用热成像技术定位了洗衣房地板下的一个小针孔漏水，没有拆毁整个房间。为我们节省了数千元。",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "非开挖管道内衬",
        rating: 5,
        timeAgo: "1个月前",
        text: "另一家公司报价$14k挖开我们的庭院。ADP从现有检修口一天内完成受损污水管内衬，费用不到一半。出色的工作。",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "一键在线预约",
    heading: "60秒预约持证水管工",
    subheading:
      "在下方选择您的城区和水管问题。我们的悉尼调度台将在10分钟内确认您的到达时间窗口。",
    urgentCallLabel: "爆管或水浸？拨打24/7紧急热线",
    formLabels: {
      name: "全名 *",
      namePlaceholder: "Liam Wilson",
      phone: "手机号码 *",
      phonePlaceholder: "0400 000 000",
      suburb: "城区/邮编 *",
      suburbPlaceholder: "例如：Parramatta 2150",
      service: "所需水管服务",
      urgency: "有多紧急？",
      notes: "问题简述（可选）",
      notesPlaceholder: "例如：厨房水槽完全堵塞并溢出...",
    },
    successState: {
      title: "水管工派遣请求已收到！",
      thanks: "感谢",
      desc1: "我们的悉尼调度团队将致电或短信",
      desc2: "在10分钟内确认您的预约",
      resetBtn: "提交另一个预约",
    },
    serviceOptions: [
      "24/7紧急水管维修",
      "下水道堵塞与高压水射流",
      "热水器维修/安装",
      "非开挖管道内衬",
      "隐藏漏水检测",
      "持证燃气安装与安全检查",
    ],
    urgencyOptions: ["紧急（即时60分钟派遣）", "当天服务", "2-3天内/免费报价"],
    submitText: "锁定我的预报价",
    disclaimer: "标准时段$0上门费。动工前需批准固定价格。",
  },
  footer: {
    description:
      "NSW Fair Trading持证住宅水管工和燃气安装工，在悉尼提供60分钟紧急响应、高压水射流下水道疏通和预先统一价格。",
    license: `${contactInfo.licenseNumber} • 全额保险（$20M公共责任险）`,
    navTitle: "导航",
    servicesTitle: "核心服务",
    suburbsTitle: "服务区域（页面）",
    contactTitle: "24/7悉尼调度",
    privacyLabel: "隐私政策",
    termsLabel: "服务条款",
    quickLinks: [
      { label: "首页", href: "/" },
      { label: "关于我们", href: "/#about" },
      { label: "我们的服务", href: "/#services" },
      { label: "客户评价", href: "/#reviews" },
      { label: "在线预约", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "24/7紧急水管", href: "/#services" },
      { label: "下水道堵塞与射流", href: "/#services" },
      { label: "热水维修与安装", href: "/#services" },
      { label: "非开挖管道内衬", href: "/#services" },
    ],
    suburbLinks: [
      { label: "水管工 Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "水管工 Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "水管工 Bondi (2026)", href: "/suburb/bondi" },
      { label: "水管工 Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright: "© 2026 ADP Plumbing Pty Ltd. 版权所有。",
  },
};

// ─────────────────────────────────────────────────────────────
// THAI CONTENT (ไทย)
// ─────────────────────────────────────────────────────────────
const thContent: typeof enContent = {
  hero: {
    badge: "บริการฉุกเฉิน 24/7 • ค่าบริการนอกสถานที่ $0",
    title: "ช่างประปาซิดนีย์ที่มีใบอนุญาตและผู้เชี่ยวชาญท่อตันที่รวดเร็ว",
    description:
      "ท่อแตก น้ำท่วมท่อระบายน้ำ หรือไม่มีน้ำร้อน? ช่างประปาที่มีใบอนุญาต NSW ของเรามาถึงตรงเวลาด้วยรถตู้ที่ติดตั้งอุปกรณ์ครบ ตรวจวินิจฉัยด้วยเทคโนโลยี CCTV และกล้องความร้อน และให้ราคาคงที่ก่อนเริ่มทำงาน",
    primaryCta: { text: "รับใบเสนอราคาล่วงหน้า", href: "#booking" },
    secondaryCta: {
      text: `โทร ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "ช่างประปา ADP Plumbing ตรวจสอบท่อทองแดงและแรงดันน้ำ",
    },
  },
  suburbs: {
    badge: "หน้าเขตชานเมืองเฉพาะ",
    heading: "จัดส่งถึงชานเมืองซิดนีย์หลักอย่างรวดเร็ว",
    subheading:
      "เลือกชานเมืองของคุณด้านล่างเพื่อดู ETA การจัดส่งในท้องถิ่น ปัญหาประปาในพื้นที่ และความพร้อมให้บริการทันที",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "ซิดนีย์ตะวันตก",
        eta: "35 นาที",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "โลเวอร์นอร์ธชอร์",
        eta: "40 นาที",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "อีสเทิร์นซับเบิร์บส์",
        eta: "30 นาที",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "ซัทเทอร์แลนด์ไชร์",
        eta: "45 นาที",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "ไม่มีค่าธรรมเนียมการเดินทางในชานเมืองทั้งหมดของเกรตเตอร์ซิดนีย์",
    cta: { text: "ตรวจสอบความพร้อมในชานเมืองของคุณ", href: "#booking" },
  },
  about: {
    badge: "เกี่ยวกับ ADP Plumbing",
    heading:
      "ช่างประปาที่อยู่อาศัยที่เชื่อถือได้ที่สุดในซิดนีย์—ไม่มีค่าใช้จ่ายเกินคาด",
    subheadline:
      "ราคาคงที่ล่วงหน้า ติดตามรถตู้แบบเรียลไทม์ และทำความสะอาดอย่างหมดจดในทุกงาน",
    paragraphs: [
      "ADP Plumbing ก่อตั้งขึ้นเพื่อกำหนดมาตรฐานที่สูงขึ้นสำหรับเจ้าของบ้านและผู้จัดการอาคารในซิดนีย์ ไม่มีอัตรารายชั่วโมงที่คลุมเครือที่ยืดเวลา และไม่มีรอยเท้าเปื้อนโคลนตามทางเดินของคุณ",
      "ช่างประปาทุกคนในทีมของเราได้รับใบอนุญาตจาก NSW Fair Trading มีประกัน และติดตั้งเครื่องฉีดน้ำแรงดันสูง กล้องตรวจท่อ CCTV และเครื่องตรวจจับการรั่วซึมด้วยเสียง—แก้ไขปัญหาประปาที่ซับซ้อนได้เร็วและสะอาดขึ้น",
    ],
    floatingBadge: {
      number: "$0",
      text: "ค่าบริการนอกสถานที่ในเวลาทำการมาตรฐาน",
    },
    pillars: [
      {
        title: "ตอบสนองรวดเร็ว 60 นาที",
        description:
          "รถตู้ที่จัดส่งด้วย GPS ประจำการทั่วซิดนีย์สำหรับการรั่วซึมและสิ่งอุดตันเร่งด่วน",
      },
      {
        title: "ราคาคงที่แบบเหมาจ่าย",
        description:
          "คุณอนุมัติราคาเป็นลายลักษณ์อักษรที่แน่นอนก่อนที่เราจะเริ่มงานซ่อม",
      },
      {
        title: "รับประกันงานตลอดชีพ",
        description:
          "การซ่อมและติดตั้งท่อทุกงานได้รับการสนับสนุนจากการรับประกันงานเป็นลายลักษณ์อักษร",
      },
      {
        title: "การปกป้องบ้านอย่างหมดจด",
        description:
          "ถุงคลุมรองเท้า ผ้าคลุมพื้น และฆ่าเชื้อเต็มรูปแบบก่อนเก็บของ",
      },
    ],
    stats: [
      { value: "15+", label: "ปีที่ให้บริการซิดนีย์" },
      { value: "4.9★", label: "คะแนน Google ที่ยืนยันแล้ว" },
      { value: "4,800+", label: "งานที่เสร็จสิ้น" },
      { value: "24/7", label: "การสนับสนุนฉุกเฉิน" },
    ],
    cta: { text: "จองช่างประปาในพื้นที่", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "ช่างเทคนิคในเครื่องแบบ ADP Plumbing ตรวจสอบใบเสนอราคากับเจ้าของบ้าน",
    },
  },
  services: {
    badge: "บริการประปาและแก๊สครบวงจร",
    heading: "บริการประปาที่อยู่อาศัยที่ทำให้ถูกต้องตั้งแต่ครั้งแรก",
    subheading:
      "ตั้งแต่ท่อแตกกลางดึกไปจนถึงการบุท่อแบบไม่ขุดและอัปเกรดเครื่องทำน้ำร้อน เรามีใบเสนอราคาคงที่ล่วงหน้า",
    items: [
      {
        title: "ซ่อมประปาฉุกเฉิน 24/7",
        tag: "ตอบสนอง 60 นาที",
        priceHint: "ใบเสนอราคาคงที่ล่วงหน้า",
        description:
          "สายยางแตก ห้องน้ำล้น หรือน้ำรั่วกะทันหัน? รถฉุกเฉินของเราบรรทุกอะไหล่กว่า 500 ชิ้นเพื่อซ่อมแซมทันที ณ ที่เกิดเหตุ",
        image: {
          src: "/img/hero.jpg",
          alt: "ช่างประปาฉุกเฉินซ่อมท่อน้ำที่แตกภายในอาคาร",
        },
        cta: "ขอช่างประปาฉุกเฉิน",
        href: "#booking",
      },
      {
        title: "ท่อตันและ Hydro-Jetting",
        tag: "ยอดนิยมที่สุด",
        priceHint: "รวมการตรวจด้วยกล้อง CCTV",
        description:
          "เราใช้เครื่องฉีดน้ำ 5,000 PSI กำจัดรากไม้ ไขมัน และเศษซากที่ดื้อรั้น และตรวจสอบท่อที่โล่ง 100% ด้วย CCTV ความละเอียดสูง",
        image: {
          src: "/img/about.jpg",
          alt: "เครื่องฉีดน้ำแรงดันสูงทำความสะอาดท่อระบายน้ำที่อุดตัน",
        },
        cta: "ล้างท่อของฉัน",
        href: "#booking",
      },
      {
        title: "ซ่อมและติดตั้งเครื่องทำน้ำร้อน",
        tag: "น้ำร้อนภายในวันเดียว",
        priceHint: "Rheem, Rinnai & Dux",
        description:
          "ไม่มีน้ำร้อน? เราซ่อมเทอร์โมสตัทและวาล์ว หรือจัดหาและติดตั้งระบบน้ำร้อนแบบแก๊ส ไฟฟ้า และปั๊มความร้อนที่ประหยัดพลังงาน",
        image: {
          src: "/img/hero.jpg",
          alt: "เครื่องทำน้ำร้อนแก๊สแบบต่อเนื่องที่ติดตั้งใหม่บนผนังภายนอก",
        },
        cta: "รับใบเสนอราคาน้ำร้อน",
        href: "#booking",
      },
      {
        title: "การบุท่อแบบไม่ขุด",
        tag: "รับประกันวัสดุ 35 ปี",
        priceHint: "ไม่ต้องขุด",
        description:
          "ซ่อมท่อระบายน้ำใต้ดินที่แตกร้าวหรือเสียหายจากรากไม้จากด้านในโดยไม่ต้องขุดถนน ลานบ้าน หรือสวนที่จัดภูมิทัศน์",
        image: {
          src: "/img/about.jpg",
          alt: "อุปกรณ์บุท่อแบบไม่ขุดซ่อมท่อระบายน้ำใต้ดิน",
        },
        cta: "จองตรวจท่อ",
        href: "#booking",
      },
      {
        title: "ตรวจจับการรั่วซึมที่ซ่อนอยู่",
        tag: "เทคโนโลยีไม่รุกราน",
        priceHint: "สแกนเสียงและความร้อน",
        description:
          "ค่าน้ำสูงหรือผนังเปียก? เราระบุการรั่วซึมที่ซ่อนอยู่ใต้พื้นและหลังผนังอย่างแม่นยำโดยไม่ต้องรื้อถอนโดยไม่จำเป็น",
        image: {
          src: "/img/hero.jpg",
          alt: "ช่างประปาใช้กล้องถ่ายภาพความร้อนตรวจจับการรั่วซึมในผนัง",
        },
        cta: "ค้นหาการรั่วซึมของฉัน",
        href: "#booking",
      },
      {
        title: "ติดตั้งแก๊สที่มีใบอนุญาตและการตรวจสอบความปลอดภัย",
        tag: "ช่างแก๊สที่ได้รับการรับรอง",
        priceHint: "ใบรับรองการปฏิบัติตาม",
        description:
          "ซ่อมแซมการรั่วไหลของแก๊ส เชื่อมต่อเตาแก๊สและเตาอบใหม่ จุดเชื่อมต่อบาร์บีคิวกลางแจ้ง และทดสอบความปลอดภัยคาร์บอนมอนอกไซด์",
        image: {
          src: "/img/about.jpg",
          alt: "ช่างแก๊สที่มีใบอนุญาตทดสอบแรงดันท่อแก๊สในที่พักอาศัย",
        },
        cta: "จองช่างแก๊ส",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "รีวิว Google ที่ยืนยันแล้ว",
    heading: "ได้รับคะแนน 4.9★ จากเจ้าของบ้านในซิดนีย์",
    subheading:
      "ความคิดเห็นจริงจากครอบครัวในท้องถิ่นและผู้จัดการอาคารที่ไว้วางใจ ADP Plumbing",
    overallRating: "4.9",
    basedOnLabel: "จาก",
    totalReviews: "410+ รีวิว Google",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "ท่อตันและ CCTV",
        rating: 5,
        timeAgo: "1 สัปดาห์ที่แล้ว",
        text: "ท่อระบายน้ำหลังบ้านของเราเอ่อล้นในเช้าวันอาทิตย์ ADP Plumbing มาถึงใน 30 นาที สอดกล้อง CCTV ลงในท่อ กำจัดรากไม้ด้วย hydro-jetter และคิดค่าบริการคงที่ตามที่เสนอราคาไว้",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "เปลี่ยนเครื่องทำน้ำร้อน",
        rating: 5,
        timeAgo: "2 สัปดาห์ที่แล้ว",
        text: "ถังเก็บน้ำเก่าของเราแตกในตอนกลางคืน ADP Plumbing ติดตั้งเครื่องทำน้ำร้อนแก๊สแบบต่อเนื่อง Rinnai ใหม่ก่อนเที่ยง ทำความสะอาดอย่างไร้ที่ติและช่างสุภาพมาก",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "ซ่อมท่อแตก",
        rating: 5,
        timeAgo: "3 สัปดาห์ที่แล้ว",
        text: "ไอเค็มกัดกร่อนวาล์วน้ำหลักกลางแจ้งของเรา ADP Plumbing มาถึงในเวลาไม่ถึง 30 นาที เปลี่ยนส่วนทองแดงที่กัดกร่อนด้วยทองเหลืองระดับmarine และไม่ทิ้งความสกปรกไว้เลย",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "น้ำฝนและติดตั้งแก๊ส",
        rating: 5,
        timeAgo: "1 เดือนที่แล้ว",
        text: "คนซื่อสัตย์ที่มาตรงเวลาจริงๆ ล้างท่อระบายน้ำฝนที่เต็มไปด้วยทรายและติดตั้งจุดแก๊สใหม่บนดาดฟ้าหลังบ้านในการเข้าครั้งเดียว ราคายุติธรรมและฝีมือชั้นยอด",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "ตรวจจับการรั่วซึมที่ซ่อนอยู่",
        rating: 5,
        timeAgo: "3 สัปดาห์ที่แล้ว",
        text: "ค่าน้ำของเราเพิ่มเป็นสองเท่าโดยไม่มีการรั่วซึมที่มองเห็นได้ พวกเขาใช้การถ่ายภาพความร้อนเพื่อระบุการรั่วซึมเล็กๆ ใต้พื้นห้องซักผ้าโดยไม่ต้องรื้อทั้งห้อง ช่วยเราประหยัดเงินหลายพันดอลลาร์",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "การบุท่อแบบไม่ขุด",
        rating: 5,
        timeAgo: "1 เดือนที่แล้ว",
        text: "บริษัทอื่นเสนอราคา $14k เพื่อขุดลานบ้านของเรา ADP บุท่อระบายน้ำที่เสียหายจากจุดเข้าถึงที่มีอยู่ภายในหนึ่งวันในราคาน้อยกว่าครึ่ง งานยอดเยี่ยม",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "การจองออนไลน์แบบแตะครั้งเดียว",
    heading: "จองช่างประปาที่มีใบอนุญาตใน 60 วินาที",
    subheading:
      "เลือกชานเมืองและปัญหาประปาของคุณด้านล่าง โต๊ะจัดส่งซิดนีย์ของเราจะยืนยันช่วงเวลาที่คุณจะมาถึงภายใน 10 นาที",
    urgentCallLabel: "ท่อแตกหรือน้ำท่วม? โทรสายด่วนฉุกเฉิน 24/7",
    formLabels: {
      name: "ชื่อเต็ม *",
      namePlaceholder: "Liam Wilson",
      phone: "หมายเลขมือถือ *",
      phonePlaceholder: "0400 000 000",
      suburb: "ชานเมือง / รหัสไปรษณีย์ *",
      suburbPlaceholder: "เช่น Parramatta 2150",
      service: "บริการประปาที่ต้องการ",
      urgency: "เร่งด่วนแค่ไหน?",
      notes: "คำอธิบายปัญหาสั้นๆ (ไม่บังคับ)",
      notesPlaceholder: "เช่น อ่างล้างจานในครัวตันสนิทและล้น...",
    },
    successState: {
      title: "ได้รับคำขอจัดส่งช่างประปาแล้ว!",
      thanks: "ขอบคุณ",
      desc1: "ทีมจัดส่งซิดนีย์ของเราจะโทรหรือ SMS",
      desc2: "ภายใน 10 นาทีเพื่อยืนยันการจองของคุณสำหรับ",
      resetBtn: "ส่งการจองอื่น",
    },
    serviceOptions: [
      "ซ่อมประปาฉุกเฉิน 24/7",
      "ท่อตันและ Hydro-Jetting",
      "ซ่อม/ติดตั้งเครื่องทำน้ำร้อน",
      "การบุท่อแบบไม่ขุด",
      "ตรวจจับการรั่วซึมที่ซ่อนอยู่",
      "ติดตั้งแก๊สที่มีใบอนุญาตและการตรวจสอบความปลอดภัย",
    ],
    urgencyOptions: [
      "ฉุกเฉิน (จัดส่งทันที 60 นาที)",
      "บริการภายในวันเดียวกัน",
      "ภายใน 2-3 วัน / ใบเสนอราคาฟรี",
    ],
    submitText: "ล็อคใบเสนอราคาล่วงหน้าของฉัน",
    disclaimer:
      "ค่าบริการนอกสถานที่ $0 ในเวลาทำการมาตรฐาน ราคาคงที่ได้รับการอนุมัติก่อนเริ่มงาน",
  },
  footer: {
    description:
      "ช่างประปาที่อยู่อาศัยและช่างแก๊สที่มีใบอนุญาต NSW Fair Trading ให้บริการตอบสนองฉุกเฉิน 60 นาที ล้างท่อด้วย hydro-jet และราคาคงที่ล่วงหน้าทั่วซิดนีย์",
    license: `${contactInfo.licenseNumber} • ประกันเต็มจำนวน (ความรับผิดต่อสาธารณะ $20M)`,
    navTitle: "การนำทาง",
    servicesTitle: "บริการหลัก",
    suburbsTitle: "พื้นที่ให้บริการ (หน้า)",
    contactTitle: "จัดส่งซิดนีย์ 24/7",
    privacyLabel: "นโยบายความเป็นส่วนตัว",
    termsLabel: "ข้อกำหนดการให้บริการ",
    quickLinks: [
      { label: "หน้าแรก", href: "/" },
      { label: "เกี่ยวกับเรา", href: "/#about" },
      { label: "บริการของเรา", href: "/#services" },
      { label: "รีวิวลูกค้า", href: "/#reviews" },
      { label: "จองออนไลน์", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "ประปาฉุกเฉิน 24/7", href: "/#services" },
      { label: "ท่อตันและ Jetting", href: "/#services" },
      { label: "ซ่อมและติดตั้งน้ำร้อน", href: "/#services" },
      { label: "การบุท่อแบบไม่ขุด", href: "/#services" },
    ],
    suburbLinks: [
      { label: "ช่างประปา Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "ช่างประปา Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "ช่างประปา Bondi (2026)", href: "/suburb/bondi" },
      { label: "ช่างประปา Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright: "© 2026 ADP Plumbing Pty Ltd. สงวนลิขสิทธิ์",
  },
};

// ─────────────────────────────────────────────────────────────
// VIETNAMESE CONTENT (Tiếng Việt)
// ─────────────────────────────────────────────────────────────
const viContent: typeof enContent = {
  hero: {
    badge: "Điều phối khẩn cấp 24/7 • Phí gọi $0",
    title:
      "Thợ sửa ống nước có giấy phép Sydney nhanh chóng & Chuyên gia thông tắc cống",
    description:
      "Ống nước vỡ, cống tràn hay không có nước nóng? Thợ sửa ống nước có giấy phép NSW của chúng tôi đến đúng giờ với xe tải đầy đủ dụng cụ, chẩn đoán bằng công nghệ CCTV & nhiệt, và báo giá cố định trước khi bắt tay vào việc.",
    primaryCta: { text: "Nhận báo giá trước", href: "#booking" },
    secondaryCta: {
      text: `Gọi ${contactInfo.displayPhone}`,
      href: `tel:${contactInfo.phone}`,
    },
    image: {
      src: "/img/hero.jpg",
      alt: "Thợ sửa ống nước ADP Plumbing kiểm tra đường ống đồng và áp lực nước",
    },
  },
  suburbs: {
    badge: "Trang khu vực địa phương chuyên dụng",
    heading:
      "Điều phối địa phương nhanh chóng đến các khu vực chính của Sydney",
    subheading:
      "Chọn khu vực của bạn bên dưới để xem ETA điều phối địa phương, các vấn đề ống nước trong khu vực và tình trạng sẵn có tức thì.",
    featuredSuburbs: [
      {
        name: "Parramatta",
        postcode: "2150",
        region: "Tây Sydney",
        eta: "35 Phút",
        href: "/suburb/parramatta",
      },
      {
        name: "Chatswood",
        postcode: "2067",
        region: "Hạ Bắc Shore",
        eta: "40 Phút",
        href: "/suburb/chatswood",
      },
      {
        name: "Bondi",
        postcode: "2026",
        region: "Vùng Ngoại ô Phía Đông",
        eta: "30 Phút",
        href: "/suburb/bondi",
      },
      {
        name: "Cronulla",
        postcode: "2230",
        region: "Sutherland Shire",
        eta: "45 Phút",
        href: "/suburb/cronulla",
      },
    ],
    otherSuburbs: [
      "Surry Hills",
      "Newtown",
      "Ryde",
      "Burwood",
      "Manly",
      "Hurstville",
      "Strathfield",
      "Mosman",
    ],
    note: "Không phụ phí di chuyển trên tất cả các khu vực ngoại ô xung quanh Greater Sydney.",
    cta: {
      text: "Kiểm tra tình trạng sẵn có tại khu vực của bạn",
      href: "#booking",
    },
  },
  about: {
    badge: "Về ADP Plumbing",
    heading: "Thợ sửa ống nước dân dụng đáng tin cậy nhất Sydney—Không bất ngờ",
    subheadline:
      "Giá cố định trước, theo dõi xe trực tiếp và dọn dẹp sạch sẽ trong mọi công việc.",
    paragraphs: [
      "ADP Plumbing được thành lập để đặt ra tiêu chuẩn cao hơn cho chủ nhà và quản lý tòa nhà ở Sydney. Không có giá theo giờ mơ hồ kéo dài thời gian, và không để lại dấu chân bùn trên hành lang của bạn.",
      "Mỗi thợ sửa ống nước trong đội của chúng tôi đều có giấy phép NSW Fair Trading, được bảo hiểm và trang bị máy phun nước áp lực cao, camera cống CCTV và máy dò rò rỉ âm thanh—giải quyết các vấn đề ống nước phức tạp nhanh hơn và sạch hơn.",
    ],
    floatingBadge: {
      number: "$0",
      text: "Phí gọi trong giờ làm việc tiêu chuẩn",
    },
    pillars: [
      {
        title: "Phản hồi nhanh 60 phút",
        description:
          "Xe được điều phối bằng GPS đóng tại các điểm khắp Sydney cho các trường hợp rò rỉ và tắc nghẽn khẩn cấp.",
      },
      {
        title: "Giá cố định trọn gói",
        description:
          "Bạn phê duyệt giá bằng văn bản chính xác trước khi chúng tôi bắt đầu bất kỳ công việc sửa chữa nào.",
      },
      {
        title: "Bảo hành lao động trọn đời",
        description:
          "Mọi sửa chữa và lắp đặt đường ống đều được bảo hành bằng văn bản.",
      },
      {
        title: "Bảo vệ ngôi nhà sạch sẽ",
        description:
          "Bọc giày, trải thảm và khử trùng toàn bộ trước khi chúng tôi thu dọn.",
      },
    ],
    stats: [
      { value: "15+", label: "Năm phục vụ Sydney" },
      { value: "4.9★", label: "Đánh giá Google đã xác minh" },
      { value: "4.800+", label: "Công việc đã hoàn thành" },
      { value: "24/7", label: "Hỗ trợ khẩn cấp" },
    ],
    cta: { text: "Đặt thợ sửa ống nước địa phương", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "Kỹ thuật viên mặc đồng phục ADP Plumbing xem xét báo giá cố định với chủ nhà",
    },
  },
  services: {
    badge: "Ống nước & Gas đầy đủ",
    heading: "Dịch vụ ống nước dân dụng được làm đúng ngay lần đầu",
    subheading:
      "Từ ống vỡ lúc nửa đêm đến lót ống không đào và nâng cấp bình nước nóng, chúng tôi báo giá cố định trước.",
    items: [
      {
        title: "Sửa chữa ống nước khẩn cấp 24/7",
        tag: "Phản hồi 60 phút",
        priceHint: "Báo giá cố định trước",
        description:
          "Ống mềm vỡ, toilet tràn hay rò rỉ nước đột ngột? Xe khẩn cấp của chúng tôi mang theo hơn 500 phụ tùng thay thế để sửa ngay tại chỗ.",
        image: {
          src: "/img/hero.jpg",
          alt: "Thợ sửa ống nước khẩn cấp sửa ống nước vỡ trong nhà",
        },
        cta: "Yêu cầu thợ khẩn cấp",
        href: "#booking",
      },
      {
        title: "Thông tắc cống & Hydro-Jetting",
        tag: "Phổ biến nhất",
        priceHint: "Bao gồm kiểm tra camera CCTV",
        description:
          "Chúng tôi phá tan rễ cây, dầu mỡ và mảnh vụn cứng đầu bằng máy phun nước 5.000 PSI và xác minh đường ống thông 100% trên CCTV HD.",
        image: {
          src: "/img/about.jpg",
          alt: "Máy phun nước áp lực cao thông tắc cống thoát nước bị tắc",
        },
        cta: "Thông tắc cống của tôi",
        href: "#booking",
      },
      {
        title: "Sửa chữa & lắp đặt bình nước nóng",
        tag: "Nước nóng trong ngày",
        priceHint: "Rheem, Rinnai & Dux",
        description:
          "Không có nước nóng? Chúng tôi sửa bộ điều nhiệt và van hoặc cung cấp và lắp đặt hệ thống nước nóng gas, điện và bơm nhiệt tiết kiệm năng lượng.",
        image: {
          src: "/img/hero.jpg",
          alt: "Hệ thống nước nóng gas liên tục mới lắp đặt trên tường ngoài",
        },
        cta: "Nhận báo giá nước nóng",
        href: "#booking",
      },
      {
        title: "Lót ống không đào",
        tag: "Bảo hành vật liệu 35 năm",
        priceHint: "Không đào xới",
        description:
          "Sửa ống cống ngầm bị nứt hoặc hư hại do rễ cây từ bên trong mà không cần đào đường lái xe, sân hiên hay khu vườn cảnh quan của bạn.",
        image: {
          src: "/img/about.jpg",
          alt: "Thiết bị lót ống không đào sửa đường ống cống ngầm",
        },
        cta: "Đặt kiểm tra đường ống",
        href: "#booking",
      },
      {
        title: "Phát hiện rò rỉ nước ẩn",
        tag: "Công nghệ không xâm lấn",
        priceHint: "Quét âm thanh & nhiệt",
        description:
          "Hóa đơn nước cao hoặc tường ẩm? Chúng tôi xác định chính xác rò rỉ ẩn dưới sàn và sau tường mà không cần phá dỡ không cần thiết.",
        image: {
          src: "/img/hero.jpg",
          alt: "Thợ sửa ống nước dùng camera nhiệt phát hiện rò rỉ nước trong tường",
        },
        cta: "Định vị rò rỉ của tôi",
        href: "#booking",
      },
      {
        title: "Lắp đặt gas có giấy phép & kiểm tra an toàn",
        tag: "Thợ gas được chứng nhận",
        priceHint: "Chứng nhận tuân thủ",
        description:
          "Sửa rò rỉ gas, kết nối bếp gas và lò nướng mới, điểm kết nối BBQ ngoài trời và kiểm tra an toàn carbon monoxide.",
        image: {
          src: "/img/about.jpg",
          alt: "Thợ gas có giấy phép kiểm tra áp lực đường ống gas dân dụng",
        },
        cta: "Đặt thợ gas",
        href: "#booking",
      },
    ],
  },
  testimonials: {
    badge: "Đánh giá Google đã xác minh",
    heading: "Được chấm 4.9★ bởi chủ nhà Sydney",
    subheading:
      "Phản hồi thực từ các gia đình địa phương và quản lý tòa nhà tin tưởng ADP Plumbing.",
    overallRating: "4.9",
    basedOnLabel: "Dựa trên",
    totalReviews: "410+ Đánh giá Google",
    reviews: [
      {
        name: "Brendan Gallagher",
        suburb: "Parramatta",
        service: "Thông tắc cống & CCTV",
        rating: 5,
        timeAgo: "1 tuần trước",
        text: "Cống sân sau của chúng tôi tràn vào sáng Chủ nhật. ADP Plumbing đến trong 30 phút, đưa camera CCTV xuống đường ống, dọn rễ cây bằng máy phun nước áp lực và tính đúng giá cố định đã báo.",
        googleMapsUrl: "https://maps.google.com/?q=Parramatta+NSW+2150",
      },
      {
        name: "Michelle Chen",
        suburb: "Chatswood",
        service: "Thay bình nước nóng",
        rating: 5,
        timeAgo: "2 tuần trước",
        text: "Bình chứa cũ của chúng tôi vỡ qua đêm. ADP Plumbing đã lắp đặt bình gas liên tục Rinnai mới trước giờ ăn trưa. Dọn dẹp sạch sẽ và kỹ thuật viên rất lịch sự.",
        googleMapsUrl: "https://maps.google.com/?q=Chatswood+NSW+2067",
      },
      {
        name: "Lachlan Vance",
        suburb: "Bondi",
        service: "Sửa ống vỡ",
        rating: 5,
        timeAgo: "3 tuần trước",
        text: "Không khí mặn đã ăn mòn van nước chính ngoài trời của chúng tôi. ADP Plumbing đến trong vòng chưa đầy 30 phút, thay phần đồng bị ăn mòn bằng đồng thau cấp biển và không để lại chút bừa bộn nào.",
        googleMapsUrl: "https://maps.google.com/?q=Bondi+NSW+2026",
      },
      {
        name: "Trevor McAllister",
        suburb: "Cronulla",
        service: "Nước mưa & lắp đặt gas",
        rating: 5,
        timeAgo: "1 tháng trước",
        text: "Người đàn ông trung thực thực sự đến đúng giờ. Dọn cống thoát nước mưa bị tắc cát và lắp điểm gas mới trên sàn gỗ sau nhà trong một lần đến. Giá hợp lý và tay nghề hàng đầu.",
        googleMapsUrl: "https://maps.google.com/?q=Cronulla+NSW+2230",
      },
      {
        name: "Hannah Fitzgerald",
        suburb: "Ryde",
        service: "Phát hiện rò rỉ ẩn",
        rating: 5,
        timeAgo: "3 tuần trước",
        text: "Hóa đơn nước của chúng tôi tăng gấp đôi mà không thấy rò rỉ. Họ sử dụng hình ảnh nhiệt để xác định một lỗ rò rỉ nhỏ dưới sàn phòng giặt mà không phá cả phòng. Tiết kiệm cho chúng tôi hàng ngàn đô.",
        googleMapsUrl: "https://maps.google.com/?q=Ryde+NSW+2112",
      },
      {
        name: "Samir Patel",
        suburb: "Surry Hills",
        service: "Lót ống không đào",
        rating: 5,
        timeAgo: "1 tháng trước",
        text: "Công ty khác báo giá $14k để đào sân của chúng tôi. ADP lót lại ống cống bị hư từ điểm truy cập hiện có trong một ngày với chi phí chưa bằng một nửa. Công việc xuất sắc.",
        googleMapsUrl: "https://maps.google.com/?q=Surry+Hills+NSW+2010",
      },
    ],
  },
  booking: {
    badge: "Đặt lịch trực tuyến một chạm",
    heading: "Đặt thợ sửa ống nước có giấy phép trong 60 giây",
    subheading:
      "Chọn khu vực và vấn đề ống nước của bạn bên dưới. Bộ phận điều phối Sydney của chúng tôi sẽ xác nhận khung giờ đến của bạn trong vòng 10 phút.",
    urgentCallLabel: "Ống vỡ hay ngập nước? Gọi đường dây khẩn cấp 24/7",
    formLabels: {
      name: "Họ và tên *",
      namePlaceholder: "Liam Wilson",
      phone: "Số di động *",
      phonePlaceholder: "0400 000 000",
      suburb: "Khu vực / Mã bưu điện *",
      suburbPlaceholder: "ví dụ: Parramatta 2150",
      service: "Dịch vụ ống nước cần thiết",
      urgency: "Việc này khẩn cấp đến mức nào?",
      notes: "Mô tả ngắn gọn vấn đề (Tùy chọn)",
      notesPlaceholder: "ví dụ: Bồn rửa chén bị tắc hoàn toàn và tràn...",
    },
    successState: {
      title: "Đã nhận yêu cầu điều phối thợ sửa ống nước!",
      thanks: "Cảm ơn",
      desc1: "Đội điều phối Sydney của chúng tôi sẽ gọi điện hoặc SMS",
      desc2: "trong vòng 10 phút để xác nhận đặt lịch của bạn cho",
      resetBtn: "Gửi đặt lịch khác",
    },
    serviceOptions: [
      "Sửa chữa ống nước khẩn cấp 24/7",
      "Thông tắc cống & Hydro-Jetting",
      "Sửa chữa / Lắp đặt bình nước nóng",
      "Lót ống không đào",
      "Phát hiện rò rỉ nước ẩn",
      "Lắp đặt gas có giấy phép & Kiểm tra an toàn",
    ],
    urgencyOptions: [
      "Khẩn cấp (Điều phối ngay 60 phút)",
      "Dịch vụ trong ngày",
      "Trong 2-3 ngày / Báo giá miễn phí",
    ],
    submitText: "Khóa báo giá trước của tôi",
    disclaimer:
      "Phí gọi $0 trong giờ làm việc tiêu chuẩn. Giá cố định được phê duyệt trước khi bắt đầu công việc.",
  },
  footer: {
    description:
      "Thợ sửa ống nước dân dụng và thợ gas có giấy phép NSW Fair Trading cung cấp phản hồi khẩn cấp 60 phút, thông tắc cống bằng hydro-jet và giá cố định trước trên khắp Sydney.",
    license: `${contactInfo.licenseNumber} • Bảo hiểm đầy đủ (Trách nhiệm công cộng $20M)`,
    navTitle: "Điều hướng",
    servicesTitle: "Dịch vụ chính",
    suburbsTitle: "Khu vực phục vụ (Trang)",
    contactTitle: "Điều phối Sydney 24/7",
    privacyLabel: "Chính sách bảo mật",
    termsLabel: "Điều khoản dịch vụ",
    quickLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Về chúng tôi", href: "/#about" },
      { label: "Dịch vụ của chúng tôi", href: "/#services" },
      { label: "Đánh giá khách hàng", href: "/#reviews" },
      { label: "Đặt lịch trực tuyến", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "Ống nước khẩn cấp 24/7", href: "/#services" },
      { label: "Thông tắc cống & Jetting", href: "/#services" },
      { label: "Sửa & lắp nước nóng", href: "/#services" },
      { label: "Lót ống không đào", href: "/#services" },
    ],
    suburbLinks: [
      { label: "Thợ ống nước Parramatta (2150)", href: "/suburb/parramatta" },
      { label: "Thợ ống nước Chatswood (2067)", href: "/suburb/chatswood" },
      { label: "Thợ ống nước Bondi (2026)", href: "/suburb/bondi" },
      { label: "Thợ ống nước Cronulla (2230)", href: "/suburb/cronulla" },
    ],
    copyright: "© 2026 ADP Plumbing Pty Ltd. Bảo lưu mọi quyền.",
  },
};

// ─────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────
export type LandingContentType = typeof enContent;

export const landingContentByLang: Record<LangCode, LandingContentType> = {
  en: enContent,
  id: idContent,
  ja: jaContent,
  zh: zhContent,
  th: thContent,
  vi: viContent,
};

// Pastikan import ini ada di paling atas data.ts:
// import { LangCode } from "@/app/context/LanguageContext";

export const suburbPagesByLang: Record<LangCode, SuburbPageData[]> = {
  en: suburbPages,

  // ─────────────────────────────────────────────────────────────
  // INDONESIAN (ID)
  // ─────────────────────────────────────────────────────────────
  id: [
    {
      ...suburbPages[0], // Parramatta
      region: "Sydney Barat",
      responseEta: "35 Menit",
      metaTitle: "Tukang Ledeng Darurat 24/7 Parramatta (2150) | ADP Plumbing",
      metaDescription:
        "Tukang ledeng berlisensi cepat di Parramatta 2150. Pembersihan saluran mampet hari yang sama, perbaikan pipa pecah, dan pemasangan air panas dengan biaya panggilan $0.",
      badge: "Van Parramatta Siaga • ETA 35 Menit",
      heroTitle: "Tukang Ledeng Darurat 24/7 Terpercaya di Parramatta",
      heroDescription:
        "Mengalami saluran air mampet, pipa pecah, atau air panas mati di Parramatta (2150)? Truk ledeng Sydney Barat kami bersiaga beberapa menit dari Church Street untuk pengiriman cepat di hari yang sama dengan harga tetap.",
      localAngleTitle: "Solusi Perpipaan Khusus untuk Rumah & Unit Parramatta",
      localAngleDescription:
        "Dari pondok warisan federasi dekat Parramatta Park hingga apartemen bertingkat di tepi sungai, kami memahami perpipaan, intrusi akar pohon, dan masalah tekanan air strata yang umum di 2150.",
      commonLocalIssues: [
        "Intrusi akar pohon di saluran pembuangan tanah liat tua di sekitar North Parramatta",
        "Penggantian sistem air panas yang sesuai strata di apartemen bertingkat",
        "Regulasi katup tekanan air tinggi & perbaikan selang fleksibel pecah",
      ],
      localLandmarkNote:
        "Pengiriman cepat meliputi Parramatta CBD, North Parramatta, Harris Park, dan Westmead.",
      localReview: {
        ...suburbPages[0].localReview,
        text: "Saluran air halaman belakang kami meluap pada Minggu pagi. ADP Plumbing tiba dalam 30 menit, memasang kamera CCTV, membersihkan akar pohon, dan menagih biaya tetap persis seperti yang dikutip.",
      },
    },
    {
      ...suburbPages[1], // Chatswood
      region: "Sydney Utara Bawah",
      responseEta: "40 Menit",
      metaTitle:
        "Tukang Ledeng Berlisensi Chatswood (2067) | Air Panas & Saluran Mampet",
      metaDescription:
        "Butuh tukang ledeng darurat di Chatswood 2067? ADP Plumbing memberikan harga tetap untuk pelapisan pipa, pemasangan gas, dan perbaikan air panas di North Shore.",
      badge: "Pengiriman North Shore • ETA 40 Menit",
      heroTitle: "Tukang Ledeng Residensial Cepat & Bersih di Chatswood",
      heroDescription:
        "Melayani pemilik rumah dan pengelola strata Chatswood (2067) dengan deteksi kebocoran presisi, upgrade air panas aliran kontinu, dan pelapisan pipa tanpa galian—didukung garansi harga 100% di awal.",
      localAngleTitle: "Melindungi Properti North Shore Tanpa Membongkar Taman",
      localAngleDescription:
        "Jalanan berdaun dan rumah-rumah mapan di Chatswood rentan terhadap kerusakan pipa air hujan dan saluran pembuangan akibat akar. Kami menggunakan pelapisan pipa tanpa galian untuk memulihkan saluran tanpa menggali jalan masuk atau halaman Anda.",
      commonLocalIssues: [
        "Pelapisan pipa tanpa galian untuk pipa tembikar yang rusak akibat akar",
        "Pemasangan air panas gas aliran kontinu Rheem & Rinnai",
        "Deteksi kebocoran termal akustik di balik dinding kamar mandi berkeramik",
      ],
      localLandmarkNote:
        "Melayani Chatswood, Chatswood West, Roseville, dan Willoughby tanpa biaya tambahan.",
      localReview: {
        ...suburbPages[1].localReview,
        text: "Tangki air lama kami pecah semalaman. ADP Plumbing memasang unit gas kontinu Rinnai baru sebelum jam makan siang. Pembersihan sangat rapi dan teknisinya ramah.",
      },
    },
    {
      ...suburbPages[2], // Bondi
      region: "Suburb Timur",
      responseEta: "30 Menit",
      metaTitle:
        "Tukang Ledeng Darurat Bondi (2026) | Ahli Korosi Udara Asin & Saluran",
      metaDescription:
        "Tukang ledeng lokal 24/7 di Bondi 2026. Ahli dalam perpipaan berkarat akibat udara asin pesisir, saluran apartemen mampet, dan perbaikan kebocoran mendesak.",
      badge: "Unit Seluler Suburb Timur • ETA 30 Menit",
      heroTitle: "Tukang Ledeng Pesisir Hari yang Sama di Bondi & Bondi Beach",
      heroDescription:
        "Udara asin pesisir dan perpipaan teras tua memerlukan penanganan khusus. Tukang ledeng Bondi (2026) kami tiba dengan perlengkapan kuningan kelas marine, jet tekanan tinggi, dan kamera kebocoran termal untuk memperbaiki masalah pada kunjungan pertama.",
      localAngleTitle:
        "Dirancang untuk Udara Asin Pesisir & Teras Warisan Bondi",
      localAngleDescription:
        "Properti di dekat Bondi Beach dan Campbell Parade mengalami korosi dipercepat pada pipa tembaga luar ruangan, saluran gas, dan katup air panas. Kami memasang fitting tahan korosi yang dirancang untuk bertahan di kondisi pesisir.",
      commonLocalIssues: [
        "Katup air panas luar ruangan & pipa tembaga berkarat akibat udara asin",
        "Saluran dapur & kamar mandi mampet di apartemen pesisir",
        "Penutupan pipa pecah darurat dan laporan kepatuhan strata",
      ],
      localLandmarkNote:
        "Respons lokal cepat di Bondi Beach, North Bondi, Bondi Junction, dan Tamarama.",
      localReview: {
        ...suburbPages[2].localReview,
        text: "Udara asin melubangi katup utama air luar ruangan kami. ADP Plumbing datang kurang dari 30 menit, mengganti bagian tembaga korosi dengan kuningan kelas marine, dan tidak meninggalkan kotoran.",
      },
    },
    {
      ...suburbPages[3], // Cronulla
      region: "Sutherland Shire",
      responseEta: "45 Menit",
      metaTitle:
        "Tukang Ledeng Cronulla (2230) | Saluran Mampet & Pemasangan Gas 24/7",
      metaDescription:
        "Tukang ledeng Sutherland Shire andal di Cronulla 2230. Harga tetap di awal untuk saluran air hujan mampet, titik BBQ gas, dan perbaikan pipa darurat.",
      badge: "Unit Cepat Sutherland Shire • ETA 45 Menit",
      heroTitle: "Tukang Ledeng Lokal Andal di Cronulla & The Shire",
      heroDescription:
        "Dari unit tepi pantai dekat The Esplanade hingga rumah keluarga di South Cronulla (2230), ADP Plumbing memberikan layanan perpipaan dan pemasangan gas yang jujur dan tepat waktu tanpa biaya panggilan tersembunyi.",
      localAngleTitle:
        "Ahli Air Hujan, Saluran Pembuangan & Gas untuk Rumah Cronulla",
      localAngleDescription:
        "Hujan lebat pesisir dan pergeseran tanah berpasir dapat dengan cepat membanjiri pit air hujan dan persimpangan saluran pembuangan di Cronulla. Kami membersihkan penyumbatan pasir dan akar dengan cepat serta mensertifikasi instalasi gas luar ruangan.",
      commonLocalIssues: [
        "Saluran air hujan tersumbat pasir dan pembersihan pit pencegah banjir pesisir",
        "Pemasangan bayonet gas alam & LPG berlisensi untuk hiburan luar ruangan",
        "Tangki toilet bocor, upgrade keran, dan perbaikan pipa talang atap",
      ],
      localLandmarkNote:
        "Meliputi Cronulla, Woolooware, Caringbah, dan Miranda dengan penawaran harga tetap.",
      localReview: {
        ...suburbPages[3].localReview,
        text: "Pria jujur yang benar-benar tepat waktu. Membersihkan saluran air hujan yang tersumbat pasir dan memasang titik gas baru di dek belakang dalam satu kunjungan. Harga wajar dan pengerjaan jempolan.",
      },
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // JAPANESE (JA)
  // ─────────────────────────────────────────────────────────────
  ja: [
    {
      ...suburbPages[0], // Parramatta
      region: "西シドニー",
      responseEta: "35分",
      metaTitle: "パラマッタ（2150）24時間365日緊急配管工 | ADP Plumbing",
      metaDescription:
        "パラマッタ2150の迅速な公認配管工。当日の排水管詰まり解消、破裂管の修理、給湯器の設置、出張費$0。",
      badge: "パラマッタ専用バン待機中 • 到着まで35分",
      heroTitle: "パラマッタで信頼される24時間365日緊急配管工",
      heroDescription:
        "パラマッタ（2150）で排水管の詰まり、配管の破裂、お湯が出ないなどのトラブルでお困りですか？西シドニーの配管トラックがチャーチストリートから数分の場所に待機しており、固定価格で迅速に駆けつけます。",
      localAngleTitle: "パラマッタの住宅やユニットに合わせた配管ソリューション",
      localAngleDescription:
        "パラマッタパーク近くの歴史ある連邦様式のコテージから、リバーフロント沿いの高層アパートまで、2150エリアでよくある配管、木の根の侵入、ストラタの水圧問題を熟知しています。",
      commonLocalIssues: [
        "ノースパラマッタ周辺の古い粘土質下水管への木の根の侵入",
        "高層アパートでのストラタ基準に準拠した給湯器の交換",
        "高水圧バルブの調整とフレキシホースの破裂修理",
      ],
      localLandmarkNote:
        "パラマッタCBD、ノースパラマッタ、ハリスパーク、ウェストミードをカバーする迅速な配車。",
      localReview: {
        ...suburbPages[0].localReview,
        text: "日曜日の朝に裏庭の排水管が溢れました。ADP Plumbingは30分で到着し、CCTVカメラを配管に通し、ハイドロジェッターで木の根を除去し、見積もり通りの固定料金を請求しました。",
      },
    },
    {
      ...suburbPages[1], // Chatswood
      region: "ローワー・ノースショア",
      responseEta: "40分",
      metaTitle: "チャッツウッド（2067）公認配管工 | 給湯器と排水管詰まり",
      metaDescription:
        "チャッツウッド2067で緊急配管工をお探しですか？ADP Plumbingはノースショア全域で固定価格のパイプライニング、ガス設備、給湯修理を提供します。",
      badge: "ローワー・ノースショア配車 • 到着まで40分",
      heroTitle: "チャッツウッドの迅速でクリーンな住宅配管工",
      heroDescription:
        "チャッツウッド（2067）の住宅所有者やストラタマネージャーに、精密な漏水探知、連続流給湯器のアップグレード、非開削パイプライニングを提供—100%の事前価格保証付き。",
      localAngleTitle: "庭を掘り起こさずにノースショアの物件を保護",
      localAngleDescription:
        "チャッツウッドの緑豊かな通りや歴史ある家屋は、根による雨水管や下水管の損傷を受けやすいです。私たちは非開削パイプライニングを使用し、車道や庭を掘り起こさずに破損した排水管を修復します。",
      commonLocalIssues: [
        "根で損傷した陶器管の非開削パイプライニング",
        "リーム＆リンナイの連続流ガス給湯器の設置",
        "タイル張り浴室の壁裏の音響熱漏水探知",
      ],
      localLandmarkNote:
        "追加の移動費なしでチャッツウッド、チャッツウッドウェスト、ローズビル、ウィロビーにサービス提供。",
      localReview: {
        ...suburbPages[1].localReview,
        text: "古い貯湯タンクが夜中に破裂しました。ADP Plumbingは昼前に新しいRinnaiガス瞬間給湯器を設置しました。完璧な後片付けととても丁寧な技術者でした。",
      },
    },
    {
      ...suburbPages[2], // Bondi
      region: "イースタン・サバーブ",
      responseEta: "30分",
      metaTitle: "ボンダイ（2026）緊急配管工 | 塩害腐食と排水管の専門家",
      metaDescription:
        "ボンダイ2026の24時間365日ローカル配管工。海岸の塩害による配管腐食、アパートの排水管詰まり、緊急漏水修理の専門家。固定事前価格。",
      badge: "イースタン・サバーブ移動ユニット • 到着まで30分",
      heroTitle: "ボンダイ＆ボンダイビーチの当日対応海岸配管工",
      heroDescription:
        "海岸の塩分と老朽化したテラスハウスの配管には特別なケアが必要です。ボンダイ（2026）の配管工は、船舶グレードの継手、高圧ジェッター、サーマル漏水カメラを装備して初回訪問で問題を解決します。",
      localAngleTitle: "ボンダイの海岸の塩分と歴史あるテラスのために構築",
      localAngleDescription:
        "ボンダイビーチやキャンベルパレード周辺の物件は、屋外の銅管、ガス管、給湯バルブの腐食が加速します。私たちは海岸の条件下で長持ちするように設計された耐食性継手を設置します。",
      commonLocalIssues: [
        "塩害で腐食した屋外給湯バルブと銅管",
        "海岸沿いの低層アパートのキッチン＆バスルームのスタック詰まり",
        "緊急破裂管の遮断とストラタコンプライアンスレポート",
      ],
      localLandmarkNote:
        "ボンダイビーチ、ノースボンダイ、ボンダイジャンクション、タマラマ全域で迅速なローカル対応。",
      localReview: {
        ...suburbPages[2].localReview,
        text: "塩害で屋外の水道メーターのバルブが錆びました。ADP Plumbingは30分以内に到着し、腐食した銅管部分を船舶グレードの真鍮に交換し、汚れを一切残しませんでした。",
      },
    },
    {
      ...suburbPages[3], // Cronulla
      region: "サザーランド・シャイア",
      responseEta: "45分",
      metaTitle: "クロヌラ（2230）配管工 | 24時間365日排水管詰まりとガス設備",
      metaDescription:
        "クロヌラ2230の信頼できるサザーランドシャイア配管工。雨水管の詰まり、ガスBBQ口、緊急配管修理の事前固定価格。",
      badge: "サザーランド・シャイア迅速ユニット • 到着まで45分",
      heroTitle: "クロヌラ＆シャイアの信頼できるローカル配管工",
      heroDescription:
        "エスプラネード近くのビーチサイドユニットからサウスクロヌラ（2230）のファミリーホームまで、ADP Plumbingは隠れた出張費なしで正直で時間通りの配管およびガス設備サービスを提供します。",
      localAngleTitle: "クロヌラの住宅向け雨水、下水、ガスの専門家",
      localAngleDescription:
        "海岸の激しい豪雨や砂質土壌の移動により、クロヌラの住宅用雨水桝や下水接続部がすぐに溢れることがあります。砂や根の詰まりを迅速に除去し、屋外ガス設備を認定します。",
      commonLocalIssues: [
        "砂で詰まった雨水管と海岸の洪水防止桝の清掃",
        "屋外エンターテインメント用の公認天然ガス＆LPG口金具の設置",
        "トイレのタンク漏れ、蛇口のアップグレード、屋根樋の修理",
      ],
      localLandmarkNote:
        "固定事前見積もりでクロヌラ、ウールーウェア、カリンバ、ミランダをカバー。",
      localReview: {
        ...suburbPages[3].localReview,
        text: "本当に時間通りに来てくれる正直な人。砂で詰まった雨水排水管を清掃し、裏デッキに新しいガス口を一度の訪問で設置。適正価格と最高の仕事ぶり。",
      },
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // CHINESE (ZH)
  // ─────────────────────────────────────────────────────────────
  zh: [
    {
      ...suburbPages[0], // Parramatta
      region: "西悉尼",
      responseEta: "35分钟",
      metaTitle: "Parramatta (2150) 24/7 紧急水管工 | ADP Plumbing",
      metaDescription:
        "Parramatta 2150 快速持证水管工。当日下水道疏通、爆管维修和热水器安装，$0上门费。",
      badge: "Parramatta本地专车待命 • 35分钟到达",
      heroTitle: "Parramatta值得信赖的24/7紧急水管工",
      heroDescription:
        "在Parramatta (2150)遇到下水道堵塞、水管爆裂或没有热水？我们的西悉尼水管工程车停靠在Church Street附近，可提供当日快速派遣和透明统一价格。",
      localAngleTitle: "专为Parramatta住宅和公寓量身定制的管道解决方案",
      localAngleDescription:
        "从Parramatta Park附近的传统联邦小屋到河滨的高层公寓，我们非常了解2150地区常见的管道、树根入侵和物业水压问题。",
      commonLocalIssues: [
        "North Parramatta周边老旧粘土污水管中的树根入侵",
        "高层公寓中符合物业规定的热水系统更换",
        "高水压阀门调节与爆裂软管维修",
      ],
      localLandmarkNote:
        "快速派遣覆盖Parramatta CBD、North Parramatta、Harris Park和Westmead。",
      localReview: {
        ...suburbPages[0].localReview,
        text: "周日早上我们后院的排水管溢出了。ADP Plumbing在30分钟内到达，将CCTV摄像头放入管道，用高压水射流清除了树根，并收取了与报价完全一致的统一价格。",
      },
    },
    {
      ...suburbPages[1], // Chatswood
      region: "下北岸",
      responseEta: "40分钟",
      metaTitle: "Chatswood (2067) 持证水管工 | 热水器与下水道堵塞",
      metaDescription:
        "在Chatswood 2067需要紧急水管工？ADP Plumbing在北岸提供透明的固定价格管道内衬、燃气安装和热水维修服务。",
      badge: "下北岸派遣 • 40分钟到达",
      heroTitle: "Chatswood快速、整洁的住宅水管工",
      heroDescription:
        "为Chatswood (2067)的房主和物业经理提供精准漏水检测、即热式热水器升级和非开挖管道内衬——100%预报价保证。",
      localAngleTitle: "无需挖开花园即可保护北岸房产",
      localAngleDescription:
        "Chatswood绿树成荫的街道和成熟住宅容易遭受树根损坏的雨水管和污水管问题。我们使用非开挖管道内衬来修复破损的排水管，无需挖开您的车道或景观庭院。",
      commonLocalIssues: [
        "针对树根损坏的陶土管道的非开挖管道内衬",
        "Rheem和Rinnai即热式燃气热水器安装",
        "瓷砖浴室墙后的声学热成像漏水检测",
      ],
      localLandmarkNote:
        "服务Chatswood、Chatswood West、Roseville和Willoughby，零差旅附加费。",
      localReview: {
        ...suburbPages[1].localReview,
        text: "我们的旧储水罐夜间爆裂。ADP Plumbing在午餐前安装了一台新的Rinnai燃气即热式热水器。清理一尘不染，技师非常有礼貌。",
      },
    },
    {
      ...suburbPages[2], // Bondi
      region: "东区",
      responseEta: "30分钟",
      metaTitle: "Bondi (2026) 紧急水管工 | 盐雾腐蚀与下水道专家",
      metaDescription:
        "Bondi 2026的24/7本地水管工。擅长处理海岸盐雾腐蚀管道、公寓下水道堵塞及紧急漏水维修，提供固定预报价。",
      badge: "东区移动小队 • 30分钟到达",
      heroTitle: "Bondi与Bondi Beach当日海岸水管工",
      heroDescription:
        "海岸盐雾和老化露台管道需要专门处理。我们的Bondi (2026)水管工配备船用级配件、高压水射流机和热成像漏水摄像头，首次上门即可解决问题。",
      localAngleTitle: "专为Bondi海岸盐雾与历史露台打造",
      localAngleDescription:
        "Bondi Beach和Campbell Parade附近的房产，其室外铜管、燃气管和热水阀会加速腐蚀。我们安装专为沿海条件设计的耐腐蚀配件。",
      commonLocalIssues: [
        "盐雾腐蚀的室外热水调温阀和铜管",
        "沿海无电梯公寓的厨房与浴室管道堵塞",
        "紧急爆管关闭与物业合规报告",
      ],
      localLandmarkNote:
        "在Bondi Beach、North Bondi、Bondi Junction和Tamarama提供快速本地响应。",
      localReview: {
        ...suburbPages[2].localReview,
        text: "盐雾腐蚀了我们的户外主水阀。ADP Plumbing不到30分钟就到达，用船用级黄铜更换了腐蚀的铜段，没有留下任何脏乱。",
      },
    },
    {
      ...suburbPages[3], // Cronulla
      region: "萨瑟兰郡",
      responseEta: "45分钟",
      metaTitle: "Cronulla (2230) 水管工 | 24/7 下水道疏通与燃气安装",
      metaDescription:
        "Cronulla 2230可靠的萨瑟兰郡水管工。雨水管疏通、燃气烧烤接口和紧急水管维修，提供预先统一价格。",
      badge: "萨瑟兰郡快速小队 • 45分钟到达",
      heroTitle: "Cronulla与The Shire可靠的本地水管工",
      heroDescription:
        "从The Esplanade附近的海滨公寓到South Cronulla (2230)的家庭住宅，ADP Plumbing提供诚实、准时且无隐藏上门费的水管和燃气安装服务。",
      localAngleTitle: "Cronulla住宅的雨水、污水与燃气专家",
      localAngleDescription:
        "强烈的沿海暴雨和沙质土壤移位会迅速淹没Cronulla的住宅雨水坑和污水管接头。我们能快速清除沙子和树根堵塞，并为户外燃气安装出具认证。",
      commonLocalIssues: [
        "沙子堵塞的雨水管及沿海防洪坑清理",
        "用于户外娱乐的持证天然气和LPG接口安装",
        "马桶水箱漏水、水龙头升级及屋顶落水管维修",
      ],
      localLandmarkNote:
        "覆盖Cronulla、Woolooware、Caringbah和Miranda，提供固定预报价。",
      localReview: {
        ...suburbPages[3].localReview,
        text: "诚实的人，真的准时到达。一次上门就清理了我们被沙子堵塞的雨水渠，并在后甲板安装了新的燃气接口。价格公道，工艺一流。",
      },
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // THAI (TH)
  // ─────────────────────────────────────────────────────────────
  th: [
    {
      ...suburbPages[0], // Parramatta
      region: "ซิดนีย์ตะวันตก",
      responseEta: "35 นาที",
      metaTitle: "ช่างประปาฉุกเฉิน Parramatta (2150) 24/7 | ADP Plumbing",
      metaDescription:
        "ช่างประปาที่มีใบอนุญาตรวดเร็วใน Parramatta 2150 รับจ้างล้างท่อตัน ซ่อมท่อแตก และติดตั้งน้ำร้อนภายในวันเดียว ไม่มีค่าบริการนอกสถานที่",
      badge: "รถตู้ประจำ Parramatta พร้อมให้บริการ • ETA 35 นาที",
      heroTitle: "ช่างประปาฉุกเฉิน 24/7 ที่เชื่อถือได้ใน Parramatta",
      heroDescription:
        "มีปัญหาท่อระบายน้ำตัน ท่อแตก หรือไม่มีน้ำร้อนใน Parramatta (2150)? รถบรรทุกช่างประปาซิดนีย์ตะวันตกของเราจอดอยู่ห่างจาก Church Street ไม่กี่นาที พร้อมให้บริการจัดส่งด่วนในวันเดียวกันและราคาคงที่",
      localAngleTitle: "โซลูชันระบบประปาสำหรับบ้านและคอนโดใน Parramatta",
      localAngleDescription:
        "ตั้งแต่บ้านสไตล์เฟเดอเรชันใกล้ Parramatta Park ไปจนถึงอพาร์ตเมนต์สูงตามริมแม่น้ำ เรารู้จักระบบท่อ การบุกรุกของรากไม้ และปัญหาแรงดันน้ำในอาคารชุดที่พบบ่อยในรหัสไปรษณีย์ 2150",
      commonLocalIssues: [
        "รากไม้บุกรุกท่อระบายน้ำดินเหนียวเก่าแถบ North Parramatta",
        "การเปลี่ยนเครื่องทำน้ำร้อนในคอนโดที่ตรงตามข้อกำหนดของนิติบุคคล",
        "การปรับวาล์วแรงดันน้ำสูง & การซ่อมสายยางที่แตก",
      ],
      localLandmarkNote:
        "จัดส่งอย่างรวดเร็วครอบคลุม Parramatta CBD, North Parramatta, Harris Park และ Westmead",
      localReview: {
        ...suburbPages[0].localReview,
        text: "ท่อระบายน้ำหลังบ้านของเราเอ่อล้นในเช้าวันอาทิตย์ ADP Plumbing มาถึงใน 30 นาที สอดกล้อง CCTV กำจัดรากไม้ด้วย hydro-jetter และคิดค่าบริการคงที่ตามที่เสนอราคาไว้",
      },
    },
    {
      ...suburbPages[1], // Chatswood
      region: "โลเวอร์นอร์ธชอร์",
      responseEta: "40 นาที",
      metaTitle: "ช่างประปาที่มีใบอนุญาต Chatswood (2067) | น้ำร้อนและท่อตัน",
      metaDescription:
        "ต้องการช่างประปาฉุกเฉินใน Chatswood 2067? ADP Plumbing ให้บริการบุท่อแบบไม่ขุด ติดตั้งแก๊ส และซ่อมน้ำร้อนในราคาคงที่ทั่ว North Shore",
      badge: "จัดส่ง Lower North Shore • ETA 40 นาที",
      heroTitle: "ช่างประปาที่อยู่อาศัยที่รวดเร็วและสะอาดใน Chatswood",
      heroDescription:
        "ให้บริการเจ้าของบ้านและผู้จัดการอาคารใน Chatswood (2067) ด้วยการตรวจจับการรั่วซึมที่แม่นยำ การอัปเกรดเครื่องทำน้ำร้อนแบบต่อเนื่อง และการบุท่อแบบไม่ขุด—พร้อมการรับประกันราคา 100%",
      localAngleTitle: "ปกป้องทรัพย์สินใน North Shore โดยไม่ต้องขุดสวน",
      localAngleDescription:
        "ถนนที่เต็มไปด้วยต้นไม้และบ้านเก่าแก่ใน Chatswood มีแนวโน้มที่ท่อน้ำฝนและท่อระบายน้ำจะเสียหายจากรากไม้ เราจึงใช้การบุท่อแบบไม่ขุดเพื่อซ่อมแซมท่อระบายน้ำโดยไม่ต้องขุดถนนหรือสวนของคุณ",
      commonLocalIssues: [
        "การบุท่อแบบไม่ขุดสำหรับท่อดินเผาที่เสียหายจากรากไม้",
        "ติดตั้งเครื่องทำน้ำร้อนแก๊สแบบต่อเนื่อง Rheem และ Rinnai",
        "ตรวจจับการรั่วซึมด้วยเสียงและความร้อนหลังผนังห้องน้ำที่ปูกระเบื้อง",
      ],
      localLandmarkNote:
        "ให้บริการ Chatswood, Chatswood West, Roseville และ Willoughby โดยไม่มีค่าใช้จ่ายในการเดินทาง",
      localReview: {
        ...suburbPages[1].localReview,
        text: "ถังเก็บน้ำเก่าของเราแตกในตอนกลางคืน ADP Plumbing ติดตั้งเครื่องทำน้ำร้อนแก๊สแบบต่อเนื่อง Rinnai ใหม่ก่อนเที่ยง ทำความสะอาดอย่างไร้ที่ติและช่างสุภาพมาก",
      },
    },
    {
      ...suburbPages[2], // Bondi
      region: "อีสเทิร์นซับเบิร์บส์",
      responseEta: "30 นาที",
      metaTitle:
        "ช่างประปาฉุกเฉิน Bondi (2026) | ผู้เชี่ยวชาญการกัดกร่อนจากไอเค็มและท่อ",
      metaDescription:
        "ช่างประปาท้องถิ่น 24/7 ใน Bondi 2026 ผู้เชี่ยวชาญด้านท่อที่ผุกร่อนจากไอเค็ม ท่ออุดตันในอพาร์ตเมนต์ และซ่อมแซมการรั่วซึมในราคาคงที่",
      badge: "หน่วยเคลื่อนที่ Eastern Suburbs • ETA 30 นาที",
      heroTitle: "ช่างประปาชายฝั่งบริการวันเดียวกันใน Bondi และ Bondi Beach",
      heroDescription:
        "ไอเค็มจากชายฝั่งและระบบท่อระเบียงเก่าแก่ต้องการการดูแลเฉพาะด้าน ช่างประปา Bondi (2026) ของเรามาพร้อมข้อต่อทองเหลืองระดับmarine เครื่องฉีดน้ำแรงดันสูง และกล้องความร้อนเพื่อแก้ไขปัญหาในการเข้าครั้งแรก",
      localAngleTitle: "สร้างมาเพื่อไอเค็มชายฝั่งและระเบียงเก่าแก่ของ Bondi",
      localAngleDescription:
        "ทรัพย์สินใกล้ Bondi Beach และ Campbell Parade จะมีการกัดกร่อนอย่างรวดเร็วบนท่อทองแดงภายนอก ท่อแก๊ส และวาล์วน้ำร้อน เราจึงติดตั้งข้อต่อที่ทนต่อการกัดกร่อนซึ่งออกแบบมาให้ทนทานต่อสภาพชายฝั่ง",
      commonLocalIssues: [
        "วาล์วผสมน้ำร้อนและท่อทองแดงภายนอกที่ผุกร่อนจากไอเค็ม",
        "ท่ออุดตันในห้องครัวและห้องน้ำของอพาร์ตเมนต์ติดชายฝั่ง",
        "ปิดวาล์วท่อแตกฉุกเฉินและรายงานการปฏิบัติตามข้อกำหนดของนิติบุคคล",
      ],
      localLandmarkNote:
        "ตอบสนองอย่างรวดเร็วทั่ว Bondi Beach, North Bondi, Bondi Junction และ Tamarama",
      localReview: {
        ...suburbPages[2].localReview,
        text: "ไอเค็มกัดกร่อนวาล์วน้ำหลักกลางแจ้งของเรา ADP Plumbing มาถึงในเวลาไม่ถึง 30 นาที เปลี่ยนส่วนทองแดงที่กัดกร่อนด้วยทองเหลืองระดับmarine และไม่ทิ้งความสกปรกไว้เลย",
      },
    },
    {
      ...suburbPages[3], // Cronulla
      region: "ซัทเทอร์แลนด์ไชร์",
      responseEta: "45 นาที",
      metaTitle: "ช่างประปา Cronulla (2230) | ท่อตันและติดตั้งแก๊ส 24/7",
      metaDescription:
        "ช่างประปา Sutherland Shire ที่เชื่อถือได้ใน Cronulla 2230 ราคาคงที่สำหรับท่อระบายน้ำฝนอุดตัน จุดบาร์บีคิวแก๊ส และซ่อมประปาฉุกเฉิน",
      badge: "หน่วยด่วน Sutherland Shire • ETA 45 นาที",
      heroTitle: "ช่างประปาท้องถิ่นที่เชื่อถือได้ใน Cronulla และ The Shire",
      heroDescription:
        "ตั้งแต่คอนโดริมหาดใกล้ The Esplanade ไปจนถึงบ้านครอบครัวใน South Cronulla (2230) ADP Plumbing มอบบริการประปาและติดตั้งแก๊สที่ซื่อสัตย์ตรงเวลาโดยไม่มีค่าบริการนอกสถานที่แอบแฝง",
      localAngleTitle:
        "ผู้เชี่ยวชาญน้ำฝน ท่อระบายน้ำ และแก๊สสำหรับบ้านใน Cronulla",
      localAngleDescription:
        "ฝนตกหนักตามชายฝั่งและการเคลื่อนตัวของดินทรายสามารถทำให้น้ำท่วมบ่อพักน้ำฝนและทางแยกท่อระบายน้ำใน Cronulla ได้อย่างรวดเร็ว เรากำจัดสิ่งอุดตันจากทรายและรากไม้ได้อย่างรวดเร็วและรับรองการติดตั้งแก๊สภายนอก",
      commonLocalIssues: [
        "ท่อระบายน้ำฝนที่ถูกทรายอุดตันและการล้างบ่อป้องกันน้ำท่วมชายฝั่ง",
        "การติดตั้งจุดเชื่อมต่อแก๊สธรรมชาติและ LPG ที่มีใบอนุญาตสำหรับพื้นที่สังสรรค์กลางแจ้ง",
        "ถังน้ำในโถส้วมรั่ว อัปเกรดก๊อกน้ำ และซ่อมท่อระบายน้ำฝนบนหลังคา",
      ],
      localLandmarkNote:
        "ครอบคลุม Cronulla, Woolooware, Caringbah และ Miranda ด้วยใบเสนอราคาคงที่",
      localReview: {
        ...suburbPages[3].localReview,
        text: "คนซื่อสัตย์ที่มาตรงเวลาจริงๆ ล้างท่อระบายน้ำฝนที่เต็มไปด้วยทรายและติดตั้งจุดแก๊สใหม่บนดาดฟ้าหลังบ้านในการเข้าครั้งเดียว ราคายุติธรรมและฝีมือชั้นยอด",
      },
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // VIETNAMESE (VI)
  // ─────────────────────────────────────────────────────────────
  vi: [
    {
      ...suburbPages[0], // Parramatta
      region: "Tây Sydney",
      responseEta: "35 Phút",
      metaTitle:
        "Thợ sửa ống nước khẩn cấp 24/7 Parramatta (2150) | ADP Plumbing",
      metaDescription:
        "Thợ sửa ống nước có giấy phép nhanh chóng tại Parramatta 2150. Thông tắc cống trong ngày, sửa ống vỡ và lắp đặt nước nóng với phí gọi $0.",
      badge: "Xe Parramatta trực chiến • Có mặt sau 35 phút",
      heroTitle: "Thợ sửa ống nước khẩn cấp 24/7 đáng tin cậy tại Parramatta",
      heroDescription:
        "Gặp sự cố tắc cống, vỡ ống nước hay mất nước nóng tại Parramatta (2150)? Xe sửa ống nước khu vực Tây Sydney của chúng tôi đóng quân cách Church Street vài phút, sẵn sàng điều phối trong ngày với giá cố định.",
      localAngleTitle:
        "Giải pháp ống nước thiết kế riêng cho nhà & căn hộ Parramatta",
      localAngleDescription:
        "Từ những ngôi nhà cổ kính gần công viên Parramatta đến các căn hộ cao tầng dọc bờ sông, chúng tôi hiểu rõ hệ thống đường ống, sự xâm nhập của rễ cây và các vấn đề áp lực nước thường gặp tại khu vực 2150.",
      commonLocalIssues: [
        "Rễ cây xâm nhập đường ống cống bằng đất sét cũ quanh North Parramatta",
        "Thay thế hệ thống nước nóng tuân thủ quy định tòa nhà tại chung cư cao tầng",
        "Điều chỉnh van áp lực nước cao & sửa chữa ống mềm bị vỡ",
      ],
      localLandmarkNote:
        "Điều phối nhanh chóng bao gồm Parramatta CBD, North Parramatta, Harris Park và Westmead.",
      localReview: {
        ...suburbPages[0].localReview,
        text: "Cống sân sau của chúng tôi tràn vào sáng Chủ nhật. ADP Plumbing đến trong 30 phút, đưa camera CCTV xuống đường ống, dọn rễ cây bằng máy phun áp lực và tính đúng giá cố định đã báo.",
      },
    },
    {
      ...suburbPages[1], // Chatswood
      region: "Hạ Bắc Shore",
      responseEta: "40 Phút",
      metaTitle:
        "Thợ sửa ống nước có giấy phép Chatswood (2067) | Nước nóng & Cống tắc",
      metaDescription:
        "Cần thợ sửa ống nước khẩn cấp tại Chatswood 2067? ADP Plumbing cung cấp dịch vụ lót ống, lắp đặt gas và sửa nước nóng với giá cố định trên toàn North Shore.",
      badge: "Điều phối Hạ Bắc Shore • Có mặt sau 40 phút",
      heroTitle: "Thợ sửa ống nước dân dụng nhanh chóng, sạch sẽ tại Chatswood",
      heroDescription:
        "Phục vụ chủ nhà và quản lý tòa nhà tại Chatswood (2067) với dịch vụ phát hiện rò rỉ chính xác, nâng cấp hệ thống nước nóng liên tục và lót ống không đào—được bảo đảm bằng giá cố định 100%.",
      localAngleTitle: "Bảo vệ tài sản Bắc Shore mà không cần đào khu vườn",
      localAngleDescription:
        "Những con phố nhiều cây xanh và những ngôi nhà lâu đời ở Chatswood dễ bị rễ cây làm hỏng đường ống nước mưa và cống. Chúng tôi sử dụng phương pháp lót ống không đào để khôi phục cống bị hỏng mà không cần đào đường lái xe hay sân vườn của bạn.",
      commonLocalIssues: [
        "Lót ống không đào cho đường ống đất nung bị rễ cây làm hỏng",
        "Lắp đặt hệ thống nước nóng gas liên tục Rheem & Rinnai",
        "Phát hiện rò rỉ nhiệt âm thanh sau tường phòng tắm ốp gạch",
      ],
      localLandmarkNote:
        "Phục vụ Chatswood, Chatswood West, Roseville và Willoughby với chi phí di chuyển bằng không.",
      localReview: {
        ...suburbPages[1].localReview,
        text: "Bình chứa cũ của chúng tôi vỡ qua đêm. ADP Plumbing đã lắp đặt bình gas liên tục Rinnai mới trước giờ ăn trưa. Dọn dẹp sạch sẽ và kỹ thuật viên rất lịch sự.",
      },
    },
    {
      ...suburbPages[2], // Bondi
      region: "Vùng Ngoại ô Phía Đông",
      responseEta: "30 Phút",
      metaTitle:
        "Thợ sửa ống nước khẩn cấp Bondi (2026) | Chuyên gia ăn mòn muối biển & Cống",
      metaDescription:
        "Thợ sửa ống nước địa phương 24/7 tại Bondi 2026. Chuyên gia xử lý đường ống bị ăn mòn do muối biển, thông tắc cống chung cư và sửa rò rỉ khẩn cấp với giá cố định.",
      badge: "Đơn vị lưu động Đông Suburbs • Có mặt sau 30 phút",
      heroTitle: "Thợ sửa ống nước ven biển trong ngày tại Bondi & Bondi Beach",
      heroDescription:
        "Không khí muối biển và hệ thống ống nước cũ kỹ của các ngôi nhà ven biển đòi hỏi sự chăm sóc đặc biệt. Thợ sửa ống nước Bondi (2026) của chúng tôi đến với phụ kiện đồng thau cấp biển, máy phun áp lực cao và camera nhiệt để khắc phục sự cố ngay lần đầu.",
      localAngleTitle:
        "Được thiết kế cho không khí muối biển và nhà phố cổ ở Bondi",
      localAngleDescription:
        "Các bất động sản gần Bondi Beach và Campbell Parade bị ăn mòn nhanh chóng trên ống đồng ngoài trời, đường ống gas và van nước nóng. Chúng tôi lắp đặt các phụ kiện chống ăn mòn được thiết kế để tồn tại lâu dài trong điều kiện ven biển.",
      commonLocalIssues: [
        "Van điều hòa nước nóng ngoài trời và ống đồng bị ăn mòn do muối biển",
        "Tắc nghẽn ống xả nhà bếp & phòng tắm tại các chung cư ven biển",
        "Ngắt ống vỡ khẩn cấp và báo cáo tuân thủ quy định tòa nhà",
      ],
      localLandmarkNote:
        "Phản hồi địa phương nhanh chóng trên khắp Bondi Beach, North Bondi, Bondi Junction và Tamarama.",
      localReview: {
        ...suburbPages[2].localReview,
        text: "Không khí mặn đã ăn mòn van nước chính ngoài trời của chúng tôi. ADP Plumbing đến trong vòng chưa đầy 30 phút, thay phần đồng bị ăn mòn bằng đồng thau cấp biển và không để lại chút bừa bộn nào.",
      },
    },
    {
      ...suburbPages[3], // Cronulla
      region: "Sutherland Shire",
      responseEta: "45 Phút",
      metaTitle:
        "Thợ sửa ống nước Cronulla (2230) | Thông tắc cống & Lắp đặt Gas 24/7",
      metaDescription:
        "Thợ sửa ống nước Sutherland Shire đáng tin cậy tại Cronulla 2230. Giá cố định cho thông tắc cống thoát nước mưa, điểm BBQ gas và sửa chữa ống nước khẩn cấp.",
      badge: "Đơn vị khẩn cấp Sutherland Shire • Có mặt sau 45 phút",
      heroTitle:
        "Thợ sửa ống nước địa phương đáng tin cậy tại Cronulla & The Shire",
      heroDescription:
        "Từ các căn hộ ven biển gần The Esplanade đến nhà ở gia đình tại South Cronulla (2230), ADP Plumbing mang đến dịch vụ sửa ống nước và lắp đặt gas trung thực, đúng giờ với chi phí gọi không ẩn.",
      localAngleTitle:
        "Chuyên gia nước mưa, cống thoát nước & gas cho nhà ở Cronulla",
      localAngleDescription:
        "Mưa lớn ven biển và sự dịch chuyển của đất cát có thể nhanh chóng làm quá tải các hố ga nước mưa và điểm nối cống tại Cronulla. Chúng tôi nhanh chóng dọn sạch cát và rễ cây tắc nghẽn, đồng thời chứng nhận lắp đặt gas ngoài trời.",
      commonLocalIssues: [
        "Thông tắc cống thoát nước mưa bị tắc cát và vệ sinh hố ga chống ngập ven biển",
        "Lắp đặt đầu nối gas tự nhiên & LPG có giấy phép cho khu vực giải trí ngoài trời",
        "Rò rỉ bồn cầu, nâng cấp vòi nước và sửa ống thoát nước mái nhà",
      ],
      localLandmarkNote:
        "Bao gồm Cronulla, Woolooware, Caringbah và Miranda với báo giá cố định trước.",
      localReview: {
        ...suburbPages[3].localReview,
        text: "Người đàn ông trung thực thực sự đến đúng giờ. Dọn cống thoát nước mưa bị tắc cát và lắp điểm gas mới trên sàn gỗ sau nhà trong một lần đến. Giá hợp lý và tay nghề hàng đầu.",
      },
    },
  ],
};
