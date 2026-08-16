// app/page.tsx - Tidak perlu 'use client'
import dynamic from 'next/dynamic'

// Hero tetap dibundle langsung (above-the-fold, kritikal untuk LCP)
import Hero from '@/components/home/Hero'

// Section di bawah fold di-code-split agar bundle awal lebih ringan
const Stats = dynamic(() => import('@/components/home/Stats'))
const TechStack = dynamic(() => import('@/components/home/TechStack'))
const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview'))
const Portfolio = dynamic(() => import('@/components/home/Studycase'))
const Workflow = dynamic(() => import('@/components/home/Workflow'))
const Pricing = dynamic(() => import('@/components/home/Pricing'))
const Testimonials = dynamic(() => import('@/components/home/Testimonials'))
const FAQ = dynamic(() => import('@/components/home/FAQ'))
const CTA = dynamic(() => import('@/components/home/CTA'))

export default function Home() {
  return (
    <>
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
    </>
  )
}
