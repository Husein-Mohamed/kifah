import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function RooftopRestaurantPage() {
    return (
        <ServiceDetailTemplate
            title="Rooftop Restaurant"
            description="An elegant rooftop restaurant offering a unique dining experience with panoramic views, ideal for evenings, celebrations, and special occasions."
            ctaLabel="Book Rooftop Dining"
            heroImage="/assets/img/optimized/rooftop-card.jpg"
            galleryImages={[
                "/assets/img/optimized/rooftop-card.jpg",
                "/assets/img/optimized/cafe-card.jpg",
                "/assets/img/optimized/kifah-contact.jpg",
            ]}
            highlights={["Panoramic rooftop views", "Elegant evening ambiance", "Great for celebrations"]}
        />
    );
}
