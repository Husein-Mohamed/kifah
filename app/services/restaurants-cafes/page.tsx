import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";

const venues = [
    {
        name: "Olive Garden Cafe",
        type: "Cafe",
        cuisine: "Coffee, Pastries, Light Meals",
        timing: "7:00 AM - 11:00 PM",
        image: "/assets/img/website-photos-kifah/cafe1.jpg",
        description: "A relaxed, modern cafe ideal for breakfast meetings, remote work sessions, and evening coffee.",
    },
    {
        name: "Spice Route Kitchen",
        type: "Restaurant",
        cuisine: "Local and International Fusion",
        timing: "12:00 PM - 12:00 AM",
        image: "/assets/img/website-photos-kifah/cafe1.jpg",
        description: "An all-day dining destination offering a premium mix of regional flavors and global signatures.",
    },
    {
        name: "Skyline Rooftop Dining",
        type: "Rooftop",
        cuisine: "Grill and Signature Mocktails",
        timing: "5:00 PM - 1:00 AM",
        image: "/assets/img/website-photos-kifah/rooftop1.jpg",
        description: "A sunset-to-midnight rooftop venue with panoramic ambiance, perfect for celebrations.",
    },
    {
        name: "Royal VIP Lounge",
        type: "VIP Restaurant",
        cuisine: "Curated Fine Dining Menu",
        timing: "By Reservation",
        image: "/assets/img/website-photos-kifah/IMG_6152.jpg",
        description: "Private luxury dining for executive meetings, high-profile guests, and exclusive events.",
    },
    {
        name: "Family Table Hub",
        type: "Family Restaurant",
        cuisine: "Family Platters and Kids Menu",
        timing: "11:00 AM - 11:30 PM",
        image: "/assets/img/website-photos-kifah/chiking1.jpg",
        description: "Comfort-focused family dining with spacious seating and a menu designed for all age groups.",
    },
];

export default function RestaurantsCafesPage() {
    return (
        <Layout>
            <InnerHeader title="Restaurants & Cafes" currentpage="Restaurants & Cafes" />
            <div className="space30" />

            <section className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration={900}>
                        <div className="heading1">
                            <h5>Dining Destination</h5>
                            <div className="space16" />
                            <h2 className="text-anime-style-3">Five Unique Dining Experiences Under One Roof</h2>
                            <div className="space20" />
                            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#2a2829" }}>
                                Kifah Business Park features five different restaurants and cafes designed for casual dining,
                                business meetings, family gatherings, and premium VIP experiences. Each venue has its own atmosphere,
                                cuisine identity, and service style.
                            </p>
                            <div className="space30" />
                            <div className="btn-area1">
                                <Link href="/contact" className="vl-btn1">
                                    Reserve Your Table
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
                    <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration={900}>
                        <div
                            className="kifah-restaurants-hero"
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 18px 55px rgba(0,0,0,0.2)",
                                position: "relative",
                            }}
                        >
                            <img
                                src="/assets/img/website-photos-kifah/cafe1.jpg"
                                alt="Restaurants and cafes"
                                style={{ width: "100%", height: "430px", objectFit: "cover", display: "block" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    left: "20px",
                                    bottom: "20px",
                                    background: "rgba(0,0,0,0.6)",
                                    color: "#fff",
                                    borderRadius: "12px",
                                    padding: "12px 16px",
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <strong>5 Dining Venues</strong> | <span>1 Destination</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="space60" />

            <section className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="heading1 text-center space-margin60">
                            <h5>Our Venues</h5>
                            <div className="space16" />
                            <h2 className="text-anime-style-3">Explore All 5 Restaurants & Cafes</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {venues.map((venue, index) => (
                        <div className="col-lg-6 mb-4" key={venue.name} data-aos="fade-up" data-aos-duration={900} data-aos-delay={index * 80}>
                            <div
                                style={{
                                    border: "1px solid #ececec",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    background: "#fff",
                                    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                                    transition: "all 0.35s ease",
                                    height: "100%",
                                }}
                            >
                                <div style={{ position: "relative" }}>
                                    <img
                                        src={venue.image}
                                        alt={venue.name}
                                        style={{
                                            width: "100%",
                                            height: "260px",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "14px",
                                            left: "14px",
                                            background: "linear-gradient(90deg, #fd5e1d 0%, #fd5e1d 100%)",
                                            color: "#fff",
                                            fontWeight: 600,
                                            fontSize: "12px",
                                            padding: "6px 10px",
                                            borderRadius: "999px",
                                            letterSpacing: "0.3px",
                                        }}
                                    >
                                        {venue.type}
                                    </span>
                                </div>
                                <div style={{ padding: "22px" }}>
                                    <h4 style={{ marginBottom: "10px" }}>{venue.name}</h4>
                                    <p style={{ color: "#2a2829", marginBottom: "12px" }}>{venue.description}</p>
                                    <p style={{ marginBottom: "6px" }}>
                                        <strong>Cuisine:</strong> {venue.cuisine}
                                    </p>
                                    <p style={{ marginBottom: 0 }}>
                                        <strong>Timings:</strong> {venue.timing}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="space40" />

            <section className="container">
                <div
                    className="row kifah-restaurants-cta"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        background: "linear-gradient(120deg, #2a2829 0%, #2a2829 45%, #fd5e1d 120%)",
                    }}
                >
                    <div className="col-lg-8 p-4 p-lg-5" data-aos="fade-right" data-aos-duration={900}>
                        <h3 style={{ color: "#fff", marginBottom: "14px" }}>Plan Dining for Family, Friends, or Business</h3>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px", lineHeight: "1.8", marginBottom: 0 }}>
                            From early-morning coffee to premium late-night dining, Kifah Business Park gives you a full food and
                            beverage journey in one destination. Tell us your preferred venue and we will help you plan the best experience.
                        </p>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center p-4 p-lg-5" data-aos="zoom-in" data-aos-duration={900}>
                        <div className="btn-area1">
                            <Link href="/contact" className="vl-btn1">
                                Contact Dining Team
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
            </section>

            <div className="space60" />
        </Layout>
    );
}
