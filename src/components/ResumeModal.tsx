import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    resumeUrl: string;
}

const ResumeModal = ({ isOpen, onClose, resumeUrl }: ResumeModalProps) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl h-[85vh] bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-card/50 backdrop-blur-md">
                            <h2 className="text-xl font-playfair font-semibold text-foreground">
                                Resume Preview
                            </h2>
                            <div className="flex gap-2">
                                <a href={resumeUrl} download>
                                    <Button variant="outline" size="sm" className="hidden sm:flex">
                                        Download PDF
                                    </Button>
                                </a>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="hover:bg-white/10 rounded-full"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* PDF Viewer (Iframe) */}
                        <div className="flex-1 bg-white/5 w-full h-full">
                            <iframe
                                src={resumeUrl}
                                className="w-full h-full border-none"
                                title="Resume PDF"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
