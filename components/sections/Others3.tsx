const missionVision = [
    {
        icon: "fa-solid fa-eye",
        title: "Our Vision",
        description:
            "To become a leading business and lifestyle destination that combines innovation, comfort, and entertainment under one roof.",
    },
    {
        icon: "fa-solid fa-bullseye",
        title: "Our Mission",
        description:
            "To provide a high-quality, well-managed environment where businesses can succeed and visitors can enjoy a complete lifestyle experience.",
    },
];

export default function Others3() {
    return (
        <>
            <div className="space30" />
            <section className="kifah-mission-section">
                <div className="container">
                    <div className="kifah-mission-heading">
                        <span className="kifah-eyebrow">
                            Mission &amp; Vision
                        </span>

                        <h2>Our Vision &amp; Mission</h2>

                        <p>
                            Kifah Business Park is developed with a modern
                            vision to bring shopping, dining, fitness, sports,
                            and entertainment under one roof.
                        </p>
                    </div>

                    <div className="kifah-mission-grid">
                        {missionVision.map((item) => (
                            <article
                                key={item.title}
                                className="kifah-mission-card"
                            >
                                <div className="kifah-mission-icon">
                                    <i
                                        className={item.icon}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <div className="space30" />
        </>
    );
}
