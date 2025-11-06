import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Hero from '../../Pages/Hero';
import About from '../../Pages/About';
import Resume from '../../Pages/Resume';
import Achievements from '../../Pages/Achievements';
import Projects from '../../../Projects';
import Blogs from '../../Pages/Blogs';
import Contact from '../../Pages/Contact';

const Home = () => {
    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-2 sticky top-0 max-h-screen'>
                <Navbar></Navbar>
            </div>
            <div className='col-span-8'>
                <Hero></Hero>
                <About></About>
                <Resume></Resume>
                <Achievements></Achievements>
                <Projects></Projects>
                <Blogs></Blogs>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;