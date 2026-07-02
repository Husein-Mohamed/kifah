import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";

export default function GymPage() {
    return (
        <ServiceDetailTemplate
            title="Fitness & Gym"
            description="Modern fitness centers equipped with advanced machines and professional environments that promote healthy living, energy, and well-being."
            ctaLabel="Join Our Gym"
            heroImage="/assets/img/website-photos-kifah/gym.jpg"
            galleryImages={[
                "/assets/img/website-photos-kifah/gym.jpg",
                "/assets/img/website-photos-kifah/gym2.jpg",
                "/assets/img/website-photos-kifah/IMG_6143.jpg",
            ]}
            highlights={["Advanced machines", "Professional training environment", "Health and wellness focused"]}
        />
    );
}
