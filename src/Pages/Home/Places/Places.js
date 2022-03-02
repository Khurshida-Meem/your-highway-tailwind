import React, { useEffect, useState } from 'react';
import useData from '../../../hooks/useData';
import Place from './Place';

const Places = () => {

    // const places = useData('./fakedata.json');

    const [places, setPlaces] = useState([]);
    places.splice(6, places.length);

    // load data
    useEffect(() => {
        // fetch('./fakeData.JSON')
        fetch('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Your%20Highwy/fakedata.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl mb-16'> <span className='component-header px-10 py-2'>Top Destinations</span></h1>
            <div class="grid md:grid-cols-2 gap-4">
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                    >

                    </Place>)
                }
            </div>
        </div>
    );
};

export default Places;