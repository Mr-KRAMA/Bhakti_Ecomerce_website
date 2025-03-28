import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import CategorySection from '../components/CategorySection'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      
      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Bhakti Pharmaceutical</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Bhakti Pharmaceutical has established itself as a trusted name in the pharmaceutical industry. 
                We are committed to developing and manufacturing high-quality pharmaceutical products that meet international standards.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art manufacturing facilities and rigorous quality control processes ensure that every product 
                that bears the Bhakti name is safe, effective, and reliable.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Bhakti Pharmaceutical Facility" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Contact CTA */}
      <section className="py-12 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of pharmaceutical experts is ready to assist you with any inquiries about our products or services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Contact Us Today
            </Link>
            <Link to="/reports" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              Generate Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home