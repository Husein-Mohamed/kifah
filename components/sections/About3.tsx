import Link from "next/link";

export default function About3() {
    return (
        <>
            {/*===== ABOUT AREA STARTS =======*/}
            <div className="about3-section-area sp1 kifah-about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-images-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="img2 image-anime reveal">
                                            <img loading="lazy" decoding="async" src="/assets/img/website-photos-kifah/IMG_6141.jpg" alt="Kifah Business Park exterior" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="space100" />
                                        <div className="img1 image-anime reveal">
                                            <img loading="lazy" decoding="async" src="/assets/img/website-photos-kifah/IMG_6141.jpg" alt="Modern business park building" />
                                        </div>
                                    </div>
                                </div>
                                <div className="author-img">
                                    <img loading="lazy" decoding="async" src="/assets/img/elements/elements3.png" alt="" className="elements10" />
                                    <div className="arrow-btnarea">
                                        <Link href="/about-us" aria-label="Learn more about Kifah Business Park">
                                            <div className="content keyframe5">
                                                <h6 className="circle rotateme">
                                                    <span style={{ transform: "rotate(0deg)" }}>K</span>
                                                    <span style={{ transform: "rotate(17deg)" }}>i</span>
                                                    <span style={{ transform: "rotate(34deg)" }}>f</span>
                                                    <span style={{ transform: "rotate(51deg)" }}>a</span>
                                                    <span style={{ transform: "rotate(68deg)" }}>h</span>
                                                    <span style={{ transform: "rotate(85deg)" }}> </span>
                                                    <span style={{ transform: "rotate(102deg)" }}>B</span>
                                                    <span style={{ transform: "rotate(119deg)" }}>u</span>
                                                    <span style={{ transform: "rotate(136deg)" }}>s</span>
                                                    <span style={{ transform: "rotate(153deg)" }}>i</span>
                                                    <span style={{ transform: "rotate(170deg)" }}>n</span>
                                                    <span style={{ transform: "rotate(187deg)" }}>e</span>
                                                    <span style={{ transform: "rotate(204deg)" }}>s</span>
                                                    <span style={{ transform: "rotate(221deg)" }}>s</span>
                                                    <span style={{ transform: "rotate(238deg)" }}> </span>
                                                    <span style={{ transform: "rotate(255deg)" }}>P</span>
                                                    <span style={{ transform: "rotate(272deg)" }}>a</span>
                                                    <span style={{ transform: "rotate(289deg)" }}>r</span>
                                                    <span style={{ transform: "rotate(306deg)" }}>k</span>
                                                </h6>
                                            </div>
                                            <img loading="lazy" decoding="async" src="/assets/img/icons/arrow1.svg" alt="" className="arrow1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="about-heading heading2">
                                <h5 data-aos="fade-left" data-aos-duration={800}>
                                    About Kifah Business Park
                                </h5>
                                <div className="space26" />
                                <h2 className="text-anime-style-3">A Premier Business and Lifestyle Destination</h2>
                                <div className="space18" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Kifah Business Park brings retail, dining, leisure, wellness, and everyday services into one well-managed destination. Designed for high visibility and consistent customer flow, it gives businesses the environment to grow while giving visitors a convenient place to meet, shop, dine, and connect.
                                </p>
                                <div className="kifah-about-highlights" data-aos="fade-left" data-aos-duration={1000}>
                                    <div className="kifah-about-highlight">
                                        <span><i className="fa-solid fa-store" /></span>
                                        <div>
                                            <strong>Multi-business ecosystem</strong>
                                            <p>Complementary brands operating side by side.</p>
                                        </div>
                                    </div>
                                    <div className="kifah-about-highlight">
                                        <span><i className="fa-solid fa-chart-line" /></span>
                                        <div>
                                            <strong>Growth-focused location</strong>
                                            <p>Built to support visibility, access, and foot traffic.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space32" />
                                <div className="btn-area1 kifah-about-actions" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link href="/contact" className="vl-btn1">
                                        Contact Us
                                        <span className="arrow1 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                        <span className="arrow2 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <div className="kifah-about-note">
                                        <span>One destination</span>
                                        <p>Business, lifestyle, and community experiences in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== ABOUT AREA ENDS =======*/}
        </>
    );
}