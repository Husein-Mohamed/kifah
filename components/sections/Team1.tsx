const reasons = [
    {
        icon: "fa-solid fa-location-dot",
        title: "Strategic Location",
        description: "Prime positioning for growth and accessibility.",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "High Visitor Traffic",
        description: "Consistent customer flow for businesses.",
    },
    {
        icon: "fa-solid fa-building-shield",
        title: "Modern Infrastructure",
        description: "Well-managed, high-quality environment.",
    },
    {
        icon: "fa-solid fa-bullhorn",
        title: "Strong Brand Visibility",
        description: "Family and lifestyle-focused destination.",
    },
];

export default function Team1() {
    return (
        <section className="kifah-why-icons-section">
            <div className="container">
                <div className="kifah-why-icons-heading">
                    <span className="kifah-eyebrow">
                        Why Choose Kifah Business Park
                    </span>

                    <h2>
                        The Perfect Balance Between Business Success and
                        Customer Satisfaction
                    </h2>
                </div>

                <div className="kifah-why-icons-grid">
                    {reasons.map((reason, index) => (
                        <article
                            key={reason.title}
                            className="kifah-why-icon-card"
                            data-aos="fade-up"
                            data-aos-duration={800 + index * 100}
                            data-aos-offset={`${30 + index * 5}px`}
                        >
                            <div className="kifah-why-icon">
                                <i className={reason.icon} aria-hidden="true" />
                            </div>

                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
