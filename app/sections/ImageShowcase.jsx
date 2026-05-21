'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageShowcase = () => {
  return (
    <div className='flex flex-col gap-10 py-10'>
     
     

      {/* Grid Layout Image */}
      <motion.div
        className="relative w-full h-[500px] md:h-[700px] overflow-hidden px-4 md:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/p2p-img-1.jpg"
          alt="Collection of handcrafted textiles and fabrics"
          fill
          className="object-contain"
          priority={false}
        />
      </motion.div>
    </div>
  )
}

export default ImageShowcase
