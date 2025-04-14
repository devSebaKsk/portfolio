import React from 'react';
import { motion } from "framer-motion";
import profilepic from "../assets/images/fondo.png"

export const Hero = () => {
  return (
    <div className='relative overflow-clip text-white min-h-screen bg-[linear-gradient(to_bottom,#000,#002b80_35%,#003399_67%,#3333cc_85%)]'>
      <div className='absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
        bg-[radial-gradient(closest-side,#000_75%,#003399)]
        top-[450px] border-[.5px] border-[#8CD6DE]/20'/>
      <div className='container relative mx-auto px-4 pt-12 pb-24'>
        <div className='flex flex-col items-center justify-center text-center z-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative mb-8 mt-24'
          >
            <div className='absolute inset-0 bg-gradient-to-b from-emerald-200/30 to-transparent rounded-full blur-3xl'></div>
            <img src={profilepic}
              alt='Seba Ksk'
              className='w-[250px] relative z-10'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl'
          >
            <h1 className='text-6xl md:text-7xl front-bold tracking-tighter mb-4'>
              Hi, I am <br /> Seba <span className='text-cyan-500'>Cascante</span>
            </h1>
            <p className='text-xl text-white/80 max-w-lg mx-auto leading-relax mb-6'>
              I am a fullstack developer focusing on creating websites that provides user with best experience and operations.
            </p>
            <div className='flex gap-4 justify-center'>
              <motion.a
                href='#contact'
                whileHover={{ scale: 1.15 }}
                className='px-6 py-3 bg-cyan-500 rounded-full font-medium hover:bg-cyan-600 transition-colors'>
                Contact Me
              </motion.a>
              <motion.a
                href='#portfolio'
                whileHover={{ scale: 1.15 }}
                className='px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors'>
                View Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
