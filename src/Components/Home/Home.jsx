import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../../Pages/Hero";
import About from "../../Pages/About";
import Resume from "../../Pages/Resume";
import Achievements from "../../Pages/Achievements";
import Projects from "../../../Projects";
import Blogs from "../../Pages/Blogs";
import Contact from "../../Pages/Contact";
import { FaBars } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative bg-base-100 min-h-screen'>
            <div className='lg:hidden fixed top-4 left-4 z-50'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-2 bg-neutral text-neutral-content rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400'>
                    <FaBars size={22} />
                </button>
            </div>

            <div
  className={`fixed top-0 left-0 h-full w-64 bg-[#4d5054] text-neutral-content transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:col-span-2 lg:block z-40`}
>
  <Navbar setIsOpen={setIsOpen} />
</div>


            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'></div>
            )}
            <div className='lg:ml-[16.5rem] transition-all duration-300'>
                
                    <section id='home'>
                        <Hero />
                    </section>
                    <section id='about'>
                        <About />
                    </section>
                    <section id='resume'>
                        <Resume />
                    </section>
                    <section id='achievements'>
                        <Achievements />
                    </section>
                    <section id='projects'>
                        <Projects />
                    </section>
                    <section id='blogs'>
                        <Blogs />
                    </section>
                    <section id='contact'>
                        <Contact />
                    </section>
                    <section id='footer'>
                        <Footer />
                    </section>
                
            </div>
        </div>
    );
};

export default Home;
