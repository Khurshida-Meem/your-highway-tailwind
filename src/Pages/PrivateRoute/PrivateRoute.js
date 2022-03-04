import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Triangle } from 'react-loader-spinner'

const PrivateRoute = ({ children, ...rest }) => {

    const { firebaseContext } = useAuth();
    const { user, isLoading } = firebaseContext;
    if (isLoading) {
        // spinner
        return (
            <div className='container flex justify-center mt-10' >
                <Triangle color="#ef4565" height={100} width={200}
                />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/sign_in",
                    state: { from: location }
                }}
            ></Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;