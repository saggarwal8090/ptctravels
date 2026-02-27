"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OfferPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || pathname !== "/") return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                animation: "popupFadeIn 0.4s ease-out",
                padding: "1rem",
            }}
            onClick={() => setIsVisible(false)}
        >
            <div
                style={{
                    background: "white",
                    borderRadius: "1.5rem",
                    maxWidth: "480px",
                    width: "100%",
                    overflow: "hidden",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
                    animation: "popupSlideUp 0.5s ease-out",
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.08)",
                        border: "none",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#64748b",
                        zIndex: 10,
                        transition: "all 0.2s",
                    }}
                    aria-label="Close popup"
                >
                    ✕
                </button>

                {/* Logo Section */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
                        padding: "2rem",
                        textAlign: "center",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Parvati Trading Co"
                        style={{
                            width: "100%",
                            maxWidth: "280px",
                            height: "auto",
                            borderRadius: "12px",
                            margin: "0 auto",
                            display: "block",
                        }}
                    />
                </div>

                {/* Offer Content */}
                <div style={{ padding: "2rem", textAlign: "center" }}>
                    <div
                        style={{
                            background: "#fff7ed",
                            border: "2px dashed #f59e0b",
                            borderRadius: "1rem",
                            padding: "1rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                color: "#f59e0b",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                            }}
                        >
                            🎉 Welcome Offer
                        </span>
                        <h3
                            style={{
                                fontSize: "1.75rem",
                                color: "#0f172a",
                                margin: "0.5rem 0",
                                fontFamily: "Outfit",
                                fontWeight: 800,
                            }}
                        >
                            Flat 15% OFF
                        </h3>
                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "0.95rem",
                                lineHeight: 1.5,
                            }}
                        >
                            On your first Domestic Flight Booking!
                        </p>
                    </div>

                    <div
                        style={{
                            background: "#f8fafc",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "0.75rem",
                            display: "inline-block",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "monospace",
                                fontSize: "1.3rem",
                                fontWeight: 800,
                                color: "#0f172a",
                                letterSpacing: "3px",
                            }}
                        >
                            FIRSTFLY
                        </span>
                    </div>

                    <p
                        style={{
                            fontSize: "0.85rem",
                            color: "#94a3b8",
                            marginBottom: "1.5rem",
                        }}
                    >
                        + Instant Third-Party Motor Insurance available!
                    </p>

                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                        <a
                            href="/booking"
                            style={{
                                flex: 1,
                                minWidth: "140px",
                                padding: "0.875rem",
                                background: "#3b82f6",
                                color: "white",
                                borderRadius: "0.75rem",
                                fontWeight: 700,
                                fontSize: "1rem",
                                textAlign: "center",
                                textDecoration: "none",
                                transition: "all 0.2s",
                            }}
                        >
                            Book Now →
                        </a>
                        <a
                            href="https://wa.me/919105352519"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                minWidth: "140px",
                                padding: "0.875rem",
                                background: "#25d366",
                                color: "white",
                                borderRadius: "0.75rem",
                                fontWeight: 700,
                                fontSize: "1rem",
                                textAlign: "center",
                                textDecoration: "none",
                                transition: "all 0.2s",
                            }}
                        >
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
