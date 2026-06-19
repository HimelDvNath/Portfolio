import React from "react";
import bgImage from "../assets/IMG_5137.JPG";

import { Link } from "react-scroll";

const techStack = ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL"];

const Hero = () => {
    return (
        <section
            id='home'
            className='relative w-full h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-start overflow-hidden'
            aria-label='Hero Section'>

            {/* Background */}
            <div className='absolute inset-0 w-full h-full bg-gray-900'>
                <img
                    src={bgImage}
                    alt='Developer workspace'
                    className='w-full h-full object-cover object-center opacity-50'
                    loading='eager'
                    onError={(e) => { e.target.style.display = "none"; }}
                />
            </div>
            <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20 z-0' />

            {/* Content */}
            <div className='relative z-10 px-6 sm:px-10 md:px-20 lg:px-32 max-w-3xl'>
                <p className='text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3'>
                    Welcome to my portfolio
                </p>

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight'>
                    Hi, I'm{" "}
                    <span className='text-orange-400'>Himel Devnath</span>
                </h1>

                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-5'>
                    Software Engineer{" "}
                    
                </h2>

                <p className='text-sm sm:text-base text-gray-300/90 mb-6 leading-relaxed max-w-xl'>
                    Software Engineer at{" "}
                    <span className='font-semibold text-orange-300'>Spectrum Software &amp; Consulting (Pvt.) Ltd</span>
                    , building enterprise web applications for banking and financial services clients.
                    CSE graduate from{" "}
                    <span className='font-semibold text-orange-300'>GSTU</span>.
                </p>

                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2 mb-8'>
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className='text-xs font-medium text-gray-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm'>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-wrap gap-4'>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={700}
                        spy={true}
                        offset={-70}
                        className='inline-block'>
                        <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30'>
                            View Projects
                        </button>
                    </Link>
                    <a
                        href="/CV.pdf"
                        download
                        className='inline-block border border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-semibold text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-300 hover:scale-105'>
                        Download CV
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-60'>
                <span className='text-white text-xs tracking-widest uppercase'>Scroll</span>
                <div className='w-px h-8 bg-linear-to-b from-orange-400 to-transparent' />
            </div>
        </section>
    );
};

export default Hero;
