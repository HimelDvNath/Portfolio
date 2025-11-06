import React, { useState } from "react";
import dataAnalysis from "../assets/Certificate/data_analysis_python.png";
import crcCertificate from "../assets/Certificate/CRC.pdf";
const Achievements = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='bg-gray-50 p-20 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center'>
                {/* EDGE Certificate */}
                <div className='bg-white shadow-lg rounded-2xl p-10 border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                        🧩 Data Analysis with Python
                    </h4>

                    <p className='text-base text-gray-500 mb-4'>
                        Organized by Department of CSE, BSMRSTU under the EDGE
                        Project (ICT Division, BCC)
                    </p>

                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                        Completed an{" "}
                        <span className='font-semibold text-gray-900'>
                            80-hour
                        </span>{" "}
                        training program focused on
                        <span className='text-orange-500 font-medium'>
                            {" "}
                            data cleaning
                        </span>
                        ,
                        <span className='text-orange-500 font-medium'>
                            {" "}
                            visualization
                        </span>
                        , and
                        <span className='text-orange-500 font-medium'>
                            {" "}
                            analytical techniques
                        </span>{" "}
                        using Python — strengthening my practical skills in
                        real-world data analysis.
                    </p>

                    {/* See Certificate Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-5 h-5'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 10l4.553 2.276a1 1 0 010 1.788L15 16m-6 0l-4.553-1.936a1 1 0 010-1.788L9 10m6 6V8m0 8H9m0-8v8'
                            />
                        </svg>
                        See Certificate
                    </button>
                </div>
                {/* CRC Foundation Recognition */}
                <div className='bg-white shadow-lg rounded-2xl p-10 border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                        🏆 Recognition of Distinguished Service
                    </h4>

                    <p className='text-base text-gray-500 mb-4'>
                        Awarded by the{" "}
                        <span className='font-medium text-gray-900'>
                            CRC Foundation
                        </span>{" "}
                        for outstanding dedication and service.
                    </p>

                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                        Held committee positions including
                        <span className='text-orange-500 font-medium'>
                            {" "}
                            General Member
                        </span>{" "}
                        and
                        <span className='text-orange-500 font-medium'>
                            {" "}
                            Publicity Secretary
                        </span>{" "}
                        (
                        <span className='font-semibold text-gray-900'>
                            2023–2025
                        </span>
                        ), demonstrating leadership, commitment, and significant
                        contributions to the organization.
                    </p>

                    {/* See Certificate Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-5 h-5'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 10l4.553 2.276a1 1 0 010 1.788L15 16m-6 0l-4.553-1.936a1 1 0 010-1.788L9 10m6 6V8m0 8H9m0-8v8'
                            />
                        </svg>
                        See Certificate
                    </button>
                </div>
            </div>

            {/* Modal Popup */}
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl shadow-2xl p-6 max-w-3xl w-full relative animate-fadeIn'>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold'>
                            ×
                        </button>

                        <h3 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>
                            Certificate of Completion
                        </h3>

                        {/* Certificate Image */}
                        <div className='w-full flex justify-center'>
                            <img
                                src={dataAnalysis} // replace with your actual path
                                alt='Certificate'
                                className='rounded-lg shadow-md max-h-[80vh] object-contain'
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Popup */}
            {/* Modal Popup */}
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl shadow-2xl p-6 max-w-6xl w-full relative animate-fadeIn'>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold'>
                            ×
                        </button>

                        <h3 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>
                            Certificate of Recognition
                        </h3>

                        {/* PDF Viewer */}
                        <div className='w-full flex justify-center'>
                            <iframe
                                src={crcCertificate} // replace with your PDF path, e.g., "/certificate/CRC_Certificate.pdf"
                                title='CRC Certificate'
                                className='rounded-lg shadow-md w-full h-[80vh]'></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Achievements;
