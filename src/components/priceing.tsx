'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Globe, Zap, BarChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className="text-lg text-center font-bold text-[#25D366] mb-4">
            Price Planning
          </motion.h3>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
            Flexible Pricing for WhatsApp API Usage
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose a plan that fits your needs and scale as your business grows.
          </motion.p>
          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            <Card className="bg-white shadow-lg border-2 border-[#25D366] transform hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">WhatsApp API Subscription</CardTitle>
                <p className="text-gray-600">For businesses needing API-based communication.</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-6">₹999 <span className="text-lg font-normal text-gray-600">/ month</span></p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-[#25D366]" />
                    <span>Unlimited Messages</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-[#25D366]" />
                    <span>AI Chatbot Integration</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-[#25D366]" />
                    <span>Customizable Workflows</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-[#25D366]" />
                    <span>24/7 Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300">
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}