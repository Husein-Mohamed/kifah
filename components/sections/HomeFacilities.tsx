const facilities = [
    "Comfortable seating and lounge areas",
    "Event and promotional spaces",
    "Children-friendly zones",
    "Spacious parking facilities",
    "24/7 security and maintenance",
    "Modern lighting and premium ambience",
];

export default function HomeFacilities() {
    return (
        <section className="kifah-facilities-section">
            <div className="container">
                <div className="kifah-facilities-layout">
                    <div className="kifah-facilities-content">
                        <span className="kifah-eyebrow">
                            Additional Facilities
                        </span>

                        <h2>
                            Everything visitors and businesses need in one
                            place
                        </h2>

                        <p>
                            Every part of the business park is designed to
                            provide comfort, convenience, safety, and a premium
                            customer experience.
                        </p>
                    </div>

                    <div className="kifah-facilities-list">
                        {facilities.map((facility, index) => (
                            <div
                                key={facility}
                                className="kifah-facility-item"
                            >
                                <span className="kifah-facility-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span>{facility}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
