# Vamika Minerals & Exports — Website

Production-ready React (Vite) website. Vercel pe deploy karne ke liye ready.

## Pehle apni details bharo (zaroori!)

Sirf **ek file** edit karni hai: `src/config.js`

```js
contactPerson: "Contact Person",   // apna naam
phone: "+91 XXXXX XXXXX",          // apna number
whatsappLink: "https://wa.me/91XXXXXXXXXX",  // 91 + number, bina space
email: "info@example.com",         // apna email
iec: "IEC: Applied",               // IEC number aane pe
gstin: "GSTIN: Applied",           // GSTIN aane pe
```

## Vercel pe deploy (sabse aasan tareeka)

1. github.com pe account banao (free)
2. Naya repository banao — naam: `vamika-website`
3. Ye poora folder GitHub pe upload karo (ya `git push` karo)
4. vercel.com pe GitHub se login karo
5. "Add New Project" -> apni `vamika-website` repo select karo
6. Kuch change mat karo — Vercel khud Vite detect kar lega -> **Deploy** dabao
7. 1-2 minute mein live link mil jayega (jaise `vamika-website.vercel.app`)

### Baad mein changes kaise karein
`src/config.js` edit karo -> GitHub pe push karo -> Vercel khud redeploy kar dega.

### Apna domain (optional, recommended)
`vamikaexports.com` jaisa domain kharido (GoDaddy/Namecheap, ~Rs 800-1200/saal)
-> Vercel project settings -> Domains -> add karo.
Phir `index.html` mein `vamikaexports.vercel.app` ko apne domain se replace karo
(canonical, og:url) aur `public/robots.txt` + `public/sitemap.xml` mein bhi.

## Local pe chalana (testing)

```bash
npm install
npm run dev       # http://localhost:5173
```

## Kya-kya included hai

- **SEO**: meta title/description/keywords, Open Graph (WhatsApp/social preview),
  JSON-LD structured data, sitemap.xml, robots.txt, canonical URL
- **Performance**: optimized images (thumb + full), compressed videos (~0.5-1MB each,
  poster frames, lazy loading), long-term caching headers (vercel.json)
- **Sections**: Hero, Stone colours (Pink/Green/Grey), Products & sizes,
  Gallery (photos lightbox + videos), Export terms, About, Contact (WhatsApp + email CTA)
- **Responsive**: mobile se desktop tak, keyboard accessible, reduced-motion support

## Folder structure

```
vamika-website/
├── public/
│   ├── images/        # saari product photos (optimized)
│   ├── videos/        # compressed videos + posters
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config.js      # SAARI DETAILS YAHAN EDIT KARO
│   ├── App.jsx        # website sections
│   ├── index.css      # design system
│   └── main.jsx
├── index.html         # SEO meta tags
└── vercel.json        # caching config
```
