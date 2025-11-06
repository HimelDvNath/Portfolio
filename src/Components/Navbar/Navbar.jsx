import React from "react";
import profilePic from "../../assets/IMG_3722.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {Link, NavLink} from "react-router"
import '../../App.css'
const Navbar = () => {
    return (
        <div className='bg-[#4d5054] w-full h-[100vh]'>
            <div className='p-5 flex justify-center items-center'>
                <img
                    src={profilePic}
                    alt='profile pic'
                    className='w-40 h-40 rounded-full outline outline-8 outline-[#3a403c] '
                />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="text-3xl font-bold">Himel Devnath</h1>
                <div className="flex gap-5">
                        <a target="_blank" href="https://www.facebook.com/himel.devnath.3" className=" hover:text-sky-300 transition-colors duration-300"><FaFacebook size={30}/></a>
                        <a target="_blank" href="https://www.instagram.com/himel_devnath" className=" hover:text-sky-300 transition-colors duration-300"><FaInstagram size={30}/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/himel-devnath-a07996294/" className=" hover:text-sky-300 transition-colors duration-300"><BsLinkedin size={30}/></a>
                        <a target="_blank" href="https://github.com/HimelDvNath" className=" hover:text-sky-300 transition-colors duration-300"><BsGithub size={30}/></a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-5 ">
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Home</NavLink>
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">About</NavLink>
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Resume</NavLink>
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Achievements</NavLink>
                {/* <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Project</NavLink>
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Blogs</NavLink>
                <NavLink to='/'className="hover:bg-base-100 p-3 rounded-xl">Contact</NavLink> */}
            </div>
        </div>
    );
};

export default Navbar;
