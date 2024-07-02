import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/hero";
import ProductSection from "@/components/product-section"
import WhyUs from "@/components/why-us"
import WeHelp from "@/components/we-help"
import PopularProduct from "@/components/popular-product"

import Footer from "@/components/footer"

import NavbarContainer from "@/components/navbarContainer";
export default function Home() {
  return (
   

   
   <body>
    <NavbarContainer />
    <Hero/>
    <ProductSection/>
    <WhyUs/>
    <PopularProduct/>
    
 
    <Footer/>
   </body>
 
  );
}
