"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Check if the error is from MetaMask
        const isMetaMaskError =
            error.message?.includes("Failed to connect to MetaMask") ||
            error.message?.toLowerCase().includes("metamask") ||
            error.stack?.includes("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn") ||
            error.stack?.includes("moz-extension://");

        if (isMetaMaskError) {
            // Silently ignore MetaMask errors and reset
            console.debug("[MetaMask] Error suppressed:", error.message);
            reset();
            return;
        }

        // Log other errors normally
        console.error("Application error:", error);
    }, [error, reset]);

    // Check if this is a MetaMask error
    const isMetaMaskError =
        error.message?.includes("Failed to connect to MetaMask") ||
        error.message?.toLowerCase().includes("metamask") ||
        error.stack?.includes("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn");

    // If it's a MetaMask error, don't show the error UI
    if (isMetaMaskError) {
        return null;
    }

    // For other errors, show the default error UI
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
