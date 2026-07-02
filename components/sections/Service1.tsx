import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Entertainment Facilities",
        href: "/services/entertainment",
        text: "Fun, relaxation, and engaging activities for all ages.",
        image: "/assets/img/website-photos-kifah/child1.jpg",
    },
    {
        title: "Fitness & Gym",
        href: "/services/gym",
        text: "Modern equipment and professional fitness environment.",
        image: "/assets/img/website-photos-kifah/gym.jpg",
    },
    {
        title: "Bowling",
        href: "/services/bowling",
        text: "Friendly competition and social gaming experience.",
        image: "/assets/img/photos/bowling.png",
    },
    {
        title: "Swimming Pool",
        href: "/services/swimming-pool",
        text: "Relaxation and recreation in a safe, clean setting.",
        image: "/assets/img/website-photos-kifah/swimin1.jpg",
    },
    {
        title: "Restaurants & Cafes",
        href: "/services/restaurants-cafes",
        text: "Local and international dining for every occasion.",
        image: "/assets/img/website-photos-kifah/cafe1.jpg",
    },
    {
        title: "Rooftop Restaurant",
        href: "/services/rooftop-restaurant",
        text: "Elegant dining with panoramic views.",
        image: "/assets/img/website-photos-kifah/rooftop1.jpg",
    },
    {
        title: "VIP Restaurant",
        href: "/services/vip-restaurant",
        text: "Private and premium dining experience.",
        image: "/assets/img/website-photos-kifah/rooftop1.jpg",
    },
    {
        title: "Sports Shop",
        href: "/services/sports-shop",
        text: "Quality sports gear, apparel, and accessories.",
        image: "/assets/img/website-photos-kifah/miniza1.jpg",
    },
];

export default function Service1() {
    return (
        <>
            <div className="service1-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading1 text-center space-margin60">
                                <h2>Our Services at Kifah Business Park</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {services.map((service) => (
                            <div
                                className="col-lg-3 col-md-6 mb-4"
                                key={service.title}
                            >
                                <div className="service-single-boxarea">
                                    <div className="img1 kifah-service-img">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                                            quality={65}
                                        />
                                    </div>

                                    <div className="content-area">
                                        <div className="content">
                                            <Link href={service.href}>
                                                {service.title}
                                            </Link>
                                            <div className="space16" />
                                            <p>{service.text}</p>
                                        </div>
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
