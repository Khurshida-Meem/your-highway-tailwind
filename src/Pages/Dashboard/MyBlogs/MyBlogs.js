import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
// import MyBlog from './MyBlog';
import './MyBlog.css';


const MyBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const email = [user.email];

    useEffect(() => {
        fetch('https://your-highway-travel.herokuapp.com/blogs/byEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setBlogs(data)
                }

            })
    }, [blogs])

    // delete review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://your-highway-travel.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBlogs = blogs.filter(blog => blog._id !== id);
                        setBlogs(remainingBlogs);
                    }

                });
        }
    }

    return (
        <div className='dash-content'>
            <div className='container mt-26'>
                <div>
                    {blogs.map((blog) => (
                        <div className='blog-container m-5 p-5'>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div>
                                    <h1 className='font-2xl'>{blog.data.title}</h1>
                                    <h1 className='font-xl'>{blog.data.username}</h1>
                                    <small>{blog.data.email}</small>
                                    <p>{blog.data.blog}</p>
                                </div>
                                <div>
                                    <img src={blog.data.thumb} alt="" />
                                </div>
                            </div>
                            <div>
                                <h1>Likes: {blog.likes}</h1>
                                <h1>Status: {blog.status}</h1>
                            </div>
                            <div>
                                <button className='btn-primary text-white px-3 py-1 m-2' onClick={() => handleDelete(blog._id)} >Delete</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;