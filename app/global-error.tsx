"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    // Check if the error is from MetaMask
    const isMetaMaskError =
        error.message?.includes("Failed to connect to MetaMask") ||
        error.message?.toLowerCase().includes("metamask") ||
        error.stack?.includes("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn") ||
        error.stack?.includes("moz-extension://");

    if (isMetaMaskError) {
        // Silently reset for MetaMask errors
        console.debug("[MetaMask] Global error suppressed:", error.message);
        reset();
        return null;
    }

    // For other errors, show default error UI
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
