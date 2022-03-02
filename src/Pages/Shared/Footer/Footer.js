import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-28 footer-bg'>
            <footer className="text-center lg:text-left footer-bg text-white">
                <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                    <div className="mr-12 text-white hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                </div>
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="">


                        </div>
                        <div className=" text-white">
                            <h6 className="uppercase text-white font-semibold mb-4 flex justify-center md:justify-start">
                                Products
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className=" text-white">Angular</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className=" text-white">React</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className=" text-white">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className=" text-white">Laravel</a>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="uppercase text-white font-semibold mb-4 flex justify-center md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-white">Pricing</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-white">Settings</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-white">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Help</a>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="uppercase font-semibold text-white mb-4 flex justify-center md:justify-start">
                                Contact
                            </h6>


                        </div>
                    </div>
                </div>
                <div className="text-center p-6 bg-footer">
                    <span>© 2022 Copyright: Khurshida Jahan Meem</span>

                </div>
            </footer>
        </div>
    );
};

export default Footer;