'use client'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { MessageSquare, Globe, Zap, Image as ImageIcon, Webhook, BarChart,  } from 'lucide-react'
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function GowhatsLandingPage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans " >
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <MessageSquare className="h-6 w-6 text-[#25D366]" />
            <span className="text-xl font-bold">GoWhats</span>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
  {['Resources', 'Integration', 'Documentation', 'Blog', 'Pricing'].map((item, index) => (
    <DropdownMenu key={item}>
      <DropdownMenuTrigger 
        className="hover:text-[#25D366] transition-colors flex items-center"
        onClick={(e) => {
          if (item === 'Pricing') {
            e.preventDefault();
            navigate('/price');
          } else if (item === 'Blog') {
            e.preventDefault();
            navigate('/blog');
          }
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          {item}
        </motion.span>
      </DropdownMenuTrigger>
      {!['Pricing', 'Blog'].includes(item) && (
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => window.location.href = "https://f3engine.com/"}>F3 Engine</DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.location.href = "https://microbizware.com/"}>Bill4GenZ</DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  ))}
</nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-[#25D366] transition-colors">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Globe className="h-5 w-5" />
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.header>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#25D366] text-white py-2 text-center"
        >
          <p className="text-sm">
            Live Demo of WhatsApp API - <span className="font-bold underline cursor-pointer" onClick={() => navigate('/contact')} >Book Now</span>
          </p>
        </motion.div>
      </AnimatePresence>

      <main>
        <section className="py-20 bg-white text-black relative overflow-hidden">
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-b from-[#25D366]/10 to-transparent"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                One-stop <span className="text-[#25D366]">eCommerce solution</span> with our WhatsApp API!
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl mb-8 text-gray-600 leading-relaxed">
                Enjoy instant responses from our AI chatbot, automate conversations, and effortlessly track your service performance!
              </motion.p>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => window.location.href = "https://app.gowhats.in/"} size="lg" className="bg-[#25D366] hover:bg-[#000000] text-white transition-all duration-300">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              
              className="relative mx-auto w-full max-w-4xl aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-[1]">
                <img
                  src="https://res.cloudinary.com/dtoul17rs/image/upload/v1731155600/y3cgewysmr6m0ckrxrz0.png"
                  alt="Product "
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[3%] bg-white rounded-t-lg"></div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#25D366] py-16 -mt-[100px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
            >
              {[
                { title: "Over 1000+ Companies", subtitle: "Trust SaaSUS For Planning." },
                { title: "$3k+", subtitle: "Processed Sales" },
                { title: "5k+", subtitle: "Product Sold" },
                { title: "20+", subtitle: "Transaction Per Day" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="text-center text-white"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{item.title}</div>
                  <p className="text-lg">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3 variants={itemVariants} className="text-lg text-center font-bold text-[#25D366] mb-4">
                API Features
              </motion.h3>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                Unlock the Full Potential of the WhatsApp API
              </motion.h2>
              <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our WhatsApp API solution empowers businesses to automate customer communication, send notifications, and provide instant support.
              </motion.p>
              <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: MessageSquare, title: "Message Automation", description: "Automate customer interactions and engage more efficiently with AI-driven workflows." },
                  { icon: Globe, title: "Multi-language Support", description: "Serve customers in their preferred language with built-in multi-language support." },
                  { icon: Zap, title: "Quick Responses with AI", description: "Use AI to instantly respond to customer inquiries, providing a seamless support experience." },
                  { icon: ImageIcon, title: "Media Message Support", description: "Send rich media like images, videos, and documents to enhance customer engagement." },
                  { icon: Webhook, title: "Webhook Integration", description: "Integrate seamlessly with your existing system using customizable webhooks." },
                  { icon: BarChart, title: "Real-time Analytics", description: "Monitor message performance and customer interactions with real-time analytics." },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 h-full">
                      <CardHeader>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mb-4"
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                      <li className="flex items-center"><MessageSquare className="h-5 w-5 mr-2 text-[#25D366]" /> Unlimited Messages</li>
                      <li className="flex items-center"><Globe className="h-5 w-5 mr-2 text-[#25D366]" /> AI Chatbot Integration</li>
                      <li className="flex items-center"><Zap className="h-5 w-5 mr-2 text-[#25D366]" /> Customizable Workflows</li>
                      <li className="flex items-center"><BarChart className="h-5 w-5 mr-2 text-[#25D366]" /> 24/7 Support</li>
                    </ul>
                    <Button className="w-full bg-[#25D366] hover:bg-[#000000] text-white transition-all duration-300">Pay Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </motion.h2>
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    { question: "How do I integrate the WhatsApp API with my platform?", answer: "Our WhatsApp API comes with comprehensive documentation and SDKs for popular programming languages. You can easily integrate it using RESTful API calls or our client libraries." },
                    { question: "What are the pricing options for the WhatsApp API?", answer: "We offer flexible pricing plans based on your usage and needs. Our plans start from ₹999 per month, which includes unlimited messages and AI chatbot integration. For more details, please check our pricing section or contact our sales team." },
                    { question: "Is there a limit to the number of messages I can send?", answer: "Our standard plan includes unlimited messages. However, to prevent spam and ensure quality service, we have fair usage policies in place. For high-volume senders, we offer custom enterprise plans." },
                    { question: "Can I use the WhatsApp API for marketing purposes?", answer: "Yes, you can use the WhatsApp API for marketing, but you must comply with WhatsApp's business policies and obtain explicit consent from your customers before sending them marketing messages." },
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg overflow-hidden mb-4">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors duration-300 text-left">
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          {item.question}
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-white">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {item.answer}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>
     
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-[#25D366] rounded-lg p-8 text-white shadow-lg transform hover:scale-105 transition-all duration-500"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to elevate your customer interactions?</h2>
              <p className="text-xl mb-6">Get started with our WhatsApp API today and automate your business messaging.</p>
              <Button size="lg" className="bg-white text-[#25D366] hover:bg-gray-100 transition-all duration-300" onClick={() => window.location.href = "https://app.gowhats.in/"}>
             
                Start Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#25D366] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-4 md:mb-0">
              <MessageSquare className="h-6 w-6" />
              <span className="text-xl font-bold">GoWhats</span>
            </motion.div>
            <motion.nav variants={itemVariants} className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="hover:text-gray-200 transition-colors">API Features</a>
              <a href="#" className="hover:text-gray-200 transition-colors">API Documentation</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Blog</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Community</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Company</a>
            </motion.nav>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center text-gray-200"
          >
            <p>&copy; 2024 GoWhats. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
