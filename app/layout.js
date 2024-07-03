
import { Inter } from "next/font/google";

import './globals.css'
import {SessionProvider} from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });


import NextAuthProvider from "@/components/NextAuthProvider";
export const metadata = {
  title: "Takau store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
   

    
    <html  lang="en">
    
    <head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="author" content="Untree.co"/>
  <link rel="shortcut icon" href="favicon.png"/>

  <meta name="description" content="" />
  <meta name="keywords" content="bootstrap, bootstrap4" />

		<link href="css/bootstrap.min.css" rel="stylesheet"/>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
		<link href="css/tiny-slider.css" rel="stylesheet"/>
		<link href="css/style.css" rel="stylesheet"/>
	
	</head>
   

      {children}


    	<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
    </html>
 
  );

}
