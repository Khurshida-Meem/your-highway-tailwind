import './Dashboard.css';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CgMenuLeft } from 'react-icons/cg';
import { ImBlogger } from "react-icons/im";
import { MdAddComment } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { RiAdminFill, RiLogoutCircleRLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import AddBlog from '../AddBlog/AddBlog';
import MyBlogs from '../MyBlogs/MyBlogs';
import AllBlogs from '../AllBlogs/AllBlogs';
import AddPlace from '../AddPlace/AddPlace';
import AllPlaces from '../AllPlaces/AllPlaces';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute'


const Dashboard = () => {

    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    let { path, url } = useRouteMatch();

    const { firebaseContext } = useAuth();
    const { admin, logOut } = firebaseContext;

    return (

        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <CgMenuLeft onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <CgMenuLeft />
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/home' >
                                <AiIcons.AiFillHome />
                                <span className="nav-span">Home</span>
                            </Link>
                        </li>
                        {admin || <div>
                            <li className='nav-text'>
                                <Link to={`${url}/add_blog`} >
                                    <BsPencilSquare />
                                    <span className="nav-span">Add Blog</span>
                                </Link>
                            </li>
                            <li className='nav-text'>
                                <Link to={`${url}/my_blogs`} >
                                    <ImBlogger />
                                    <span className="nav-span">My Blogs</span>
                                </Link>
                            </li>
                        </div>}





                        {admin && <div>
                            <li className='nav-text'>
                                <Link to={`${url}/all_blogs`} >
                                    <ImBlogger />
                                    <span className="nav-span">Manage All Blogs</span>
                                </Link>
                            </li>
                            <li className='nav-text'>
                                <Link to={`${url}/add_place`} >
                                    {/* <AiIcons.AiFillHome /> */}
                                    <MdAddComment />
                                    <span className="nav-span">Add Place</span>
                                </Link>
                            </li>
                            <li className='nav-text'>
                                <Link to={`${url}/all_place`} >
                                    <SiManageiq />
                                    <span className="nav-span">Manage Places</span>
                                </Link>
                            </li>
                            <li className='nav-text'>
                                <Link to={`${url}/make_admin`} >
                                    <RiAdminFill />
                                    <span className="nav-span">Make Admin</span>
                                </Link>
                            </li>
                        </div>}
                        <li className='nav-text'>
                            <button onClick={logOut} className="mt-8 mb-8 py-2 w-48 btn-primary text-white">
                                <span className='flex justify-center items-center' ><RiLogoutCircleRLine /> <p className='text-white ml-1'>Sign Out</p></span>
                            </button>
                        </li>


                    </ul>
                </nav>
                <div className='container'>
                    <Switch>

                        <Route exact path={path} >
                            <AddBlog></AddBlog>
                        </Route>
                        <Route path={`${path}/add_blog`} >
                            <AddBlog></AddBlog>
                        </Route>
                        <Route path={`${path}/my_blogs`} >
                            <MyBlogs></MyBlogs>
                        </Route>
                        <Route path={`${path}/all_blogs`} >
                            <AllBlogs></AllBlogs>
                        </Route>
                        <Route path={`${path}/add_place`} >
                            <AddPlace></AddPlace>
                        </Route>
                        <Route path={`${path}/all_place`} >
                            <AllPlaces></AllPlaces>
                        </Route>
                        <AdminRoute path={`${path}/make_admin`} >
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>


                    </Switch>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Dashboard;