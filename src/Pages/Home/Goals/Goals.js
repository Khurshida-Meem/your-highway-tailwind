import React from 'react';
import './Goals.css'

const Goals = () => {
    return (
        <div className="-mt-16 container relative  md:flex justify-evenly">
            <div className='font-bold text-2xl px-20 py-14 bg-green mt-2'>
                Priority
            </div>
            <div className='font-bold text-2xl px-20 py-14 bg-salmon mt-2'>
                Security
            </div>
            <div className='font-bold text-2xl px-20 py-14 bg-sand mt-2'>
                Comfort
            </div>
        </div>
    );
};

export default Goals;