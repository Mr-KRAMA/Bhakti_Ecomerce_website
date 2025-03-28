function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Shivam',
      role: 'Medical Director, City Hospital',
      content: 'Malvyn Pharmaceutical has been our trusted supplier for over 5 years. Their products consistently meet the highest quality standards, and their service is exceptional.'
    },
    {
      id: 2,
      name: 'Shashank',
      role: 'Pharmacist',
      content: 'As a pharmacist, I appreciate the reliability and effectiveness of Malvyn\'s products. My customers have reported excellent results, and I\'m confident in recommending their range.'
    },
    {
      id: 3,
      name: 'Sachin',
      role: 'Healthcare Consultant',
      content: 'The quality control at Malvyn is impressive. Their commitment to maintaining international standards makes them stand out in the pharmaceutical industry.'
    }
  ]
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from healthcare professionals who trust our products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials