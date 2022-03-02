import React from 'react';
import Banner from '../Banner/Banner';
import Divider from '../Divider/Divider';
import Goals from '../Goals/Goals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Goals></Goals>
            <Divider></Divider>
        </div>
    );
};

export default Home;