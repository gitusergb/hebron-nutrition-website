import React from 'react'

const TopBrands = () => {
  return (
    <section className="py-8 container mx-auto ">
    <h3 className="text-2xl font-bold mb-3">Top Brands</h3>
    <div className="flex justify-evenly items-center">
    <img src="https://i.ibb.co/F4wkY2p/cell.png" alt="Cellcore" className="h-28"/>
    <img src="https://i.ibb.co/WB5FQTP/microbio.png" alt="Microbiome Labs" className="h-28"/>
    <img src="https://i.ibb.co/m504FWW/pendululum.png" alt="Pendulum" className="h-28"/>
    <img src="https://i.ibb.co/SXS0cRG/Nothing-but-pure.png" alt="Pure Encapsulations" className="h-28"/>
    <img src="https://i.ibb.co/z86Vkd4/reserch.png" alt="Researched Nutritionals" className="h-28"/>
    </div>
  </section>
  )
}

export default TopBrands
