import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const { addToCart } = useCart()
  
  useEffect(() => {
    const fetchedProduct = getProductById(parseInt(id))
    if (fetchedProduct) {
      setProduct(fetchedProduct)
    }
  }, [id])
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && value <= product.stock) {
      setQuantity(value)
    }
  }
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity)
  }
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/products')}
          className="btn btn-primary"
        >
          Back to Products
        </button>
      </div>
    )
  }
  
  return (
    <div className="py-8 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary-700">₹{product.price.toFixed(2)}</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2">
                  Availability: 
                  <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? ' In Stock' : ' Out of Stock'}
                  </span>
                </p>
                {product.stock > 0 && (
                  <p className="text-sm text-gray-500">{product.stock} units available</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center py-1 border-t border-b border-gray-300"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <button 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`btn ${product.stock > 0 ? 'btn-primary' : 'bg-gray-400 cursor-not-allowed'} w-full py-3`}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  Category: <span className="font-medium capitalize">{product.category}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200">
            <div className="flex border-b">
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'description' ? 'text-primary-700 border-b-2 border-primary-700' : 'text-gray-600'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'dosage' ? 'text-primary-700 border-b-2 border-primary-700' : 'text-gray-600'}`}
                onClick={() => setActiveTab('dosage')}
              >
                Dosage & Administration
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'safety' ? 'text-primary-700 border-b-2 border-primary-700' : 'text-gray-600'}`}
                onClick={() => setActiveTab('safety')}
              >
                Safety Information
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Description</h3>
                  <p className="text-gray-700">{product.longDescription}</p>
                </div>
              )}
              
              {activeTab === 'dosage' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Dosage & Administration</h3>
                  <p className="text-gray-700 mb-4">{product.dosage}</p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Important:</strong> Always follow your healthcare provider's instructions. 
                      The information provided here is general and may not apply to all patients.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'safety' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Information</h3>
                  
                  <h4 className="font-medium text-gray-800 mb-2">Side Effects:</h4>
                  <p className="text-gray-700 mb-4">{product.sideEffects}</p>
                  
                  <h4 className="font-medium text-gray-800 mb-2">Contraindications:</h4>
                  <p className="text-gray-700 mb-4">{product.contraindications}</p>
                  
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <p className="text-sm text-yellow-800">
                      <strong>Warning:</strong> Keep all medications out of reach of children. 
                      If you experience severe side effects, seek medical attention immediately.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail