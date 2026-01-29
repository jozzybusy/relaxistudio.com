import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const RobloxBloxText = ({ text = 'ROBLOX', className = '' }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.h1
        className="font-black italic tracking-wide"
        style={{
          fontFamily: 'Arial Black, Arial Bold, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontStyle: 'italic',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {text.split('').map((char: string, index: number) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ 
              opacity: 0, 
              y: -50,
              rotate: -15,
              scale: 0.5
            }}
            animate={isVisible ? {
              opacity: 1, 
              y: 0,
              rotate: [0, 3, -3, 0],
              scale: 1,
            } : {}}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.08,
              ease: 'backOut',
              rotate: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut'
              }
            }}
            style={{
              display: 'inline-block',
              transform: `skewX(-10deg)`,
              textShadow: `0 4px 0 rgba(0,0,0,0.3), 0 8px 0 rgba(0,0,0,0.2)`,
              background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Shadow layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.2 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          transform: 'translateX(4px) translateY(4px)',
          background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {text}
      </motion.div>

      {/* Decorative accent lines */}
      <motion.div
        className="absolute -right-4 top-1/2 transform -translate-y-1/2"
        initial={{ width: 0, opacity: 0 }}
        animate={isVisible ? { width: 30, opacity: 1 } : {}}
        transition={{ 
          duration: 0.5, 
          delay: text.length * 0.08 + 0.3 
        }}
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          transform: 'rotate(-45deg)'
        }}
      />

      <motion.div
        className="absolute -left-4 top-1/2 transform -translate-y-1/2"
        initial={{ width: 0, opacity: 0 }}
        animate={isVisible ? { width: 30, opacity: 1 } : {}}
        transition={{ 
          duration: 0.5, 
          delay: text.length * 0.08 + 0.4 
        }}
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          transform: 'rotate(-45deg)'
        }}
      />

      {/* Floating sparkles */}
      {isVisible && [0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          initial={{ 
            opacity: 0,
            x: '50%',
            y: '50%'
          }}
          animate={{
            opacity: [0, 1, 0],
            x: `${30 + i * 40}%`,
            y: `${20 + i * 30}%`,
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeInOut'
          }}
          style={{
            background: 'white',
            boxShadow: '0 0 15px rgba(255,255,255,1)'
          }}
        />
      ))}
    </div>
  )
}

export default RobloxBloxText
