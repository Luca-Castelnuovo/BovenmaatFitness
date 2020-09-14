import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroBody from './HeroBody';
import HeroFooter from './HeroFooter';

const Hero = () => {
    return (
        <section className="hero is-fullheight-with-navbar has-carousel">
            <HeroCarousel />

            <HeroBody />

            <HeroFooter />
        </section>
    );
};

export default Hero;
