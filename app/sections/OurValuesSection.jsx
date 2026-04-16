import Image from 'next/image'
import React from 'react'
import FadeInParagraph from '../components/FadeInParagraph'

const OurValuesSection = () => {
  return (

  
    <div className=' flex flex-col md:p-20 lg:p-40 pt-40 p-10'>

        <h2 className='text-center mb-10'>Our Values</h2>


        <div className='flex-row md:gap-10 lg:gap-30 md:flex'>

            <div className='md:w-1/3'>




    <Image

    src='/images/piece-1.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>Respectful Process</h3>


     <FadeInParagraph
     className='text-center'
     paragraph="We work in a way that respects both material and meaning. By producing only what is needed, we move away from excess and towards a system that values balance—between creation and consumption, beauty and responsibility."/>


       </div>
       <div className='md:w-1/3'>


    <Image

    src='/images/piece-2.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>Family-Led Practice</h3>


    <FadeInParagraph
     className='text-center'
     paragraph="Born from a family-led practice, Pieces to Peace is shaped by closeness—of people, process, and purpose. Our inspirations are drawn from culture, femininity, and a quiet inner strength, expressed through forms that feel both intimate and timeless."/>


       </div>
<div className='md:w-1/3'>


    <Image

    src='/images/piece-3.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>Gathered with Care</h3>

<FadeInParagraph
     className='text-center'
     paragraph="We believe textiles carry energy—in the way they are made, the hands they pass through, and the spaces they eventually become a part of. At Pieces to Peace, each piece is not just created—it is gathered, with care."/>


       </div>
    


        </div>
   
     
     
     </div>

   
  )
}

export default OurValuesSection