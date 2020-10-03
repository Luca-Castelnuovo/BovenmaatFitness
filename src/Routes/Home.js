import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';

const Home = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default withBaseRoute(Home);
