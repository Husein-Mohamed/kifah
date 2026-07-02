import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import TermsConditions from "@/components/sections/TermsConditions";

export default function TermsConditionsPage() {
    return (
        <Layout>
            <InnerHeader title="Terms & Conditions" currentpage="Terms & Conditions" />
            <TermsConditions />
            <div className="space30"></div>
        </Layout>
    );
}
