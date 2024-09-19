import React from 'react'

const NewsletterSection = () => {
  return (
    <section className="bg-purple-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Join the Craftsvilla Community</h2>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product announcements, and insider tips from our artisans.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection