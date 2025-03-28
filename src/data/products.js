// Sample product data
const products = [
  {
    id: 1,
    name: "Bhakti Amoxicillin 500mg",
    category: "antibiotics",
    description: "Broad-spectrum antibiotic effective against a wide range of bacterial infections. Each capsule contains 500mg of Amoxicillin.",
    longDescription: "Bhakti Amoxicillin is a high-quality antibiotic used to treat a variety of bacterial infections, including respiratory tract infections, urinary tract infections, ear infections, and skin infections. Each capsule contains 500mg of Amoxicillin, a penicillin-type antibiotic that works by stopping the growth of bacteria. Our formulation ensures optimal absorption and effectiveness.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 150,
    featured: true,
    dosage: "1 capsule every 8 hours or as directed by your physician",
    sideEffects: "May cause nausea, vomiting, diarrhea, or allergic reactions. Consult your doctor if you experience any severe side effects.",
    contraindications: "Do not use if you have a known allergy to penicillin or cephalosporin antibiotics."
  },
  {
    id: 2,
    name: "Bhakti Paracetamol 500mg",
    category: "pain-relief",
    description: "Effective pain reliever and fever reducer. Each tablet contains 500mg of Paracetamol.",
    longDescription: "Bhakti Paracetamol is a trusted pain reliever and fever reducer suitable for adults and children over 12 years. It provides effective relief from headaches, toothaches, backaches, menstrual pains, muscle aches, and reduces fever associated with colds and flu. Our high-quality formulation ensures quick absorption and long-lasting relief.",
    price: 99.50,
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 200,
    featured: true,
    dosage: "1-2 tablets every 4-6 hours as needed, not exceeding 8 tablets in 24 hours",
    sideEffects: "Generally well-tolerated when used as directed. Rare side effects may include nausea or rash.",
    contraindications: "Do not exceed recommended dose. Consult your doctor if you have liver disease or are taking other medications."
  },
  {
    id: 3,
    name: "Bhakti Multivitamin Complex",
    category: "vitamins",
    description: "Complete multivitamin and mineral supplement for daily health maintenance.",
    longDescription: "Bhakti Multivitamin Complex is a comprehensive formula containing essential vitamins and minerals to support overall health and wellbeing. Our balanced formulation includes Vitamins A, C, D, E, B-complex, and minerals like Zinc, Magnesium, and Iron. Regular use helps maintain immune function, energy levels, and fills nutritional gaps in your diet.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 100,
    featured: true,
    dosage: "1 tablet daily with food",
    sideEffects: "Rarely causes mild stomach discomfort if taken on an empty stomach.",
    contraindications: "Safe for most adults. Consult your healthcare provider if pregnant, nursing, or taking other medications."
  },
  {
    id: 4,
    name: "Bhakti Ibuprofen 400mg",
    category: "pain-relief",
    description: "Non-steroidal anti-inflammatory drug (NSAID) for pain and inflammation relief.",
    longDescription: "Bhakti Ibuprofen is a powerful anti-inflammatory medication that effectively reduces pain, inflammation, and fever. It's particularly effective for arthritis pain, menstrual cramps, headaches, and minor injuries. Each tablet contains 400mg of Ibuprofen in an easy-to-swallow coating.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 120,
    featured: false,
    dosage: "1 tablet every 6-8 hours with food, not exceeding 3 tablets in 24 hours",
    sideEffects: "May cause stomach upset, heartburn, or dizziness. Long-term use may increase risk of cardiovascular events.",
    contraindications: "Not recommended for people with stomach ulcers, heart conditions, or kidney problems. Avoid during late pregnancy."
  },
  {
    id: 5,
    name: "Bhakti Vitamin C 1000mg",
    category: "vitamins",
    description: "High-potency Vitamin C supplement with added Zinc for immune support.",
    longDescription: "Bhakti Vitamin C provides a powerful dose of 1000mg of Vitamin C plus Zinc to support immune function and overall health. Vitamin C is a potent antioxidant that helps protect cells from damage, supports collagen production for healthy skin, and enhances iron absorption. Our formula includes Zinc for additional immune support.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584472376859-7f6d81566e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 80,
    featured: true,
    dosage: "1 tablet daily or as recommended by your healthcare provider",
    sideEffects: "High doses may cause digestive discomfort or diarrhea in some individuals.",
    contraindications: "Generally safe for most people. Those with kidney stones or certain metabolic disorders should consult a doctor."
  },
  {
    id: 6,
    name: "Bhakti Azithromycin 500mg",
    category: "antibiotics",
    description: "Macrolide antibiotic effective against respiratory, skin, and other infections.",
    longDescription: "Bhakti Azithromycin is a powerful macrolide antibiotic that treats a wide range of bacterial infections including respiratory tract infections, skin infections, ear infections, and certain sexually transmitted diseases. Our 500mg tablets provide a convenient dosing schedule with fewer tablets needed for a complete course of treatment.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 60,
    featured: false,
    dosage: "As prescribed by your doctor, typically 500mg on day 1, followed by 250mg daily for 4 days",
    sideEffects: "May cause nausea, diarrhea, abdominal pain, or allergic reactions.",
    contraindications: "Not suitable for patients with certain heart conditions or liver disease. Inform your doctor about all medications you're taking."
  },
  {
    id: 7,
    name: "Bhakti Calcium + Vitamin D3",
    category: "vitamins",
    description: "Essential supplement for bone health and calcium absorption.",
    longDescription: "Bhakti Calcium + Vitamin D3 provides the perfect combination for optimal bone health. Each tablet contains 600mg of elemental calcium and 400 IU of Vitamin D3, which enhances calcium absorption. Regular supplementation helps maintain bone density, supports muscle function, and may reduce the risk of osteoporosis, especially in older adults.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 90,
    featured: false,
    dosage: "1 tablet twice daily with meals",
    sideEffects: "Rarely causes constipation or mild stomach upset.",
    contraindications: "Those with hypercalcemia, kidney stones, or certain kidney conditions should consult a doctor before use."
  },
  {
    id: 8,
    name: "Bhakti Diclofenac Gel 1%",
    category: "pain-relief",
    description: "Topical anti-inflammatory gel for localized pain relief.",
    longDescription: "Bhakti Diclofenac Gel provides targeted relief for muscle and joint pain. This 1% topical gel delivers the anti-inflammatory medication directly to the site of pain, reducing systemic exposure. It's effective for arthritis pain, sprains, strains, and sports injuries. The non-greasy formula absorbs quickly and has a pleasant cooling sensation.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 70,
    featured: false,
    dosage: "Apply a thin layer to the affected area 3-4 times daily and massage gently",
    sideEffects: "May cause skin irritation, redness, or itching at the application site.",
    contraindications: "Do not use on broken or irritated skin, or if you have aspirin or NSAID allergies."
  }
]

// Get all products
export const getProducts = () => {
  return products
}

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

// Get products by category
export const getProductsByCategory = (category) => {
  if (!category) return products
  return products.filter(product => product.category === category)
}

// Get featured products
const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

// Search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  )
}