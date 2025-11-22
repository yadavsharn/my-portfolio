import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleHover = () => setIsHovering(true);
        const handleUnhover = () => setIsHovering(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer, input, textarea");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, []);

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
            style={{ transform: "translate(-50%, -50%)" }}
        >
            <div
                className={`transition-transform duration-150 ease-out ${isClicking ? "scale-90" : "scale-100"
                    }`}
            >
                {/* Cartoon Hand SVG */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-300 ${isHovering ? "scale-110" : "scale-100"
                        }`}
                    style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))",
                    }}
                >
                    {isHovering ? (
                        // Pointing Hand (Mickey Style) - Jet Black with White Outline
                        <path
                            d="M12 2C12.5523 2 13 2.44772 13 3V11H15V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V11H18V10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10V14.5C20 17.5376 17.5376 20 14.5 20H11.5C8.46243 20 6 17.5376 6 14.5V12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12V14H10V3C10 2.44772 10.4477 2 11 2H12Z"
                            fill="#0A0A0A"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="rotate(-15 12 12) translate(-2, 2)"
                        />
                    ) : (
                        // Default Arrow/Pointer - Jet Black with White Outline
                        <path
                            d="M5.5 3.5L11.5 19.5L14.5 12.5L21.5 9.5L5.5 3.5Z"
                            fill="#0A0A0A"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                </svg>
            </div>
        </div>
    );
};

export default CustomCursor;
