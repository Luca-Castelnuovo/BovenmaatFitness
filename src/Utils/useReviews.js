import { useState, useEffect } from 'react';

const useReviews = () => {
    const [reviews, setreviews] = useState(null);
    const reviewsLocal = sessionStorage.getItem('reviews');

    useEffect(() => {
        if (reviewsLocal) {
            return;
        }

        const fetchData = async () => {
            const response = await fetch('/api/reviews');
            const json = await response.json();

            setreviews(json.data);
            sessionStorage.setItem('reviews', JSON.stringify(json.data));
        };

        fetchData();
    }, [reviewsLocal]);

    if (reviewsLocal) {
        return JSON.parse(reviewsLocal);
    }

    return reviews;
};

export default useReviews;
