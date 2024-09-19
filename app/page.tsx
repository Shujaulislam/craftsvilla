"use client"
import React from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import CategorySection from "@/components/CategorySection"
import FeaturedCollection from "@/components/FeaturedCollection"
import ProductFeatures from "@/components/ProductFeatures"
import TestimonialsSection from "@/components/TestimonialsSection"
import NewsletterSection from "@/components/NewsletterSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedCollection />
        <ProductFeatures />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}