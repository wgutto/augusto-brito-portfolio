"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
}

export const RevealLeft = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
