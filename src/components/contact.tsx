import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  // WhatsApp number (removed spaces and special characters)
  const whatsappNumber = "918524089733"  // Added your number with country code
  // const contactEmail = "techvaseegrah@gmail.com"  // Added your email

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    // Create the message text
    const messageText = `New Contact Form Submission:
    
Full Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`

    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank')

    // Optional: Clear form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Let Us Know Your Query</h1>
            <p className="text-gray-500 dark:text-gray-400">
              We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-medium">+91 85240 89733</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Call Us Anytime</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-medium">techvaseegrah@gmail.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Us</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-medium">Thanjavur,Tamilnadu</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Headquarter</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">We'll Get In Touch Shortly</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Fill in your details and we'll get back to you.</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Full Name</Label>
                  <Input 
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20b858]" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
