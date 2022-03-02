import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.png';
import './SignIn.css';

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { firebaseContext } = useAuth();
    const { signInUsingGoogle, signInUsingEmailandPass, error } = firebaseContext;
    const history = useHistory();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }

    const onSubmit = data => {
        signInUsingEmailandPass(data?.email, data?.password, location, history);
    };

    return (
        <div className='container'>
            <div className='form-bg grid md:grid-cols-2 gap-4 p-6'>
                <div className='flex justify-center items-center'>
                    <div>
                        <form className='form-inputs text-center mt-12' onSubmit={handleSubmit(onSubmit)}>
                            <input className='field p-3' type="email" placeholder="Email*" {...register("email", { required: true })} />
                            {errors.email && <span className='error'>This field is required</span>}
                            <input className='field p-3 mt-2' type="password" placeholder="Password*" {...register("password", { required: true })} />
                            {errors.password && <span className='error'>This field is required</span>}
                            {error && <span className='error'>{error}</span>}
                            <button type="submit" className="mt-2 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Sign In</button>
                        </form>
                        {/* ===========google login=============== */}
                        <hr className='m-3' />
                        <div className="text-center">
                            <button onClick={handleGoogleLogin} className="my-2 py-2 px-3 btn-primary text-white"><i className="fab fa-google"></i> Sign In Using Google</button>
                            <br />
                            <NavLink className="text-center link-text" to="/sign_up"><u>New to Your Highway?</u></NavLink>
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

export default SignIn;