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
                "/assets/img/optimized/miniza-card.jpg",
                "/assets/img/optimized/child1-card.jpg",
            ]}
            highlights={["Modern bowling lanes", "Friendly competition", "Great for groups and events"]}
        />
    );
}
