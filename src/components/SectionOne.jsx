
import React, {useState} from 'react'

// https://i.ibb.co/7Wp5Pxg/img1.webp
// https://i.ibb.co/ChHgs15/img2.webp
// https://i.ibb.co/x85FWV3/img3.webp


const SectionOne = () => {
 const  Is=[
  {
    src:'https://i.ibb.co/x85FWV3/img3.webp',
    alt:'Immune Support 1'
},
{
  src:'https://i.ibb.co/ChHgs15/img2.webp',
  alt:'Immune Support 2'
},
{
  src:'https://i.ibb.co/7Wp5Pxg/img1.webp',
  alt:'Immune Support 3'
},
  {
      src:'https://i.ibb.co/RbJ6MY7/images-1.jpg',
      alt:'Immune Support 4'
  },
  {
    src:'https://i.ibb.co/Xz89yK1/images.jpg',
    alt:'Immune Support 5'
  }
 ]
 const [currentImageIndex, setCurrentImageIndex]=useState(0);
 const handlePrev = () => {
  setCurrentImageIndex((prevIndex) => 
    prevIndex === 0 ? Is.length - 1 : prevIndex - 1
  );
};
const handleNext = () => {
  setCurrentImageIndex((prevIndex) => 
    prevIndex === Is.length - 1 ? 0 : prevIndex + 1
  );
};

  return (
    <div className="relative">
       <img
          src={Is[currentImageIndex].src}
          alt={Is[currentImageIndex].alt}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col  items-center justify-center bg-black bg-opacity-50">

          <h1 className="text-white text-4xl font-bold">Immune Support</h1>
          <button className="bg-purple-950 text-white py-2 px-6 rounded mt-4">Shop Now</button>
        </div>

          {/* Left Arrow */}
          <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        >
          <i class="fas fa-chevron-left text-white"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        >
          <i class="fas fa-chevron-right text-white"></i>
        </button>

      </div>
  )
}

export default SectionOne


// https://i.ibb.co/RbJ6MY7/images-1.jpg
// https://i.ibb.co/Xz89yK1/images.jpg