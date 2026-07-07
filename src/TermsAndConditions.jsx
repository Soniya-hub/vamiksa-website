import { SITE } from "./config";

export default function TermsAndConditions() {
  return (
    <section className="legal-page">
      <div className="wrap">
        <div className="sec-head">
          <h1>Terms and Conditions</h1>
          <p className="eyebrow">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="legal-content">
          <h2>1. Agreement and Acceptance</h2>
          <p>
            By accessing and using this website, you agree to be bound by these Terms and Conditions.
            If you do not agree, please discontinue use immediately. {SITE.brand} {SITE.brandSub}
            reserves the right to modify these terms at any time.
          </p>

          <h2>2. Website Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information and graphics)
            on this website for personal, non-commercial use only. This is a license, not a transfer of ownership.
          </p>
          <p><b>You may not:</b></p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Remove any copyright or proprietary notices</li>
            <li>Transfer materials to another person or "mirror" the materials on any other server</li>
            <li>Use automated tools or bots to crawl or scrape this website</li>
            <li>Engage in any illegal or harmful activity</li>
          </ul>

          <h2>3. Quotations and Pricing</h2>
          <p>
            All quotations provided are subject to:
          </p>
          <ul>
            <li><b>30-day validity</b> — prices may change after expiration</li>
            <li><b>Product availability</b> — confirmation upon order placement</li>
            <li><b>FOB basis</b> — Free on Board, Indian port (unless otherwise agreed)</li>
            <li><b>Spot rates</b> — subject to market conditions and supply</li>
          </ul>
          <p>
            Quotations are not binding until accepted by {SITE.brand} in writing.
            A written order confirmation constitutes a binding contract.
          </p>

          <h2>4. Payment Terms</h2>
          <ul>
            <li>50% advance via bank transfer (TT) to secure the order</li>
            <li>Balance 50% due before shipment</li>
            <li>Letter of Credit (LC) accepted for bulk/regular orders</li>
            <li>All bank charges outside India borne by the buyer</li>
            <li>Invoices issued in Indian Rupees (₹) unless otherwise agreed</li>
          </ul>

          <h2>5. Minimum Order</h2>
          <p>
            Minimum order quantity: <b>One Full Container Load (FCL)</b>. Mixed sizes and colours allowed
            per container, subject to feasibility and availability.
          </p>

          <h2>6. Product Specifications</h2>
          <ul>
            <li><b>Calibration:</b> 35–40 mm thickness (tolerance ± 2 mm)</li>
            <li><b>Finish:</b> Natural or polished as specified</li>
            <li><b>Grading:</b> Export-grade quality, multi-stage inspection</li>
            <li><b>HS Codes:</b> 6802.29 (sandstone, worked) / 6802.99 (sandstone, other)</li>
          </ul>
          <p>
            Actual colours may vary slightly due to natural stone variation. Images on this website
            are representative samples. Sample tiles available for review before confirming bulk orders.
          </p>

          <h2>7. Samples</h2>
          <ul>
            <li>Available at nominal cost plus courier charges</li>
            <li>Sample charges are adjustable against confirmed orders</li>
            <li>Lead time: 7–10 business days</li>
          </ul>

          <h2>8. Shipping and Delivery</h2>
          <ul>
            <li><b>FOB (Free on Board):</b> Delivered to Indian port; buyer arranges shipping</li>
            <li><b>CIF (Cost, Insurance, Freight):</b> Available on request at additional cost</li>
            <li><b>Packing:</b> Export-grade sea-worthy wooden crates</li>
            <li><b>Documentation:</b> Commercial invoice, packing list, certificate of origin, export permits</li>
            <li><b>Delivery time:</b> 60–90 days from order confirmation (subject to availability)</li>
          </ul>

          <h2>9. Risk and Title</h2>
          <p>
            Under FOB terms, risk of loss and title pass to the buyer once goods are delivered to the
            vessel at the Indian port. For CIF terms, risk passes upon shipment.
          </p>

          <h2>10. Quality Assurance</h2>
          <p>
            {SITE.brand} ensures all products undergo multi-stage quality inspection:
          </p>
          <ul>
            <li>Post-cutting inspection</li>
            <li>Finishing check</li>
            <li>Pre-packing verification</li>
            <li>Final crate inspection</li>
          </ul>
          <p>
            In case of legitimate quality issues, buyers must report within <b>30 days of delivery</b>.
            Claims after 30 days will not be entertained.
          </p>

          <h2>11. Customization and Special Orders</h2>
          <p>
            Custom sizes, finishes, and mixed orders are available subject to:
          </p>
          <ul>
            <li>Minimum order quantities</li>
            <li>Manufacturing feasibility confirmation</li>
            <li>Revised quotation and delivery timeline</li>
            <li>No guaranteed color/finish match for subsequent orders</li>
          </ul>

          <h2>12. Limitation of Liability</h2>
          <p>
            {SITE.brand} {SITE.brandSub} shall not be liable for:
          </p>
          <ul>
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, revenue, or data</li>
            <li>Delays due to unforeseen circumstances (weather, port strikes, customs delays)</li>
            <li>Third-party claims or carrier damage after shipment</li>
          </ul>
          <p>
            Total liability, if any, shall not exceed the value of the order or ₹50,000, whichever is lower.
          </p>

          <h2>13. Force Majeure</h2>
          <p>
            Neither party is liable for failure to perform due to unforeseen circumstances beyond reasonable
            control, including but not limited to natural disasters, war, pandemics, port closures, or government actions.
          </p>

          <h2>14. Confidentiality</h2>
          <p>
            All quotations, specifications, pricing, and business discussions are confidential and proprietary
            to {SITE.brand}. Do not share these details without written permission.
          </p>

          <h2>15. Export and Compliance</h2>
          <p>
            Buyer is responsible for:
          </p>
          <ul>
            <li>Compliance with import laws in destination country</li>
            <li>Obtaining all necessary import licenses and permits</li>
            <li>Customs clearance and documentation</li>
            <li>Compliance with trade regulations and sanctions</li>
          </ul>
          <p>
            {SITE.brand} is not responsible for delays or denials due to import restrictions or buyer non-compliance.
          </p>

          <h2>16. Dispute Resolution</h2>
          <p>
            Disputes shall be resolved through:
          </p>
          <ol>
            <li>Mutual negotiation (15 days)</li>
            <li>Mediation if negotiation fails</li>
            <li>Arbitration under Indian Arbitration and Conciliation Act, 1996</li>
            <li>Venue: Mirzapur, Uttar Pradesh, India</li>
          </ol>

          <h2>17. Intellectual Property</h2>
          <p>
            All website content, including images, videos, descriptions, logos, and graphics are the
            intellectual property of {SITE.brand} {SITE.brandSub}. Unauthorized reproduction or use is prohibited.
          </p>

          <h2>18. Disclaimers</h2>
          <p>
            This website and all materials are provided "as-is" without warranties of any kind, express or implied.
            {SITE.brand} does not warrant:
          </p>
          <ul>
            <li>Uninterrupted website access or availability</li>
            <li>Absence of errors or accuracy of information</li>
            <li>Fitness for particular purpose</li>
            <li>Compatibility with all devices or browsers</li>
          </ul>

          <h2>19. Limitation on Use</h2>
          <p>
            You agree not to use this website for:
          </p>
          <ul>
            <li>Illegal activities or violation of any law</li>
            <li>Harassment, threats, or abusive language</li>
            <li>Phishing, hacking, or unauthorized access</li>
            <li>Commercial purposes without explicit written consent</li>
          </ul>

          <h2>20. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. {SITE.brand} is not responsible for
            their content, accuracy, or practices. Access at your own risk.
          </p>

          <h2>21. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the
            <b> laws of India</b>. All disputes are subject to the exclusive jurisdiction of courts in
            <b> Mirzapur, Uttar Pradesh, India</b>.
          </p>

          <h2>22. Contact for Terms Questions</h2>
          <p>For questions about these Terms and Conditions:</p>
          <ul>
            <li><b>Email:</b> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><b>WhatsApp:</b> <a href={SITE.whatsappLink} target="_blank" rel="noreferrer">{SITE.phone}</a></li>
          </ul>

          <hr style={{ margin: "3rem 0" }} />
          <p className="eyebrow">
            © {new Date().getFullYear()} {SITE.brand} {SITE.brandSub} · All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
