import React from 'react'

const data = [
  { name: 'Amina, Dar es Salaam', text: 'Sokoni Pro imenisaidia kuongeza mauzo na kurahisisha ufuatiliaji wa mizigo.' },
  { name: 'John, Nairobi', text: 'Setting up my store took minutes. Payments and deliveries just work.' },
  { name: 'Zara, Arusha', text: 'Nimependa ulinzi wa malipo na takwimu za mauzo. Bora sana!' },
]

export default function Testimonials({ lang = 'en' }) {
  return (
    <section id="testimonials" className="py-16 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{lang === 'sw' ? 'Ushuhuda' : 'Testimonials'}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-background p-6 shadow-lg">
              <p className="text-foreground/90">“{t.text}”</p>
              <div className="mt-4 text-sm text-foreground/70">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
