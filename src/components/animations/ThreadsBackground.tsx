import React, { useEffect, useRef } from 'react'

const ThreadsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const threads: { x: number; y: number; vx: number; vy: number; length: number; color: string }[] = []
    const threadCount = 30

    for (let i = 0; i < threadCount; i++) {
      threads.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        length: Math.random() * 100 + 50,
        color: `rgba(255,255,255,${Math.random() * 0.1 + 0.02})`
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(32, 32, 32, 0.1)'
      ctx.fillRect(0, 0, width, height)

      threads.forEach((thread) => {
        ctx.strokeStyle = thread.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(thread.x, thread.y)

        for (let i = 0; i < thread.length; i++) {
          thread.x += thread.vx + Math.sin(i * 0.1) * 0.3
          thread.y += thread.vy + Math.cos(i * 0.1) * 0.3
          ctx.lineTo(thread.x, thread.y)
        }
        ctx.stroke()

        if (thread.x < 0 || thread.x > width) thread.vx *= -1
        if (thread.y < 0 || thread.y > height) thread.vy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'rgba(32, 32, 32, 1)' }}
    />
  )
}

export default ThreadsBackground
