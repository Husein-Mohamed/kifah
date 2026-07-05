import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    display: "swap",
});

const heroStats = [
    {
        value: 8,
        suffix: "+",
        label: "Core Business Categories",
        image: "/assets/img/kifah-services/kifah services-01.png",
        duration: 800,
        offset: "70px",
    },
    {
        value: 6,
        suffix: "+",
        label: "Why Choose Us Points",
        image: "/assets/img/kifah-services/kifah services-02.png",
        duration: 900,
        offset: "80px",
    },
    {
        value: 6,
        suffix: "+",
        label: "Additional Facilities",
        image: "/assets/img/kifah-services/kifah services-03.png",
        duration: 1000,
        offset: "90px",
    },
];

export default function Hero2() {
    return (
        <>
            {/*===== HERO AREA STARTS =======*/}
            <section className="relative isolate flex min-h-screen overflow-hidden max-[575px]:min-h-[1050px]">
                <Image
                    src="/assets/img/optimized/kifah-hero.jpg"
                    alt="Kifah Business Park"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    className="z-0 object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,12,23,0.84)_0%,rgba(5,12,23,0.62)_38%,rgba(5,12,23,0.18)_72%,rgba(5,12,23,0.25)_100%),linear-gradient(180deg,rgba(5,12,23,0.12)_45%,rgba(5,12,23,0.88)_100%)]" />

                <div className="relative z-[2] mx-auto flex min-h-screen w-full max-w-[1280px] flex-col justify-between px-4 pb-[42px] pt-[230px] sm:px-6 lg:px-8 max-[991px]:pb-8 max-[991px]:pt-[190px] max-[575px]:min-h-[1050px] max-[575px]:pb-6 max-[575px]:pt-[155px]">
                    <div className={`${montserrat.className} max-w-[760px]`}>
                        <div className="mb-[22px] h-[5px] w-[58px] rounded-full bg-[#ff5a1f]" />

                        <h1 className="text-anime-style-3 m-0 text-[clamp(48px,6vw,88px)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-white [text-shadow:0_6px_28px_rgba(0,0,0,0.35)] max-[575px]:text-[42px] max-[575px]:leading-[1.02] max-[575px]:tracking-[-0.03em]">
                            KIFAH BUSINESS
                            <br />
                            PARK
                        </h1>

                        <p className="relative mb-0 mt-7 max-w-[660px] pl-[20px] text-[clamp(16px,1.35vw,20px)] font-semibold leading-[1.55] tracking-[-0.015em] text-white/[0.96] [text-shadow:0_2px_12px_rgba(0,0,0,0.28)] before:absolute before:bottom-[2px] before:left-0 before:top-[2px] before:w-[3px] before:rounded-full before:bg-[#ff5a1f] before:content-[''] max-[575px]:mt-5 max-[575px]:max-w-[340px] max-[575px]:text-[15px] max-[575px]:leading-[1.6]">
                            A Complete Business &amp; Lifestyle Destination
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-3 overflow-hidden rounded-[18px] border border-[#ff5a1f]/40 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm max-[991px]:mt-[70px] max-[991px]:grid-cols-2 max-[575px]:mt-[55px] max-[575px]:grid-cols-1 max-[575px]:rounded-[14px]">
                        {heroStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="relative flex min-h-[180px] min-w-0 flex-col justify-center bg-cover bg-center bg-no-repeat p-7 after:absolute after:right-0 after:top-[5px] after:h-[calc(100%-10px)] after:w-px after:bg-[#ff5a1f]/35 after:content-[''] last:after:hidden max-[991px]:min-h-[170px] max-[991px]:border-b max-[991px]:border-[#ff5a1f]/30 max-[991px]:p-6 max-[991px]:[&:nth-child(2)]:after:hidden max-[991px]:[&:nth-child(3)]:col-span-2 max-[991px]:[&:nth-child(3)]:border-b-0 max-[575px]:min-h-[150px] max-[575px]:bg-contain max-[575px]:p-[22px] max-[575px]:after:hidden max-[575px]:[&:nth-child(3)]:col-span-1"
                                style={{
                                    backgroundImage: `url("${stat.image}")`,
                                }}
                                aria-label={stat.label}
                                data-aos="fade-up"
                                data-aos-duration={stat.duration}
                                data-aos-offset={stat.offset}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/*===== HERO AREA ENDS =======*/}
        </>
    );
}


