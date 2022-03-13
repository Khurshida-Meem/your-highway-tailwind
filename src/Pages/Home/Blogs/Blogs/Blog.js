import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {

    const { _id, likes } = props.blog;
    const { username, title, thumb } = props.blog.data;

    const [count, setCount] = useState(likes);

    const history = useHistory();
    const handleDetailClick = () => {
        history.push(`/blog/${_id}`)
    }

    return (

        // <div className='home-blog m-3 p-2 grid md:grid-cols-3 gap-2 rounded-md'>
        //     <div className="col-span-1">
        //         <img className='rounded-md' src={thumb} alt="" />
        //     </div>
        //     <div className="col-span-2">
        //         <h1 className='text-white text-2xl'>{title}</h1>
        //         <h1 className='text-white '><i className="fas fa-user"></i> {username}</h1>
        //         <hr />
        //         <div className='flex items-center justify-between'>
        //             <div className='flex items-center '>
        //                 <button onClick={() => setCount(count + 1)} className=' blog-btn mr-1 mt-1'><i className="far fa-heart"></i></button>
        //                 <p className='text-white'>{count}</p>
        //             </div>
        //             <div>
        //                 <button onClick={handleDetailClick} className='btn-secondary px-3 py-1 text-white mt-1' >Read Full Blog</button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="flex justify-center items-center m-3 p-2">
            <div className="flex w-full mx-auto items-center">
                <div className="flex home-blog p-4 rounded-lg">
                    <div className="flex flex-col w-2/3 pr-4 bg">
                        <p className="text-xl font-black mb-2 text-gray-50">{title}</p>
                        <p className="text-lg font-light leading-5 text-gray-300 mb-2"><i className="fas fa-user"></i> {username}</p>
                        <hr />
                        <div className="flex h-full justify-between text-gray-300 hover:text-gray-50">
                            <div>
                                <button onClick={handleDetailClick} className='btn-secondary px-3 py-1 text-white mt-1' >Read Blog</button>
                            </div>
                            <div className='flex items-center '>
                                <button onClick={() => setCount(count + 1)} className=' blog-btn mr-1 mt-1'><i className="far fa-heart"></i></button>
                                <p className='text-white'>{count}</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3">
                        <img className="w-full hover:animate-bounce rounded-lg" src={thumb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;