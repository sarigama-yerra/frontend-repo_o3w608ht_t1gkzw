import React from 'react'
import { PackageSearch, CreditCard, Truck, BarChart3, Store, Shield } from 'lucide-react'

export default function Features({ lang = 'en' }) {
  const items = [
    { icon: Store, en: 'Branded Storefronts', sw: 'Maduka Yenye Chapa' },
    { icon: PackageSearch, en: 'Unified Inventory', sw: 'Hesabu Iliyounganishwa' },
    { icon: CreditCard, en: 'Secure Payments', sw: 'Malipo Salama' },
    { icon: Truck, en: 'Delivery Tracking', sw: 'Ufuatiliaji wa Utoaji' },
    { icon: BarChart3, en: 'Analytics Dashboard', sw: 'Dashibodi ya Takwimu' },
    { icon: Shield, en: 'Fraud Protection', sw: 'Ulinzi Dhidi ya Udanganyifu' },
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{lang === 'sw' ? 'Vipengele' : 'Features'}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, en, sw }, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-background p-6 shadow-xl hover:shadow-2xl transition">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon />
              </div>
              <h3 className="font-semibold text-lg">{lang === 'sw' ? sw : en}</h3>
              <p className="text-foreground/80 mt-2">{lang === 'sw' ? 'Uzoefu bora wa kuuza mtandaoni.' : 'A better way to sell online.'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
