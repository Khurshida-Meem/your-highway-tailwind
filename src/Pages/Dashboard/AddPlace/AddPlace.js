import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddPlace = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post('https://your-highway-travel.herokuapp.com/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added place successfully');
                    reset();
                }
            })
    };

    return (
        <div className='add-blog'>
            <div className='mt-20'>
                <h1 className='text-2xl my-8'> <span className='component-header px-10 py-2'>Add New Place</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='dash-input mb-3 p-2 w-full' type="text" placeholder='Destination Title'  {...register("destination", { required: true })} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='dash-input mb-3 p-2 w-full' type="text" placeholder='Country' {...register("country", { required: true })} />
                    <input className='dash-input mb-3 p-2 w-full' type="link" placeholder='Add Image Link' {...register("thumb", { required: true })} />
                    <input className='dash-input mb-3 p-2 w-full' type="number" placeholder="Add Star" {...register("star", { required: true })} />
                    <input className='dash-input mb-3 p-2 w-full' type="number" placeholder="Number of People Given Star" {...register("starCount", { required: true })} />
                    <input className='dash-input mb-3 p-2 w-full' type="text" placeholder="Description" {...register("description", { required: true })} />
                    <input className='dash-input mb-3 p-2 w-full' type="number" placeholder="Cost" {...register("cost", { required: true })} />

                    {/* errors will return when field validation fails  */}
                    {/* {errors.exampleRequired && <span className='block'>This field is required</span>} */}

                    <button type="submit" className="mt-2 mb-8 py-2 w-48 btn-primary text-white"><i className="fas fa-sign-in-alt"></i> Submit </button>
                </form>
            </div>
        </div>
    );
};

export default AddPlace;