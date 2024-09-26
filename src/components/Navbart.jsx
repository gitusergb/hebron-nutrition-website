import React from 'react'

const Navbart = () => {
  return (
    <div className='bg-white shadow-md'>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center hidden md:flex">
          <img src="https://i.ibb.co/X2rsdZ2/HEBRON-NUTRITION.png" alt="HEBRON NUTRITION" className="h-10"/>
        </div>
        <div className="flex space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Shop by brand</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Shop by category</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Meet us CMO</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Contact Us</a>
        </div>
        <div className="flex space-x-4 hidden md:flex items-center ">
          <a href="#" className="text-gray-700 hover:text-blue-700"><i className="fas fa-search"></i></a>
          <a href="#" className="text-gray-700 hover:text-blue-700"><i className="fas fa-user"></i></a>
          <a href="#" className="text-gray-700 hover:text-blue-700"> <i className="fas fa-shopping-cart text-gray-700"></i></a>
        </div>
        <div className="md:hidden flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Shop by brand</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Shop by category</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Meet us CMO</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Contact Us</a>
        </div>
        <div className="md:hidden flex flex-col space-y-2">
          <a href="#" className="text-gray-700 hover:text-blue-700"><i className="fas fa-search"></i></a>
          <a href="#" className="text-gray-700 hover:text-blue-700"><i className="fas fa-user"></i></a>
          <a href="#" className="text-gray-700 hover:text-blue-700"> <i className="fas fa-shopping-cart text-gray-700"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Navbart