import Image from "next/image"
import { ShoppingCart, Heart, User, Search } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Craftsvilla</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Store</a>
            <a href="#" className="hover:text-gray-300">Designers</a>
            <a href="#" className="hover:text-gray-300">Categories</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5" />
            <Heart className="h-5 w-5" />
            <ShoppingCart className="h-5 w-5" />
            <User className="h-5 w-5" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[500px]">
          <Image
            src="https://placehold.co/1920x500.jpg?text=Hero+Image"
            alt="Hero image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Collection is here</h2>
              <p className="mb-6">The time is now for it to be okay to be great. People in this world shun people for being great.</p>
              <button className="bg-white text-black px-6 py-2 rounded">Explore</button>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Silk Dresses', 'Suits', 'Festival', 'Showroom'].map((category) => (
              <div key={category} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`https://placehold.co/384x256.jpg?text=${category}`}
                  alt={category}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{category}</h3>
                    <p className="text-gray-200">See Products</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Basic Starter Pack</h2>
                <p className="mb-6">The time is now for it to be okay to be great. People in this world shun people for being great.</p>
                <button className="bg-white text-black px-6 py-2 rounded">Explore New Collection</button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://placehold.co/600x400.jpg?text=Basic+Starter+Pack"
                  alt="Basic Starter Pack"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black">Product Description</h3>
              <p className="mb-4 text-black">Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-black">
                  <span className="bg-gray-200 rounded-full p-1 mr-2 "></span>
                  Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.
                </li>
                <li className="flex items-center text-black">
                  <span className="bg-gray-200 rounded-full p-1 mr-2"></span>
                  Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics.
                </li>
                <li className="flex items-center text-black">
                  <span className="bg-gray-200 rounded-full p-1 mr-2"></span>
                  Oil is a crucial source of petrochemicals, which are used in the production of plastics.
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`https://placehold.co/200x200.jpg?text=Feature+${i}`}
                  alt={`Product feature ${i}`}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 text-black">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Exclusive Discounts for Members</h2>
              <p className="mb-6">The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded">Get your code</button>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 text-black">
          <h2 className="text-3xl font-bold mb-8 text-center">Our customer's opinion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(4)].map((_, index) => (
                      <svg key={index} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-4">Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out.</p>
                <div className="flex items-center">
                  <Image
                    src={`https://placehold.co/40x40.jpg?text=User${i}`}
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Customer Name</h4>
                    <p className="text-gray-600">Customer Title</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Craftsvilla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}