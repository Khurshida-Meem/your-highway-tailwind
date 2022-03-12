import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);



    const onSubmit = data => {

        const user = { data }
        fetch('https://your-highway-travel.herokuapp.com//users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
    };

    return (
        <div className='add-blog'>
            <div className='mt-10'>
                <h1 className='text-2xl my-8'> <span className='component-header px-10 py-2'>Add Admin</span></h1>

                {success && <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    A simple success alert - check it out!
                </div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='dash-input mb-3 p-2 w-full' placeholder='Add Admin Email' {...register("email", { required: true })} />

                    {errors.email && <span className='block'>This field is required</span>}

                    <button type="submit" className="mt-2 mb-8 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Submit </button>
                </form>
            </div>

        </div>
    );
};

export default MakeAdmin;