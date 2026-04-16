'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { scale: 1.2, opacity: 0, transformOrigin: 'center'  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  return (
    <motion.div
      className="flex min-h-screen  bg-[url('/images/Hero-bg.webp')] bg-cover bg-center items-center justify-center text-white flex-col px-10 text-center  "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      <motion.h1
        className="font-medium mt-auto text-4xl md:text-5xl "
        variants={textVariants}
        custom={0}
        initial="hidden"
        animate="visible"
      >
        Quiet beauty into everyday living
      </motion.h1>



      <motion.div
        className="mt-auto mb-10 text-s"
        variants={textVariants}
        custom={1}
        initial="hidden"
        animate="visible"
      >
        <h5 className="text-white">Individually created and made-to-order, honouring a more conscious way of making</h5>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
