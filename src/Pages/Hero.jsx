import React from "react";
import bgImage from "../../src/assets/IMG_5137.png";

const Hero = () => {
    return (
        <section id="home"
            className="relative h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            <div className='absolute inset-0 hero-overlay'></div>

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-32 max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Hi, I’m a <span className="text-orange-400">Full Stack Developer</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                    I’m a Computer Science and Engineering (CSE) graduate from
                    <span className="font-semibold text-orange-300"> Gopalganj Science and Technology University (GSTU)</span>,
                    passionate about building interactive, user-friendly, and efficient web applications using the
                    <span className="font-semibold text-orange-300"> MERN stack</span>.
                </p>

                <button className="btn btn-primary text-sm sm:text-base px-6 py-2 sm:py-3">
                    See Work
                </button>
            </div>
        </section>
    );
};

export default Hero;
