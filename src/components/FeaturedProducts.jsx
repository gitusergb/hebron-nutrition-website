import React, { useRef } from 'react';

const FeaturedProducts = () => {
  const productContainerRef = useRef(null);
  const scrollLeft = () => {
    productContainerRef.current.scrollBy({
      left: -300, // based on the width of items
      behavior: 'smooth',
    });
  };
  const scrollRight = () => {
    productContainerRef.current.scrollBy({
      left: 300, //based on the width of items
      behavior: 'smooth',
    });
  };

  return (
    <section className="container mx-auto py-8 relative">
    <h3 className="text-2xl font-bold mb-4 ">Featured Products</h3>

      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full focus:outline-none z-10"
      >
        <i className="fas fa-chevron-left text-black"></i>
      </button>
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2"  ref={productContainerRef}  style={{ scrollBehavior: 'smooth' }} >
    {Array(6).fill().map((_, i) => (
        <div key={i} className="bg-white shadow-md rounded p-4 w-60 sm:w-72 md:w-80 lg:w-96 xl:w-96">
        <img src="https://placehold.co/150x150" alt="Product Image" className="w-full h-40 object-cover mb-4"/>
        <h4 className="text-lg font-bold">Product Name</h4>
        <p className="text-gray-500">Rs. 99.00</p>
        <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded ">Add to Cart</button>
        </div>
     ))}
    </div> 

        {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full focus:outline-none z-10"
      >
        <i className="fas fa-chevron-right text-black"></i>
      </button>
  </section>
  )
}

export default FeaturedProducts

// https://i.ibb.co/G0rM4JG/ima1.jpg