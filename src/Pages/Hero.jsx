import React from "react";
import bgImage from "../../src/assets/IMG_5137.jpg";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
            id='home'
            className='relative w-full h-[70vh] md:h-[80vh] lg:h-[100vh] flex items-center justify-start overflow-hidden'
            aria-label='Hero Section'
        >
            
            {/* Background Image with Loading State */}
            <div className="absolute inset-0 w-full h-full bg-gray-800">
                <img
                    src={bgImage}
                    alt='Professional workspace with developer setup'
                    className='w-full h-full object-cover object-center'
                    loading="eager"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>

            {/* Gradient overlay for better text readability */}
            <div 
                className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0'
                aria-hidden="true"
            ></div>

            <div className='relative z-10 px-6 sm:px-10 md:px-20 lg:px-32 max-w-3xl'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                    Hi, I'm a{" "}
                    <span className='text-violet-400 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent'>
                        Full Stack Developer
                    </span>
                </h1>

                <p className='text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl'>
                    I'm a Computer Science and Engineering (CSE) graduate from
                    <span className='font-semibold text-orange-300'>
                        {" "}
                        Gopalganj Science and Technology University (GSTU)
                    </span>
                    , passionate about building interactive, user-friendly, and
                    efficient web applications using the
                    <span className='font-semibold text-orange-300'>
                        {" "}
                        MERN stack
                    </span>
                    .
                </p>

                <Link 
                    to='projects' 
                    smooth={true} 
                    duration={700} 
                    spy={true}
                    offset={-70} // Adjusts scroll position to account for fixed headers
                    className="inline-block"
                >
                    <button 
                        className='bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm sm:text-base px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50'
                        aria-label='View my projects'
                    >
                        See My Work
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;