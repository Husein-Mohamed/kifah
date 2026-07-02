"use client";

import { useState } from "react";

interface LazyGoogleMapProps {
    src: string;
    title?: string;
    width?: number;
    height?: number;
}

export default function LazyGoogleMap({
    src,
    title = "Map location",
    width = 600,
    height = 450,
}: LazyGoogleMapProps) {
    const [showMap, setShowMap] = useState(false);

    if (!showMap) {
        return (
            <button
                type="button"
                className="lazy-map-placeholder"
                onClick={() => setShowMap(true)}
                aria-label={`Load ${title}`}
                style={{
                    width: "100%",
                    height,
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    background: "#f3f4f6",
                    cursor: "pointer",
                    color: "#31353D",
                    fontWeight: 500,
                }}
            >
                Click to load map
            </button>
        );
    }

    return (
        <iframe
            src={src}
            width={width}
            height={height}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
        />
    );
}
