import Link from "next/link";
import LazyGoogleMap from "@/components/elements/LazyGoogleMap";

const socialLinks = [
    {
        href: "https://www.facebook.com/Kifahbusiness/",
        label: "Facebook",
        icon: "fa-brands fa-facebook-f",
    },
    {
        href: "https://www.instagram.com/kifahbusinesspark/",
        label: "Instagram",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://www.tiktok.com/@kifahbusiness",
        label: "TikTok",
        icon: "fa-brands fa-tiktok",
    },
];

const kifahMapUrl = "https://www.google.com/maps/search/kifah+business+park/@2.0376579,45.3040248,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";
const kifahMapEmbedUrl = "https://www.google.com/maps?q=2.0376579,45.3040248&z=17&output=embed";

export default function Footer1() {
    return (
        <>
            <div className="footer-cta-bg-area container-home1">
                <div className="cta1-section-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="heading1 text-center">
                                    <h2 className="text-anime-style-3">
                                        Join Kifah Business Park Today
                                    </h2>
                                    <div className="space16" />
                                    <p data-aos="fade-up" data-aos-duration={900}>
                                        Whether you are a business owner looking
                                        for growth or a visitor searching for a
                                        complete lifestyle experience, Kifah
                                        Business Park delivers excellence,
                                        convenience, and opportunity in one
                                        destination.
                                    </p>
                                    <div className="space32" />
                                    <div
                                        className="btn-area1"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                    >
                                        <Link href="/contact" className="vl-btn1">
                                            Contact Us Today
                                            <span className="arrow1 ms-2">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                            <span className="arrow2 ms-2">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vl-footer1-section-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-time-area">
                                    <img
                                        src="/assets/img/logo/kifah%20logo-02.png"
                                        alt="Kifah Business Park"
                                        style={{
                                            width: "300px",
                                            height: "auto",
                                            maxHeight: "96px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <div className="space24" />
                                    <p>
                                        Kifah Business Park is a premier business
                                        and lifestyle hub built for shopping,
                                        dining, fitness, entertainment, and
                                        community experiences.
                                    </p>
                                    <div className="space32" />
                                    <ul>
                                        {socialLinks.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Kifah Business Park on ${item.label}`}
                                                >
                                                    <i className={item.icon} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <div className="space30 d-md-none d-block" />
                                <div className="footer-widget-area foot-padding1">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/our-service">
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="space30 d-lg-none d-block" />
                                <div className="footer-widget-area">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            <Link href="mailto:info@kifahbusiness.so">
                                                <i className="fa-regular fa-envelope me-2" />
                                                info@kifahbusiness.so
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={kifahMapUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa-solid fa-location-dot me-2" />
                                                Kifah Business Park
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.kifahbusiness.so"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa-solid fa-globe me-2" />
                                                www.kifahbusiness.so
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="space30 d-lg-none d-block" />
                                <div className="footer-widget-area">
                                    <h3>We Are Here</h3>
                                    <div className="space28" />
                                    <LazyGoogleMap
                                        src={kifahMapEmbedUrl}
                                        title="Kifah Business Park location"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space24" />
                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <p>
                                    &copy; 2026 Kifah Business Park. All Rights
                                    Reserved.
                                </p>
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                        <span> | </span>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space30" />
        </>
    );
}
