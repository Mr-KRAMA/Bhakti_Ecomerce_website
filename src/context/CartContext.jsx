import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const [cartCount, setCartCount] = useState(0)
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    
    const count = cart.reduce((total, item) => total + item.quantity, 0)
    setCartCount(count)
  }, [cart])
  
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity }]
      }
    })
  }
  
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }
  
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }
  
  const clearCart = () => {
    setCart([])
  }
  
  const value = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}