"use client"; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from "@/helpers/supabase";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';


const modalColor = 'bg-white'; 
const Navbar = ({data}) => {
  
    let cartLength=data&& data.data.length
   
    const [isMobile, setIsMobile] = useState( typeof window !== "undefined" ? window.innerWidth < 780: 0);
  /*
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth < 769: 0,
      );
      */
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };
  return  (
        <>
            {!isMobile ? (
                // Laptop Navbar Code Here
                <nav className={`bg-white`}>
                    <div className="flex justify-between mx-auto items-center py-4 px-24">
                    <Link href="/" className="flex items-center">
                    <img
                        src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo_w_background.png"
                        height={600}
                        width={600}
                        alt="Image"
                        className="h-10 w-auto"
                    />
                </Link>
               
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                        <Link href="/" className="hover:text-gray-400 no-underline text-[#002F63] ">HOME</Link>
                    <Link href="/shop" className="hover:text-gray-400 no-underline text-[#002F63]">PARTS</Link>
                    <Link href="/cars" className="hover:text-gray-400 no-underline text-[#002F63]">CARS</Link>
                    <Link href="/about" className="hover:text-gray-400 no-underline text-[#002F63]">ABOUT</Link>
                    <Link href="/contact" className="hover:text-gray-400 no-underline text-[#002F63]">CONTACT</Link>
                        </ul>
                        <ul className="flex gap-6 items-center cursor-pointer">
                        <Link href="/" style={{
                            textDecoration:"none"
                        }} className="">
                            <p className='flex gap-2 justify-between  w-full'>
                            <IoPersonOutline color='red' size={30} />
                       
                    
                            </p>
                      
                    </Link>
                           
                        <Link href="/cart" style={{
                            textDecoration:"none"
                        }} className="">
                            <p className='flex gap-2 justify-between  w-full'>
                            <IoCartOutline color='red' size={30} />
                        <sup className="  text-red  " style={{
                            fontSize:"0.9rem"
                        }}>{cartLength}</sup>
                    
                            </p>
                      
                    </Link>
                       
                        </ul>
                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code Here
                <nav className={` py-4 px-4`}>
                    <div className="mx-auto flex justify-between items-center ">
                    <Link href="/" className="flex items-center">
                    <img
                        src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo_w_background.png"
                        height={600}
                        width={600}
                        alt="Image"
                        className="h-10 w-auto"
                    />
                </Link>
                        <div className="flex justify-end items-center gap-6  cursor-pointer">
                        
  
 
                        <Link href="/shop" className=""><FaUser/></Link>
                    <Link href="/cart" className="flex" style={{
                        alignItems:"center",
                        gap:"0.4rem",
                        textDecoration:"none",
                        color:"red"


                    }}>
                          <FaShoppingCart size={15}/>
                    <sup className="  text-red  " style={{
                            fontSize:"0.9rem"
                        }}>{cartLength}</sup>
                    
                  
                   
                    </Link>
                            <FaBars onClick={handleBarsIconClick} className=" cursor-pointer" />
                        </div>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 z-10 flex justify-center items-center">
                            <div className={`absolute inset-0 ${modalColor}`} />
                            <FaTimes
                                className="absolute top-6 right-4  cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />
                            <div className="relative bg-white-900 w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                <ul className="flex flex-col gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                        <Link href="/" className="hover:text-gray-400 no-underline text-[#002F63] ">HOME</Link>
                    <Link href="/shop" className="hover:text-gray-400 no-underline text-[#002F63]">SHOP</Link>
                    <Link href="/cars" className="hover:text-gray-400 no-underline text-[#002F63]">CARS</Link>
                    <Link href="/about" className="hover:text-gray-400 no-underline text-[#002F63]">ABOUT</Link>
                    <Link href="/contact" className="hover:text-gray-400 no-underline text-[#002F63]">CONTACT</Link>
                        </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}

export default Navbar;
{
  /**    <nav className="bg-white text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="flex items-center">
                    <img
                        src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo_w_background.png"
                        height={100}
                        width={200}
                        alt="Image"
                        className="h-10 w-auto"
                    />
                </Link>
                <button
                    className="md:hidden text-white focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsFurni"
                    aria-controls="navbarsFurni"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg className="h-6 w-6" color='gray' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-gray-400 no-underline text-[#002F63] ">HOME</Link>
                    <Link href="/shop" className="hover:text-gray-400 no-underline text-[#002F63]">SHOP</Link>
                    <Link href="/orders" className="hover:text-gray-400 no-underline text-[#002F63]">ORDERS</Link>
                    <Link href="/about" className="hover:text-gray-400 no-underline text-[#002F63]">ABOUT</Link>
                    <Link href="/contact" className="hover:text-gray-400 no-underline text-[#002F63]">CONTACT</Link>
                    <Link href="/profile" className="hover:text-gray-400">
                        <IoPersonOutline color='red' size={30} />
                    </Link>
                    <Link href="/cart" className="relative hover:text-gray-400">
                        <IoCartOutline color='red' size={30} />
                        <span className="absolute top-0 right-0 inline-block h-6 w-6 rounded-full bg-red-600 text-white text-center text-xs">{cartCount}</span>
                    </Link>
                </div>
                <div className="md:hidden">
                    <div id="navbarsFurni" className="flex flex-col items-start space-y-4 mt-4 md:hidden">
                        <Link href="/" className="hover:text-gray-400 no-underline text-[#002F63]">HOME</Link>
                        <Link href="/shop" className="hover:text-gray-400 no-underline text-[#002F63]">SHOP</Link>
                        <Link href="/orders" className="hover:text-gray-400 no-underline text-[#002F63]">ORDERS</Link>
                        <Link href="/about" className="hover:text-gray-400 no-underline text-[#002F63]">ABOUT</Link>
                        <Link href="/contact" className="hover:text-gray-400 no-underline text-[#002F63]">CONTACT</Link>
                        <Link href="/profile" className="hover:text-gray-400 flex items-center">
                            <IoPersonOutline color='red' size={30} />
                            <span className="ml-2">Profile</span>
                        </Link>
                        <Link href="/cart" className="relative hover:text-gray-400 flex items-center">
                            <IoCartOutline color='red' size={30} />
                            <span className="absolute top-0 right-0 inline-block h-6 w-6 rounded-full bg-red-600 text-white text-center text-xs">{cartCount}</span>
                            <span className="ml-2">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav> */
}