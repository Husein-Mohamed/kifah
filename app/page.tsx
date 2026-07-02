import Layout from "@/components/layout/Layout";
import Hero2 from "@/components/sections/Hero2";
import About3 from "@/components/sections/About3";
import Category1 from "@/components/sections/Category1";
import HomeAdvantages from "@/components/sections/HomeAdvantages";
import HomeCta from "@/components/sections/HomeCta";
import Team1 from "@/components/sections/Team1";

export default function Home() {
    return (
        <Layout>
            <main className="kifah-landing-page">
                <Hero2 />

                <section id="about">
                    <About3 />
                </section>

                <section id="services">
                    <Category1 />
                </section>

                <HomeAdvantages />

                <section id="team">
                    <Team1 />
                </section>

                <HomeCta />
            </main>
        </Layout>
    );
}
