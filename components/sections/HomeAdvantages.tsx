const advantages = [
    {
        number: "01",
        title: "Strategic Location",
        description:
            "A convenient and accessible destination positioned to attract businesses, families, and visitors.",
    },
    {
        number: "02",
        title: "Modern Infrastructure",
        description:
            "Professionally developed spaces supported by modern facilities, lighting, security, and maintenance.",
    },
    {
        number: "03",
        title: "Diverse Business Mix",
        description:
            "Shopping, dining, fitness, sports, leisure, and entertainment brought together in one destination.",
    },
    {
        number: "04",
        title: "Strong Brand Visibility",
        description:
            "A high-traffic environment that helps businesses increase exposure, attract customers, and grow.",
    },
];

export default function HomeAdvantages() {
    return (
        <section className="kifah-advantages-section">
            <div className="container">
                <div className="kifah-section-heading">
                    <span className="kifah-eyebrow">Why Choose Kifah</span>

                    <div className="kifah-heading-row">
                        <h2>
                            Built for business growth and memorable experiences
                        </h2>

                        <p>
                            Kifah Business Park creates a professional
                            environment where businesses succeed, visitors
                            connect, and communities enjoy a complete lifestyle
                            destination.
                        </p>
                    </div>
                </div>

                <div className="kifah-advantages-grid">
                    {advantages.map((item) => (
                        <article
                            key={item.number}
                            className="kifah-advantage-card"
                        >
                            <div className="kifah-card-top">
                                <span className="kifah-card-number">
                                    {item.number}
                                </span>

                                <span
                                    className="kifah-card-arrow"
                                    aria-hidden="true"
                                >
                                    &#8599;
                                </span>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
