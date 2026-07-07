import { useState, useEffect } from "react";
import { SITE, STONES, SIZES, GALLERY, VIDEOS, TERMS } from "./config";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

const Strata = ({ center }) => (
  <div className={`strata${center ? " center" : ""}`} aria-hidden="true">
    <span /><span /><span />
  </div>
);

function Header() {
  return (
    <header className="header">
      <div className="header-in">
        <a href="#top" className="wordmark" aria-label="Vamika Minerals and Exports — home">
          <b>{SITE.brand}</b>
          <small>{SITE.brandSub}</small>
        </a>
        <nav className="nav" aria-label="Main">
          <a className="navlink" href="#stones">Stones</a>
          <a className="navlink" href="#products">Products</a>
          <a className="navlink" href="#gallery">Gallery</a>
          <a className="navlink" href="#terms">Export terms</a>
          <a className="navlink" href="#about">About</a>
          <a className="btn" href="#contact">Get a quote</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" style={{ padding: 0 }}>
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Mirzapur · India</p>
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
          <img src="/images/hero.jpg" alt="Stacked pink, green and grey sandstone tiles in the Mirzapur yard" fetchpriority="high" />
        </div>
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
        </div>
        <div className="spec-grid">
          <div className="spec-cell"><b>Sandstone</b><span>Natural Indian</span></div>
          <div className="spec-cell"><b>35–40 mm</b><span>Calibrated thickness</span></div>
          <div className="spec-cell"><b>Polished / Natural</b><span>Finish</span></div>
          <div className="spec-cell"><b>6802.29 / 6802.99</b><span>HS codes</span></div>
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
          Custom and larger sizes (e.g. 1.5 × 4 ft) available on request, subject to availability.
          Pricing on request — FOB basis.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState(null);
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
            <figure key={g.src} onClick={() => setOpen(g)}>
              <img src={g.thumb} alt={g.label} loading="lazy" />
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
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-label={open.label}>
          <button aria-label="Close image">×</button>
          <img src={open.src} alt={open.label} />
        </div>
      )}
    </section>
  );
}

function Terms() {
  return (
    <section id="terms">
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
    <section id="about" className="tint about">
      <div className="wrap about-grid">
        <img src="/images/yard-rows-a.jpg" alt="Rows of calibrated grey sandstone tiles ready in the yard" loading="lazy" />
        <div>
          <p className="eyebrow">About us</p>
          <h2>Sourced at the quarry, checked at every stage</h2>
          <p>
            {SITE.brand.charAt(0) + SITE.brand.slice(1).toLowerCase()} Minerals &amp; Exports
            sources premium natural sandstone directly from established quarries and
            processing units of Mirzapur, Uttar Pradesh — home to India's renowned
            sandstone belt.
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

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="sec-head">
          <h2>Request a quotation</h2>
          <p>Tell us the colour, size and quantity — we reply within 24 hours.</p>
        </div>
        <div className="contact-card">
          <div className="brandline">{SITE.brand} {SITE.brandSub}</div>
          <div className="tag">{SITE.tagline} — {SITE.origin}</div>
          <p>{SITE.contactPerson}</p>
          <p>{SITE.phone} · {SITE.email}</p>
          <p className="creds">{SITE.iec} · {SITE.gstin}</p>
          <div className="contact-ctas">
            <a className="btn" href={SITE.whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <a className="btn ghost" href={`mailto:${SITE.email}?subject=Sandstone%20quotation%20request`}>
              Email inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <span>© {new Date().getFullYear()} {SITE.brand} {SITE.brandSub} · {SITE.origin}</span>
          <span>Pink · Green · Grey natural sandstone</span>
        </div>
        <div className="legal-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span>·</span>
          <a href="/terms" className="footer-link">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/privacy") setCurrentPage("privacy");
    else if (path === "/terms") setCurrentPage("terms");
    else setCurrentPage("home");

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/privacy") setCurrentPage("privacy");
      else if (path === "/terms") setCurrentPage("terms");
      else setCurrentPage("home");
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (page) => {
    if (page === "home") {
      window.history.pushState(null, "", "/");
      setCurrentPage("home");
    } else if (page === "privacy") {
      window.history.pushState(null, "", "/privacy");
      setCurrentPage("privacy");
    } else if (page === "terms") {
      window.history.pushState(null, "", "/terms");
      setCurrentPage("terms");
    }
    window.scrollTo(0, 0);
  };

  if (currentPage === "privacy") {
    return (
      <>
        <header className="header">
          <div className="header-in">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="wordmark" aria-label="Vamika Minerals and Exports — home">
              <b>{SITE.brand}</b>
              <small>{SITE.brandSub}</small>
            </a>
            <nav className="nav" aria-label="Main">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="navlink">Home</a>
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="btn">Back to Home</a>
            </nav>
          </div>
        </header>
        <main>
          <section className="legal-page">
            <PrivacyPolicy />
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (currentPage === "terms") {
    return (
      <>
        <header className="header">
          <div className="header-in">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="wordmark" aria-label="Vamika Minerals and Exports — home">
              <b>{SITE.brand}</b>
              <small>{SITE.brandSub}</small>
            </a>
            <nav className="nav" aria-label="Main">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="navlink">Home</a>
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("home"); }} className="btn">Back to Home</a>
            </nav>
          </div>
        </header>
        <main>
          <section className="legal-page">
            <TermsAndConditions />
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Default: Home page
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stones />
        <Products />
        <Gallery />
        <Terms />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
