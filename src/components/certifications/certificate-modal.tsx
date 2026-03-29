"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface CertificateModalProps {
    isOpen: boolean
    onClose: () => void
    certificateImage: string
    courseName: string
}

export const CertificateModal = ({
    isOpen,
    onClose,
    certificateImage,
    courseName,
}: CertificateModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!isOpen) return

        // Focus trap
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
                return
            }
        }

        // Focus on close button when modal opens

        document.addEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <div className="relative w-full max-w-2xl bg-card rounded-xl border shadow-lg overflow-hidden">
                            {/* Close button */}
                            <button
                                ref={closeButtonRef}
                                onClick={onClose}
                                className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-muted hover:bg-muted/90 transition-colors cursor-pointer"
                                aria-label="Fechar modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div>
                                <div>
                                    <Image
                                        src={certificateImage}
                                        alt={`Certificado de ${courseName}`}
                                        width={1400}
                                        height={800}
                                        quality={100}
                                        priority
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
