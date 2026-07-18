// ============================================================
// VAMIKA MINERALS & EXPORTS — SITE CONFIG
// All contact details are edited in this one file.
// When the IEC / GSTIN / phone / email are confirmed, update
// only the SITE object below.
// ============================================================

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
  // TODO: replace with real numbers once issued
  iec: "IEC: Applied",                 // e.g. "IEC: 0123456789"
  gstin: "GSTIN: Applied",             // e.g. "GSTIN: 09XXXXX0000X1Z5"

  // TODO: full yard/office address + Google Maps link.
  // Fill both and it auto-appears in the footer with a "View on map" link.
  // mapsLink: paste the share URL from Google Maps for your location pin.
  // TODO: add street/yard line in front (e.g. "Shop 4, Stone Market Rd, ...").
  address: "Mirzapur, Uttar Pradesh 231001, India",
  mapsLink: "https://maps.app.goo.gl/CTovCZb9TGXx6UMD9",

  // Web3Forms public access key — inquiry form emails land at `email` above.
  web3formsKey: "145e6b2c-f2cb-4fdb-a226-72d5f9a0e94e",

  markets: ["UAE", "USA", "UK"],
};

export const STONES = [
  {
    name: "Pink Sandstone",
    tone: "pink",
    desc: "Warm rose-tan surface with fine, even grain. A natural favourite for patios, garden paths and facades.",
    uses: ["Patios", "Garden paths", "Facades"],
    img: "/images/pink-1x1.jpg",
  },
  {
    name: "Green Sandstone",
    tone: "green",
    desc: "Soft sage-green tiles with subtle natural veining. Distinctive choice for pool surrounds and landscaping.",
    uses: ["Pool surrounds", "Landscaping", "Terraces"],
    img: "/images/1.5x1.5-top.jpg",
  },
  {
    name: "Grey Sandstone",
    tone: "grey",
    desc: "Clean, contemporary grey with consistent tone. Suits modern flooring, driveways and wall cladding.",
    uses: ["Flooring", "Driveways", "Wall cladding"],
    img: "/images/2x2-top.jpg",
  },
];

export const SIZES = [
  { ft: "1 × 1 ft", mm: "305 × 305 mm" },
  { ft: "1.5 × 1.5 ft", mm: "457 × 457 mm" },
  { ft: "1.5 × 2 ft", mm: "457 × 610 mm" },
  { ft: "2 × 2 ft", mm: "610 × 610 mm" },
];

export const GALLERY = [
  { src: "/images/pink-1x1.jpg", thumb: "/images/pink-1x1-thumb.jpg", label: "Pink sandstone — 1 × 1 ft" },
  { src: "/images/1.5x1.5-top.jpg", thumb: "/images/1.5x1.5-top-thumb.jpg", label: "Green sandstone — 1.5 × 1.5 ft" },
  { src: "/images/1.5x1.5-stack-angle.jpg", thumb: "/images/1.5x1.5-stack-angle-thumb.jpg", label: "Calibrated stack — 1.5 × 1.5 ft" },
  { src: "/images/1.5x1.5-stack-portrait.jpg", thumb: "/images/1.5x1.5-stack-portrait-thumb.jpg", label: "Tile edges — 1.5 × 1.5 ft" },
  { src: "/images/2x2-top.jpg", thumb: "/images/2x2-top-thumb.jpg", label: "Grey-green sandstone — 2 × 2 ft" },
  { src: "/images/2x2-front.jpg", thumb: "/images/2x2-front-thumb.jpg", label: "Natural veining — 2 × 2 ft" },
  { src: "/images/2x2-stack-angle.jpg", thumb: "/images/2x2-stack-angle-thumb.jpg", label: "Yard stack — 2 × 2 ft" },
  { src: "/images/2x2-edge-closeup.jpg", thumb: "/images/2x2-edge-closeup-thumb.jpg", label: "Calibrated edges — 35–40 mm" },
  { src: "/images/1.5x1.5-flat.jpg", thumb: "/images/1.5x1.5-flat-thumb.jpg", label: "Even surface — 1.5 × 1.5 ft" },
  { src: "/images/multi-stack-b.jpg", thumb: "/images/multi-stack-b-thumb.jpg", label: "Multi-tone stack — 1.5 × 2 ft" },
  { src: "/images/multi-yard.jpg", thumb: "/images/multi-yard-thumb.jpg", label: "Pink-grey range — 1.5 × 2 ft" },
  { src: "/images/yard-rows-a.jpg", thumb: "/images/yard-rows-a-thumb.jpg", label: "Bulk yard stock" },
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
    desc: "Tiles are cut, calibrated to 35–40 mm and inspected after cutting, finishing and again before packing.",
  },
  {
    title: "Packing & shipment",
    desc: "Stock is packed in sea-worthy wooden crates and shipped FOB Indian Port with complete export documentation.",
  },
];

// Quality & export packing — the how, not just the what. A new exporter that
// can explain its process reads as experienced.
// NOTE: confirm the calibration tolerance figure below matches what you can
// actually hold on every order before promising it to buyers.
export const QUALITY = [
  {
    title: "Calibration & tolerance",
    desc: "Tiles are machine-calibrated to a consistent 35–40 mm thickness, held to roughly ±1.5 mm across the order so they lay flat and even on site.",
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
    desc: "Tiles are edge-protected and packed into sea-worthy wooden crates, strapped and sized for safe handling and long ocean transit.",
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
    "50% advance by bank transfer (TT) and the balance 50% before shipment. Letters of Credit (LC) are accepted for bulk orders.",
  ],
  [
    "Which documents come with a shipment?",
    "Commercial invoice, packing list, certificate of origin and the complete set of export documents required for customs clearance.",
  ],
  [
    "Do you supply custom sizes?",
    "Yes — custom and larger sizes (for example 1.5 × 4 ft) are available on request, subject to availability.",
  ],
  [
    "How long does delivery take?",
    "Production and packing typically take 3–4 weeks after order confirmation, plus transit time to your port. Exact timelines are confirmed with your quotation.",
  ],
];

export const TERMS = [
  ["Pricing basis", "FOB Indian Port. CIF rates available on request."],
  ["Payment", "50% advance via bank transfer (TT), balance 50% before shipment. Letter of Credit (LC) accepted for bulk orders."],
  ["Minimum order", "One full container load (FCL). Mixed sizes and colours per container on request."],
  ["Packing", "Export-grade sea-worthy wooden crates."],
  ["Samples", "Available at nominal cost plus courier charges — adjustable against confirmed order."],
  ["Documentation", "Commercial invoice, packing list, certificate of origin and complete export documentation."],
  ["Bank charges", "All bank charges outside India to be borne by the buyer."],
  ["Quotation validity", "Prices valid for 30 days from date of quotation."],
];
