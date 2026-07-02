import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function SportsShopPage() {
    return (
        <ServiceDetailTemplate
            title="Sports Shop"
            description="A specialized sports retail store offering quality sports equipment, apparel, and accessories for athletes and fitness enthusiasts."
            ctaLabel="Explore Sports Shop"
            heroImage="/assets/img/optimized/miniza-card.jpg"
            galleryImages={[
                "/assets/img/optimized/miniza-card.jpg",
                "/assets/img/optimized/gym-card.jpg",
                "/assets/img/website-photos-kifah/IMG_6143.jpg",
            ]}
            highlights={["Quality equipment", "Sportswear and accessories", "For athletes and enthusiasts"]}
        />
    );
}
