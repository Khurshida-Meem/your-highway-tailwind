import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import img from '../../../images/login.png';
import './SignIn.css';

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <form className='form-inputs text-center mt-12' onSubmit={handleSubmit(onSubmit)}>
                            <input className='field p-3' type="email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className='error'>This field is required</span>}
                            <input className='field p-3 mt-2' type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className='error'>This field is required</span>}

                            <button type="submit" className="mt-2 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Sign In</button>
                        </form>
                        {/* ===========google login=============== */}
                        <hr className='m-3' />
                        <div className="text-center">
                            <button className="my-2 py-2 px-3 btn-primary text-white"><i className="fab fa-google"></i> Sign In Using Google</button>
                            <br />
                            <NavLink className="text-center link-text" to="/sign_up"><u>New to Random Health Care?</u></NavLink>
                        </div>
                    </div>

                </div>
                <div className='mt-12'>
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignIn;