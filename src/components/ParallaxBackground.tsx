import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ParallaxBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5) * 2;
            const yPos = (clientY / innerHeight - 0.5) * 2;

            // Layer 1 (Slow)
            gsap.to(".parallax-layer-1", {
                x: xPos * 20,
                y: yPos * 20,
                duration: 1,
                ease: "power2.out",
            });

            // Layer 2 (Medium)
            gsap.to(".parallax-layer-2", {
                x: xPos * 40,
                y: yPos * 40,
                duration: 1,
                ease: "power2.out",
            });

            // Layer 3 (Fast)
            gsap.to(".parallax-layer-3", {
                x: xPos * 60,
                y: yPos * 60,
                duration: 1,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Layer 1 - Slow - Large blurred blobs */}
            <div className="parallax-layer-1 absolute inset-0">
                <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
            </div>

            {/* Layer 2 - Medium - Geometric Shapes */}
            <div className="parallax-layer-2 absolute inset-0">
                <div className="absolute top-[30%] right-[20%] w-20 h-20 border-2 border-primary/10 rounded-xl rotate-12" />
                <div className="absolute bottom-[40%] left-[15%] w-32 h-32 border-2 border-accent/10 rounded-full" />
            </div>

            {/* Layer 3 - Fast - Small particles/dots */}
            <div className="parallax-layer-3 absolute inset-0">
                <div className="absolute top-[15%] left-[40%] w-2 h-2 bg-primary/20 rounded-full" />
                <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-accent/20 rounded-full" />
                <div className="absolute bottom-[10%] left-[20%] w-2 h-2 bg-secondary/20 rounded-full" />
            </div>
        </div>
    );
};

export default ParallaxBackground;
