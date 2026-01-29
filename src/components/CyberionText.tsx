import React from 'react'
import { motion } from 'framer-motion'

const CyberionText = ({ text = 'CYBERION', className = '' }: any) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.h1
        className="font-bold tracking-wider"
        style={{
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {text.split('').map((char: string, index: number) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ 
              opacity: 0, 
              y: 20,
              textShadow: '0 0 0px rgba(255,255,255,0)'
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,255,255,0.3)',
                '0 0 10px rgba(255,255,255,0.6)',
              ]
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              textShadow: {
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse' as const
              }
            }}
            style={{
              display: 'inline-block',
              transform: `rotate(${Math.sin(index * 0.5) * 2}deg)`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      
      {/* Glitch effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'cyberion-scan 3s linear infinite'
        }}
      />
      
      {/* Scan lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          opacity: 0.3
        }}
      />
    </div>
  )
}

export default CyberionText
