import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                            <div>
                                <h4 className="text-lg font-bold mb-4">Company</h4>
                                <ul>
                                    <li><a href="#" className="mb-2">Why shop with us?</a></li>
                                    <li><a href="#" className="mb-2">Shipping</a></li>
                                    <li><a href="#" className="mb-2">Returns</a></li>
                                    <li><a href="#" className="mb-2">About us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-4">Security & Privacy</h4>
                                <ul>
                                    <li><a href="#" className=" mb-2">Secure Website</a></li>
                                    <li><a href="#" className=" mb-2">HCI Compliance</a></li>
                                    <li><a href="#" className=" mb-2">Privacy Policy</a></li>
                                    <li><a href="#" className=" mb-2">Terms of service</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-4">Subscribe</h4>
                                <p className="mb-4">Invite customers to join your mailing list.</p>
                                <input type="email" placeholder="Email address" className="mt-2 mb-4 p-2 text-black rounded w-full"/>
                                <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded w-full border border-white">Sign up</button>
                            </div>
                            <div className=" mx-auto text-left text-sm w-40 max-h-80 ">
            <p className="text-sm ">Statements made on this website 
              have not been evaluated by the U.S. 
              Food and Drug Administration. These 
              products are not intended to diagnose, 
              treat, cure or prevent any disease. 
              If you have a medical condition, 
              consult your physician before use. 
              The website's content is not a substitute 
              for individual medical advice.</p>
          </div>
                           
        </div>
       
        
      </footer>
  )
}

export default Footer