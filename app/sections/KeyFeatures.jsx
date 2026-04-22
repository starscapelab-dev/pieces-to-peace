'use client'
import React from 'react'
import FadeInParagraph from '../components/FadeInParagraph'
import { motion } from 'framer-motion'

const KeyFeatures = () => {
  return (

    <motion.div className='flex flex-col p-10 justify-center '>
<div className="relative overflow-hidden py-20 flex items-center justify-center">
     
      <motion.div
        className="absolute inset-0 bg-[url('/images/floral.webp')] bg-cover bg-center scale-110"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className='bg-white/80 p-20 z-10'>
        <h2 className='md:text-9xl text-xl '>

              Timeless textiles, thoughtfully made

        </h2>

      </div>
      </div>
     
    

  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-20 p-10 text-center '>

        <div className='flex flex-col gap-2'>
            <h3>Made-to-Order</h3>

            <FadeInParagraph paragraph="Each piece is individually created only when needed, reducing waste and ensuring every textile is intentionally made for its future home with care."/>


        </div>
        <div className='flex flex-col gap-2'>
            <h3>Hand-Drawn Prints</h3>
            <FadeInParagraph paragraph="Our prints begin by hand, where each line carries presence and is translated onto fabric through a considered process that honors the original artwork."/>

        </div>
        <div className='flex flex-col gap-2'>
            <h3>Certified Materials</h3>
            <FadeInParagraph paragraph="We work towards GOTS and GRS certified materials with traceable processes, ensuring our textiles honor resources and respect the journey of creation."/>
        </div>
        <div className='flex flex-col gap-2'>
            <h3>Timeless Design</h3>
             <FadeInParagraph paragraph="Our pieces are designed to stay—timeless in expression, gentle in presence, and made to be lived with, cared for, and cherished for years."/>

        </div>



      </div>



  </motion.div>
  


  )
}

export default KeyFeatures