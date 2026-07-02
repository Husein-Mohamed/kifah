import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function PoolingPage() {
    return (
        <ServiceDetailTemplate
            title="Pooling & Indoor Games"
            description="Stylish pooling and indoor games areas designed for social interaction, leisure, and friendly competition in a comfortable setting."
            ctaLabel="Book a Game"
            heroImage="/assets/img/website-photos-kifah/miniza1.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/miniza1.jpg",
                "/assets/img/photos/bowling.png",
                "/assets/img/website-photos-kifah/child2.jpg",
            ]}
            highlights={["Premium pool tables", "Indoor leisure experience", "Comfortable social space"]}
        />
    );
}
