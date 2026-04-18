'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <motion.header className="bg-amber-50/80 w-full py-3 px-6 md:px-14 fixed top-0 z-[100] backdrop-blur-md border-b text-lg flex justify-between items-center"

    transition={{duration:0.8, ease: 'easeOut'}}
    initial={{opacity:0, y:-70}}
    animate={{opacity:1,y:0}}
     viewport={{ once: true, amount: 0.2 }} 
    
    
    
    >
      <nav className="md:grid grid-cols-3 items-center w-full max-w-screen-xl mx-auto hidden  ">
        {/* Left Nav */}
        <div className="flex gap-8 items-center">
          <Link href="/about" className="group relative">
            <span className="transition-all duration-300 ">
              About
            </span>
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/contact" className="group relative">
            <span className="transition-all duration-300 ">
              Contact Us
            </span>
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
            <Link href='/'><Image src="/images/Logo.png" width={240} height={50} alt="Logo" /></Link>
          
        </div>

        {/* Right Nav */}
        <div className="flex justify-end items-center">
          <Link href="/shop" className="group relative">
            <span className="transition-all duration-300 ">
              Shop
            </span>
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </nav>
      <div className="flex  md:hidden">
            <Link href='/'><Image src="/images/Logo.png" width={200} height={40} alt="Logo" /></Link>
          
        </div>
      <MobileMenu/>
    </motion.header>
  );
};

export default Header;
