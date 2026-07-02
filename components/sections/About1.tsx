import Image from "next/image";
import Link from "next/link";

const aboutImages = {
    main: "/assets/img/optimized/kifah-hero.jpg",
    secondary: "/assets/img/optimized/kifah-contact.jpg",
    accent: "/assets/img/optimized/kifah-building.jpg",
};

const highlights = [
    {
        icon: "fa-solid fa-store",
        title: "Multi-business destination",
        description: "Retail, dining, fitness, leisure, and services together.",
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Built for visibility",
        description: "A high-traffic environment that supports business growth.",
    },
    {
        icon: "fa-solid fa-people-roof",
        title: "Family-friendly experience",
        description: "Comfortable spaces for visitors, families, and customers.",
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "Managed with care",
        description: "Modern facilities, security, lighting, and maintenance.",
    },
];

export default function About1() {
    return (
        <section className="kifah-about1-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="kifah-about1-images">
                            <div className="kifah-about1-main-img">
                                <Image
                                    src={aboutImages.main}
                                    alt="Kifah Business Park exterior"
                                    fill
                                    priority
                                    sizes="(max-width: 991px) 100vw, 50vw"
                                    quality={75}
                                />
                            </div>

                            <div className="kifah-about1-secondary-img">
                                <Image
                                    src={aboutImages.secondary}
                                    alt="Kifah Business Park destination"
                                    fill
                                    sizes="280px"
                                    quality={70}
                                />
                            </div>

                            <div className="kifah-about1-accent-img">
                                <Image
                                    src={aboutImages.accent}
                                    alt="Kifah Business Park entrance"
                                    fill
                                    sizes="190px"
                                    quality={65}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="kifah-about1-content">
                            <span className="kifah-eyebrow">
                                About Kifah Business Park
                            </span>

                            <h2>
                                Where business, lifestyle, and community come
                                together
                            </h2>

                            <p>
                                Kifah Business Park is a modern multi-business
                                destination that brings shopping, dining,
                                fitness, entertainment, and leisure together in
                                one vibrant location.
                            </p>

                            <p>
                                More than a commercial space, it is a place
                                where brands grow, visitors enjoy memorable
                                experiences, and communities connect.
                            </p>

                            <div className="kifah-about1-highlights">
                                {highlights.map((item) => (
                                    <div
                                        key={item.title}
                                        className="kifah-about1-highlight"
                                    >
                                        <span>
                                            <i
                                                className={item.icon}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="kifah-about1-actions">
                                <Link href="/contact" className="vl-btn1">
                                    Contact Us
                                    <span className="arrow1 ms-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                    <span className="arrow2 ms-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>

                                <Link
                                    href="/our-service"
                                    className="kifah-about1-link"
                                >
                                    Explore Our Services
                                    <i
                                        className="fa-solid fa-arrow-right"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
