import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function SwimmingPoolPage() {
    return (
        <ServiceDetailTemplate
            title="Swimming Pool"
            description="A well-maintained swimming pool offering relaxation, recreation, and wellness for all ages in a safe and enjoyable environment."
            ctaLabel="Visit Pool"
            heroImage="/assets/img/website-photos-kifah/swimin1.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/swimin1.jpg",
                "/assets/img/website-photos-kifah/swimin2.jpg",
                "/assets/img/website-photos-kifah/swimin3.jpg",
            ]}
            highlights={["Safe for all ages", "Relaxation and wellness", "Clean and managed facility"]}
        />
    );
}
