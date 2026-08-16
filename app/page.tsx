// app/page.tsx - Tidak perlu 'use client'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import TechStack from '@/components/home/TechStack'
import ServicesPreview from '@/components/home/ServicesPreview'
import Portfolio from '@/components/home/Studycase'
import Workflow from '@/components/home/Workflow'
import Pricing from '@/components/home/Pricing'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Stats />
        <TechStack />
        <ServicesPreview />
        <Portfolio />
        <Workflow />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      
    </>
  )
}