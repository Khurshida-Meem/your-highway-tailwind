import React, { useEffect, useState } from 'react';
import './MyBlog.css';

const MyBlog = (props) => {

    const { _id, likes, status } = props.blog;
    const { username, email, title, thumb, blog } = props.blog.data;


    // get order by email 


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
                        if (data.modifiedCount > 0) {
                            alert(`Blog ${status}`);
                        }
                    }

                });
        }
    }

    return (
        <div className='blog-container m-5 p-5'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <h1 className='font-2xl'>{title}</h1>
                    <h1 className='font-xl'>{username}</h1>
                    <small>{email}</small>
                    <p>{blog}</p>
                </div>
                <div>
                    <img src={thumb} alt="" />
                </div>
            </div>
            <div>
                <h1>Likes: {likes}</h1>
                <h1>Status: {status}</h1>
            </div>
            <div>
                <button className='btn-primary text-white px-3 py-1 m-2' onClick={() => handleDelete(_id)} >Delete</button>
            </div>

        </div>
    );
};

export default MyBlog;