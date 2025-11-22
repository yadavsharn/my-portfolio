import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const IntroOverlay = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const finalText = "SHANTANU YADAV";

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText(prev =>
                    finalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return finalText[index];
                            }
                            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)];
                        })
                        .join("")
                );

                if (iteration >= finalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Start scramble after a slight delay to sync with frame lines
        const timeout = setTimeout(startScramble, 1500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsVisible(false);
                onComplete();
            },
        });

        // Initial state
        gsap.set(containerRef.current, { opacity: 1 });

        // 1. Frame Lines Animation
        tl.to(".frame-line-top, .frame-line-bottom", {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
        })
            .to(
                ".frame-line-left, .frame-line-right",
                {
                    scaleY: 1,
                    duration: 1,
                    ease: "power2.inOut",
                },
                "-=0.5"
            )

            // 2. Text Reveal Container
            .fromTo(
                textRef.current,
                { opacity: 0, scale: 0.9, filter: "blur(10px)" },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power2.out",
                }
            )

            // 3. Hold for scramble to finish
            .to({}, { duration: 1.5 })

            // 4. Fade Out
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
            });
    }, { scope: containerRef });

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
        >
            {/* Frame Lines */}
            <div className="absolute inset-4 md:inset-10 pointer-events-none">
                <div className="frame-line frame-line-top absolute top-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0" />
                <div className="frame-line frame-line-bottom absolute bottom-0 right-0 w-full h-[2px] bg-primary origin-right scale-x-0" />
                <div className="frame-line frame-line-left absolute top-0 left-0 w-[2px] h-full bg-primary origin-top scale-y-0" />
                <div className="frame-line frame-line-right absolute bottom-0 right-0 w-[2px] h-full bg-primary origin-bottom scale-y-0" />
            </div>

            {/* Central Text */}
            <div ref={textRef} className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest font-mono min-h-[60px]">
                    {displayText}
                </h1>
                <p className="text-primary text-lg md:text-xl font-mono tracking-wider animate-pulse">
                    SYSTEM INITIALIZED
                </p>
            </div>
        </div>
    );
};

export default IntroOverlay;
