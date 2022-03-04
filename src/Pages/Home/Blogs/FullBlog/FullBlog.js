import React, { useEffect, useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { useParams } from 'react-router-dom';

const FullBlog = () => {

    const [blog, setBlog] = useState({});

    const { blogId } = useParams();

    useEffect(() => {
        fetch(`https://your-highway-travel.herokuapp.com/blogs/${blogId}`)
            .then(res => res.json())
            .then(service => setBlog(service))
    }, []);


    return (
        <div>
            <Navbar></Navbar>
            <div className='container flex justify-center items-center'>
                <div className='container m-16'>
                    <div>
                        <h1 className='text-3xl mb-3'>{blog?.data?.title}</h1>
                        <img src={blog?.data?.thumb} alt="" className='w-64' />
                    </div>
                    <div>
                        <h1 className='text-xl'>{blog?.data?.username}</h1>
                        <small>{blog?.data?.email}</small>
                        <p>{blog?.likes} people loved</p>
                        <p className='mt-8'>{blog?.data?.blog}</p>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FullBlog;