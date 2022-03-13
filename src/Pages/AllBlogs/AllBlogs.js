import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar'

const AllBlogs = () => {
    return (
        <div className=''>
            <div>
                <Navbar></Navbar>
                <div className='container flex justify-center'>
                    <h1 className='mt-12'>Developer is Eating...</h1>
                </div>
                <Footer></Footer>
            </div>

        </div>

    );
};

export default AllBlogs;