import React, { useEffect, useState } from 'react';
import Place from '../Home/Places/Place';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AllPlaces = () => {

    const [places, setPlaces] = useState([]);

    // load data
    useEffect(() => {
        // fetch('./fakeData.JSON')
        fetch('https://your-highway-travel.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className='container flex justify-center'>
                <div>
                    <h1 className='text-center text-3xl my-16 '> <span className='component-header px-10 py-2'>Top Destinations</span></h1>
                    <div className="grid md:grid-cols-3 gap-4">
                        {
                            places.map(place => <Place
                                key={place._id}
                                place={place}
                            >

                            </Place>)
                        }
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPlaces;