import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { TrashIcon } from '@heroicons/react/24/outline'

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [discount, setDiscount] = useState(0)
  
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 1000 ? 0 : 100
  const total = subtotal + shipping - discount
  
  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, parseInt(quantity))
  }
  
  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
  }
  
  const handleApplyCoupon = () => {
    // Simple coupon logic for demonstration
    if (couponCode.toUpperCase() === 'Bhakti10' && !couponApplied) {
      const discountAmount = subtotal * 0.1 // 10% discount
      setDiscount(discountAmount)
      setCouponApplied(true)
    }
  }
  
  const handleCheckout = () => {
    // In a real application, this would redirect to a checkout page or process
    alert('Checkout functionality would be implemented here in a production environment.')
  }
  
  if (cart.length === 0) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">Your cart is empty.</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <Link to={`/products/${item.id}`} className="text-sm font-medium text-gray-900 hover:text-primary-600">
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            max={item.stock}
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="w-12 text-center py-1 border-t border-b border-gray-300"
                          />
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex justify-between">
                  <button 
                    onClick={() => clearCart()}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                  <Link to="/products" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800">
                    {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                  Apply Coupon Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Enter coupon code"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={couponApplied}
                  />
                  <button 
                    onClick={handleApplyCoupon}
                    disabled={couponApplied}
                    className={`px-4 py-2 rounded-r-md ${couponApplied 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700'} text-white`}
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-green-600 text-sm mt-1">Coupon applied successfully!</p>
                )}
              </div>
              
              <button 
                onClick={handleCheckout}
                className="btn btn-primary w-full py-3"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart