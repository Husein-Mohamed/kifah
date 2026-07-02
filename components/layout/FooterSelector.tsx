"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const footerComponents: Record<number, ComponentType> = {
    1: dynamic(() => import("./footer/Footer1")),
    2: dynamic(() => import("./footer/Footer2")),
    3: dynamic(() => import("./footer/Footer3")),
    4: dynamic(() => import("./footer/Footer4")),
};

interface FooterSelectorProps {
    footerStyle?: Number;
}

export default function FooterSelector({ footerStyle }: FooterSelectorProps) {
    const style = footerStyle === 2 || footerStyle === 3 || footerStyle === 4 ? Number(footerStyle) : 1;
    const Footer = footerComponents[style];
    return <Footer />;
}
