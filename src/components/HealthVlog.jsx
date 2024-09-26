import React from 'react'

const HealthVlog = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="relative rounded-md">
      <iframe
      className="w-full h-64 rounded-lg"
      width="100%" 
      height="370"  
      src="https://www.youtube.com/embed/Q1sT3sbVcQw"
      title="10 Ways to improve your mental health | Best Video on Mental Health"
    
      frameBorder="10px"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen

    ></iframe>

          {/* <img src="https://placehold.co/1200x300" alt="Mental Health" className="w-full h-64 object-cover"/> */}
             {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl font-bold text-gray-900">10 WAYS TO IMPROVE YOUR</h2>
                    <h2 className="text-4xl font-bold text-red-600">MENTAL HEALTH</h2>
       </div> */}
   </div>
 </section>
  )
}

export default HealthVlog

// https://youtu.be/Q1sT3sbVcQw?feature=shared