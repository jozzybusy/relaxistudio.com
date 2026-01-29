import React, { useState, useEffect } from 'react'

const ShuffleText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const shuffleChars = () => {
      const chars = text.split('')
      for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[chars[i], chars[j]] = [chars[j], chars[i]]
      }
      setDisplayText(chars.join(''))
    }

    shuffleChars()
    const interval = setInterval(shuffleChars, 2000)

    return () => {
      clearInterval(interval)
      setDisplayText(text)
    }
  }, [text])

  return (
    <span className={`inline-block ${className}`}>
      {displayText.split('').map((char, index) => (
        <span
          key={`${index}-${char}`}
          className="inline-block animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default ShuffleText
