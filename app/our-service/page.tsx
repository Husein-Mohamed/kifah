import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import Service1 from "@/components/sections/Service1";
export default function Home() {
    return (
        <>
            <Layout>
                <InnerHeader title="Our Services" currentpage="Our Services" />
                <Service1 />
                <div className="space30"></div>
            </Layout>
        </>
    );
}
