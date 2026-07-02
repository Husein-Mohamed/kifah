import Link from "next/link";

export default function Hero1() {
    return (
        <>
            <div className="hero1-section-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-heading-content heading1">
                                <h1 className="text-anime-style-3">
                                    KIFAH BUSINESS PARK <br className="d-lg-block d-none" /> A Complete Business & Lifestyle Destination
                                </h1>
                                <div className="space20" />
                                <p className="text-anime-style-1">
                                    A premier business and lifestyle hub designed to host a wide <br className="d-lg-block d-none" /> range of commercial, entertainment, and leisure activities in one <br className="d-lg-block d-none" /> vibrant destination. Where experiences are created, brands grow, and communities connect.
                                </p>
                                <div className="space32" />
                                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1000}>
                                    <Link href="/contact" className="vl-btn1">
                                        Contact Us
                                        <span className="arrow1 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                        <span className="arrow2 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="space80 d-lg-block d-none" />
                                <div className="space40 d-lg-none d-block" />
                                <div className="counter-boxarea">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-6" data-aos="fade-up" data-aos-duration={300}>
                                            <div className="counter-box">
                                                <h1>
                                                    <span className="odometer text-nowrap" data-count={50} />+
                                                </h1>
                                                <div className="space10" />
                                                <p>Business Units</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6" data-aos="fade-up" data-aos-duration={500}>
                                            <div className="counter-box">
                                                <h1>
                                                    <span className="odometer text-nowrap" data-count={8} />+
                                                </h1>
                                                <div className="space10" />
                                                <p>Business Categories</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up" data-aos-duration={700}>
                                            <div className="space30 d-md-none d-block" />
                                            <div className="counter-box">
                                                <h1>
                                                    <span className="odometer text-nowrap" data-count={1000} />+
                                                </h1>
                                                <div className="space10" />
                                                <p>Daily Visitors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-images-area image-anime">
                                <img src="/assets/img/photos/IMG_1298.jpg" alt="Kifah Branding" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space20" />
        </>
    );
}
