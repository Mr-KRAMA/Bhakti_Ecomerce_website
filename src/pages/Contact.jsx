import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real application, this would send the form data to a server
    // For this demo, we'll simulate a successful submission
    
    // Simulate form processing
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you shortly!'
    })
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our products or services? We're here to help. Reach out to our team.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
              <address className="not-italic text-gray-600">
                <p>123 Pharma Street</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>India</p>
              </address>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone & Fax</h3>
              <p className="text-gray-600">Phone: +91 98765 43210</p>
              <p className="text-gray-600">Fax: +91 22 1234 5678</p>
              <p className="text-gray-600 mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">General Inquiries:</p>
              <p className="text-primary-600">info@Bhaktipharma.com</p>
              <p className="text-gray-600 mt-2">Customer Support:</p>
              <p className="text-primary-600">support@Bhaktipharma.com</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      className="btn btn-primary py-3 px-6"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-md">
                {/* In a real application, this would be an embedded Google Map */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p className="text-gray-600 text-center p-4">
                    Map would be embedded here in a production environment.<br />
                    Bhakti Pharmaceutical Pvt. Ltd.<br />
                    123 Pharma Street, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I place a bulk order for your products?</h3>
                <p className="text-gray-600">
                  For bulk orders, please contact our sales team directly at sales@Bhaktipharma.com or call us at +91 98765 43210. We offer special pricing and terms for bulk purchases.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">
                  Yes, we ship our products internationally to select countries. Shipping costs and delivery times vary by location. Please contact our customer service team for specific information about shipping to your country.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I become a distributor for Bhakti Pharmaceutical products?</h3>
                <p className="text-gray-600">
                  We're always looking for reliable partners to help distribute our products. Please send your business details and proposal to partnerships@Bhaktipharma.com, and our business development team will get in touch with you.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What quality certifications do your products have?</h3>
                <p className="text-gray-600">
                  All our products are manufactured in facilities that comply with Good Manufacturing Practices (GMP) and are approved by relevant regulatory authorities. Our quality management system is ISO 9001:2015 certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact