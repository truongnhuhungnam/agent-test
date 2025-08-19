import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedGridProps {
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
}

const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}

const AnimatedGridItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={itemVariants} layout>
      {children}
    </motion.div>
  )
}

export { AnimatedGrid, AnimatedGridItem }
