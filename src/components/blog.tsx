'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Send } from 'lucide-react'

export default function Blog() {
  const [hoveredId, setHoveredId] = useState(null)

  const blogPosts = [
    { id: 1, title: "Introducing New Features", date: "2023-05-15", excerpt: "Check out the latest updates to enhance your WhatsApp experience." },
    { id: 2, title: "Privacy and Security Tips", date: "2023-05-10", excerpt: "Learn how to keep your conversations secure and private." },
    { id: 3, title: "WhatsApp for Business", date: "2023-05-05", excerpt: "Discover how businesses are using WhatsApp to connect with customers." },
    { id: 4, title: "Community Guidelines", date: "2023-04-30", excerpt: "Understanding our community guidelines for a better messaging experience." },
    { id: 5, title: "WhatsApp Web: Tips & Tricks", date: "2023-04-25", excerpt: "Maximize your productivity with these WhatsApp Web hacks." },
    { id: 6, title: "The Future of Messaging", date: "2023-04-20", excerpt: "Explore upcoming trends in the world of instant messaging." },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#25D366] text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Gowhats</h1>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#128C7E]">
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05 }}
             onHoverStart={() => setHoveredId(post.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out border border-gray-200"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-[#128C7E] text-sm mb-4">{post.date}</p>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === post.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white transition duration-300 ease-in-out transform hover:scale-105">
                    Read More
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      <footer className="bg-[#F0F0F0] text-gray-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
              <p className="mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] bg-white text-gray-800"
                />
                <Button type="submit" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-r-lg">
                  <Send size={18} className="mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="md:text-right">
              <p className="mb-4">&copy; 2023 WhatsApp Blog. All rights reserved.</p>
              <nav className="space-x-4">
                <a href="#" className="text-gray-800 hover:text-[#25D366] transition duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-800 hover:text-[#25D366] transition duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-800 hover:text-[#25D366] transition duration-300">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}