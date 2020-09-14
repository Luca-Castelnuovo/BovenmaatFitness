import React from 'react';
import ReviewsContainer from './ReviewsContainer';

const Reviews = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-size-1 has-text-weight-medium">
                    Reviews
                </h2>
                <div className="tile is-ancestor">
                    <ReviewsContainer />
                </div>
            </div>
        </section>
    );
};

export default Reviews;
