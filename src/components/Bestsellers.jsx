import React from 'react'

const Bestsellers = () => {
  return (
    <section className="py-8 bg-gray-100 container mx-auto">
    <h3 className="text-2xl font-bold mb-4">Proven Bestsellers</h3>
    {/* <div className="flex justify-between items-center"> */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
    {['Multivitamins', 'Omega - 3', 'Nervous system support', 'Gastrointestinal Health', 'Joint Health', 'Household Essentials'].map((item, i) => (
            <div key={i} className="text-center flex flex-col justify-between items-center">
              <img src="https://placehold.co/150x150" alt={item} className="w-25 h-25 object-cover mb-2 rounded-full"/>
                <span className='text-sm font-medium' >{item}</span>
             </div>
           ))}
    </div>

  </section>
  )
}

export default Bestsellers