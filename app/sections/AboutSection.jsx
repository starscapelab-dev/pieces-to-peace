'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import FadeInParagraph from '../components/FadeInParagraph';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};


const AboutSection = () => {
  return (
    <div className="items-center flex md:px-20 px-10 py-40 md:gap-0 gap-20 flex-wrap">


      {/* Left Side Images */}
      <motion.div className="md:w-1/3 lg:w-1/3 w-full relative"

      transition={{ duration: 0.8, ease: 'easeOut' }}
       initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
      >
        
        <Image
          src="/images/fabrics-2.jpeg"
          width={500}
          height={200}
          alt="fabric"
        />
        <Image
          src="/images/fabrics.jpg"
          width={500}
          height={200}
          className="border-10 border-white absolute top-[150px] left-10"
          alt="fabric"
        />
      </motion.div>

      {/* Right Side Text */}
      <motion.div
        className="md:w-2/3 w-full md:pl-20 flex-col gap-6 flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={textVariants}
        
      >
        <motion.h3 variants={textVariants}>Our World</motion.h3>
        <motion.h2 className="text-4xl" variants={textVariants}>
          Designed with intention
        </motion.h2>

        <motion.hr className="w-xl" variants={textVariants} />
        <FadeInParagraph paragraph="Individually created and made-to-order, our pieces are designed with intention—to bring quiet beauty into everyday living, while honouring a more conscious way of making. Our prints begin by hand, where each line carries a sense of presence. Created slowly and translated onto fabric through a considered process, they retain the softness, depth, and feeling of the original artwork—alive in detail, and gentle in expression."/>

        

        <motion.button className="w-fit p-4 bg-amber-800 text-white" variants={textVariants}>
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutSection;
