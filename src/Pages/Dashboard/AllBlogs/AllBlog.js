import React, { useEffect, useState } from 'react';

const AllBlog = (props) => {

    const [blogs, setBlogs] = useState([])

    const { _id, likes, status } = props.blog;
    const { username, email, title, thumb, blog } = props.blog.data;

    useEffect(() => {
        fetch(`https://your-highway-travel.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

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
                        const remainingOrders = blogs.filter(blog => blog._id !== id);
                        setBlogs(remainingOrders);
                    }

                });
        }
    }

    // approve status or update status in database

    const handleStatus = (id, status) => {
        const updated = { status: status };

        const url = `https://your-highway-travel.herokuapp.com/blogs/${id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`Blog ${status}`);
                }
            })
    };

    return (
        <div className='blog-container m-5 p-5'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <h1 className='font-2xl'>{title}</h1>
                    <h1 className='font-xl'>{username}</h1>
                    <small>{email}</small>
                    <p className='mt-2'>{blog}</p>
                </div>
                <div>
                    <img src={thumb} alt="" height="100px" />
                </div>
            </div>
            <div>
                <h1 className='mt-2'>Likes: {likes}</h1>
                <h1 className='mt-2'>Status: {status}</h1>
            </div>
            <div>
                <button className='btn-primary text-white px-3 py-1 my-2' onClick={() => handleStatus(_id, 'Approved')} >Approve</button>
                <button className='btn-primary text-white px-3 py-1 m-2' onClick={() => handleStatus(_id, 'Rejected')} >Reject</button>
                <button className='btn-primary text-white px-3 py-1 m-2' onClick={() => handleDelete(_id)} >Delete</button>
            </div>

        </div>
    );
};

export default AllBlog;