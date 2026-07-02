const reasons = [
    {
        icon: "fa-solid fa-location-dot",
        title: "Strategic Location",
        description: "Prime positioning for growth and accessibility.",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-01.png",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "High Visitor Traffic",
        description: "Consistent customer flow for businesses.",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-02.png",
    },
    {
        icon: "fa-solid fa-building-shield",
        title: "Modern Infrastructure",
        description: "Well-managed, high-quality environment.",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-03.png",
    },
    {
        icon: "fa-solid fa-bullhorn",
        title: "Strong Brand Visibility",
        description: "Family and lifestyle-focused destination.",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-04.png",
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
                            style={{ backgroundImage: `url("${reason.image}")` }}
                            aria-label={reason.title}
                            data-aos="fade-up"
                            data-aos-duration={800 + index * 100}
                            data-aos-offset={`${30 + index * 5}px`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
