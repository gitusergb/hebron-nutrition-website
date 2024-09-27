import React from 'react'

const imgg=[
  "https://i.ibb.co/mBFjTqD/die.jpg",
  "https://i.ibb.co/687wmpV/heart.jpg",
 "https://i.ibb.co/6BpM3br/stomac.jpg",
  "https://i.ibb.co/ws4MXft/liver.jpg",
  "https://i.ibb.co/nmsd8nT/joint.jpg",
  "https://i.ibb.co/PxzYq7h/kidney.jpg"
]

const ShopbyHealth = () => {
  return (
    <section className="container mx-auto py-8">
    <h3 className="text-2xl font-bold mb-4">Shop by Health concerns</h3>
    {/* <div className="flex justify-between items-center"> */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center">
        {['Diabetes', 'Heart Care', 'Stomach Care', 'Liver care', 'Bone, Joint & Muscle Care', 'Kidney Care'].map((item, i) => (
            <div key={i} className="text-center">
                <img src={imgg[i]} alt={item} className="w-36 h-36 object-cover mb-2 rounded-md"/>
                <p className='text-sm font-medium'>{item}</p>
            </div>
        ))}
    </div>
</section>
  )
}

export default ShopbyHealth

// https://placehold.co/150x150
