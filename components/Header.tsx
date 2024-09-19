import React, { useState } from 'react'
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react"
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold italic tracking-wider">Craftsvilla</Link>
        <nav className="hidden lg:flex space-x-6">
          {['Store', 'Designers', 'Categories', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-200">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-purple-300 transition-colors duration-200">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/wishlist" className="hover:text-purple-300 transition-colors duration-200">
            <Heart className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="hover:text-purple-300 transition-colors duration-200">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link href="/account" className="hover:text-purple-300 transition-colors duration-200">
            <User className="h-5 w-5" />
          </Link>
          <button 
            className="lg:hidden hover:text-purple-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 space-y-2">
          {['Store', 'Designers', 'Categories', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="block py-2 px-4 hover:bg-purple-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header