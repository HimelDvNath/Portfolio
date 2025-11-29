import React from "react";
import Shopnity from "../Components/Project/Shopnity";

const Projects = () => {
    return (
        <div className='bg-gray-50 py-20 flex flex-col items-center justify-center w-11/12 mx-auto'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10'>
                My <span className='text-orange-500'>Project</span>
                <span className='block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full'></span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
                {<Shopnity />}
                
                </div>
        </div>
    );
};

export default Projects;
