import React from 'react'

const ShopbyHealth = () => {
  return (
    <section className="container mx-auto py-8">
    <h3 className="text-2xl font-bold mb-4">Shop by Health concerns</h3>
    {/* <div className="flex justify-between items-center"> */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {['Diabetes', 'Heart Care', 'Stomach Care', 'Liver care', 'Bone, Joint & Muscle Care', 'Kidney Care'].map((item, i) => (
            <div key={i} className="text-center">
                <img src="https://placehold.co/150x150" alt={item} className="w-25 h-25 object-cover mb-2"/>
                <span className='text-sm font-medium'>{item}</span>
            </div>
        ))}
    </div>
</section>
  )
}

export default ShopbyHealth