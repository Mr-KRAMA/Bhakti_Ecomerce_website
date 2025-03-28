import { Link } from 'react-router-dom'

function CategorySection() {
  const categories = [
    {
      id: 1,
      name: 'Antibiotics',
      description: 'Effective treatments for bacterial infections',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=antibiotics'
    },
    {
      id: 2,
      name: 'Pain Relief',
      description: 'Solutions for managing pain and inflammation',
      image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=pain-relief'
    },
    {
      id: 3,
      name: 'Vitamins & Supplements',
      description: 'Support your health with essential nutrients',
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=vitamins'
    }
  ]
  
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of pharmaceutical products organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={category.link}
              className="group block"
            >
              <div className="relative rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection