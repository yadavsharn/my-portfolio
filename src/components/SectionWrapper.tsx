import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = sectionRef.current;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 60,
                rotateX: 5,
                transformPerspective: 1000,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Trigger when top of element hits 85% of viewport height
                    toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} id={id} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
};

export default SectionWrapper;
