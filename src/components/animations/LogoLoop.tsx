import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const LogoLoop = ({ text = 'RELAXISTUDIO', className = '', speed = 20 }: any) => {
  const [displayText, setDisplayText] = useState(text)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animate = () => {
      const chars = text.split('')
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex < chars.length) {
          setDisplayText((prev) => {
            const newChars = chars.slice(0, currentIndex + 1)
            const remainingChars = prev.split('').slice(currentIndex + 1).map(() => 
              'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'[Math.floor(Math.random() * 36)]
            )
            return newChars.join('') + remainingChars.join('')
          })
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }

    animate()
  }, [text, speed])

  return (
    <motion.div
      ref={containerRef}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default LogoLoop
