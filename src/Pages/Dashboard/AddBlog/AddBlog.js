import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './AddBlog.css'

const AddBlog = () => {

    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

    return (
        <div className='add-blog'>
            <div></div>
            <h1>add blogs</h1>
        </div>
    );
};

export default AddBlog;