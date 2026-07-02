"use client";

import { useEffect } from "react";

/**
 * UI interaction handlers for Next.js
 * Converted from jQuery to pure JavaScript functions
 */

// Custom hook for UI handlers
export function useUIHandlers(): void {
    useEffect(() => {
        setupHeaderSearch();
        setupMobileMenu();
        setupHamburgerMenu();
        const disposeMobileSidebar = setupMobileSidebar();
        return () => {
            disposeMobileSidebar?.();
        };
    }, []);
}

// Header search functionality
function setupHeaderSearch(): void {
    // Search open
    const searchBtn = document.querySelector(".header-search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const searchForm = document.querySelector(".header-search-form-wrapper");
            const searchInput = document.querySelector('.header-search-form-wrapper input[type="search"]');
            const bodyOverlay = document.querySelector(".body-overlay");

            searchForm?.classList.add("open");
            (searchInput as HTMLInputElement)?.focus();
            bodyOverlay?.classList.add("active");
        });
    }

    // Search close
    const searchClose = document.querySelector(".tx-search-close");
    if (searchClose) {
        searchClose.addEventListener("click", (e) => {
            e.preventDefault();
            const searchForm = document.querySelector(".header-search-form-wrapper");
            const bodyOverlay = document.querySelector(".body-overlay");

            searchForm?.classList.remove("open");
            document.body.classList.remove("active");
            bodyOverlay?.classList.remove("active");
        });
    }
}

// Mobile menu functionality
function setupMobileMenu(): void {
    // Simple implementation of dropdown toggle functionality
    const mobileMenu = document.querySelector("#mobile-menu-active");

    if (mobileMenu) {
        // Handle dropdown toggles
        const dropdowns = mobileMenu.querySelectorAll(".dropdown > a");
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("click", (e) => {
                e.preventDefault();
                const parent = (e.currentTarget as HTMLElement).parentElement;

                // Toggle the submenu visibility
                const submenu = parent?.querySelector("ul");
                if (submenu) {
                    const isExpanded = submenu.classList.contains("show");
                    if (isExpanded) {
                        submenu.classList.remove("show");
                        parent?.classList.remove("active");
                    } else {
                        submenu.classList.add("show");
                        parent?.classList.add("active");
                    }
                }
            });
        });
    }
}
// Hamburger menu functionality
function setupHamburgerMenu(): void {
    // Hamburger menu open
    const hamburgerBtn = document.querySelector(".hamburger_menu");
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const slideBar = document.querySelector(".slide-bar");
            const bodyOverlay = document.querySelector(".body-overlay");

            slideBar?.classList.toggle("show");
            document.body.classList.add("on-side");
            bodyOverlay?.classList.add("active");
            (e.currentTarget as HTMLElement).classList.add("active");
        });
    }

    // Mobile menu close
    const closeBtn = document.querySelector(".close-mobile-menu > a");
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const slideBar = document.querySelector(".slide-bar");
            const bodyOverlay = document.querySelector(".body-overlay");
            const hamburgerBtn = document.querySelector(".hamburger_menu");

            slideBar?.classList.remove("show");
            document.body.classList.remove("on-side");
            bodyOverlay?.classList.remove("active");
            hamburgerBtn?.classList.remove("active");
        });
    }
}

// Off-canvas (vl-offcanvas) — open/close, overlay, scroll lock, Escape
function setupMobileSidebar(): (() => void) | undefined {
    const mobileSidebar = document.querySelector(".vl-offcanvas");
    const overlay = document.querySelector(".vl-offcanvas-overlay");
    const mobileNavClose = document.querySelector(".vl-offcanvas-close-toggle");
    const openButtons = document.querySelectorAll(".vl-offcanvas-toggle");

    if (!mobileSidebar || !openButtons.length) {
        return undefined;
    }

    const ac = new AbortController();
    const { signal } = ac;

    const openMenu = (): void => {
        mobileSidebar.classList.add("vl-offcanvas-open");
        overlay?.classList.add("vl-offcanvas-overlay-open");
        document.documentElement.classList.add("kifah-menu-open");
    };

    const closeMenu = (): void => {
        mobileSidebar.classList.remove("vl-offcanvas-open");
        overlay?.classList.remove("vl-offcanvas-overlay-open");
        document.documentElement.classList.remove("kifah-menu-open");
    };

    openButtons.forEach((btn) => {
        btn.addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                openMenu();
            },
            { signal }
        );
    });

    mobileNavClose?.addEventListener(
        "click",
        (e) => {
            e.preventDefault();
            closeMenu();
        },
        { signal }
    );

    overlay?.addEventListener("click", closeMenu, { signal });

    mobileSidebar.addEventListener(
        "click",
        (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a[href]");
            if (!link) return;
            const href = link.getAttribute("href");
            if (href && href !== "#" && !href.startsWith("#")) {
                closeMenu();
            }
        },
        { signal }
    );

    const onKeyDown = (e: KeyboardEvent): void => {
        if (e.key === "Escape" && mobileSidebar.classList.contains("vl-offcanvas-open")) {
            closeMenu();
        }
    };
    document.addEventListener("keydown", onKeyDown, { signal });

    return () => {
        closeMenu();
        ac.abort();
    };
}

// Initialize all UI handlers
export function initUIHandlers(): void {
    setupHeaderSearch();
    setupMobileMenu();
    setupHamburgerMenu();
    setupMobileSidebar();
}
