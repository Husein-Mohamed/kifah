import Image from "next/image";
import Link from "next/link";

const chooseItems = [
    {
        title: "Strategic Location",
        description:
            "Prime location designed to attract visitors and support business growth.",
    },
    {
        title: "High Visitor Traffic & Modern Infrastructure",
        description:
            "A well-managed and modern setup that creates strong business opportunities.",
    },
    {
        title: "Diverse Mix & Strong Brand Visibility",
        description:
            "Multiple business categories in one destination with excellent visibility for every brand.",
    },
];

export default function Others4() {
    return (
        <>
            <section className="choose1 kifah-choose-image-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="heading1 text-center space-margin60">
                                <h5>Why Choose Us</h5>
                                <div className="space16" />
                                <h2>Why Choose Kifah Business Park</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-heading heading1">
                                <h2>Built for Growth and Experience</h2>
                                <div className="space16" />
                                <p>
                                    Kifah Business Park offers the perfect
                                    balance between business success and
                                    customer satisfaction in a family and
                                    lifestyle-focused environment.
                                </p>

                                <div className="space24" />

                                {chooseItems.map((item) => (
                                    <div
                                        key={item.title}
                                        className="kifah-choose-box"
                                    >
                                        <span>
                                            <i
                                                className="fa-solid fa-check"
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <div>
                                            <Link href="/our-service">
                                                {item.title}
                                            </Link>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="space32" />
                                <div className="btn-area1">
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
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="kifah-choose-images">
                                <div className="kifah-choose-main-img">
                                    <Image
                                        src="/assets/img/optimized/kifah-contact.jpg"
                                        alt="Kifah Business Park exterior"
                                        fill
                                        sizes="(max-width: 991px) 100vw, 50vw"
                                        quality={75}
                                    />
                                </div>

                                <div className="kifah-choose-small-img">
                                    <Image
                                        src="/assets/img/website-photos-kifah/IMG_6143.jpg"
                                        alt="Kifah Business Park building"
                                        fill
                                        sizes="320px"
                                        quality={70}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="space30" />
        </>
    );
}
