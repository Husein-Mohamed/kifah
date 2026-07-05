import "../public/assets/css/plugins/aos.css";
import "../public/assets/css/plugins/bootstrap.min.css";
import "../public/assets/css/plugins/fontawesome.css";
import "../public/assets/css/plugins/odometer.css";
import "../public/assets/css/plugins/nice-select.css";
import "../public/assets/css/plugins/sidebar.css";
import "../public/assets/css/main.css";
import "../public/assets/css/kifah-mobile.css";
import "../public/assets/css/kifah-home.css";
import "./tailwind.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "swap",
});

const siteUrl = "https://www.kifahbusiness.so";

const googleVerificationCode =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const kifahStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,

    name: "Kifah Business Park",

    alternateName: [
        "Kifah",
        "Kfah",
        "Kifah Business",
        "Kifah Business Park Mogadishu",
    ],

    url: siteUrl,

    logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/img/logo/kifah%20logo-03.png`,
    },

    image: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/img/optimized/kifah-hero.jpg`,
        width: 1200,
        height: 630,
    },

    description:
        "Kifah Business Park is a premier business and lifestyle destination in Mogadishu, Somalia, offering dining, fitness, entertainment, sports, shopping, and modern business facilities.",

    email: "info@kifahbusiness.so",

    address: {
        "@type": "PostalAddress",
        streetAddress: "Wadada Masaarida, Hodan District",
        addressLocality: "Mogadishu",
        addressRegion: "Banaadir",
        addressCountry: "SO",
    },

    geo: {
        "@type": "GeoCoordinates",
        latitude: 2.0376579,
        longitude: 45.3040248,
    },

    areaServed: {
        "@type": "Country",
        name: "Somalia",
    },

    sameAs: [
        "https://www.facebook.com/Kifahbusiness/",
        "https://www.instagram.com/kifahbusinesspark/",
        "https://www.tiktok.com/@kifahbusiness",
    ],

    contactPoint: {
        "@type": "ContactPoint",
        email: "info@kifahbusiness.so",
        contactType: "customer service",
        areaServed: "SO",
        availableLanguage: ["English", "Somali"],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default:
            "Kifah Business Park | Business & Lifestyle Destination in Mogadishu",
        template: "%s | Kifah Business Park",
    },

    description:
        "Kifah Business Park is a premier business and lifestyle destination in Mogadishu, Somalia, featuring dining, fitness, entertainment, sports, shopping, and business facilities.",

    applicationName: "Kifah Business Park",

    keywords: [
        "Kifah",
        "Kfah",
        "Kifah Business",
        "Kifah Business Park",
        "Kifah Business Park Mogadishu",
        "business park in Mogadishu",
        "business park in Somalia",
        "shopping in Mogadishu",
        "restaurants in Mogadishu",
        "fitness in Mogadishu",
        "entertainment in Mogadishu",
        "sports in Mogadishu",
        "Hodan District",
    ],

    authors: [
        {
            name: "Kifah Business Park",
            url: siteUrl,
        },
    ],

    creator: "Kifah Business Park",
    publisher: "Kifah Business Park",

    category: "Business and Lifestyle",

    alternates: {
        canonical: siteUrl,
    },

    icons: {
        icon: [
            {
                url: "/assets/img/logo/kifah%20logo-03.png",
                type: "image/png",
            },
        ],

        shortcut: "/assets/img/logo/kifah%20logo-03.png",

        apple: [
            {
                url: "/assets/img/logo/kifah%20logo-03.png",
                type: "image/png",
            },
        ],
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Kifah Business Park",

        title:
            "Kifah Business Park | Business & Lifestyle Destination in Mogadishu",

        description:
            "Discover shopping, dining, fitness, entertainment, sports, and modern business facilities at Kifah Business Park in Mogadishu, Somalia.",

        images: [
            {
                url: "/assets/img/optimized/kifah-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Kifah Business Park in Mogadishu, Somalia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Kifah Business Park | Business & Lifestyle Destination",

        description:
            "A complete business and lifestyle destination in Mogadishu, Somalia.",

        images: ["/assets/img/optimized/kifah-hero.jpg"],
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    verification: googleVerificationCode
        ? {
              google: googleVerificationCode,
          }
        : undefined,

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} homepage1-body body1`}
                suppressHydrationWarning
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(kifahStructuredData).replace(
                            /</g,
                            "\\u003c"
                        ),
                    }}
                />

                {children}
            </body>
        </html>
    );
}