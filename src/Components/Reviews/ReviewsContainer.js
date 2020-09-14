import React from 'react';
import ReviewsItem from './ReviewsItem';
import useReviews from 'Utils/useReviews';

const ReviewsContainer = () => {
    const ReviewsData = useReviews();

    if (!ReviewsData) {
        return <progress className="progress is-large is-primary"></progress>;
    }

    return ReviewsData.map((review) => (
        <ReviewsItem key={review.name} review={review} />
    ));
};

export default ReviewsContainer;
