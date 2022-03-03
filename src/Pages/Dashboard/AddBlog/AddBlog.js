import React from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import './AddBlog.css'
import { useForm } from "react-hook-form";


const AddBlog = () => {


    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const likes = Math.floor(Math.random() * 10000);
        const status = 'Pending';
        const blog = { data, likes, status }

        axios.post('https://your-highway-travel.herokuapp.com/blogs', blog)
            .then(res => {
                if (res.data.insertedId) {
                    alert('You have added your blog successfully');
                    reset();
                }
            })
    };

    return (
        <div className='add-blog'>
            <div className='mt-20'>
                <h1 className='text-2xl my-8'> <span className='component-header px-10 py-2'>Add Your Blog</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='dash-input mb-3 p-2' defaultValue={user.displayName} {...register("username", { required: true })} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='dash-input mb-3 p-2' type="email" defaultValue={user.email} {...register("email", { required: true })} />
                    <input className='dash-input mb-3 p-2' type="text" placeholder='Your Blog Title' {...register("title", { required: true })} />
                    <input className='dash-input mb-3 p-2' type="link" placeholder="Your Image Live Link" {...register("thumb", { required: true })} />
                    <textarea className="dash-input mb-3 p-2" id="" cols="25" rows="10" placeholder="Add Your Thought" {...register("blog", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {/* {errors.exampleRequired && <span className='block'>This field is required</span>} */}

                    <button type="submit" className="mt-2 mb-8 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Submit </button>
                </form>
            </div>

        </div>
    );
};

export default AddBlog;