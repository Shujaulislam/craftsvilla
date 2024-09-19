import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Craftsvilla</h3>
            <p className="mb-4">Handcrafted with love, delivered with care.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-300 transition-colors duration-200">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors duration-200">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors duration-200">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors duration-200">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-300 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Silk Dresses', 'Suits', 'Festival Wear', 'Accessories', 'Home Decor'].map((item) => (
                <li key={item}>
                  <Link href={`/category/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-300 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white bg-opacity-20 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p>&copy; 2024 Craftsvilla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer