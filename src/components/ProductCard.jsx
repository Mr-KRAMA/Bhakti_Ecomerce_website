import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/products/${product.id}`} className="block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-primary-700 font-bold">₹{product.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary text-sm py-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard