import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function BowlingPage() {
    return (
        <ServiceDetailTemplate
            title="Bowling"
            description="A stylish bowling area designed for social interaction, leisure, and friendly competition in a comfortable setting."
            ctaLabel="Book a Lane"
            heroImage="/assets/img/photos/bowling.png"
            galleryImages={[
                "/assets/img/photos/bowling.png",
                "/assets/img/website-photos-kifah/miniza1.jpg",
                "/assets/img/website-photos-kifah/child1.jpg",
            ]}
            highlights={["Modern bowling lanes", "Friendly competition", "Great for groups and events"]}
        />
    );
}
