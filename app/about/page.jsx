'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeInParagraph from '../components/FadeInParagraph';
import Header from '../components/Header';
import Footer from '../components/Footer';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          className="flex min-h-[60vh] bg-[url('/images/Hero-bg.webp')] bg-cover bg-center items-center justify-center text-white flex-col px-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-medium text-4xl md:text-6xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            A gentler way of making
          </motion.h1>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-col md:px-20 px-10 py-20 gap-16">
          {/* Introduction */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <FadeInParagraph
              className="text-lg leading-relaxed"
              paragraph="Every textile carries the memory of how it was made—of the materials it draws from, the hands that shape it, and the world it eventually becomes part of. At Pieces to Peace, we create with this awareness."
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/fabrics.jpg"
              fill
              className="object-cover"
              alt="Artisan fabrics"
            />
          </motion.div>

          {/* Family-Led Studio */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center">Family-Led Studio</h2>
            <FadeInParagraph
              className="text-lg leading-relaxed text-center"
              paragraph="As a family-led studio, our process is intentionally close and considered. We make only what is needed, allowing us to move away from excess and towards a quieter, more thoughtful rhythm of creation."
            />
          </motion.div>

          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl mb-4">Certified & Traceable</h3>
              <FadeInParagraph
                paragraph="We work towards certified materials and traceable processes, aligning with globally recognised standards such as GOTS (Global Organic Textile Standard) and GRS (Global Recycled Standard). Each choice is made to honour resources, reduce waste, and respect the journey of what we create."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl mb-4">Made to Stay</h3>
              <FadeInParagraph
                paragraph="Our pieces are designed to stay—timeless in expression, gentle in presence, and made to be lived with, cared for, and held onto. At Pieces to Peace, responsibility is not an addition. It is something we carry, from beginning to end."
              />
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            className="max-w-3xl mx-auto text-center py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl italic text-amber-900">
              Responsibility is not an addition—it is something we carry, from beginning to end.
            </h2>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
