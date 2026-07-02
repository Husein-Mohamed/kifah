import "@/public/assets/css/plugins/aos.css";
import "@/public/assets/css/plugins/bootstrap.min.css";
import "@/public/assets/css/plugins/fontawesome.css";
import "@/public/assets/css/plugins/odometer.css";
import "@/public/assets/css/plugins/nice-select.css";
import "@/public/assets/css/plugins/sidebar.css";
import "@/public/assets/css/main.css";
import "@/public/assets/css/kifah-mobile.css";
import "@/public/assets/css/kifah-home.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "swap",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
    title: "Kifah Business Park - A Complete Business & Lifestyle Destination",
    description: "Kifah Business Park is a premier business and lifestyle hub featuring entertainment, fitness, dining, sports, and more. One destination, endless possibilities.",
    icons: {
        icon: [{ url: "/assets/img/logo/kifah%20logo-01.png", type: "image/png" }],
        shortcut: "/assets/img/logo/kifah%20logo-01.png",
        apple: [{ url: "/assets/img/logo/kifah%20logo-01.png", type: "image/png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} homepage1-body body1`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
