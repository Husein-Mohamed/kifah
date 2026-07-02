import Image from "next/image";

const heroStats = [
    {
        value: 8,
        suffix: "+",
        label: "Core Business Categories",
        duration: 800,
        offset: "70px",
    },
    {
        value: 6,
        suffix: "+",
        label: "Why Choose Us Points",
        duration: 900,
        offset: "80px",
    },
    {
        value: 6,
        suffix: "+",
        label: "Additional Facilities",
        duration: 1000,
        offset: "90px",
    },
    {
        value: 1,
        suffix: "",
        label: "Complete Destination",
        duration: 1100,
        offset: "100px",
    },
];

export default function Hero2() {
    return (
        <>
            {/*===== HERO AREA STARTS =======*/}
            <section className="kifah-hero">
                <Image
                    src="/assets/img/website-photos-kifah/IMG_6141.jpg"
                    alt="Kifah Business Park"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    className="kifah-hero-image"
                />

                <div className="kifah-hero-overlay" />

                <div className="container kifah-hero-container">
                    <div className="kifah-hero-content">
                        <div className="kifah-title-accent" />

                        <h1 className="text-anime-style-3">
                            KIFAH BUSINESS
                            <br />
                            PARK
                        </h1>

                        <p>
                            A Complete Business &amp; Lifestyle Destination
                        </p>
                    </div>

                    <div className="kifah-stats">
                        {heroStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="kifah-stat-item"
                                data-aos="fade-up"
                                data-aos-duration={stat.duration}
                                data-aos-offset={stat.offset}
                            >
                                <h3>
                                    <span
                                        className="odometer text-nowrap"
                                        data-count={stat.value}
                                    >
                                        {stat.value}
                                    </span>

                                    {stat.suffix}
                                </h3>

                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*===== HERO AREA ENDS =======*/}

            <style>{`
                .kifah-hero {
                    position: relative;
                    min-height: 100vh;
                    overflow: hidden;
                    isolation: isolate;
                    display: flex;
                }

                .kifah-hero-image {
                    object-fit: cover;
                    object-position: center;
                    z-index: 0;
                }

                .kifah-hero-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background:
                        linear-gradient(
                            90deg,
                            rgba(5, 12, 23, 0.84) 0%,
                            rgba(5, 12, 23, 0.62) 38%,
                            rgba(5, 12, 23, 0.18) 72%,
                            rgba(5, 12, 23, 0.25) 100%
                        ),
                        linear-gradient(
                            180deg,
                            rgba(5, 12, 23, 0.12) 45%,
                            rgba(5, 12, 23, 0.88) 100%
                        );
                }

                .kifah-hero-container {
                    position: relative;
                    z-index: 2;
                    min-height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-top: 230px;
                    padding-bottom: 42px;
                }

                .kifah-hero-content {
                    max-width: 720px;
                }

                .kifah-title-accent {
                    width: 58px;
                    height: 5px;
                    margin-bottom: 22px;
                    border-radius: 999px;
                    background: #f05a28;
                }

                .kifah-hero-content h1 {
                    margin: 0;
                    color: #ffffff;
                    font-size: clamp(48px, 6vw, 88px);
                    font-weight: 800;
                    line-height: 1.02;
                    letter-spacing: -0.04em;
                    text-transform: uppercase;
                    text-shadow: 0 5px 24px rgba(0, 0, 0, 0.3);
                }

                .kifah-hero-content > p {
                    position: relative;
                    margin: 24px 0 0;
                    padding-left: 18px;
                    color: rgba(255, 255, 255, 0.94);
                    font-size: clamp(16px, 1.4vw, 20px);
                    font-weight: 500;
                    line-height: 1.6;
                    letter-spacing: 0.01em;
                }

                .kifah-hero-content > p::before {
                    content: "";
                    position: absolute;
                    top: 2px;
                    bottom: 2px;
                    left: 0;
                    width: 3px;
                    border-radius: 999px;
                    background: #f05a28;
                }

                .kifah-stats {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    margin-top: 80px;
                    padding: 26px 0 4px;
                    border-top: 1px solid rgba(255, 255, 255, 0.26);
                }

                .kifah-stat-item {
                    position: relative;
                    min-width: 0;
                    padding: 0 28px;
                }

                .kifah-stat-item:first-child {
                    padding-left: 0;
                }

                .kifah-stat-item:not(:last-child)::after {
                    content: "";
                    position: absolute;
                    top: 5px;
                    right: 0;
                    width: 1px;
                    height: calc(100% - 10px);
                    background: rgba(255, 255, 255, 0.2);
                }

                .kifah-stat-item h3 {
                    margin: 0;
                    color: #ffffff;
                    font-size: clamp(38px, 3.5vw, 56px);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.04em;
                    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
                }

                .kifah-stat-item p {
                    margin: 12px 0 0;
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1.45;
                }

                @media (max-width: 991px) {
                    .kifah-hero-container {
                        padding-top: 190px;
                        padding-bottom: 32px;
                    }

                    .kifah-stats {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 0;
                        margin-top: 70px;
                    }

                    .kifah-stat-item {
                        padding: 24px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
                    }

                    .kifah-stat-item:first-child {
                        padding-left: 24px;
                    }

                    .kifah-stat-item:nth-child(odd) {
                        padding-left: 0;
                    }

                    .kifah-stat-item:nth-child(2)::after {
                        display: none;
                    }

                    .kifah-stat-item:nth-child(3),
                    .kifah-stat-item:nth-child(4) {
                        border-bottom: 0;
                    }
                }

                @media (max-width: 575px) {
                    .kifah-hero {
                        min-height: 820px;
                    }

                    .kifah-hero-container {
                        min-height: 820px;
                        padding-top: 165px;
                        padding-bottom: 24px;
                    }

                    .kifah-hero-content h1 {
                        font-size: 46px;
                    }

                    .kifah-hero-content > p {
                        max-width: 320px;
                        font-size: 15px;
                    }

                    .kifah-stats {
                        margin-top: 55px;
                        padding-top: 12px;
                    }

                    .kifah-stat-item {
                        padding: 20px 14px;
                    }

                    .kifah-stat-item:first-child,
                    .kifah-stat-item:nth-child(odd) {
                        padding-left: 0;
                    }

                    .kifah-stat-item:nth-child(even) {
                        padding-right: 0;
                        padding-left: 18px;
                    }

                    .kifah-stat-item h3 {
                        font-size: 38px;
                    }

                    .kifah-stat-item p {
                        font-size: 13px;
                    }
                }
            `}</style>
        </>
    );
}