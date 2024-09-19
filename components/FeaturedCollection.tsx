import React from 'react'
import Image from 'next/image'

const FeaturedCollection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6">Artisan's Pride Collection</h2>
            <p className="text-lg mb-8">Discover our latest collection, showcasing the finest craftsmanship from talented artisans across the country. Each piece tells a unique story of tradition and innovation.</p>
            <button className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors duration-200">
              Explore New Collection
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600.jpg?text=Artisan's+Pride+Collection"
                alt="Artisan's Pride Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection