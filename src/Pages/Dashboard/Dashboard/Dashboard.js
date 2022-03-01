// import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem, Menu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Dashboard.css';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CgMenuLeft } from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import AddBlog from '../AddBlog/AddBlog';

const SidebarData = [
    {
        title: 'Add Blog',
        path: `/add_blog`,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];

const Dashboard = () => {

    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    let { path, url } = useRouteMatch();

    const { firebaseContext } = useAuth();
    const { user, logOut } = firebaseContext;

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
                            <Link to={`${url}/add_blog`} >
                                <AiIcons.AiFillHome />
                                <span>Add Blog</span>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className='container'>
                    <Switch>
                        {/* <Route exact path={path}>
                            {admin ? <MakeAdmin></MakeAdmin> : <MyOrders></MyOrders>}

                        </Route> */}
                        <Route path={`${path}`} >
                            <AddBlog></AddBlog>
                        </Route>
                        <Route path={`${path}/add_blog`} >
                            <AddBlog></AddBlog>
                        </Route>

                        {/* for admin */}
                        {/* <AdminRoute path={`${path}/all_orders`} >
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/orders_category`} >
                            <OrderByCatagory></OrderByCatagory>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make_admin`} >
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/add_product`} >
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/all_reviews`} >
                            <AllReviews></AllReviews>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage_products`} >
                            <AllProducts></AllProducts>
                        </AdminRoute> */}
                    </Switch>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Dashboard;