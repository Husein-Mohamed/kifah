import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import About1 from "@/components/sections/About1";
import Others4 from "@/components/sections/Others4";
import Others3 from "@/components/sections/Others3";
export default function Home() {
    return (
        <>
            <Layout>
                <InnerHeader title="About Kifah Business Park" currentpage="About Us" />
                <About1 />
                <Others3 />
                <Others4 />
                <div className="space30"></div>
            </Layout>
        </>
    );
}
