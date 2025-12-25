import React from 'react';
import rental from "../../assets/rental.jpg";

const VehiclesRental = () => {
    return (
            <div className='card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl  border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                <figure>
                    <img
                        src={rental}
                        alt='Cover page'
                        className='object-cover'
                    />
                </figure>
    
                <div className='card-body text-white'>
                    <h2 className='card-title text-xl flex justify-center items-center pt-5 mb-3 font-bold'>
                        Vehicle Rental System
                    </h2>
    
                    <p className='text-sm leading-relaxed text-justify opacity-90'>
                        A Backend application designed to manage vehicle rentals for customers and administrators. The system includes authentication, vehicle management, booking management, and profile handling. The modular structure followed in this project.
                    </p>
    
                    <div className='card-actions justify-end mt-2'>
                        <a
                            href='https://www.linkedin.com/feed/update/urn:li:activity:7404055887717449728/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary btn-sm px-4'>
                            More Details
                        </a>
                        <a
                            href='https://github.com/HimelDvNath/Next-Level-Web-development-Assignment2/tree/main'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary btn-sm px-4'>
                            Git Repo
                        </a>
                        <a
                            href='https://vehicle-rental-system-nu.vercel.app/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary btn-sm px-4'>
                            Live Server
                        </a>
                    </div>
                </div>
            </div>
        );
};

export default VehiclesRental;