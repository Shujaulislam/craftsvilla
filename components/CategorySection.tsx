import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Silk Dresses', image: 'https://placehold.co/384x256.jpg?text=Silk+Dresses' },
  { name: 'Handcrafted Suits', image: 'https://placehold.co/384x256.jpg?text=Handcrafted+Suits' },
  { name: 'Festival Wear', image: 'https://placehold.co/384x256.jpg?text=Festival+Wear' },
  { name: 'Artisanal Jewelry', image: 'https://placehold.co/384x256.jpg?text=Artisanal+Jewelry' },
]

const CategorySection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Explore Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link href={`/category/${category.name.toLowerCase().replace(' ', '-')}`} key={category.name}>
            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-purple-300 group-hover:text-white transition-colors duration-200">Explore Collection</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection