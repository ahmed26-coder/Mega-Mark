import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";

export default function Footer() {
  return (
    <div className=" bg-blue sm:flex relative justify-between px-[8%] py-[2%] text-white">
      <div className=" w-[80%] sm:flex justify-between">
      <div className=" space-y-2">
        <h1 className=" text-4xl font-bold">Mega Mark</h1>
        <h4 className=" text-lg font-bold">Contact </h4>
        <p className=" flex gap-1 items-center"><FaWhatsapp className=" text-2xl"  />Whats App <br />+1 202-918-2132</p>
        <p className=" flex gap-1 items-center"><PiPhoneCallLight className=" text-2xl" />Call Us <br />+1 202-918-2132</p>
        <h4 className=" text-lg font-bold">Download App</h4>
        <div className=" flex gap-5">
          <img className=" rounded-lg w-[30%]" src="/app.jpg" alt="" />
          <img className=" rounded-lg w-[30%]" src="/google.jpg" alt="" />
        </div>
      </div>
      <ul className=" list-disc space-y-2">
        <h3 className=" text-lg font-medium border-b-2 border-white">Most Popular Categories</h3>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Staples</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Beverages</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Personal Care</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Home Care</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Baby Care</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Vegetables & Fruits</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Snacks & Foods</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Dairy & Bakery</li>
      </ul>
      <ul className=" list-disc space-y-2">
        <h3 className=" text-lg font-medium border-b-2 border-white">Customer Services</h3>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">About Us</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Terms & Conditions</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">FAQ</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Privacy Policy</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">E-waste Policy</li>
        <li className=" ml-6 hover:scale-105 hover:text-red-500 transition-transform duration-300">Cancellation & Return Policy</li>
      </ul>
      </div>
      <img className=" w-[15%] h-fit absolute top-0 right-0" src="/footer.webp" alt=" logo" />
    </div>
  )
}
