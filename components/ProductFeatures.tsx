import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  "Handcrafted by skilled artisans using traditional techniques",
  "Ethically sourced, sustainable materials for eco-conscious shoppers",
  "Unique designs that blend traditional motifs with contemporary styles",
  "Supporting local communities and preserving cultural heritage"
]

const ProductFeatures = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Choose Craftsvilla</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Craftsmanship Redefined</h3>
          <p className="mb-8 text-gray-600 leading-relaxed">
            At Craftsvilla, we celebrate the art of handmade creations. Our products are more than just items; they're a testament to skill, tradition, and creativity.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Check className="h-6 w-6 text-purple-600 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`https://placehold.co/400x300.jpg?text=Craftsvilla+${i}`}
                alt={`Product feature ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures