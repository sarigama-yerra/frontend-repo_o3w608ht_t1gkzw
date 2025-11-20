import React from 'react'

export default function HowItWorks({ lang = 'en' }) {
  const steps = lang === 'sw'
    ? [
        { n: 1, t: 'Jisajili', d: 'Unda akaunti yako kwa sekunde chache.' },
        { n: 2, t: 'Badilisha Duka', d: 'Binafsisha chapa, mandhari, na malipo.' },
        { n: 3, t: 'Uze Kitaalamu', d: 'Anzisha mauzo na fuatilia utoaji.' },
      ]
    : [
        { n: 1, t: 'Register', d: 'Create your account in seconds.' },
        { n: 2, t: 'Customize Store', d: 'Brand, theme, and payment settings.' },
        { n: 3, t: 'Sell Professionally', d: 'Start selling and track deliveries.' },
      ]

  return (
    <section id="how" className="py-16 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{lang === 'sw' ? 'Jinsi Inavyofanya Kazi' : 'How It Works'}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-border bg-background p-6 shadow-lg">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold mb-4">
                {s.n}
              </div>
              <h3 className="font-semibold text-lg">{s.t}</h3>
              <p className="text-foreground/80 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
