import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const AnimatedButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
}: AnimatedButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
