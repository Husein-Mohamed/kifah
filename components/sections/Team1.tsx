const reasons = [
    {
        title: "Strategic Location",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-01.png",
    },
    {
        title: "High Visitor Traffic",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-02.png",
    },
    {
        title: "Modern Infrastructure",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-03.png",
    },
    {
        title: "Strong Brand Visibility",
        image: "/assets/img/Branding inside Kifaah/Branding in kifah-04.png",
    },
];

export default function Team1() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-[1380px]">
                <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">
                    <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#ef5a2f] sm:text-[13px]">
                        Why Choose Kifah Business Park
                    </span>

                    <h2 className="m-0 text-[30px] font-bold leading-[1.08] text-[#222222] sm:text-[42px] lg:text-[58px]">
                        The Perfect Balance Between Business Success and
                        Customer Satisfaction
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {reasons.map((reason, index) => (
                        <article
                            key={reason.title}
                            className="flex aspect-[1.05/1] min-h-[220px] items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_24px_70px_rgba(16,24,40,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#ef5a2f]/35 hover:shadow-[0_28px_80px_rgba(16,24,40,0.14)] sm:min-h-[260px] lg:min-h-[310px]"
                            aria-label={reason.title}
                            data-aos="fade-up"
                            data-aos-duration={800 + index * 100}
                            data-aos-offset={`${30 + index * 5}px`}
                        >
                            <img
                                src={reason.image}
                                alt={reason.title}
                                className="h-full max-h-[170px] w-full max-w-[260px] object-contain sm:max-h-[210px] lg:max-h-[240px]"
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
