import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";

interface ServiceDetailTemplateProps {
    title: string;
    description: string;
    ctaLabel: string;
    heroImage: string;
    galleryImages: string[];
    highlights: string[];
}

export default function ServiceDetailTemplate({
    title,
    description,
    ctaLabel,
    heroImage,
    galleryImages,
    highlights,
}: ServiceDetailTemplateProps) {
    return (
        <Layout>
            <InnerHeader title={title} currentpage={title} />
            <div className="space30" />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="heading1">
                            <h2 className="text-anime-style-3">{title}</h2>
                            <div className="space20" />
                            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>{description}</p>
                            <div className="space30" />
                            <div className="btn-area1">
                                <Link href="/contact" className="vl-btn1">
                                    {ctaLabel}
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
                    <div className="col-lg-6">
                        <div
                            style={{
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                            }}
                        >
                            <img
                                src={heroImage}
                                alt={title}
                                loading="eager"
                                decoding="async"
                                style={{
                                    width: "100%",
                                    height: "380px",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space60" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="heading1 text-center space-margin60">
                            <h5>Key Highlights</h5>
                            <div className="space16" />
                            <h2 className="text-anime-style-3">What You Can Expect</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {highlights.map((highlight) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={highlight}>
                            <div
                                style={{
                                    padding: "28px",
                                    borderRadius: "14px",
                                    background: "#fff",
                                    border: "1px solid #ececec",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                                    height: "100%",
                                }}
                            >
                                <h5>{highlight}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space40" />

            <div className="container">
                <div className="row">
                    {galleryImages.slice(0, 3).map((image) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={image}>
                            <div
                                style={{
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                                }}
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "100%",
                                        height: "280px",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space60" />
        </Layout>
    );
}
