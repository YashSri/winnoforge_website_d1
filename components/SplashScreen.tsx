"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Lock scroll on body while loading
        document.body.style.overflow = "hidden";

        const handleLoad = () => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
                document.body.style.overflow = "";
            }, 800);
        };

        if (document.readyState === "complete") {
            setTimeout(handleLoad, 600);
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <>
            {loading && (
                <div
                    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <div className="flex flex-col items-center gap-6">
                        <Image
                            src="/gear.svg"
                            alt="Loading"
                            width={80}
                            height={80}
                            className="animate-spin"
                            style={{ animationDuration: "2s" }}
                            priority
                        />
                        <span className="font-varela font-bold text-xl tracking-widest text-foreground/60 uppercase">
                            Loading
                        </span>
                    </div>
                </div>
            )}
            {children}
        </>
    );
}
