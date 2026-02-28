"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function RevealZoom({ children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}