// ============================================================
// VAMIKA MINERALS & EXPORTS — SITE CONFIG
// Saari contact details yahan ek jagah edit karo.
// Jab IEC/GSTIN/phone/email mil jaye, sirf ye file update karni hai.
// ============================================================

export const SITE = {
  brand: "VAMIKA",
  brandSub: "MINERALS & EXPORTS",
  tagline: "Natural Indian Sandstone",
  origin: "Mirzapur, Uttar Pradesh, India",

  // --- TODO: apni details bharo ---
  contactPerson: "Contact Person",     // e.g. "Soniya Sharma"
  phone: "+91 XXXXX XXXXX",            // WhatsApp number
  whatsappLink: "https://wa.me/91XXXXXXXXXX", // 91 + number, no spaces
  email: "info@example.com",
  iec: "IEC: Applied",                 // e.g. "IEC: 0123456789"
  gstin: "GSTIN: Applied",             // e.g. "GSTIN: 09XXXXX0000X1Z5"

  markets: ["UAE", "USA", "UK"],
};

export const STONES = [
  {
    name: "Pink Sandstone",
    tone: "pink",
    desc: "Warm rose-tan surface with fine, even grain. A natural favourite for patios, garden paths and facades.",
    img: "/images/pink-1x1.jpg",
  },
  {
    name: "Green Sandstone",
    tone: "green",
    desc: "Soft sage-green tiles with subtle natural veining. Distinctive choice for pool surrounds and landscaping.",
    img: "/images/green-1.5.jpg",
  },
  {
    name: "Grey Sandstone",
    tone: "grey",
    desc: "Clean, contemporary grey with consistent tone. Suits modern flooring, driveways and wall cladding.",
    img: "/images/grey-top.jpg",
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
  { src: "/images/green-1.5.jpg", thumb: "/images/green-1.5-thumb.jpg", label: "Green-grey stacks — 1.5 × 1.5 ft" },
  { src: "/images/grey-top.jpg", thumb: "/images/grey-top-thumb.jpg", label: "Grey sandstone — 2 × 2 ft" },
  { src: "/images/grey-2x2.jpg", thumb: "/images/grey-2x2-thumb.jpg", label: "Grey yard stock — 2 × 2 ft" },
  { src: "/images/multi-stack-b.jpg", thumb: "/images/multi-stack-b-thumb.jpg", label: "Multi-tone stack — 1.5 × 2 ft" },
  { src: "/images/multi-yard.jpg", thumb: "/images/multi-yard-thumb.jpg", label: "Pink-grey range — 1.5 × 2 ft" },
  { src: "/images/grey-edges.jpg", thumb: "/images/grey-edges-thumb.jpg", label: "Calibrated edges — 35–40 mm" },
  { src: "/images/yard-rows-a.jpg", thumb: "/images/yard-rows-a-thumb.jpg", label: "Bulk yard stock" },
];

export const VIDEOS = [
  { src: "/videos/stone-video-1.mp4", poster: "/videos/stone-video-1-poster.jpg", label: "Yard walkthrough" },
  { src: "/videos/stone-video-2.mp4", poster: "/videos/stone-video-2-poster.jpg", label: "Tile stacks" },
  { src: "/videos/stone-video-3.mp4", poster: "/videos/stone-video-3-poster.jpg", label: "Stone finish detail" },
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
