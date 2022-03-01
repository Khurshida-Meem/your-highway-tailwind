import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';
import LetteredAvatar from 'react-lettered-avatar';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

    return (
        <div className='banner-content'>
            <nav className="nav-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink
                                        to='/home'
                                        className="navlink hover:bg-white hover:text-black border-white  border-2 border-solid rounded-full   text-white px-3 py-1 text-sm font-medium"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to='/services'
                                        className="navlink hover:bg-white hover:text-black border-white  border-2 border-solid rounded-full   text-white px-3 py-1 text-sm font-medium"
                                    >
                                        Services
                                    </NavLink>

                                    <NavLink
                                        to='/blogs'
                                        className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full  text-white px-3 py-1 text-sm font-medium"
                                    >
                                        Blogs
                                    </NavLink>
                                    {user.email ? <NavLink
                                        to='/dashboard'
                                        className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full  text-white px-3 py-1 text-sm font-medium"
                                    >
                                        Profile
                                    </NavLink> : <NavLink
                                        to='/sign_in'
                                        className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full  text-white px-3 py-1 text-sm font-medium"
                                    >
                                        Sign In
                                    </NavLink>}

                                </div>
                            </div>
                        </div>
                        {user.email && <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {user.photoURL ? <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" /> : <LetteredAvatar
                                    name={user.displayName}
                                    className="h-6 w-6"
                                    radius={50}
                                    color="#fff"
                                    backgroundColor="rgb(55,55,22)"
                                // backgroundColors={arrayWithColors}
                                />}
                                <button onClick={logOut} className='ml-3 p-2 text-white nav-btn'>Sign Out</button>
                            </div>

                        </div>
                        }

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-white focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to='/home'
                                    className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full block w-32 text-center text-white px-3 py-1 text-sm font-medium"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to='/services'
                                    className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full block w-32 text-center text-white px-3 py-1 text-sm font-medium"
                                >
                                    Services
                                </NavLink>

                                <NavLink
                                    to='/blogs'
                                    className="navlink hover:bg-white hover:text-black border-white border-2 border-solid rounded-full text-white w-32 text-center block px-3 py-1 mt-2 text-sm font-medium"
                                >
                                    Blogs
                                </NavLink>

                                {user.email ? <NavLink
                                    to='/dashboard'
                                    className="navlink hover:bg-white hover:text-black block border-white border-2 border-solid rounded-full text-white px-3 w-32 text-center py-1 text-sm mt-2 font-medium"
                                >
                                    Profile
                                </NavLink> : <NavLink
                                    to='/sign_in'
                                    className="navlink hover:bg-white hover:text-black block border-white border-2 border-solid rounded-full text-white px-3 w-32 text-center py-1 text-sm mt-2 font-medium"
                                >
                                    Sign In
                                </NavLink>}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Navbar;