import React from 'react'

const tiers = [
  { name: 'Starter', price: 'Free', features: ['1 Storefront', 'Basic Analytics', 'Community Support'] },
  { name: 'Growth', price: '$19/mo', features: ['Unlimited Products', 'Payments + Delivery', 'Email Support'] },
  { name: 'Pro', price: '$49/mo', features: ['Advanced Analytics', 'Priority Support', 'Fraud Protection'] },
]

export default function Pricing({ lang = 'en' }) {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{lang === 'sw' ? 'Bei' : 'Pricing'}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-background p-6 shadow-xl">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-foreground/80">
                {t.features.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
              <a href="https://sokonipro.com/register" target="_blank" rel="noreferrer" className="mt-6 inline-block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90 transition">
                {lang === 'sw' ? 'Anza Bure' : 'Start for Free'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
