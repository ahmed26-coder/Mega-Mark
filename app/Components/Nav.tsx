"use client"
import React from 'react'
import { useState } from "react";
import { TiLocation } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiUser3Line } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState<string>("Groceries");
  return (
    <>
      <div className=" hidden sm:flex bg-bg sm:flex justify-between items-center py-[0.3%] px-[5%]">
        <small className=" text-primary">Welcome to worldwide Megamart!</small>
        <div className=" flex gap-4 items-center">
          <small className=" flex gap-1 items-center text-primary"><TiLocation className=" text-blue text-base"/>Deliver to <span className=" font-bold">423651</span></small>
          <p>|</p>
          <small className=" flex gap-1 items-center text-primary"><FaTruckFast className=" text-blue text-base"/>Track your order</small>
          <p>|</p>
          <small className=" flex gap-1 items-center text-primary"><BiSolidOffer className=" text-blue text-base"/>All Offers</small>
        </div>
      </div>

      <div className=" flex justify-between py-[1%] px-[5%]">
        <h1 className=" flex items-center gap-2 text-3xl font-medium text-blue"><CgMenuLeft className=" bg-BlueGray rounded-md p-1 w-12 h-12" /> Mega Mark</h1>
        <div className=" hidden sm:flex gap-4 items-center w-[60%]">
          <div className=" hidden sm:flex gap-2 items-center w-[60%] bg-BlueGray rounded-md px-5">
            <HiOutlineSearch className=" text-blue text-2xl" />
            <input className="w-[100%] py-2 outline-0" type="text" placeholder='Search essentials, groceries and more...' />
            <TfiMenuAlt className=" text-blue text-2xl" />
          </div>
          <h2 className=" hidden sm:flex gap-1 items-center text-primary text-xl font-medium"><RiUser3Line className=" text-blue text-3xl" />Sign Up/Sign In</h2>
          <h2 className=" hidden sm:flex text-[#D9D9D9]">|</h2>
          <h2 className=" hidden sm:flex gap-1 items-center text-primary text-xl font-medium"><RiShoppingCart2Line className=" text-blue text-3xl" />Cart</h2>
        </div>
      </div>

      <div className="hidden sm:flex border-1 border-[#EDEDED]"></div>

      <div className=" hidden sm:flex justify-between px-[4%] py-[1%]">
        <p onClick={() => setActiveIndex("Groceries")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Groceries" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Groceries<RiArrowDownSLine className={`text-lg ${ activeIndex === "Groceries" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Premium")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Premium" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Premium Fruits<RiArrowDownSLine className={`text-lg ${ activeIndex === "Premium" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Home")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Home" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Home & Kitchen<RiArrowDownSLine className={`text-lg ${ activeIndex === "Home" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Fashion")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Fashion" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Fashion<RiArrowDownSLine className={`text-lg ${ activeIndex === "Fashion" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Electronics")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Electronics" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Electronics<RiArrowDownSLine className={`text-lg ${ activeIndex === "Electronics" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Beauty")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Beauty" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Beauty<RiArrowDownSLine className={`text-lg ${ activeIndex === "Beauty" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Improvement")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Improvement" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Home Improvement<RiArrowDownSLine className={`text-lg ${ activeIndex === "Improvement" ? "text-white" : "text-blue" }`} /></p>
        <p onClick={() => setActiveIndex("Toys")} className={` py-1 px-4 rounded-full flex items-center gap-2 font-medium ${ activeIndex === "Toys" ? " bg-blue text-white" : " bg-BlueGray text-black" }`}>Sports, Toys & Luggage<RiArrowDownSLine className={`text-lg ${ activeIndex === "Toys" ? "text-white" : "text-blue" }`} /></p>
      </div>

      <div className="hidden sm:flex border-1 border-[#EDEDED]"></div>
    </>
  )
}
