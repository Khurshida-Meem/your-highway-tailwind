import React, { useEffect, useState } from 'react';
import AllBlog from './AllBlog';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
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
        <div className='dash-content'>
            <div className='container mt-26'>
                <div>
                    {blogs.map((blog) => <AllBlog
                        key={blog._id}
                        blog={blog}
                    ></AllBlog>)}
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;