import React from "react";
import profilePic from "../../assets/IMG_3722.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../../App.css";
import { Link } from "react-scroll";
const Navbar = ({ setIsOpen }) => {
    return (
        <div className='bg-[#4d5054] w-full h-[100vh] sticky top-0 overflow-y-auto'>
            <div className='p-5 flex justify-center items-center'>
                <img
                    src={profilePic}
                    alt='profile pic'
                    className='w-40 h-40 rounded-full outline outline-8 outline-[#3a403c] '
                />
            </div>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-3xl font-bold'>Himel Devnath</h1>
                <div className='flex gap-5'>
                    <a
                        target='_blank'
                        href='https://www.facebook.com/himel.devnath.3'
                        className=' hover:text-sky-300 transition-colors duration-300'>
                        <FaFacebook size={30} />
                    </a>
                    <a
                        target='_blank'
                        href='https://www.instagram.com/himel_devnath'
                        className=' hover:text-sky-300 transition-colors duration-300'>
                        <FaInstagram size={30} />
                    </a>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/himel-devnath-a07996294/'
                        className=' hover:text-sky-300 transition-colors duration-300'>
                        <BsLinkedin size={30} />
                    </a>
                    <a
                        target='_blank'
                        href='https://github.com/HimelDvNath'
                        className=' hover:text-sky-300 transition-colors duration-300'>
                        <BsGithub size={30} />
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-2 p-5 '>
                
                <Link
                    to='home'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Home
                </Link>
                <Link
                    to='about'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    About
                </Link>
                <Link
                    to='resume'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Resume
                </Link>
                <Link
                    to='achievements'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Achievements
                </Link>
                <Link
                    to='projects'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Projects
                </Link>
                <Link
                    to='blogs'
                    smooth={true}
                    duration={700}
                    spy={true}
                    activeClass='bg-gray-500'
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Blogs
                </Link>
                <Link
                    to='contact'
                    smooth={true}
                    duration={700}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    activeClass='bg-gray-500'
                    className='cursor-pointer hover:bg-gray-500 p-3 rounded-xl'>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
