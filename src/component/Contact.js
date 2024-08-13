import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from 'react-icons/si';
const Contact = () => {
  return (
    <div>
           <div className="mt-10 max-sm:mt-0 text-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
        <p className="text-blue-400">Let's Work Together</p>
      </div>
      <div className="flex flex-wrap justify-center space-x-10 space-y-10 md:space-y-0">
        <div className="text-center">
          <FaPhone className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Phone & Mobile</h2>
          <p>+91 8050578803</p>
        </div>
        <div className="text-center">
          <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Email & Website</h2>
          <p>bsingh6636@outlook.com</p>
          <p>reallygreatsite.com</p>
        </div>
        <div className="text-center">
          <FaMapMarkerAlt className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Address</h2>
          <p>Bengaluru-64 , KA</p>
        </div>
        <div className="text-center">
          <FaInstagram className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Instagram</h2>
          <p>@bsingh6636</p>
        </div>
        <div className="text-center">
          <FaLinkedin className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Instagram</h2>
          <p>@bsingh6636</p>
        </div>
        {/* <div className="text-center">
          <SiLeetcode className="text-4xl text-blue-400 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">LeetCode</h2>
          <p>https://leetcode.com/u/bsingh6636/</p>
        </div> */}
      
      </div>
     
      <div className="mt-20 text-center border-t-2 border-gray-600 pt-10">
        <h1 className="text-5xl font-extrabold uppercase">Brijesh Kumar kushwaha</h1>
        {/* <p className="text-gray-500">PORTFOLIO 2024</p> */}
      </div>
    </div>
    </div>
  )
}

export default Contact