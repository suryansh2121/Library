"use client"

import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants remain unchanged
const linkVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const sidebarVariants = {
  open: {
    x: "0%", 
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
  closed: {
    x: "100%", 
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

const items = ["home","about", "contact"];

const Links = () => {
  return (
    <motion.div 
      className="absolute flex flex-col items-center justify-center w-full h-full text-center gap-5 z-[9999]"
      variants={linkVariants}
    >
      {items.map((item) => (
        <motion.a  
          className="border-b-2 border-white w-[60%] text-left text-[1.5rem] font-['Pacifico','cursive'] text-white no-underline"
          href={`${item}`} 
          key={item} 
          variants={itemVariants}
        >
          {item.toLocaleUpperCase()}
        </motion.a>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col justify-center items-center fixed top-0 right-0 h-full z-[9999] text-black"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div 
        className="fixed top-0 right-0 bottom-0 w-[450px] bg-transparent z-[9999]"
        variants={sidebarVariants}
      >
        <Links />
      </motion.div>
     
      <div className="fixed top-[25px] right-[25px] z-[10001]">
        <Button 
          className="w-[50px] h-[50px] rounded-full bg-transparent border-none cursor-pointer"
          setOpen={setIsOpen} 
        />
      </div>
    </motion.div>
  );
};


const ResponsiveNavbar = () => {
  return (
    <div className="max-[380px]:w-1/2">
      <Navbar />
    </div>
  );
};

export default ResponsiveNavbar;