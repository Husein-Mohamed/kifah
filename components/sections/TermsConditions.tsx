import Link from "next/link";

export default function TermsConditions() {
    return (
        <div className="privacy-policy-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="all-category">
                            <div className="categories-area">
                                <h3>Terms Sections</h3>
                                <ul>
                                    <li><Link href="#">Use of Website</Link></li>
                                    <li><Link href="#">Services and Bookings</Link></li>
                                    <li><Link href="#">Payments and Changes</Link></li>
                                    <li><Link href="#">User Responsibilities</Link></li>
                                    <li><Link href="#">Liability</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="space30" />
                            <div className="contact-us-box heading1">
                                <h3>Need Clarification?</h3>
                                <div className="space16" />
                                <p>For any questions about these terms, our team is available to help.</p>
                                <div className="space24" />
                                <div className="btn-area1">
                                    <Link href="/contact" className="vl-btn1">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="policy-details">
                            <div className="heading1">
                                <h2>Terms &amp; Conditions</h2>
                                <div className="space24" />
                                <p>These Terms &amp; Conditions govern your access to and use of Kifah Business Park website and related services.</p>
                                <div className="space24" />
                                <h4>Effective Date: 26 February 2026</h4>
                                <div className="space50" />

                                <h3>1. Use of Website</h3>
                                <div className="space16" />
                                <p>You agree to use this website only for lawful purposes and in a way that does not infringe on others or disrupt service availability.</p>

                                <div className="space32" />
                                <h3>2. Services and Bookings</h3>
                                <div className="space16" />
                                <p>Information about facilities, restaurants, events, and business services is provided for general guidance. Bookings and reservations are subject to availability and confirmation.</p>

                                <div className="space32" />
                                <h3>3. Pricing and Changes</h3>
                                <div className="space16" />
                                <p>Prices, service availability, schedules, and facility details may change without prior notice. Confirm final details directly with our team before commitment.</p>

                                <div className="space32" />
                                <h3>4. User Content and Conduct</h3>
                                <div className="space16" />
                                <p>If you submit forms, messages, or feedback, you are responsible for accuracy and legality of submitted content. Abusive, fraudulent, or harmful activity is prohibited.</p>

                                <div className="space32" />
                                <h3>5. Intellectual Property</h3>
                                <div className="space16" />
                                <p>Website content, branding, logos, and design elements are owned by Kifah Business Park or used under permission. Unauthorized reproduction is not permitted.</p>

                                <div className="space32" />
                                <h3>6. Limitation of Liability</h3>
                                <div className="space16" />
                                <p>Kifah Business Park is not liable for indirect or consequential losses arising from use of this website, downtime, third-party services, or information inaccuracies.</p>

                                <div className="space32" />
                                <h3>7. Third-Party Links</h3>
                                <div className="space16" />
                                <p>External links may be provided for convenience. We do not control or endorse third-party content and are not responsible for their policies or operations.</p>

                                <div className="space32" />
                                <h3>8. Updates to Terms</h3>
                                <div className="space16" />
                                <p>We may revise these terms at any time. Updated terms take effect when published on this page.</p>

                                <div className="space32" />
                                <h3>9. Contact</h3>
                                <div className="space16" />
                                <p>For legal or policy inquiries, please contact us through the Contact page or at <a href="mailto:info@kifahbusiness.so">info@kifahbusiness.so</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
