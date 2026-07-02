import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function RooftopRestaurantPage() {
    return (
        <ServiceDetailTemplate
            title="Rooftop Restaurant"
            description="An elegant rooftop restaurant offering a unique dining experience with panoramic views, ideal for evenings, celebrations, and special occasions."
            ctaLabel="Book Rooftop Dining"
            heroImage="/assets/img/website-photos-kifah/rooftop1.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/rooftop1.jpg",
                "/assets/img/website-photos-kifah/cafe1.jpg",
                "/assets/img/website-photos-kifah/kifah1.jpg",
            ]}
            highlights={["Panoramic rooftop views", "Elegant evening ambiance", "Great for celebrations"]}
        />
    );
}
