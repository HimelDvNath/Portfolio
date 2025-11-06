import React from "react";
import bgImage from "../../src/assets/IMG_5137.png";
const Hero = () => {
    return (
        <div
            className='hero h-[100vh]'
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <div className='hero-overlay'></div>
            <div className='flex justify-start items-start p-20 '>
                <div className='w-2/4 '>
                    <h1 className='text-xl md:text-5xl font-bold mb-4'>
                        Hi, I’m a Full Stack Developer
                    </h1>
                    <p className='text-lg md:text-xl mb-6'>
                        I’m a Computer Science and Engineering (CSE) graduate
                        from Gopalganj Science and Technology University (GSTU)
                        with a passion for building interactive, user-friendly,
                        responsive, and efficient web applications using the
                        MERN stack.
                    </p>
                    <button className='btn btn-primary'>See Work</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
