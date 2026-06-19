import React from "react";
import { motion as Motion } from "framer-motion";

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
            <Motion.div
                className='w-11/12 md:w-3/4 bg-white shadow-xl rounded-2xl p-10 md:p-16'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}>
                <Motion.h2
                    className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10'
                    variants={fadeInUp}
                    custom={0.1}>
                    My <span className='text-orange-500'>Resume</span>
                    <span className='block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full'></span>
                </Motion.h2>

                {/* Education */}
                <Motion.div className='mb-12' variants={fadeInUp} custom={0.2}>
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
                    <Motion.div
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
                    </Motion.div>
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
                </Motion.div>

                {/* Skills */}
                <Motion.div className='mb-12' variants={fadeInUp} custom={0.3}>
                    <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                        🧠 Technical Skills
                    </h3>
                    <div className='space-y-4'>
                        {[
                            { category: "Languages",      skills: ["JavaScript (ES6+)", "TypeScript", "C++", "Python", "Java", "C"] },
                            { category: "Frontend",       skills: ["React.js", "Next.js", "Redux Toolkit (RTK)", "HTML5", "CSS3", "Tailwind CSS"] },
                            { category: "Backend",        skills: ["Node.js", "Express.js"] },
                            { category: "Databases",      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"] },
                            { category: "APIs & Auth",    skills: ["RESTful APIs", "JWT", "Better Auth", "Firebase Authentication"] },
                            { category: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "GitLab", "Postman", "VS Code"] },
                        ].map(({ category, skills }) => (
                            <div key={category}>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2'>
                                    {category}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className='bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1.5 rounded-lg text-sm font-medium'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Motion.div>

                {/* Experience */}
                <Motion.div className='mb-12' variants={fadeInUp} custom={0.4}>
                    <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                        💼 Professional Experience
                    </h3>
                    <div className='space-y-8'>

                        {/* Role 1 — Spectrum Software */}
                        <div className='relative border-l-4 border-orange-400 pl-6'>
                            <div className='absolute -left-2.5 top-1.5 w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow' />
                            <div className='flex flex-wrap items-center gap-3 mb-1'>
                                <h4 className='text-lg font-bold text-gray-900'>
                                    Software Engineer
                                </h4>
                                <span className='text-xs font-semibold text-white bg-orange-500 px-2.5 py-0.5 rounded-full'>
                                    Feb 2026 – Present
                                </span>
                            </div>
                            <p className='text-sm font-semibold text-orange-500 mb-3'>
                                Spectrum Software &amp; Consulting (Pvt.) Ltd
                            </p>
                            <ul className='space-y-2 text-gray-600 text-sm'>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Joined as a Full Stack Engineer Intern and transitioned to a confirmed permanent role based on performance.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Developed and maintained scalable enterprise web applications for banking and financial services clients using React.js, Next.js, TypeScript, Node.js, and PostgreSQL.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Wrote PostgreSQL stored procedures and CTEs for complex financial reporting queries; managed schema versioning with Flyway migrations.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Implemented Casbin-based RBAC middleware and dual-role permission systems for secure multi-user operations.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Integrated bulk Excel upload and download flows for data entry and report generation across multiple finance product modules.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Diagnosed and resolved critical production bugs including a security fail-open vulnerability in approval middleware and a JSON double-parsing error.
                                </li>
                            </ul>
                        </div>

                        {/* Role 2 — CRC Foundation */}
                        <div className='relative border-l-4 border-orange-400 pl-6'>
                            <div className='absolute -left-2.5 top-1.5 w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow' />
                            <div className='flex flex-wrap items-center gap-3 mb-1'>
                                <h4 className='text-lg font-bold text-gray-900'>
                                    Publicity Secretary
                                </h4>
                                <span className='text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full'>
                                    2023 – 2025
                                </span>
                            </div>
                            <p className='text-sm font-semibold text-orange-500 mb-3'>
                                CRC (Come for Road Child) Foundation, GSTU
                            </p>
                            <ul className='space-y-2 text-gray-600 text-sm'>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Led organizational communication and digital media campaigns, managing social media presence for the foundation.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Coordinated volunteer-driven events and community outreach programs across the university campus.
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-orange-400 mt-0.5 shrink-0'>▸</span>
                                    Demonstrated leadership, teamwork, and sustained commitment through active participation over 2 years.
                                </li>
                            </ul>
                        </div>

                    </div>
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default Resume;
