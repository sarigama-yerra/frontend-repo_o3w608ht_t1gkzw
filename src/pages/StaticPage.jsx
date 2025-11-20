import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function StaticPage({ title, children }){
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
