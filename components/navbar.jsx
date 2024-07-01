"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from "@/helpers/supabase";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";

function Navbar() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        async function fetchCartData() {
            const { data } = await supabase.from("Cart").select("*");
            setCartCount(data.length);
        }
        fetchCartData();
    }, []);

    return (
        <nav className="bg-white w-full fixed top-0 text-white">
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
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-gray-400 no-underline text-[#002F63] ">HOME</Link>
                    <Link href="/shop" className="hover:text-gray-400 no-underline text-[#002F63] ">SHOP</Link>
                    <Link href="/orders" className="hover:text-gray-400 no-underline text-[#002F63] ">ORDERS</Link>
                    <Link href="/about" className="hover:text-gray-400 no-underline text-[#002F63] ">ABOUT</Link>
                    <Link href="/contact" className="hover:text-gray-400 no-underline text-[#002F63] ">CONTACT</Link>
                    <Link href="/profile" className="hover:text-gray-400 no-underline text-[#002F63] ">
                        <IoPersonOutline color='red' size={30} />
                    </Link>
                    <Link href="/cart" className="relative hover:text-gray-400">
                        <IoCartOutline color='red' size={30} />
                        <span className="absolute top-0 right-0 inline-block h-6 w-6 rounded-full bg-red-600 text-white text-center text-xs">{cartCount}</span>
                    </Link>
                </div>
                <div className="md:hidden">
                    <div id="navbarsFurni" className="flex flex-col items-start space-y-4 mt-4 md:hidden">
                        <Link href="/" className="hover:text-[#002F63] text-[#002F63]!important no-underline">HOME</Link>
                        <Link href="/shop" className="hover:text-gray-400 text-[#002F63] no-underline">SHOP</Link>
                        <Link href="/orders" className="hover:text-gray-400 text-[#002F63] no-underline">ORDERS</Link>
                        <Link href="/about" className="hover:text-gray-400 text-[#002F63] no-underline">ABOUT</Link>
                        <Link href="/contact" className="hover:text-gray-400 text-[#002F63] no-underline">CONTACT</Link>
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
        </nav>
    );
}

export default Navbar;
