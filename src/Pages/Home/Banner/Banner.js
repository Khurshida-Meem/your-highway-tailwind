import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <Navbar></Navbar>
            <div className='relative container flex justify-center'>
                <div>
                    <h1 className='text-white text-6xl mt-20 ml-4 '>We Belive <br /> Your Way Is Highway</h1>
                </div>

            </div>
        </div>
    );
};

export default Banner;