"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

interface HeaderProps {
    scroll: boolean;
}

const headerComponents: Record<number, ComponentType<HeaderProps>> = {
    1: dynamic(() => import("./header/Header1")),
    2: dynamic(() => import("./header/Header2")),
    3: dynamic(() => import("./header/Header3")),
    4: dynamic(() => import("./header/Header4")),
    5: dynamic(() => import("./header/Header5")),
};

interface HeaderSelectorProps {
    headerStyle?: Number;
    scroll: boolean;
}

export default function HeaderSelector({ headerStyle, scroll }: HeaderSelectorProps) {
    const style = headerStyle === 2 || headerStyle === 3 || headerStyle === 4 || headerStyle === 5 ? Number(headerStyle) : 1;
    const Header = headerComponents[style];
    return <Header scroll={scroll} />;
}
