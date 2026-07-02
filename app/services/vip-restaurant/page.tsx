import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function VipRestaurantPage() {
    return (
        <ServiceDetailTemplate
            title="VIP Restaurant"
            description="An exclusive VIP dining space designed for privacy, luxury, and premium service, perfect for high-end clients, business meetings, and private events."
            ctaLabel="Book VIP Experience"
            heroImage="/assets/img/optimized/rooftop-card.jpg"
            galleryImages={[
                "/assets/img/optimized/rooftop-card.jpg",
                "/assets/img/optimized/cafe-card.jpg",
                "/assets/img/website-photos-kifah/IMG_6152.jpg",
            ]}
            highlights={["Private luxury setting", "Premium dining service", "Ideal for executive meetings"]}
        />
    );
}
