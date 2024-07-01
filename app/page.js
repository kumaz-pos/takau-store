import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/hero";
import ProductSection from "@/components/product-section"
import WhyUs from "@/components/why-us"
import WeHelp from "@/components/we-help"
import PopularProduct from "@/components/popular-product"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import NavbarContainer from "@/components/navbarContainer";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
   

   
   < >
    <NavbarContainer />
    <Hero/>
    <ProductSection/>
    <WhyUs/>
    <PopularProduct/>
    
 
    <Footer/>
   </>
 
  );
}
