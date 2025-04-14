import React from 'react'

export const Footer = () => {
    return (
        <footer className='py-8' id='contact'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <div className='flex items-center justify-bettewn flex-col md:flex-row'>
                    <div>
                        <h2 className='md:text-7xl text-4xl font-bold mb-10 text-white/50'>
                            Get in <span className='text-cyan-500'>touch</span>
                        </h2>
                        <a className='md:text-5xl text-3xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300'
                            href='mailto:sebquito.sc@gmail.com'>
                            sebquito.sc@gmail.com
                        </a>

                    </div>
                    <div className='text-white/50 mt-12 ml-5'>
                        <div className='mb-8'>
                            <p className='text-lg mb1'>Phone</p>
                            <a className='text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300'
                                href='wa.me/+5492995124686'>
                                (+54)2995124686
                            </a>
                        </div>
                        <div className='text-lg mt-8'>
                            <p className='text-lg mb1'>Office</p>
                            <p className='font-bold'>
                                Neuquén - Argentina
                            </p>
                        </div>

                    </div>
                </div>
                <div className='relative z-10 text-center mt-8 py-12'>
                    <h1 className='hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>
                        Seba Cascante
                    </h1>
                    <h1 className='md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>
                        Seba
                        <br/>
                        Cascante
                    </h1>
                </div>

                <div className='relative mt-12 container flex sm:justify-between justify-center item-center gap-10 max-sm:flex-col'>
                    <p className='text-gray-200 caption text-n-4 lg:block'>
                        2024 - All rights reserved
                    </p>
                    <ul className='flex gap-5 flex-wrap'>
                        <a
                        href='https://github.com/devSebaKsk' 
                        aria-label='GitHub'
                        className='text-gray-200 flex item-center justify-center w-10 h-10 rounded-full'>
                            <i class="fa-brands fa-github fa-2xl"/>
                        </a>
                        <a
                        href='www.instagra,.com/ot.iuq' 
                        aria-label='Instagram'
                        className='text-gray-200 flex item-center justify-center w-10 h-10 rounded-full'>
                           <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a
                        href='https://www.linkedin.com/in/sebastian-cascante/' 
                        aria-label='Linkeding'
                        className='text-gray-200 flex item-center justify-center w-10 h-10 rounded-full'>
                            <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
