import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <Image
        src="https://placehold.co/1920x1080.jpg?text=Handcrafted+Elegance"
        alt="Hero image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h2 className="text-5xl font-bold mb-6 leading-tight">Discover Handcrafted Elegance</h2>
          <p className="text-xl mb-8">Explore our curated collection of artisanal crafts, where tradition meets modern design.</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection