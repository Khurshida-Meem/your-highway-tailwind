import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar'

const AllBlogs = () => {
    return (
        <div className='container flex justify-center'>
            <div>
                <Navbar></Navbar>
                <div className=''>
                    <h1 className='mt-12'>Developer is Eating...</h1>
                </div>
                <Footer></Footer>
            </div>

        </div>

    );
};

export default AllBlogs;