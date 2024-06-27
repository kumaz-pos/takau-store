
import { Inter } from "next/font/google";
import "./globals.css";
import {SessionProvider} from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });
import './globals.css'

import NextAuthProvider from "@/components/NextAuthProvider";
export const metadata = {
  title: "Takau store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <NextAuthProvider  >

    
    <html  lang="en">
      	<link href="css/bootstrap.min.css" rel="stylesheet"></link>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
		<link href="css/tiny-slider.css" rel="stylesheet"></link>
		<link href="css/style.css" rel="stylesheet"></link>
   
      <body >{children}</body>


      <script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
    </html>
    </NextAuthProvider>
  );

}
