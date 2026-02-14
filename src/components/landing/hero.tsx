"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./hero.css";

export default function Hero() {
    useEffect(() => {
        const particlesContainer = document.getElementById("particles");
        const particleCount = 50;

        if (!particlesContainer) return;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.animationDuration =
                Math.random() * 10 + 15 + "s";
            particle.style.animationDelay =
                Math.random() * 5 + "s";

            particlesContainer.appendChild(particle);
        }

        return () => {
            particlesContainer.innerHTML = "";
        };
    }, []);

    return (
        <>
            {/* Background Effects */}
            <div className="background-container">
                <div className="radial-glow"></div>
                {/* <div className="particles" id="particles"></div> */}
            </div>

            {/* Hero Section */}
            <section className="hero">

                <div className="hero-content">

                    {/* Character FIRST (background element) */}
                    <div className="character-container">
                        <Image
                            src="/images/hollow_night.jpeg"
                            alt="Knight Character"
                            fill
                            className="character"
                            priority
                        />
                    </div>

                    {/* Logo OVERLAY */}
                    <div className="logo-overlay">
                        <Image
                            src="/images/hackmol_logo.png"
                            alt="HackMol 7.0"
                            width={1000}
                            height={300}
                            className="logo-ornament"
                            priority
                        />
                    </div>

                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <Image
                        src="/images/scroll_down.png"
                        alt="Scroll Down"
                        width={30}
                        height={30}
                        className="scroll-arrow"
                    />
                </div>


            </section>

        </>
    );
}