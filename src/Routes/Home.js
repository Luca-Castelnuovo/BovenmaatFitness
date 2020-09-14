import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';
import Styles from 'Components/Styles';
import Reviews from 'Components/Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Hero />

            <Styles />

            <Reviews />
        </>
    );
};

export default withBaseRoute(Home);
