import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        title: "Entertainment Facilities",
        href: "/services/entertainment",
        description: "Fun & Relaxation",
        image: "/assets/img/website-photos-kifah/child1.jpg",
    },
    {
        title: "Fitness & Gym",
        href: "/services/gym",
        description: "Modern Equipment",
        image: "/assets/img/website-photos-kifah/gym.jpg",
    },
    {
        title: "Bowling",
        href: "/services/bowling",
        description: "Fun & Competition",
        image: "/assets/img/photos/bowling.png",
    },
    {
        title: "Restaurants & Cafes",
        href: "/services/restaurants-cafes",
        description: "Diverse Cuisine",
        image: "/assets/img/website-photos-kifah/cafe1.jpg",
    },
    {
        title: "VIP Restaurant",
        href: "/services/vip-restaurant",
        description: "Privacy & Premium Service",
        image: "/assets/img/website-photos-kifah/rooftop1.jpg",
    },
    {
        title: "Swimming Pool",
        href: "/services/swimming-pool",
        description: "Relaxation & Wellness",
        image: "/assets/img/website-photos-kifah/swimin1.jpg",
    },
];

export default function Category1() {
    return (
        <>
            <div className="space30" />
            <div className="category1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="heading1 text-center space-margin60">
                                <h5>Business Categories</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">
                                    Explore Our Business Categories
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {categories.map((category, index) => (
                            <div
                                key={category.href}
                                className="col-lg-4 col-md-6"
                                data-aos="zoom-in-up"
                                data-aos-duration={300 + index * 50}
                            >
                                <div className="category-boxarea">
                                    <div className="img1">
                                        <Image
                                            loading="lazy"
                                            src={category.image}
                                            alt={category.title}
                                            width={120}
                                            height={82}
                                            sizes="120px"
                                            quality={55}
                                        />
                                    </div>

                                    <div className="text">
                                        <Link href={category.href}>
                                            {category.title}
                                        </Link>
                                        <div className="space16" />
                                        <p>{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
