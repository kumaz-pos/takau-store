import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductSection from "@/components/product-section"
import WhyUs from "@/components/why-us"
import WeHelp from "@/components/we-help"
import PopularProduct from "@/components/popular-product"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
   

   
   < >
    <Navbar />
    <Hero/>
    <ProductSection/>
    <WhyUs/>
    <PopularProduct/>
    
 
    <Footer/>
   </>
 
  );
}
