import React from 'react';
import './MyBlog.css';

const MyBlog = (props) => {

    const { likes, status } = props.blog;
    const { username, email, title, thumb, blog } = props.blog.data;

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
                    <img src={thumb} alt="" height="100px" />
                </div>
            </div>
            <div>

                <h1>Likes: {likes}</h1>
                <h1>Status: {status}</h1>
            </div>

        </div>
    );
};

export default MyBlog;