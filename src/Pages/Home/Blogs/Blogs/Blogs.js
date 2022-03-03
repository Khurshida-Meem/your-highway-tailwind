import React, { useEffect, useState } from 'react';
import Blog from './Blog'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    blogs.splice(6, blogs.length);

    useEffect(() => {
        fetch('https://your-highway-travel.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setBlogs(data)
                }

            })
    }, [blogs])

    return (
        <div>
            <div className='grid grid-cols-1 gap-4 mt-20'>
                <h1 className='text-center text-3xl mb-10'> <span className='component-header px-10 py-2'>Featured Blogs</span></h1>
                <div>
                    {blogs.map((blog) => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)}
                </div>

            </div>

        </div>
    );
};

export default Blogs;