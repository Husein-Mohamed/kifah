"use client";

import { useEffect, useState } from "react";
import { useScrollHeader } from "../elements/useScrollHeader";
import { useSearchFormToggle } from "../elements/useSearchFormToggle";
import { useTabSwitcher } from "../elements/setupTabSwitcher";
import { useUIHandlers } from "../elements/useUIHandlers";
import { useOdometerCounter } from "@/utils/useOdometerCounter";
import useNiceSelect from "../elements/useNiceSelect";
import { setupToggleFilters } from "../elements/setupToggleFilters";

export function useLayoutEffects() {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        const initAos = () => {
            if (!document.querySelector("[data-aos]")) return;

            import("aos").then(({ default: AOS }) => {
                AOS.init({ once: true, duration: 800, offset: 50 });
            });
        };

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(initAos);
        } else {
            setTimeout(initAos, 100);
        }
    }, []);

    useScrollHeader();
    useSearchFormToggle();
    useTabSwitcher();
    useUIHandlers();
    useOdometerCounter();
    useNiceSelect();

    useEffect(() => {
        setupToggleFilters();

        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu);

    return {
        scroll,
        isMobileMenu,
        handleMobileMenu,
    };
}
