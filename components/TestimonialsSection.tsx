import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Fashion Enthusiast",
    content: "Craftsvilla has transformed my wardrobe with its unique, handcrafted pieces. The quality and attention to detail in each item is truly remarkable.",
    rating: 5,
    avatar: "https://placehold.co/100x100.jpg?text=PS"
  },
  {
    name: "Rahul Mehta",
    title: "Art Collector",
    content: "I'm impressed by the range of artisanal products offered by Craftsvilla. It's a treasure trove for anyone who appreciates authentic, handmade crafts.",
    rating: 5,
    avatar: "https://placehold.co/100x100.jpg?text=RM"
  },
  {
    name: "Anita Desai",
    title: "Interior Designer",
    content: "Craftsvilla's home decor items have added a unique touch to my projects. My clients love the blend of traditional craftsmanship with modern design.",
    rating: 5,
    avatar: "https://placehold.co/100x100.jpg?text=AD"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection