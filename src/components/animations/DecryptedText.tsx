import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const DecryptedText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'
    let iterations = 0

    const decrypt = () => {
      const result = text.split('').map((char, index) => {
        if (index < iterations) {
          return text[index]
        }
        return chars[Math.floor(Math.random() * chars.length)]
      })
      
      setDisplayText(result.join(''))
      
      if (iterations < text.length) {
        iterations += 1/3
        setTimeout(decrypt, 50)
      } else {
        setTimeout(() => {
          iterations = 0
          decrypt()
        }, 5000)
      }
    }

    decrypt()
  }, [text])

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  )
}

export default DecryptedText
