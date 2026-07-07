# Vamika Minerals & Exports — Website

Production-ready React (Vite) website. Vercel pe deploy karne ke liye ready.

## Quick Start

### 1. Update Your Details (Required!)

Edit `src/config.js` with your business information:

```js
contactPerson: "Your Name",              // apna naam
phone: "+91 XXXXX XXXXX",                // WhatsApp number
whatsappLink: "https://wa.me/91XXXXXXXXXX",  // 91 + number, no spaces
email: "your@company.com",               // Business email
iec: "IEC: 0123456789",                  // IEC number (from DGFT)
gstin: "GSTIN: 09XXXXX0000X1Z5",        // GSTIN (from GST portal)
```

### 2. Deploy to Vercel (Easiest Way)

1. Create GitHub account (free)
2. Push this repo to GitHub
3. Go to [vercel.com](https://vercel.com)
4. Connect GitHub account
5. Import this repository
6. Deploy (takes ~2 minutes)
7. Get live link: `yourdomain.vercel.app`

### 3. Custom Domain (Optional)

- Buy domain from GoDaddy/Namecheap (~Rs 800–1200/year)
- Add to Vercel project settings
- Update canonical URLs in `index.html` and robots.txt/sitemap.xml

## Local Development

```bash
npm install
npm run dev       # Opens http://localhost:5173
npm run build     # Production build
npm run lint      # Check code quality
```

## Features

### 🔒 Trust & Security
- **Privacy Policy** & **Terms & Conditions** (built-in, editable)
- **Security.txt** file for responsible disclosure (`.well-known/security.txt`)
- **MIT License** for open-source transparency
- **Code of Conduct** for professional standards
- SSL/TLS encryption (automatic via Vercel)
- Security headers pre-configured

### 📱 SEO & Performance
- **SEO-optimized**: meta tags, Open Graph, JSON-LD structured data
- **Responsive design**: mobile-first, works on all devices
- **Fast loading**: optimized images, compressed videos, lazy loading
- **Accessible**: keyboard navigation, ARIA labels, reduced-motion support
- **Sitemap & robots.txt**: for search engines
- **Caching**: long-term cache headers for fast repeat visits

### 🎨 Design
- **Professional layout**: hero, product showcase, gallery, contact
- **3-color palette**: Pink, Green, Grey (from natural stone)
- **Custom fonts**: Cinzel (brand), Cormorant Garamond (display), Montserrat (body)
- **Dark/light modes**: adaptive to user preference

### 📊 Sections Included
1. **Hero** — Eye-catching introduction
2. **Stones** — Show 3 natural colors
3. **Products & Sizes** — Specifications & calibration info
4. **Gallery** — Photos + videos from yard
5. **Export Terms** — Clear payment/shipping terms
6. **About** — Company background & quality assurance
7. **Contact** — WhatsApp + email CTA
8. **Legal Pages** — Privacy Policy & Terms & Conditions (footer links)

## File Structure

```
vamika-website/
├── public/
│   ├── .well-known/
│   │   └── security.txt         # ← Security/vulnerability reporting
│   ├── images/                  # Product photos (optimized)
│   ├── videos/                  # Yard videos + posters
│   ├── robots.txt               # For search engines
│   └── sitemap.xml              # List of pages
├── src/
│   ├── config.js                # ← EDIT YOUR DETAILS HERE
│   ├── App.jsx                  # Website sections
│   ├── PrivacyPolicy.jsx        # Privacy page
│   ├── TermsAndConditions.jsx   # Terms page
│   ├── index.css                # Design system
│   └── main.jsx
├── LICENSE                      # MIT License
├── SECURITY.md                  # Security policy & vulnerability reporting
├── CODE_OF_CONDUCT.md          # Community standards
├── index.html                   # SEO meta tags
├── package.json                 # Dependencies
└── vercel.json                  # Vercel deployment config
```

## Building Trust

### What We've Included

✅ **Privacy Policy** — Compliant with Indian data protection norms  
✅ **Terms & Conditions** — Clear export terms, payment terms, dispute resolution  
✅ **Security Policy** — Responsible disclosure for vulnerabilities  
✅ **LICENSE** — MIT, showing legitimacy  
✅ **Code of Conduct** — Professional standards  
✅ **SSL/HTTPS** — Automatic via Vercel  
✅ **Security Headers** — XSS protection, clickjacking prevention  
✅ **Structured Data** — Google Rich Snippets support  

### To Make Even More Trustworthy

📌 **Add your company logo** to `public/images/logo.png`  
📌 **Add IEC & GSTIN** once approved (edit config.js)  
📌 **Add testimonials** from past customers (Edit About section)  
📌 **Add team photos** — humanize your business  
📌 **Use custom business email** (not Gmail)  
📌 **Add trust badges** from verified export platforms  
📌 **Display certifications** (ISO, quality marks)  

## Export to Global Markets

This website is optimized for:
- ✈️ **UAE** — Clear export terms, FOB pricing
- 🇺🇸 **USA** — HS codes, compliance info
- 🇬🇧 **UK** — Professional presentation

## Troubleshooting

### Changes not showing after push?
- Wait 30–60 seconds for Vercel to rebuild
- Check Vercel dashboard for build status
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Local site looks broken?
```bash
npm install              # Install dependencies
npm run dev             # Restart dev server
```

### Need help?
- Edit `src/config.js` for contact details
- Check `index.html` for SEO meta tags
- See `vercel.json` for deployment config

## Legal & Compliance

- **Privacy Policy**: Compliant with Indian data protection
- **Terms & Conditions**: Export-focused, clear payment terms
- **Export Compliance**: No restrictions on countries listed
- **Tax Documentation**: Supports GST, IEC requirements

## License

MIT License — See [LICENSE](LICENSE) file

## Security

For security vulnerabilities, see [SECURITY.md](SECURITY.md)

---

**Made for Vamika Minerals & Exports**  
Natural Indian Sandstone · Mirzapur, Uttar Pradesh
