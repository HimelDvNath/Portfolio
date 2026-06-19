import React from "react";
import rental from "../../assets/rental.jpg";

const tags = ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "JWT"];

const VehiclesRental = () => {
    return (
        <div className='card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
            <figure>
                <img src={rental} alt='Vehicle Rental System' className='object-cover' />
            </figure>
            <div className='card-body text-white'>
                <h2 className='card-title text-xl flex justify-center items-center pt-5 mb-1 font-bold'>
                    Vehicle Rental System — RESTful Backend API
                </h2>
                <div className='flex flex-wrap gap-1.5 mb-3'>
                    {tags.map((t) => (
                        <span key={t} className='text-xs bg-white/15 border border-white/25 px-2 py-0.5 rounded-full'>
                            {t}
                        </span>
                    ))}
                </div>
                <p className='text-sm leading-relaxed text-justify opacity-90'>
                    Scalable RESTful backend API built with TypeScript and PostgreSQL.
                    Features JWT authentication, role-based access control (RBAC),
                    vehicle CRUD operations, secure bookings with auto-expiration,
                    and modular MVC architecture.
                </p>
                <div className='card-actions justify-end mt-2'>
                    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7404055887717449728/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Details</a>
                    <a href='https://github.com/HimelDvNath/Next-Level-Web-development-Assignment2' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>GitHub</a>
                    <a href='https://vehicle-rental-system-nu.vercel.app/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Live Server</a>
                </div>
            </div>
        </div>
    );
};

export default VehiclesRental;
