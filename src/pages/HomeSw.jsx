import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function HomeSw(){
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero lang="sw" />
        <HowItWorks lang="sw" />
        <Features lang="sw" />
        <Testimonials lang="sw" />
        <Pricing lang="sw" />
      </main>
      <Footer />
    </div>
  )
}
