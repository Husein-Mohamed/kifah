"use client";

import dynamic from "next/dynamic";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import HeaderSelector from "./HeaderSelector";
import FooterSelector from "./FooterSelector";
import { useLayoutEffects } from "../hooks/useLayoutEffects";

const BootstrapComponents = dynamic(() => import("../elements/BootstrapComponents"), { ssr: false });

interface LayoutProps {
    headerStyle?: Number;
    footerStyle?: Number;
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ headerStyle, footerStyle, children }: LayoutProps) {
    const { scroll, isMobileMenu, handleMobileMenu } = useLayoutEffects();

    return (
        <>
            <div id="top" />
            <AddClassBody />
            <BootstrapComponents />

            <HeaderSelector headerStyle={headerStyle} scroll={scroll} />
            <Search />
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

            {children}

            <FooterSelector footerStyle={footerStyle} />
            <BackToTop target="#top" />
        </>
    );
}
