// app/page.tsx - Tidak perlu 'use client'
import Hero from '@/components/home/Hero'
import TechStack from '@/components/home/TechStack'
import ServicesPreview from '@/components/home/ServicesPreview'
import Portfolio from '@/components/home/Studycase'
import Workflow from '@/components/home/Workflow'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <TechStack />
        <ServicesPreview />
        <Portfolio />
        <Workflow />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      
    </>
  )
}