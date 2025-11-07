import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="text-center sm:text-left text-sm sm:text-base">
                    © {new Date().getFullYear()} Himel Devnath — All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex gap-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/himel.devnath.3"
                        className="hover:text-sky-300 transition-colors duration-300"
                    >
                        <FaFacebook size={28} />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/himel_devnath"
                        className="hover:text-sky-300 transition-colors duration-300"
                    >
                        <FaInstagram size={28} />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/himel-devnath-a07996294/"
                        className="hover:text-sky-300 transition-colors duration-300"
                    >
                        <BsLinkedin size={28} />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/HimelDvNath"
                        className="hover:text-sky-300 transition-colors duration-300"
                    >
                        <BsGithub size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
