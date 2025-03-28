import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  const navLinkClass = ({ isActive }) => 
    `block py-2 px-3 rounded-md ${isActive 
      ? 'bg-primary-100 text-primary-800' 
      : 'text-gray-700 hover:bg-gray-100'}`
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary-700">Bhakti</span>
              <span className="text-xl font-medium text-gray-600">Pharma</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/reports" className={navLinkClass}>Reports</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
          
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button 
              type="button" 
              className="md:hidden ml-2 p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className={navLinkClass} onClick={closeMenu} end>Home</NavLink>
              <NavLink to="/products" className={navLinkClass} onClick={closeMenu}>Products</NavLink>
              <NavLink to="/reports" className={navLinkClass} onClick={closeMenu}>Reports</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar