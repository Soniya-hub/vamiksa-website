// ============================================================
// VAMIKA MINERALS & EXPORTS — SITE CONFIG
// All contact details are edited in this one file.
// When the IEC / GSTIN / phone / email are confirmed, update
// only the SITE object and the constants below.
// ============================================================

// IEC number from DGFT. Leave empty to hide it; once filled it shows as
// "IEC: <number>" next to the GSTIN.
export const IEC_NUMBER = "";

// Shared product / export facts — change here and every section, FAQ and
// on-page meta tag updates. (index.html meta tags are static: keep in sync.)
export const THICKNESS = "35 mm (±2 mm)";
export const FINISH = "Sawn (natural)";
// TODO: replace with your actual port of loading, e.g. "Nhava Sheva" or "Mundra".
export const FOB_PORT = "[PORT NAME, e.g. Nhava Sheva / Mundra]";
export const PACKING = "heat-treated (ISPM-15) sea-worthy wooden crates";
export const PAYMENT_TERMS =
  "30% advance via bank transfer (TT); balance 70% against scanned copy of Bill of Lading. Original documents released on full payment. Letter of Credit (LC) accepted for bulk orders.";
export const GI_STORY =
  "GI-tagged Chunar sandstone (GI tag 2019) — the same stone belt used for the Ashokan pillars and Chunar Fort.";

export const SITE = {
  brand: "VAMIKA",
  brandSub: "MINERALS & EXPORTS",
  tagline: "Natural Indian Sandstone",
  origin: "Mirzapur, Uttar Pradesh, India",

  contactPerson: "Samiksh Pandey",
  founder: "Samiksh Pandey",
  phone: "+91 72338 12072",            // WhatsApp number
  whatsappLink: "https://wa.me/917233812072", // 91 + number, no spaces
  email: "info@vamikaexports.com",
  gstin: "GSTIN: 09ARZPP9424B2Z5",

  // TODO: full yard/office address + Google Maps link.
  // Fill both and it auto-appears in the footer with a "View on map" link.
  // mapsLink: paste the share URL from Google Maps for your location pin.
  address: "1694, Bhatwa Ki Pokhari, Mirzapur, Uttar Pradesh 231001, India",
  mapsLink: "https://maps.app.goo.gl/CTovCZb9TGXx6UMD9",

  // Web3Forms public access key — inquiry form emails land at `email` above.
  web3formsKey: "145e6b2c-f2cb-4fdb-a226-72d5f9a0e94e",

  markets: ["UAE", "USA", "UK", "Worldwide"],
};

export const STONES = [
  {
    name: "Pink Sandstone",
    tone: "pink",
    desc: "Warm rose-tan surface with fine, even grain. A natural favourite for patios, garden paths and facades.",
    uses: ["Patios", "Garden paths", "Facades"],
    img: "/images/pink-1x1.jpg",
    alt: "Mirzapur pink sandstone, sawn finish, 1 × 1 ft (305 × 305 mm)",
  },
  {
    name: "Green Sandstone",
    tone: "green",
    desc: "Soft sage-green tiles with subtle natural veining. Distinctive choice for pool surrounds and landscaping.",
    uses: ["Pool surrounds", "Landscaping", "Terraces"],
    img: "/images/1.5x1.5-top.jpg",
    alt: "Mirzapur green sandstone, sawn finish, 1.5 × 1.5 ft (457 × 457 mm)",
  },
];

export const SIZES = [
  { ft: "1 × 1 ft", mm: "305 × 305 mm" },
  { ft: "1.5 × 1.5 ft", mm: "457 × 457 mm" },
  { ft: "1.5 × 2 ft", mm: "457 × 610 mm" },
  { ft: "2 × 2 ft", mm: "610 × 610 mm" },
];

export const METRIC_SIZES = ["600 × 600 mm", "600 × 900 mm"]; // on request

export const GALLERY = [
  { src: "/images/pink-1x1.jpg", thumb: "/images/pink-1x1-thumb.jpg", alt: "Mirzapur pink sandstone tile, sawn finish, 1 × 1 ft (305 × 305 mm), top view", label: "Pink sandstone — 1 × 1 ft" },
  { src: "/images/1.5x1.5-top.jpg", thumb: "/images/1.5x1.5-top-thumb.jpg", alt: "Mirzapur green sandstone tile, sawn finish, 1.5 × 1.5 ft (457 × 457 mm), top view", label: "Green sandstone — 1.5 × 1.5 ft" },
  { src: "/images/1.5x1.5-stack-angle.jpg", thumb: "/images/1.5x1.5-stack-angle-thumb.jpg", alt: "Stack of calibrated green sandstone tiles, sawn finish, 1.5 × 1.5 ft, angled view", label: "Calibrated stack — 1.5 × 1.5 ft" },
  { src: "/images/1.5x1.5-stack-portrait.jpg", thumb: "/images/1.5x1.5-stack-portrait-thumb.jpg", alt: "Edges of stacked sandstone tiles, sawn finish, 1.5 × 1.5 ft", label: "Tile edges — 1.5 × 1.5 ft" },
  { src: "/images/2x2-front.jpg", thumb: "/images/2x2-front-thumb.jpg", alt: "Natural pink veining on a Mirzapur sandstone tile, sawn finish, 2 × 2 ft", label: "Natural veining — 2 × 2 ft" },
  { src: "/images/2x2-stack-angle.jpg", thumb: "/images/2x2-stack-angle-thumb.jpg", alt: "Stack of 2 × 2 ft sandstone tiles, sawn finish, in the Mirzapur yard", label: "Yard stack — 2 × 2 ft" },
  { src: "/images/2x2-edge-closeup.jpg", thumb: "/images/2x2-edge-closeup-thumb.jpg", alt: "Close-up of calibrated sandstone tile edges, 35 mm thickness, sawn finish", label: `Calibrated edges — ${THICKNESS}` },
  { src: "/images/1.5x1.5-flat.jpg", thumb: "/images/1.5x1.5-flat-thumb.jpg", alt: "Even surface of a sawn-finish sandstone tile, 1.5 × 1.5 ft", label: "Even surface — 1.5 × 1.5 ft" },
  { src: "/images/multi-stack-b.jpg", thumb: "/images/multi-stack-b-thumb.jpg", alt: "Stack of pink and green Mirzapur sandstone tiles, sawn finish, 1.5 × 2 ft", label: "Multi-tone stack — 1.5 × 2 ft" },
  { src: "/images/multi-yard.jpg", thumb: "/images/multi-yard-thumb.jpg", alt: "Stack of Mirzapur pink sandstone tiles, sawn finish, 1.5 × 2 ft", label: "Pink sandstone range — 1.5 × 2 ft" },
  { src: "/images/yard-rows-a.jpg", thumb: "/images/yard-rows-a-thumb.jpg", alt: "Rows of bulk sawn-finish sandstone tile stock in the Mirzapur yard", label: "Bulk yard stock" },
];

export const VIDEOS = [
  { src: "/videos/stone-video-1.mp4", poster: "/videos/stone-video-1-poster.jpg", label: "Yard walkthrough" },
  { src: "/videos/stone-video-2.mp4", poster: "/videos/stone-video-2-poster.jpg", label: "Tile stacks" },
  { src: "/videos/stone-video-3.mp4", poster: "/videos/stone-video-3-poster.jpg", label: "Stone finish detail" },
];

export const PROCESS = [
  {
    title: "Inquiry",
    desc: "Send the colour, size and quantity you need — by WhatsApp, email or the form below. We respond within 24 hours.",
  },
  {
    title: "Quotation & samples",
    desc: "You receive a formal FOB quotation, valid 30 days. Samples ship at nominal cost, adjustable against your confirmed order.",
  },
  {
    title: "Production & inspection",
    desc: `Tiles are cut, calibrated to ${THICKNESS} and inspected after cutting, finishing and again before packing.`,
  },
  {
    title: "Packing & shipment",
    desc: `Stock is packed in ${PACKING} and shipped FOB ${FOB_PORT} with complete export documentation.`,
  },
];

// Quality & export packing — the how, not just the what. A new exporter that
// can explain its process reads as experienced.
export const QUALITY = [
  {
    title: "Calibration & tolerance",
    desc: `Tiles are machine-calibrated to a consistent ${THICKNESS} thickness across the order, so they lay flat and even on site.`,
  },
  {
    title: "Multi-stage inspection",
    desc: "Every batch is checked three times — after cutting, after finishing and again before packing — for thickness, colour match, cracks and edge chipping.",
  },
  {
    title: "Moisture & natural finish",
    desc: "Stone is naturally dried before packing, with no artificial colouring or chemical treatment, so the tile you receive matches the sample you approved.",
  },
  {
    title: "Export-grade crating",
    desc: `Tiles are edge-protected and packed into ${PACKING}, strapped and sized for safe handling and long ocean transit.`,
  },
  {
    title: "Container loading",
    desc: "Crates are loaded to balance weight within the container's ~27 t limit, blocked and braced to prevent shifting during transit.",
  },
  {
    title: "Documentation",
    desc: "Each shipment ships with commercial invoice, packing list, certificate of origin and the full export document set for smooth customs clearance.",
  },
];

export const FAQS = [
  [
    "What is the minimum order quantity?",
    "One full container load (FCL). Mixed sizes and colours within a container are possible on request.",
  ],
  [
    "Can I get samples before ordering?",
    "Yes — samples are available at nominal cost plus courier charges, and the amount is adjusted against your confirmed order.",
  ],
  [
    "What are the payment terms?",
    PAYMENT_TERMS,
  ],
  [
    "What finish and thickness do you supply?",
    `${FINISH} finish, calibrated ${THICKNESS}. ${GI_STORY}`,
  ],
  [
    "Which documents come with a shipment?",
    "Commercial invoice, packing list, certificate of origin and the complete set of export documents required for customs clearance.",
  ],
  [
    "Do you supply custom sizes?",
    `Yes — metric sizes (${METRIC_SIZES.join(" and ")}) and custom or larger sizes (for example 1.5 × 4 ft) are available on request, subject to availability.`,
  ],
  [
    "How long does delivery take?",
    "Production and packing typically take 3–4 weeks after order confirmation, plus transit time to your port. Exact timelines are confirmed with your quotation.",
  ],
];

export const TERMS = [
  ["Pricing basis", `FOB ${FOB_PORT}. CIF rates available on request.`],
  ["Payment", PAYMENT_TERMS],
  ["Minimum order", "One full container load (FCL). Mixed sizes and colours per container on request."],
  ["Packing", `Export-grade ${PACKING}.`],
  ["Samples", "Available at nominal cost plus courier charges — adjustable against confirmed order."],
  ["Documentation", "Commercial invoice, packing list, certificate of origin and complete export documentation."],
  ["Bank charges", "All bank charges outside India to be borne by the buyer."],
  ["Quotation validity", "Prices valid for 30 days from date of quotation."],
];
