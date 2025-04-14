import React, { useState } from 'react';
import { motion, AnimatePresence} from "framer-motion";
import proj1 from "../assets/images/projchiki.png"
import proj2 from "../assets/images/projfong.png"
import proj3 from "../assets/images/proj12.png"
import autoprefixer from 'autoprefixer';


const projects =[
    {
        title:"Chiki Glam Web Page",
        desc:"Single Page for a event planner bussines ofering their services",
        devstack:"React, Motion, Sass, Firebase",
        link:"www.chikiglam.com.ar",
        git:"https://github.com/devSebaKsk/ChikiGlam",
        src:proj1,
        type:"Front"
    },
    {
        title:"Fong Web Page",
        desc:"Single Page created for a fungi food seller ofering their products",
        devstack:"Boostrap, CSS, Html5, Firebase",
        link:"www.fong.com.ar",
        git:"https://github.com/devSebaKsk/fong.com.ar",
        src:proj2,
        type:"Front"
    },
    {
        title:"Login Users",
        desc:"Example of Loging Page y have developed for any tipe of bussines.",
        devstack:"React, Motion, Sass, Firebase, Flask",
        link:"",
        git:"https://github.com/4GeeksAcademy/devsebaksk-Auth-sys",
        src:proj3,
        type:"Fullstack"
    }
]

export const Portfolio = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) =>{
        setExpandedIndex(expandedIndex==index ? null : index);
    }

  return (
    <div className='text-white py-24 md:py-64' id="portfolio">
        <div className='container mx-auto px-4'>
        <h2 className='text-6xl font-bold text-center mb-16'>
                Selected <span className='text-cyan-500'>Projects</span>
        </h2>
        <div className='space-y-8'>
            {
                projects.map((projects,index)=>(
                    <motion.div
                    key={index}
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5,delay:index*0.1}}
                    className='bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
                    >
                        <div 
                        className='p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/20'
                        onClick={() => toggleExpand(index)}
                        >
                            <h3 className='text-4xl font-semibold'>
                                {projects.title}
                            </h3>
                            <div className='flex item-center space-x-4'>
                                <span className='text-3xl font-light text-cyan-300'>
                                    0{index + 1}
                                </span>
                                <i class={`fa-solid fa-chevron-down fa-xl pt-4 w-6 h-6 tranform transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}></i>
                            </div>
                        </div>
                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                initial={{height:0, opacity:0}}
                                animate={{height: "auto", opacity:1 }}
                                exit={{height:0, opacity:0}}
                                transition={{duration: 0.3}}
                                className='px-6 pb-6 bg-black/20 border border-white/10'
                                >
                                    <div className='flex flex-col pt-3 md:flex-row gap-8'>
                                        <img
                                        src={projects.src}
                                        alt={projects.title}
                                        className='w-full md:w-1/2 h-64 object-cover rounded-lg'
                                        />
                                        <div className='flex-1'>
                                            <p className='text-white/70 mb-4'>{projects.desc}</p>
                                            <p className='text-cyan-300 font-medium mb-2'>
                                                Stack: {projects.devstack}
                                            </p>
                                            <p className='text-cyan-400/60 font-medium mb-4 capitalize'>
                                                Type: {projects.type}
                                            </p>
                                            <div className='flex justify-start items-center space-x-4'>
                                                <a href={projects.link} className='text-cyan-400 hover:text-green-300 transition-color'>
                                                <i class="fa-solid fa-xl fa-arrow-up-right-from-square"/>
                                                </a>
                                                <a href={projects.git} className='text-gray-400 hover:text-gray-300 transition-color'>
                                                <i class="fa-brands fa-xl fa-github"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))
            }
        </div>
        </div>
    </div>
  )
}
