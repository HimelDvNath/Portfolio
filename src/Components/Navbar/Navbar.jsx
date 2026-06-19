import React from "react";
import profilePic from "../../assets/IMG_3722.JPG";
import {
    FaFacebook, FaInstagram,
    FaHouse, FaCircleUser, FaFileLines, FaTrophy,
    FaFolder, FaNewspaper, FaEnvelope,
} from "react-icons/fa6";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const navLinks = [
    { to: "home",         label: "Home",         Icon: FaHouse },
    { to: "about",        label: "About",        Icon: FaCircleUser },
    { to: "resume",       label: "Resume",       Icon: FaFileLines },
    { to: "achievements", label: "Achievements", Icon: FaTrophy },
    { to: "projects",     label: "Projects",     Icon: FaFolder },
    { to: "blogs",        label: "Blogs",        Icon: FaNewspaper },
    { to: "contact",      label: "Contact",      Icon: FaEnvelope },
];

const socials = [
    { href: "https://www.facebook.com/himel.devnath.3",           Icon: FaFacebook },
    { href: "https://www.instagram.com/himel_devnath",            Icon: FaInstagram },
    { href: "https://www.linkedin.com/in/himel-devnath-a07996294/", Icon: BsLinkedin },
    { href: "https://github.com/HimelDvNath",                     Icon: BsGithub },
];

const Navbar = ({ setIsOpen }) => {
    return (
        <div className='bg-linear-to-b from-[#1a1d23] to-[#22262e] w-full h-screen sticky top-0 overflow-y-auto flex flex-col'>

            {/* ── Profile ──────────────────────────────── */}
            <div className='flex flex-col items-center pt-8 pb-6 px-5 border-b border-white/10'>
                <div className='relative mb-4'>
                    <img
                        src={profilePic}
                        alt='Himel Devnath'
                        className='w-24 h-24 rounded-full object-cover ring-2 ring-orange-500/60 shadow-xl'
                    />
                    <span className='absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 border-2 border-[#1a1d23] rounded-full' />
                </div>
                <h1 className='text-white text-lg font-bold tracking-wide'>Himel Devnath</h1>
                <span className='mt-2 text-xs font-semibold text-orange-400 bg-orange-400/10 border border-orange-400/25 px-3 py-1 rounded-full tracking-wider'>
                    Software Engineer
                </span>
                <div className='flex gap-4 mt-4'>
                    {socials.map((s) => (
                        <a
                            key={s.href}
                            href={s.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 hover:text-orange-400 transition-colors duration-200'>
                            <s.Icon size={17} />
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Navigation ───────────────────────────── */}
            <nav className='flex-1 px-3 py-5'>
                <p className='text-gray-600 text-xs uppercase tracking-widest font-semibold mb-3 px-3'>
                    Menu
                </p>
                <ul className='space-y-0.5'>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={700}
                                spy={true}
                                activeClass='text-orange-400 bg-orange-400/10'
                                offset={-20}
                                onClick={() => setIsOpen(false)}
                                className='group flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer'>
                                <link.Icon size={14} className='shrink-0' />
                                <span className='text-sm font-medium'>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ── Footer ───────────────────────────────── */}
            <div className='px-5 py-4 border-t border-white/10 text-center'>
                <p className='text-gray-600 text-xs'>© 2025 Himel Devnath</p>
            </div>
        </div>
    );
};

export default Navbar;
