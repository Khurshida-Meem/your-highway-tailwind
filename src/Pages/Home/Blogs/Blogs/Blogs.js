import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner'
import Blog from './Blog'

const Blogs = () => {

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

    const approvedBlogs = blogs.filter(blog => blog.status === 'Approved');
    approvedBlogs.splice(6, blogs.length);


    return (
        <div className='container mt-20'>
            {approvedBlogs.lengtn ? <div>
                <h1 className='text-center text-3xl mb-16'> <span className='component-header px-10 py-2'>Featured Blogs</span></h1>
                <div>
                    {approvedBlogs.map((blog) => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)}
                </div>
            </div> :
                <div className='container flex justify-center mt-10' >
                    <Triangle color="#ef4565" height={100} width={200}
                    />
                </div>
            }

        </div>

    );
};

export default Blogs;