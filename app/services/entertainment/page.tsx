import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function EntertainmentPage() {
    return (
        <ServiceDetailTemplate
            title="Entertainment Facilities"
            description="A vibrant entertainment area offering fun, relaxation, and engaging activities for individuals, families, and groups. Designed to create memorable experiences and repeat visits."
            ctaLabel="Explore Entertainment"
            heroImage="/assets/img/optimized/child1-card.jpg"
            galleryImages={[
                "/assets/img/optimized/child1-card.jpg",
                "/assets/img/website-photos-kifah/child2.jpg",
                "/assets/img/website-photos-kifah/child3.jpg",
            ]}
            highlights={["Family-friendly entertainment", "Comfortable lounge environment", "Ideal for groups and events"]}
        />
    );
}
