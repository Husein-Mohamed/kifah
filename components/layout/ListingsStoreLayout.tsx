"use client";

import StoreProvider from "@/features/StoreProvider";

interface ListingsStoreLayoutProps {
    children: React.ReactNode;
}

export default function ListingsStoreLayout({ children }: ListingsStoreLayoutProps) {
    return <StoreProvider>{children}</StoreProvider>;
}
