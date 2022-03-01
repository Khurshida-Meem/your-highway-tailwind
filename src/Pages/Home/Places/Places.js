import React, { useEffect, useState } from 'react';
import useData from '../../../hooks/useData';
import Place from './Place';

const Places = () => {

    // const places = useData('./fakedata.json');

    const [places, setPlaces] = useState([]);

    // load data
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <h1>Top Destinations</h1>
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