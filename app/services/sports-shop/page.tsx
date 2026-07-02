import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function SportsShopPage() {
    return (
        <ServiceDetailTemplate
            title="Sports Shop"
            description="A specialized sports retail store offering quality sports equipment, apparel, and accessories for athletes and fitness enthusiasts."
            ctaLabel="Explore Sports Shop"
            heroImage="/assets/img/website-photos-kifah/miniza1.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/miniza1.jpg",
                "/assets/img/website-photos-kifah/gym.jpg",
                "/assets/img/website-photos-kifah/IMG_6143.jpg",
            ]}
            highlights={["Quality equipment", "Sportswear and accessories", "For athletes and enthusiasts"]}
        />
    );
}
