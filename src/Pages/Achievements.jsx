import React, { useState } from "react";
import dataAnalysis from "../assets/Certificate/data_analysis_python.png";
import crcCertificate from "../assets/Certificate/CRC.pdf";
import icpc from "../assets/Certificate/icpc.png";
import southZone from "../assets/Certificate/southZone.jpg";

const Achievements = () => {
    const [modalOpen, setModalOpen] = useState(null);

    // Helper function to render modal content dynamically
    const renderModalContent = () => {
        switch (modalOpen) {
            case "dataAnalysis":
                return (
                    <>
                        <img
                            src={dataAnalysis}
                            alt='Data Analysis Certificate'
                            className='rounded-lg shadow-md max-h-[80vh] object-contain'
                        />
                    </>
                );
            case "crc":
                return (
                    <>
                        <iframe
                            src={crcCertificate}
                            title='CRC Certificate'
                            className='rounded-lg shadow-md w-full h-[80vh]'></iframe>
                    </>
                );
            case "icpc":
                return (
                    <>
                        <img
                            src={icpc}
                            alt='ICPC Certificate'
                            className='rounded-lg shadow-md max-h-[80vh] object-contain'
                        />
                    </>
                );
            case "southZone":
                return (
                    <>
                        <img
                            src={southZone}
                            alt='UGV South Zone Programming Contest Certificate'
                            className='rounded-lg shadow-md max-h-[80vh] object-contain'
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='bg-gray-50 pt-20 flex flex-col items-center justify-center'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10'>
                    My <span className='text-orange-500'>Achievements</span>
                    <span className='block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full'></span>
                </h2>
            </div>

            <div className='bg-gray-50 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center'>
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
                    <button
                        onClick={() => setModalOpen("dataAnalysis")}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        See Certificate
                    </button>
                </div>

                {/* CRC Foundation Recognition */}
                <div className='bg-white shadow-lg rounded-2xl p-10 border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                        🏆 Come for Road Child, GSTU
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
                    <button
                        onClick={() => setModalOpen("crc")}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        See Certificate
                    </button>
                </div>

                {/* ICPC Certificate */}
                <div className='bg-white shadow-lg rounded-2xl p-10 border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                        🏅 ICPC Asia Dhaka Regional Preliminary Contest 2021
                    </h4>
                    <p className='text-base text-gray-500 mb-4'>
                        Organized by the{" "}
                        <span className='font-medium text-gray-900'>
                            International Collegiate Programming Contest (ICPC)
                        </span>
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                        Participated as a member of the{" "}
                        <span className='text-orange-500 font-medium'>
                            BSMRSTU_Code_Miners
                        </span>{" "}
                        team representing{" "}
                        <span className='font-semibold text-gray-900'>
                            Bangabandhu Sheikh Mujibur Rahman Science and
                            Technology University
                        </span>
                        , Kishoreganj. Gained valuable experience in algorithmic
                        problem-solving, teamwork, and competitive programming.
                    </p>
                    <button
                        onClick={() => setModalOpen("icpc")}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        See Certificate
                    </button>
                </div>

                {/* South Zone Certificate */}
                <div className='bg-white shadow-lg rounded-2xl p-10 border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                        💻 1st UGV South Zone Programming Contest 2022
                    </h4>
                    <p className='text-base text-gray-500 mb-4'>
                        Organized by the{" "}
                        <span className='font-medium text-gray-900'>
                            Department of CSE, University of Global Village
                            (UGV)
                        </span>
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                        Participated as an{" "}
                        <span className='text-orange-500 font-medium'>
                            Undergraduate contestant
                        </span>{" "}
                        from{" "}
                        <span className='font-semibold text-gray-900'>
                            Bangabandhu Sheikh Mujibur Rahman Science and
                            Technology University
                        </span>
                        , Gopalganj. Strengthened programming skills through
                        hands-on algorithmic problem-solving in a competitive
                        environment.
                    </p>
                    <button
                        onClick={() => setModalOpen("southZone")}
                        className='inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                        See Certificate
                    </button>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl shadow-2xl p-6 max-w-6xl w-full relative animate-fadeIn'>
                        <button
                            onClick={() => setModalOpen(null)}
                            className='absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold'>
                            ×
                        </button>
                        <div className='w-full flex justify-center'>
                            {renderModalContent()}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Achievements;
