import Navbar from "@/components/Navbar";
import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Suryansh-Library",
  description: "A library management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
