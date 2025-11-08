import React from "react";
import bgImage from "../../src/assets/IMG_5137.jpg";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
            id='home'
            className='relative w-full h-[70vh] md:h-[80vh] lg:h-[100vh] flex items-center justify-start overflow-hidden'>
            <img
                src={bgImage}
                alt='background'
                className='absolute inset-0 w-full h-full object-cover object-center'
            />
            <div className='absolute inset-0 bg-black/25 z-0'></div>

            <div className='relative z-10 px-6 sm:px-10 md:px-20 lg:px-32 max-w-3xl'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight'>
                    Hi, I’m a{" "}
                    <span className='text-orange-400'>
                        Full Stack Developer
                    </span>
                </h1>

                <p className='text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed'>
                    I’m a Computer Science and Engineering (CSE) graduate from
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

                <Link to='projects' smooth={true} duration={700} spy={true}>
                    <button className='btn btn-primary text-sm sm:text-base px-6 py-2 sm:py-3'>
                        See Work
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
