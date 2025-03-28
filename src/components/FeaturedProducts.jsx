import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { getProducts } from '../data/products'

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const allProducts = getProducts()
    const featured = allProducts.filter(product => product.featured).slice(0, 4)
    setProducts(featured)
  }, [])
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality pharmaceutical products designed to improve health and wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts