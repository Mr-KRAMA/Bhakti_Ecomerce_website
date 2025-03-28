import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About Bhakti Pharmaceutical</h1>
          <p className="text-xl max-w-3xl">
            A leading pharmaceutical company committed to improving health and wellbeing through innovative and high-quality products.
          </p>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Bhakti Pharmaceutical Private Limited began as a small manufacturing unit with a big vision: to provide affordable, high-quality pharmaceutical products to improve healthcare outcomes across India.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown into a respected name in the pharmaceutical industry, known for our commitment to quality, innovation, and customer satisfaction. Today, our products are trusted by healthcare professionals and patients alike.
              </p>
              <p className="text-gray-600">
                With state-of-the-art manufacturing facilities and a dedicated team of professionals, we continue to expand our product range and reach, while maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Bhakti Pharmaceutical History" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by our core values, we strive to make a positive impact on healthcare globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To develop and manufacture pharmaceutical products of the highest quality that improve health outcomes and enhance quality of life, while maintaining ethical business practices and environmental responsibility.
              </p>
              <p className="text-gray-700">
                We are committed to making our products accessible and affordable, ensuring that more people can benefit from advances in pharmaceutical science.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be recognized globally as a leading pharmaceutical company that sets the standard for quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                We envision a world where everyone has access to safe, effective, and affordable medications that improve and extend lives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions and actions every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We are uncompromising in our commitment to the quality and safety of our products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new ways to improve our products and processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 00-2.298.634l-.172.087a4 4 0 01-3.556 0l-.172-.087a4 4 0 00-2.298-.634L5.88 8.464A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibility</h3>
              <p className="text-gray-600">
                We are committed to social and environmental responsibility in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Manufacturing Excellence */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Bhakti Manufacturing Facility" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Manufacturing Excellence</h2>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art manufacturing facilities are equipped with the latest technology and adhere to international standards of Good Manufacturing Practices (GMP).
              </p>
              <p className="text-gray-600 mb-4">
                We implement rigorous quality control measures at every stage of production, from raw material testing to finished product analysis, ensuring that all our products meet the highest standards of quality and safety.
              </p>
              <p className="text-gray-600">
                Our facilities are regularly audited by regulatory authorities and certified for compliance with international standards, reflecting our commitment to excellence in pharmaceutical manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a healthcare professional, a potential partner, or a patient, we invite you to learn more about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Explore Our Products
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About