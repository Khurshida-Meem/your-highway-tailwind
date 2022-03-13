import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner'
import Place from './Place';

const Places = () => {

    // const places = useData('./fakedata.json');

    const [places, setPlaces] = useState([]);
    places.splice(6, places.length);

    // load data
    useEffect(() => {
        // fetch('./fakeData.JSON')
        fetch('https://your-highway-travel.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className='mt-20'>
            {places.length ? <div><h1 className='text-center text-3xl mb-16'> <span className='component-header px-10 py-2'>Top Destinations</span></h1>
                <div className="grid md:grid-cols-2 gap-4 mx-3 ">
                    {
                        places.map(place => <Place
                            key={place._id}
                            place={place}
                        >

                        </Place>)
                    }
                </div>
            </div> :
                <div className='container flex justify-center mt-10' >
                    <Triangle color="#ef4565" height={100} width={200}
                    />
                </div>
            }
        </div>
    );
};

export default Places;