import React from 'react'

const Dealtheday = () => {
  return (
    <section className="container mx-auto py-8">
    <h3 className="text-2xl font-bold mb-4">Deal of the day</h3>
    {/* <div className="flex space-x-4 overflow-x-auto"> */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array(6).fill().map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded p-4 w-50 flex flex-col justify-center">
                <img src="https://placehold.co/150x150" alt="Product Image" className="w-full h-40 object-cover mb-4"/>
                <p className="text-sm font-medium">Product Name</p>
                <div className='flex justify-start gap-4'>
                <span className="text-gray-500 line-through">Rs. 99.00</span>
                <span className="text-red-500">Rs. 75.00</span>
                </div>
              
                <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
        ))}
    </div>
</section>
  )
}

export default Dealtheday