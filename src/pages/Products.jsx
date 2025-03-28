import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts, getProductsByCategory, searchProducts } from '../data/products'

function Products() {
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const category = searchParams.get('category')
  
  useEffect(() => {
    if (category) {
      setSelectedCategory(category)
      setProducts(getProductsByCategory(category))
    } else if (searchTerm) {
      setProducts(searchProducts(searchTerm))
    } else {
      setProducts(getProducts())
    }
  }, [category, searchTerm])
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm) {
      setProducts(searchProducts(searchTerm))
    } else {
      setProducts(getProducts())
    }
  }
  
  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
    
    if (category) {
      setProducts(getProductsByCategory(category))
    } else {
      setProducts(getProducts())
    }
  }
  
  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'antibiotics', label: 'Antibiotics' },
    { value: 'pain-relief', label: 'Pain Relief' },
    { value: 'vitamins', label: 'Vitamins & Supplements' }
  ]
  
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700"
                >
                  Search
                </button>
              </form>
            </div>
            
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products