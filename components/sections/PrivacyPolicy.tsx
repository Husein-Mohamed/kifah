import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <div className="privacy-policy-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="all-category">
                                <div className="categories-area">
                                    <h3>Privacy Topics</h3>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                Information We Collect
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                How We Use Data
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                Sharing and Security
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                Cookies
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                Your Rights
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                Contact
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space30" />
                                <div className="contact-us-box heading1">
                                    <h3>Contact Us</h3>
                                    <div className="space16" />
                                    <p>If you have any privacy questions, contact the Kifah Business Park team.</p>
                                    <div className="space24" />
                                    <div className="btn-area1">
                                        <Link href="/contact" className="vl-btn1">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={23} height={22} viewBox="0 0 23 22" fill="none">
                                                    <path d="M12.8105 9.04492C12.3143 9.04492 11.9297 9.42949 11.9297 9.9043C11.9297 10.3791 12.3143 10.7637 12.8105 10.7637C13.2639 10.7637 13.6484 10.3791 13.6484 9.9043C13.6484 9.42949 13.2639 9.04492 12.8105 9.04492ZM6.79492 9.04492C6.29863 9.04492 5.91406 9.42949 5.91406 9.9043C5.91406 10.3791 6.29863 10.7637 6.79492 10.7637C7.24824 10.7637 7.63281 10.3791 7.63281 9.9043C7.63281 9.42949 7.24824 9.04492 6.79492 9.04492Z" fill="white" />
                                                    <path
                                                        d="M19.7067 7.41209C18.6733 5.99413 17.2296 5.04666 15.6462 4.61913V4.62127C15.2788 4.21307 14.8642 3.83709 14.4001 3.50194C10.8831 0.945297 5.946 1.72518 3.37862 5.24217C1.30967 8.09959 1.39776 11.9431 3.50753 14.6738L3.52471 17.5226C3.52471 17.5914 3.53546 17.6601 3.55694 17.7246C3.67081 18.0877 4.05753 18.2875 4.41846 18.1736L7.13838 17.3164C7.85811 17.5721 8.60147 17.7181 9.34053 17.759L9.32979 17.7676C11.244 19.1619 13.7534 19.5808 16.0544 18.8203L18.7851 19.7098C18.8538 19.7312 18.9247 19.7441 18.9978 19.7441C19.378 19.7441 19.6853 19.4369 19.6853 19.0566V16.1777C21.578 13.6082 21.6274 10.0568 19.7067 7.41209ZM7.43917 15.791L7.18135 15.6836L5.0544 16.3496L5.03292 14.1152L4.86104 13.9219C3.04346 11.7047 2.92315 8.50995 4.62471 6.166C6.69581 3.32577 10.6661 2.69842 13.4978 4.74803C16.338 6.81268 16.9675 10.7765 14.9157 13.5996C13.1948 15.9607 10.114 16.833 7.43917 15.791ZM18.2888 15.4258L18.1169 15.6406L18.1384 17.875L16.0329 17.166L15.7751 17.2734C14.572 17.7203 13.2894 17.7568 12.1013 17.4238L12.097 17.4217C13.6847 16.934 15.1241 15.9457 16.1618 14.5234C17.8032 12.2611 18.0696 9.41874 17.1157 6.9953L17.1286 7.00389C17.6228 7.35838 18.0761 7.80096 18.4607 8.33592C20.0204 10.4758 19.9323 13.389 18.2888 15.4258Z"
                                                        fill="white"
                                                    />
                                                    <path d="M9.80273 9.04492C9.30645 9.04492 8.92188 9.42949 8.92188 9.9043C8.92188 10.3791 9.30645 10.7637 9.80273 10.7637C10.2561 10.7637 10.6406 10.3791 10.6406 9.9043C10.6406 9.42949 10.2561 9.04492 9.80273 9.04492Z" fill="white" />
                                                </svg>
                                            </span>
                                            Contact Support
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="policy-details">
                                <div className="heading1">
                                    <h2>Privacy &amp; Policy</h2>
                                    <div className="space24" />
                                    <p>This Privacy Policy explains how Kifah Business Park collects, uses, and protects personal information when you visit our website, contact us, or use our services.</p>
                                    <div className="space24" />
                                    <h4>Effective Date: 26 February 2026</h4>
                                    <div className="space16" />
                                    <p>By using this website, you agree to this Privacy Policy.</p>
                                    <div className="space50" />
                                    <h3>Information We Collect</h3>
                                    <div className="space16" />
                                    <p>We may collect the following information:</p>
                                    <div className="space32" />
                                    <h4>Personal Information:</h4>
                                    <div className="space12" />
                                    <p>Name, email, phone number, and other details submitted through our forms.</p>
                                    <div className="space16" />
                                    <h4>Inquiry Information</h4>
                                    <div className="space12" />
                                    <p>Details you provide regarding bookings, events, restaurant reservations, or business inquiries.</p>
                                    <div className="space16" />
                                    <h4>Usage Data</h4>
                                    <div className="space12" />
                                    <p>IP address, browser type, visited pages, and technical logs for analytics and security.</p>
                                    <div className="space16" />
                                    <h4>Cookies</h4>
                                    <div className="space12" />
                                    <p>Cookies are used to improve website functionality, remember preferences, and measure performance.</p>
                                    <div className="space50" />
                                    <h3>How We Use Your Information</h3>
                                    <div className="space16" />
                                    <p>We use collected information to:</p>
                                    <div className="space16" />
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            Respond to inquiries and provide requested information.
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            Manage bookings, reservations, and service communication.
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            Improve website usability, service quality, and customer experience.
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            Maintain website security and prevent misuse.
                                        </li>
                                    </ul>
                                    <div className="space50" />
                                    <h3>Information Sharing</h3>
                                    <div className="space16" />
                                    <p>We do not sell personal data. We may share data only when necessary:</p>
                                    <div className="space16" />
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            With trusted service providers who support website or operations.
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            When required by law, regulation, or legal process.
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="#ED8438" />
                                            </svg>
                                            With your consent for specific service-related actions.
                                        </li>
                                    </ul>
                                    <div className="space50" />
                                    <h3>Data Security</h3>
                                    <div className="space16" />
                                    <p>We implement reasonable technical and organizational safeguards. No platform can guarantee absolute security, but we continuously improve protection measures.</p>
                                    <div className="space32" />
                                    <h3>Third-Party Links</h3>
                                    <div className="space16" />
                                    <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
                                    <div className="space16" />
                                    <p>You may request access, correction, or deletion of your data by contacting us through the Contact page. We may update this policy periodically, and updates become effective when published on this page.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
