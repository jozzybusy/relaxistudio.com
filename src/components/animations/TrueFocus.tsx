import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TrueFocus = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  if (isInView && !hasAnimated) {
    setHasAnimated(true)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      animate={hasAnimated ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default TrueFocus
