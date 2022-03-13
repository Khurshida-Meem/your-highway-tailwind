import React from 'react';
import Rating from 'react-rating';
import './Place.css'

const Place = (props) => {

    const { destination, thumb, star, starCount } = props.place;

    return (
        <div>
            <div className="flex justify-center items-stretch">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div className='card-img overflow-hidden'>
                        <img className="rounded-t-lg" src={thumb} alt="" height="200px" />
                    </div>

                    <div className="p-6">
                        <h2 className="text-gray-900 text-2xl font-medium mb-2 single-card-h2">{destination}</h2>
                        <p className="text-gray-700 text-base mb-4">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className='m-0 p-0'>
                            <Rating
                                className="rating text-center"
                                initialRating={star}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly ></Rating>
                        </div>

                    </div>
                    <div className="py-3 px-6 border-0 flex justify-between">
                        <span><i className="fas fa-users"></i> {starCount}</span>
                        <button type="button" className="py-2 px-4 btn-primary text-white">Add to Plan</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;