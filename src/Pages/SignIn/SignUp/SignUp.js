import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import img from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth'
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const { firebaseContext } = useAuth();
    const { createUsingEmailPassword, error, setError } = firebaseContext;
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        if (data?.password?.length < 6) {
            setError('Password should be 6 charecters');
            return;
        }
        // create account
        createUsingEmailPassword(data?.email, data?.password, data?.username, history)
    };

    return (
        <div className='container'>
            <div className='form-bg p-6 grid md:grid-cols-2 gap-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <form className='form-inputs text-center mt-12' onSubmit={handleSubmit(onSubmit)}>
                            <input className='field p-3 block' type="text" placeholder="Username*" {...register("username", { required: true })} />
                            {errors.username && <span className='error'>This field is required</span>}
                            <input className='field p-3 mt-2 block' type="email" placeholder="Email*" {...register("email", { required: true })} />
                            {errors.email && <span className='error'>This field is required</span>}
                            <input className='field p-3 mt-2 block' type="password" placeholder="Password*" {...register("password", { required: true })} />
                            {errors.password && <span className='error'>This field is required</span>}
                            {error && <span className='error'>{error}</span>}
                            <button type="submit" className="mt-2 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Sign In</button>
                        </form>
                        {/* ===========google login=============== */}
                        <hr className='m-3' />
                        <div className="text-center">
                            <NavLink className="text-center link-text" to="/sign_in"><u>Already Registered?</u></NavLink>
                            <div className='mt-3'>
                                <NavLink className="text-center link-text" to="/home"><i className="fas fa-home"></i><u>Back to Home</u></NavLink>
                            </div>
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

export default SignUp;