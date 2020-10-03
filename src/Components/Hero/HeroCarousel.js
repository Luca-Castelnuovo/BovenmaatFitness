import React, { useEffect } from 'react';
import styled from 'styled-components';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';

import Hero1 from 'Assets/images/hero/hero1.jpg';
import Hero2 from 'Assets/images/hero/hero2.jpg';
import Hero3 from 'Assets/images/hero/hero3.jpg';
import Hero4 from 'Assets/images/hero/hero4.jpg';

const Slide = styled.div`
    height: 100%;
`;

const HeroCarousel = () => {
    useEffect(() => {
        let carousel = [];

        carousel = bulmaCarousel.attach('.hero-carousel', {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false,
            navigation: false,
            effect: 'fade',
        });

        const delay = (a) => new Promise((t) => setTimeout(t, a));

        const slideReset = async () => {
            await delay(12000);
            carousel[0].reset();

            slideReset();
        };

        slideReset();
    }, []);

    return (
        <div className="hero-carousel">
            <Slide className="has-background is-active">
                <img
                    className="is-background"
                    src={Hero1}
                    alt="Hero 1 || Bovenmaat Fitness"
                />
            </Slide>
            <Slide className="has-background">
                <img
                    className="is-background"
                    src={Hero2}
                    alt="Hero 2 || Bovenmaat Fitness"
                />
            </Slide>
            <Slide className="has-background">
                <img
                    className="is-background"
                    src={Hero3}
                    alt="Hero 3 || Bovenmaat Fitness"
                />
            </Slide>
            <Slide className="has-background">
                <img
                    className="is-background"
                    src={Hero4}
                    alt="Hero 4 || Bovenmaat Fitness"
                />
            </Slide>
        </div>
    );
};

export default HeroCarousel;
