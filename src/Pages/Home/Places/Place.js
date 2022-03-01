import React from 'react';
import Rating from 'react-rating';

const Place = (props) => {

    const { destination, thumb, country, cost, star, starCount } = props.place;

    return (
        <div>
            <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300">
                        Featured
                    </div>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                        <p className="text-gray-700 text-base mb-4">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className='m-0 p-0'>
                            <Rating
                                className="text-center"
                                initialRating={star}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly ></Rating>
                        </div>

                    </div>
                    <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                        <button type="button" className="py-2 px-4 btn-primary text-white">Button</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;