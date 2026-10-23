import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const motion = gsap.matchMedia();

motion.add("(prefers-reduced-motion: no-preference)", () => {
    const heroElements = document.querySelectorAll("[data-hero]");

    if (heroElements.length > 0) {
        gsap.from(heroElements, {
            opacity: 0,
            y: 24,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "opacity,transform",
        });
    }

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,transform",
            scrollTrigger: {
                trigger: element,
                start: "top 92%",
                once: true,
            },
        });
    });
});