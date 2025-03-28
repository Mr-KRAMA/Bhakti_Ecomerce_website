import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container-custom relative py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Healthcare Products for a Healthier Life
          </h1>
          <p className="text-xl mb-8">
            Bhakti Pharmaceutical provides high-quality pharmaceutical products 
            that meet international standards and improve quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Browse Products
            </Link>
            <Link to="/about" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero