import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay },
    }),
};

const Resume = () => {
    return (
        <section
            id='resume'
            className='bg-gray-50 py-20 flex flex-col items-center justify-center'>
            <motion.div
                className='w-11/12 md:w-3/4 bg-white shadow-xl rounded-2xl p-10 md:p-16'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}>
                <motion.h2
                    className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10'
                    variants={fadeInUp}
                    custom={0.1}>
                    My <span className='text-orange-500'>Resume</span>
                    <span className='block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full'></span>
                </motion.h2>

                {/* Education */}
                <motion.div className='mb-12' variants={fadeInUp} custom={0.2}>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                        🎓 Education
                    </h3>
                    <div className='space-y-5 mb-5'>
                        <div className='border-l-4 border-orange-400 pl-5'>
                            <h4 className='text-xl font-semibold text-gray-900'>
                                B.Sc. Engineering in Computer Science and
                                Engineering
                            </h4>
                            <p className='text-gray-800'>
                                CGPA: 3.56 (5<sup>th</sup> position in the
                                batch)
                            </p>
                            <p className='text-gray-700 mb-2'>
                                Gopalganj Science and Technology University
                                (GSTU)
                            </p>
                            <p className='inline-block text-gray-100 text-sm bg-amber-500 rounded-3xl px-3 py-1'>
                                Jan 2020 – Jun 2025
                            </p>
                        </div>
                    </div>
                    <motion.div
                        variants={fadeInUp}
                        custom={0.2}
                        className='space-y-4 mb-5'>
                        <div className='border-l-4 border-orange-400 pl-5'>
                            <h4 className='text-xl font-semibold text-gray-900'>
                                Higher Secondary School Certificate (HSC)
                            </h4>
                            <p className='text-gray-700'>GPA: 4.33 (Science)</p>
                            <p className='text-gray-700 mb-2'>
                                Shah Makhdum College, Rajshahi
                            </p>
                            <p className='inline-block text-gray-100 text-sm bg-amber-500 rounded-3xl px-3 py-1'>
                                Jun 2016 – April 2018
                            </p>
                        </div>
                    </motion.div>
                    <div className='space-y-4'>
                        <div className='border-l-4 border-orange-400 pl-5'>
                            <h4 className='text-xl font-semibold text-gray-900'>
                                Secondary School Certificate (SSC)
                            </h4>
                            <p className='text-gray-700'>GPA: 4.83 (Science)</p>
                            <p className='text-gray-700 mb-2'>
                                Nazipur High School, Naogaon
                            </p>
                            <p className='inline-block text-gray-100 text-sm bg-amber-500 rounded-3xl px-3 py-1'>
                                Jan 2014 – Feb 2016
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div className='mb-12' variants={fadeInUp} custom={0.3}>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                        🧠 Skills
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Python",
                            "C++",
                            "Git & GitHub",
                            "DaisyUI / Bootstrap",
                            "Tailwind CSS",
                            "REST API",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className='bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium'>
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div className='mb-12' variants={fadeInUp} custom={0.4}>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                        💼 Experience
                    </h3>
                    <div className='space-y-6'>
                        <div className='border-l-4 border-orange-400 pl-5'>
                            <h4 className='text-xl font-semibold text-gray-900'>
                                Full Stack Developer (MERN)
                            </h4>
                            <p className='text-gray-700'>
                                Personal Projects Work
                            </p>
                            <p className='text-gray-500 text-sm'>
                                2025 – Present
                            </p>
                            <ul className='list-disc list-inside text-gray-600 mt-2 space-y-1'>
                                <li>
                                    Developed responsive web applications using
                                    React and Node.js.
                                </li>
                                <li>
                                    Integrated REST APIs and managed MongoDB
                                    databases.
                                </li>
                                <li>
                                    Collaborated with peers on full-stack
                                    projects and open-source contributions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Resume;
