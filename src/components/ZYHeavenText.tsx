import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ZYHeavenText = ({ text = 'ZY HEAVEN', className = '' }: any) => {
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
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Main text */}
      <motion.h1
        className="font-bold tracking-widest"
        style={{
          fontFamily: 'Georgia, serif',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {text.split('').map((char: string, index: number) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ 
              opacity: 0, 
              y: 50,
              scale: 0.8,
              filter: 'blur(10px)'
            }}
            animate={isVisible ? {
              opacity: 1, 
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 30px rgba(255,255,255,0.8)',
                '0 0 60px rgba(255,255,255,0.4)',
                '0 0 20px rgba(255,255,255,0.9)',
              ]
            } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              display: 'inline-block',
              transform: `skewX(${Math.sin(index * 0.3) * 3}deg)`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5"
        initial={{ width: 0, opacity: 0 }}
        animate={isVisible ? { width: '75%', opacity: 1 } : {}}
        transition={{ 
          duration: 1, 
          delay: text.length * 0.15 + 0.5,
          ease: 'easeInOut'
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      />

      {/* Floating particles */}
      {isVisible && [0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          initial={{ 
            opacity: 0, 
            x: '50%',
            y: '50%'
          }}
          animate={{
            opacity: [0, 1, 0],
            x: `${50 + Math.random() * 100 - 50}%`,
            y: `${50 + Math.random() * 100 - 50}%`,
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
          style={{
            background: 'rgba(255,255,255,0.6)',
            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
          }}
        />
      ))}

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4
        }}
        style={{
          background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  )
}

export default ZYHeavenText
