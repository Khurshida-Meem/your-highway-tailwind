import React from 'react';
import './Blog.css'

const Blog = (props) => {

    const { likes, status } = props.blog;
    const { username, email, title, thumb, blog } = props.blog.data;

    return (
        <div className='home-blog m-3 p-2 grid md:grid-cols-3 gap-2 rounded-md'>
            <div className="col-span-1">
                <img className='rounded-md' src={thumb} alt="" />
            </div>
            <div className="col-span-2">
                <h1 className='text-white font-xl'>{title}</h1>

            </div>

        </div>
    );
};

export default Blog;