import { SITE } from "./config";

export default function PrivacyPolicy() {
  return (
    <section className="legal-page">
      <div className="wrap">
        <div className="sec-head">
          <h1>Privacy Policy</h1>
          <p className="eyebrow">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            {SITE.brand} {SITE.brandSub} ("we", "us", "our", or "Company") operates this website.
            This page informs you of our policies regarding the collection, use, and disclosure of
            personal data when you use our website and the choices you have associated with that data.
          </p>

          <h2>2. Types of Data Collected</h2>
          <h3>Contact Information</h3>
          <ul>
            <li>Name and business name</li>
            <li>Email address</li>
            <li>Phone / WhatsApp number</li>
            <li>Company and address</li>
            <li>Product inquiries and quotation requests</li>
          </ul>

          <h3>Automatic Data</h3>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent</li>
            <li>Referring website (if applicable)</li>
            <li>Device information</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We collect and use your data for the following purposes:</p>
          <ul>
            <li><b>Process inquiries</b> — respond to quotation requests and customer service</li>
            <li><b>Communication</b> — send updates, order confirmations, and export documentation</li>
            <li><b>Compliance</b> — meet legal, export control, and customs requirements</li>
            <li><b>Analytics</b> — understand website usage and improve our services</li>
            <li><b>Marketing</b> — (only with your consent) send occasional product updates</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your data based on:</p>
          <ul>
            <li><b>Your consent</b> — you have explicitly given permission</li>
            <li><b>Contract</b> — necessary to provide goods/services you requested</li>
            <li><b>Legal obligation</b> — Indian export laws, GST, customs regulations</li>
            <li><b>Legitimate interest</b> — improving our website and services</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do <b>not</b> sell or rent your personal information to third parties.</p>
          <p>We may share your data with:</p>
          <ul>
            <li><b>Manufacturing partners</b> — to prepare and fulfill your order</li>
            <li><b>Shipping/Logistics</b> — freight forwarders and customs brokers</li>
            <li><b>Bank/Payment processors</b> — to process payments</li>
            <li><b>Legal authorities</b> — if required by law or for export compliance</li>
          </ul>

          <h2>6. Data Retention</h2>
          <ul>
            <li><b>Quotations</b> — retained for 2 years for order history and compliance</li>
            <li><b>Orders</b> — retained for 7 years (Indian tax law requirement)</li>
            <li><b>Website analytics</b> — typically 12–24 months</li>
            <li><b>Correspondence</b> — retained as long as needed for service delivery</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>Under Indian data protection norms, you have the right to:</p>
          <ul>
            <li><b>Access</b> — request a copy of your personal data</li>
            <li><b>Rectification</b> — correct inaccurate or incomplete data</li>
            <li><b>Withdrawal</b> — withdraw consent (does not affect prior processing)</li>
            <li><b>Object</b> — opt out of marketing communications</li>
            <li><b>Data portability</b> — request data in a portable format</li>
          </ul>

          <h2>8. Data Security</h2>
          <p>
            We implement technical and organizational measures to protect your data against
            unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul>
            <li>SSL/TLS encryption for data in transit</li>
            <li>Secure servers and access controls</li>
            <li>Regular security audits</li>
            <li>Restricted employee access</li>
          </ul>
          <p>
            <b>Note:</b> No method of transmission over the Internet is 100% secure.
            We cannot guarantee absolute security.
          </p>

          <h2>9. Cookies &amp; Tracking</h2>
          <p>This website may use:</p>
          <ul>
            <li><b>Essential cookies</b> — for website functionality</li>
            <li><b>Analytics cookies</b> — to understand visitor behavior (via Vercel Analytics)</li>
            <li><b>Marketing cookies</b> — (optional) to track ads and campaigns</li>
          </ul>
          <p>You can disable cookies in your browser settings, though some functionality may be affected.</p>

          <h2>10. Third-Party Links</h2>
          <p>
            This website may contain links to external websites. We are <b>not</b> responsible for
            their privacy practices. Please review their privacy policies before providing any information.
          </p>

          <h2>11. International Data Transfers</h2>
          <p>
            Your data may be transferred to and stored in countries outside India (e.g., USA, UAE, UK)
            for order processing and delivery. By using this website, you consent to such transfers.
          </p>

          <h2>12. Children's Privacy</h2>
          <p>
            This website is not intended for individuals under 18 years old. We do not knowingly
            collect data from children. If we become aware of such collection, we will delete it immediately.
          </p>

          <h2>13. Policy Changes</h2>
          <p>
            We may update this Privacy Policy at any time. Material changes will be posted with an
            updated date. Your continued use of the website constitutes acceptance of the revised policy.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul>
            <li><b>Email:</b> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><b>WhatsApp:</b> <a href={SITE.whatsappLink} target="_blank" rel="noreferrer">{SITE.phone}</a></li>
            <li><b>Address:</b> {SITE.origin}</li>
          </ul>

          <hr style={{ margin: "3rem 0" }} />
          <p className="eyebrow">
            © {new Date().getFullYear()} {SITE.brand} {SITE.brandSub}
          </p>
        </div>
      </div>
    </section>
  );
}
