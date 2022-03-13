import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner'
import Place from '../Home/Places/Place';
import Pagination from '../Pagination/Pagination';
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
    // let dataLength = places.length-

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                {places.length ? <div>
                    <div>
                        <h1 className='text-center text-3xl my-16 '> <span className='component-header px-10 py-2'>Top Destinations</span></h1>

                        <div>
                            {/* {
                                places.map(place => <Place
                                    key={place._id}
                                    place={place}
                                >

                                </Place>)
                            } */}
                            <Pagination
                                data={places}
                                RenderComponent={Place}
                                pageLimit={Math.floor(places.length / 6) + 1}
                                dataLimit={6}
                            />

                        </div>
                    </div>
                </div> :
                    <div className='container flex justify-center mt-10' >
                        <Triangle color="#ef4565" height={100} width={200}
                        />
                    </div>
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPlaces;