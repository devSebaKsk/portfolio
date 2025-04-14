import React from 'react'
import project1 from '../assets/images/proj5.png';
import project2 from '../assets/images/proj6.png';

export const About = () => {
    return (
        <section id='about' className='text-white p-8'>
            <h2 className='text-6xl font-bold text-center mb-16'>
                About <span className='text-cyan-500'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                    <p className='text-white/50 mb-6'>
                        I'm passionate full-stack developer with a strong foundation in computer science and operations.
                        I love creating innovative web solution. My journey in tech started with a curiosity about
                        how things work and improve them, wich led to persue a career as a developer.
                    </p>
                    <div className='rounded-lg p-4 mb-4 border border-white/20'>
                        <code className='text-cyan-200/50'>
                            const skills = [
                            <br />
                            &nbsp;&nbsp;'JavaScript',
                            <br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'Flask',
                            <br />
                            &nbsp;&nbsp;'Python',
                            <br />
                            &nbsp;&nbsp;'SQL',
                            <br />
                            &nbsp;&nbsp;'AWS',
                            ];
                        </code>
                    </div>
                </div>

                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
                    <p className='text-white/50 mb-6'>
                        I specialize in building robust and scalable web applications using
                        modern technologies. My expertise spans both front-end and back-end
                        development , allowing me to create seamless, end-to-end solutions.
                    </p>
                    <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
                        <img
                            src={project1}
                            alt='Project 1'
                            className='absolute inset-0 w-full h-full object-cover'
                        />

                    </div>
                </div>



                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                    <p className='text-white/50 mb-4'>
                        I'm proficient in a wide range of technologies and constantly
                        expanding my skills set to stay at the forefront of web development.
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='border border-white/20 rounded-lg p-3'>
                            <h4 className='text-cyan-300 font-medium mb-2'>
                                Frontend
                            </h4>
                            <ul className='text-white/50 space-y-1 text-sm'>
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>Bootstrap</li>
                                <li>Framer Motion</li>
                            </ul>

                        </div>
                        <div className='border border-white/20 rounded-lg p-3'>
                            <h4 className='text-cyan-300 font-medium mb-2'>
                                Backend
                            </h4>
                            <ul className='text-white/50 space-y-1 text-sm'>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>MySql</li>
                                <li>CloudFlare</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                        <div className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium mb-1'>
                                    Front-end
                                </label>
                                <div className='w-full bg-white/10 rounded-full h-2'>
                                    <div
                                    className='bg-cyan-300 h-2 rounded-full'
                                    style={{width:"90%"}}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='block text-sm font-medium mb-1'>
                                    Back-end
                                </label>
                                <div className='w-full bg-white/10 rounded-full h-2'>
                                    <div
                                    className='bg-cyan-300 h-2 rounded-full'
                                    style={{width:"85%"}}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='block text-sm font-medium mb-1'>
                                    DevOps
                                </label>
                                <div className='w-full bg-white/10 rounded-full h-2'>
                                    <div
                                    className='bg-cyan-300 h-2 rounded-full'
                                    style={{width:"70%"}}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
                        <p className='text-white/50'>
                            I belive I am writting clear, maintainable code and following best
                            practices. My approach involves understanding client needs, planning
                            thoroughly, and delivering high-quality solutions on time.
                        </p>
                </div>
                <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                            <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
                                <img
                                src={project2}
                                alt='Project 2'
                                className='absolute insert-0 w-full h-full object-cover'
                                />
                            </div>
                            <div>
                            <h3 className='text-2xl font-bold mt-4 mb-2'>05. Goals</h3>
                            <p className='text-white/50'>My goal is to continue growing as a developer, tackling
                                challenging projects, and contributing to the tech community. I'm
                                always excited to learn new technologies and push the boundaries
                                of what's possible in the web development.
                            </p>
                            </div>
                </div>
            </div>

        </section>
    )
}
