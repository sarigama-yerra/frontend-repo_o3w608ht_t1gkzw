import React, { useEffect, useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

const messages = [
  'Build your branded store in minutes',
  'Sync inventory across all channels',
  'Accept payments securely',
  'Track deliveries in real-time',
]

export default function Hero({ lang = 'en' }) {
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  // Subtle autoplay/loop handlers for background video, fallback if video exists
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onLoaded = () => {
      v.muted = true
      v.play().catch(() => {})
    }
    v.addEventListener('loadeddata', onLoaded)
    return () => v.removeEventListener('loadeddata', onLoaded)
  }, [])

  const title = lang === 'sw' ? 'Jukwaa la E-Commerce kwa Uuzaji wa Kitaalamu' : 'All-in-One Platform for Smarter Online Selling'
  const cta1 = lang === 'sw' ? 'Anza Bure' : 'Start for Free'
  const cta2 = lang === 'sw' ? 'Gundua Vipengele' : 'Explore Features'

  const rotating = useMemo(() => messages[index], [index])

  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/90 pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Sokoni Pro
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80">
          {title}
        </p>
        <p className="mt-4 h-7 md:h-8 text-primary font-semibold transition-all">
          {rotating}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="https://sokonipro.com/register" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-[1.02] transition font-semibold">
            {cta1}
          </a>
          <a href="#features" className="px-5 py-3 rounded-2xl border border-border hover:bg-muted/30 transition font-semibold">
            {cta2}
          </a>
        </div>

        <div className="sr-only">
          <video ref={videoRef} src="/homepage.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  )
}
