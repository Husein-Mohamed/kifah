import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function EntertainmentPage() {
    return (
        <ServiceDetailTemplate
            title="Entertainment Facilities"
            description="A vibrant entertainment area offering fun, relaxation, and engaging activities for individuals, families, and groups. Designed to create memorable experiences and repeat visits."
            ctaLabel="Explore Entertainment"
            heroImage="/assets/img/website-photos-kifah/child1.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/child1.jpg",
                "/assets/img/website-photos-kifah/child2.jpg",
                "/assets/img/website-photos-kifah/child3.jpg",
            ]}
            highlights={["Family-friendly entertainment", "Comfortable lounge environment", "Ideal for groups and events"]}
        />
    );
}
