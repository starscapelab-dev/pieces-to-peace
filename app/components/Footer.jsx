'use client';


import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className='mt-auto bg-[#D2C0AB] w-full py-20 px-10 flex flex-col md:flex-row flex-wrap md:justify-center gap-10 md:gap-0   border-t-1'>
        <div className='w-full md:w-1/5'>
      <h3>Products</h3>
        <ul className='space-y-2'>
         
          <li>Wallpapers</li>
          <li>Fabrics</li>
          <li>Paints</li>
        </ul>
      

      </div>
          <div className='w-full md:w-1/5'>
      <h3>About</h3>
         <ul className='space-y-2'>
         
          <li>The Company</li>
          <li>Where to buy</li>
          <li>Contact</li>
        </ul>
      

      </div>
          <div className='w-full md:w-1/5'>
      <h3>Support</h3>
          <ul className='space-y-2'>
         
          <li>Contact</li>
          <li>Instructions</li>
          <li>FAQs</li>
        </ul>
      

      </div>
          <div className='w-full md:w-1/5'>
      <h3>Follow us</h3>
          <ul className='space-y-2'>
         
          <li>Instagram</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
      

      </div>
          <div className='w-full md:w-1/5'>
      <h3>Info</h3>
         <ul className='space-y-2'>
          
         
          <li  className={`relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-800 after:transition-all after:duration-300 hover:after:w-full ${
    pathname === Link.href ? 'text-amber-800 font-semibold after:w-full' : ''
  }`}>Legal Notice</li>
          <li>Cookies Policy</li>
          <li>Shipping and return</li>
        </ul>
      

      </div>

      </div>

      <div className='bg-[#D2C0AB] px-10 py-5 text-center'>

        <p>Pieces to Peace © 2026

</p>
      </div>

      


    </div>
  )
}

export default Footer