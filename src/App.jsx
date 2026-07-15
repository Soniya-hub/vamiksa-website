import { useState, useEffect, useCallback } from "react";
import { SITE, STONES, SIZES, GALLERY, VIDEOS, TERMS, PROCESS, FAQS } from "./config";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

const Strata = ({ center }) => (
  <div className={`strata${center ? " center" : ""}`} aria-hidden="true">
    <span /><span /><span />
  </div>
);

function Header({ onHome }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // On the home page anchors scroll in place; on other pages they navigate home first.
  const prefix = onHome ? "/" : "";
  const links = [
    [`${prefix}#stones`, "Stones"],
    [`${prefix}#products`, "Products"],
    [`${prefix}#gallery`, "Gallery"],
    [`${prefix}#process`, "Process"],
    [`${prefix}#terms`, "Export terms"],
    [`${prefix}#about`, "About"],
  ];

  return (
    <header className="header">
      <div className="header-in">
        <a
          href="/"
          className="wordmark"
          aria-label={`${SITE.brand} ${SITE.brandSub} — home`}
          onClick={onHome ? (e) => { e.preventDefault(); onHome(); } : undefined}
        >
          <b>{SITE.brand}</b>
          <small>{SITE.brandSub}</small>
        </a>
        <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} className="navlink" href={href} onClick={close}>{label}</a>
          ))}
          <a className="btn" href={`${prefix}#contact`} onClick={close}>Get a quote</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Mirzapur · Uttar Pradesh · India</p>
          <h1>
            Natural Indian sandstone in <em>pink</em>, <em>green</em> &amp; <em>grey</em>
          </h1>
          <p className="lede">
            Calibrated 35–40&nbsp;mm tiles, sourced directly from the quarries and
            processing units of Mirzapur — packed export-grade and shipped FOB
            Indian Port to the UAE, USA and UK.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="#contact">Request a quotation</a>
            <a className="btn ghost" href="#gallery">View the stone</a>
          </div>
          <div className="hero-meta">
            <div><b>3</b> natural colours</div>
            <div><b>4</b> standard sizes</div>
            <div><b>35–40 mm</b> calibrated</div>
            <div><b>FCL</b> minimum order</div>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/images/hero.jpg"
            alt="Stacked pink, green and grey sandstone tiles in the Mirzapur yard"
            fetchpriority="high"
          />
        </div>
      </div>
      <div className="hero-strip" aria-label="Export markets">
        <span>Exporting to</span>
        {SITE.markets.map((m) => <b key={m}>{m}</b>)}
        <span className="divider" aria-hidden="true" />
        <span>HS codes 6802.29 / 6802.99</span>
        <span className="divider" aria-hidden="true" />
        <span>FOB Indian Port</span>
      </div>
    </section>
  );
}

function Stones() {
  return (
    <section id="stones" className="tint">
      <div className="wrap">
        <div className="sec-head">
          <h2>Three colours, one stone belt</h2>
          <Strata center />
          <p>
            Every tile comes from the sandstone strata of Mirzapur, Uttar Pradesh —
            each colour a different layer of the same earth.
          </p>
        </div>
        <div className="stones">
          {STONES.map((s) => (
            <article className={`stone-card ${s.tone}`} key={s.name}>
              <img src={s.img} alt={`${s.name} tile`} loading="lazy" />
              <div className="pad">
                <span className="chip" aria-hidden="true" />
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <ul className="uses">
                  {s.uses.map((u) => <li key={u}>{u}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="sec-head">
          <h2>Products &amp; specifications</h2>
          <Strata center />
          <p>Consistent, calibrated stock — specified the way importers and stockists order it.</p>
        </div>
        <div className="spec-grid">
          <div className="spec-cell"><b>Sandstone</b><span>Natural Indian</span></div>
          <div className="spec-cell"><b>35–40 mm</b><span>Calibrated thickness</span></div>
          <div className="spec-cell"><b>Polished / Natural</b><span>Finish</span></div>
          <div className="spec-cell"><b>6802.29 / 6802.99</b><span>HS codes</span></div>
          <div className="spec-cell"><b>≈ 270–300 m²</b><span>Per 20 ft container</span></div>
        </div>
        <div className="sizes">
          {SIZES.map((s) => (
            <div className="size-tile" key={s.ft}>
              <b>{s.ft}</b>
              <span>{s.mm}</span>
            </div>
          ))}
        </div>
        <p className="note">
          Container capacity is weight-limited (~27 t) and varies with thickness and stone density —
          exact quantity is confirmed with your quotation. Custom and larger sizes (e.g. 1.5 × 4 ft)
          available on request, subject to availability. Pricing on request — FOB basis.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState(null);

  const closeLightbox = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeLightbox]);

  return (
    <section id="gallery" className="tint">
      <div className="wrap">
        <div className="sec-head">
          <h2>From the yard</h2>
          <Strata center />
          <p>Real stock, photographed and filmed at our partner units in Mirzapur.</p>
        </div>
        <div className="gallery">
          {GALLERY.map((g) => (
            <figure key={g.src}>
              <button className="gallery-open" onClick={() => setOpen(g)} aria-label={`View ${g.label}`}>
                <img src={g.thumb} alt={g.label} loading="lazy" />
              </button>
              <figcaption>{g.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="videos">
          {VIDEOS.map((v) => (
            <video
              key={v.src}
              src={v.src}
              poster={v.poster}
              controls
              muted
              playsInline
              preload="none"
              aria-label={v.label}
            />
          ))}
        </div>
      </div>
      {open && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={open.label}>
          <button onClick={closeLightbox} aria-label="Close image">×</button>
          <img src={open.src} alt={open.label} />
          <p className="lightbox-caption">{open.label}</p>
        </div>
      )}
    </section>
  );
}

function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head">
          <h2>How an order works</h2>
          <Strata center />
          <p>A clear, documented path from first inquiry to container at port.</p>
        </div>
        <ol className="process">
          {PROCESS.map((p, i) => (
            <li className="process-step" key={p.title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Terms() {
  return (
    <section id="terms" className="tint">
      <div className="wrap">
        <div className="sec-head">
          <h2>Export terms</h2>
          <Strata center />
          <p>Clear terms from the first quotation — no surprises at the port.</p>
        </div>
        <dl className="terms">
          {TERMS.map(([k, v]) => (
            <div className="term-row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about-grid">
        <img
          src="/images/yard-rows-a.jpg"
          alt="Rows of calibrated grey sandstone tiles ready in the yard"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">About us</p>
          <h2>Sourced at the quarry, checked at every stage</h2>
          <p>
            Vamika Minerals &amp; Exports sources premium natural sandstone directly
            from established quarries and processing units of Mirzapur, Uttar
            Pradesh — home to India's renowned sandstone belt.
          </p>
          <p>
            With trusted manufacturing partners having years of stone processing
            experience, we ensure consistent quality, competitive pricing and reliable
            export service.
          </p>
          <ul className="trust">
            <li>Multi-stage inspection — after cutting, finishing and before packing</li>
            <li>Calibrated 35–40 mm thickness across the full order</li>
            <li>Export-grade sea-worthy wooden crates</li>
            <li>Complete export documentation with every shipment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="tint">
      <div className="wrap">
        <div className="sec-head">
          <h2>Frequently asked questions</h2>
          <Strata center />
        </div>
        <div className="faq">
          {FAQS.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const FORM_DEFAULTS = { name: "", email: "", phone: "", country: "", colour: "", size: "", quantity: "", message: "" };

function Contact() {
  const [form, setForm] = useState(FORM_DEFAULTS);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | need-email

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const inquiryText = () => {
    const lines = [
      "Sandstone quotation request",
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.country && `Country: ${form.country}`,
      form.colour && `Colour: ${form.colour}`,
      form.size && `Size: ${form.size}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(`${SITE.whatsappLink}?text=${encodeURIComponent(inquiryText())}`, "_blank", "noopener");
  };

  // Sends the inquiry straight from the page via Web3Forms — the mail lands in
  // SITE.email with Reply-To set to the buyer's address, no mail app needed.
  // If the service is slow or down, we open a prefilled Gmail draft instead so
  // the inquiry is never lost.
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.email.trim()) {
      setStatus("need-email");
      return;
    }
    setStatus("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: "Sandstone quotation request",
          from_name: "Vamika Website Inquiry",
          name: form.name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          colour: form.colour,
          size: form.size,
          quantity: form.quantity,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
        setForm(FORM_DEFAULTS);
        return;
      }
      throw new Error("send failed");
    } catch {
      const subject = encodeURIComponent("Sandstone quotation request");
      const body = encodeURIComponent(inquiryText());
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}&su=${subject}&body=${body}`,
        "_blank",
        "noopener"
      );
      setStatus("fallback");
    } finally {
      clearTimeout(timer);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="sec-head">
          <h2>Request a quotation</h2>
          <p>Tell us the colour, size and quantity — we reply within 24 hours.</p>
        </div>
        <div className="contact-grid">
          <form className="inquiry-form" onSubmit={sendWhatsApp}>
            <div className="form-row">
              <label>
                Your name
                <input type="text" value={form.name} onChange={set("name")} placeholder="Full name" autoComplete="name" />
              </label>
              <label>
                Country
                <input type="text" value={form.country} onChange={set("country")} placeholder="e.g. UAE" autoComplete="country-name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Your email
                <input type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" />
              </label>
              <label>
                Phone / WhatsApp
                <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+971 …" autoComplete="tel" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Colour
                <select value={form.colour} onChange={set("colour")}>
                  <option value="">Select colour</option>
                  {STONES.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                  <option value="Mixed colours">Mixed colours</option>
                </select>
              </label>
              <label>
                Size
                <select value={form.size} onChange={set("size")}>
                  <option value="">Select size</option>
                  {SIZES.map((s) => <option key={s.ft} value={s.ft}>{s.ft} ({s.mm})</option>)}
                  <option value="Custom size">Custom size</option>
                </select>
              </label>
            </div>
            <label>
              Approximate quantity
              <input type="text" value={form.quantity} onChange={set("quantity")} placeholder="e.g. 1 container (FCL) / sq m / sq ft" />
            </label>
            <label>
              Anything else?
              <textarea rows="3" value={form.message} onChange={set("message")} placeholder="Finish, destination port, target date…" />
            </label>
            <div className="contact-ctas">
              <button type="submit" className="btn">Send via WhatsApp</button>
              <button type="button" className="btn ghost" onClick={sendEmail} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send via email"}
              </button>
            </div>
            {status === "sent" && (
              <p className="form-status ok" role="status">
                ✓ Email sent successfully — we usually reply within 24 hours.
              </p>
            )}
            {status === "need-email" && (
              <p className="form-status err" role="alert">
                Please enter your email address so we can reply to you.
              </p>
            )}
            {status === "fallback" && (
              <p className="form-status err" role="alert">
                Our form service is busy right now — we've opened an email draft with your
                details instead. Just press Send there, or use WhatsApp.
              </p>
            )}
            <p className="form-note">
              Or write to us directly at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </form>
          <div className="contact-card">
            <div className="brandline">{SITE.brand} {SITE.brandSub}</div>
            <div className="tag">{SITE.tagline} — {SITE.origin}</div>
            <p>{SITE.contactPerson}</p>
            <p><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="creds">{SITE.iec} · {SITE.gstin}</p>
            <div className="markets">
              <span>Exporting to</span>
              {SITE.markets.map((m) => <b key={m}>{m}</b>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ home, onNavigate }) {
  const prefix = home ? "" : "/";
  const go = (page) => (e) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(page);
  };
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <b>{SITE.brand}</b>
          <small>{SITE.brandSub}</small>
          <p>{SITE.tagline} · {SITE.origin}</p>
          <p>Pink · Green · Grey natural sandstone</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <span className="footer-head">Explore</span>
          <a href={`${prefix}#stones`}>Stones</a>
          <a href={`${prefix}#products`}>Products</a>
          <a href={`${prefix}#gallery`}>Gallery</a>
          <a href={`${prefix}#terms`}>Export terms</a>
          <a href={`${prefix}#contact`}>Get a quote</a>
        </nav>
        <div className="footer-contact">
          <span className="footer-head">Contact</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          <span>{SITE.origin}</span>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {SITE.brand} {SITE.brandSub}. All rights reserved.</span>
        <div className="legal-links">
          <a href="/privacy" onClick={go("privacy")}>Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms" onClick={go("terms")}>Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={SITE.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.82 9.82 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.89-9.87a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.44 9.87-9.88 9.87zm8.41-18.28A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.33 11.89-11.89a11.8 11.8 0 0 0-3.49-8.38z" />
      </svg>
    </a>
  );
}

function LegalLayout({ children, onHome, onNavigate }) {
  return (
    <>
      <Header onHome={onHome} />
      <main>
        <section className="legal-page">
          <div className="legal-back">
            <a href="/" onClick={(e) => { e.preventDefault(); onHome(); }} className="back-link">
              ← Back to home
            </a>
          </div>
          {children}
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
      <WhatsAppFloat />
    </>
  );
}

const PAGE_META = {
  home: {
    path: "/",
    title: "Vamika Minerals & Exports — Natural Indian Sandstone from Mirzapur | Pink, Green & Grey",
    description:
      "Vamika Minerals & Exports supplies premium natural Indian sandstone tiles from Mirzapur — Pink, Green and Grey, calibrated 35–40mm. FOB Indian Port. Exporting to UAE, USA and UK.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — Vamika Minerals & Exports",
    description:
      "How Vamika Minerals & Exports collects, uses and protects your personal data when you inquire about natural Indian sandstone.",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions — Vamika Minerals & Exports",
    description:
      "Terms and conditions for quotations, orders, payment, shipping and export documentation from Vamika Minerals & Exports.",
  },
};

function applyMeta(page) {
  const meta = PAGE_META[page] || PAGE_META.home;
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `${window.location.origin}${meta.path}`);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageFromPath = () => {
    const path = window.location.pathname;
    if (path === "/privacy") return "privacy";
    if (path === "/terms") return "terms";
    return "home";
  };

  useEffect(() => {
    setCurrentPage(pageFromPath());
    const handlePopState = () => {
      setCurrentPage(pageFromPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    applyMeta(currentPage);
  }, [currentPage]);

  const navigateTo = (page) => {
    window.history.pushState(null, "", page === "home" ? "/" : `/${page}`);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === "privacy" || currentPage === "terms") {
    return (
      <LegalLayout onHome={() => navigateTo("home")} onNavigate={navigateTo}>
        {currentPage === "privacy" ? <PrivacyPolicy /> : <TermsAndConditions />}
      </LegalLayout>
    );
  }

  return (
    <>
      <a className="skip-link" href="#stones">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Stones />
        <Products />
        <Gallery />
        <Process />
        <Terms />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer home onNavigate={navigateTo} />
      <WhatsAppFloat />
    </>
  );
}
