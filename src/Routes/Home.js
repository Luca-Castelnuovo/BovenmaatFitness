import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';

import { Element as ScrollTarget } from 'react-scroll';
import styled from 'styled-components';

const Box = styled.figure`
    box-shadow: unset;
    padding: 0.5rem;
    border: unset;
`;

const Home = () => {
    return (
        <>
            <Hero />

            <ScrollTarget name="styles">
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-5">
                            <div className="box is-size-3 has-text-centered">
                                <p className="has-text-weight-semibold ">
                                    Jan Sluijter werkt met de mooiste kleuringen
                                    van L'Oréal Professionnel en is onder andere
                                    gespecialiseerd in French Balayage.
                                </p>
                                <p className="has-text-weight-medium mt-5">
                                    Hij heeft veel ervaring met het knippen van
                                    krullend haar en heeft daarnaast een grote
                                    passie voor kunst.
                                </p>
                                <p className="has-text-weight-medium mt-5 is-hidden-touch">
                                    Tevens wordt er gewerkt met tape extensions
                                    van Double True haarverlenging.
                                </p>
                            </div>
                        </div>

                        <div className="column is-6">
                            <div className="box">
                                <h2 className="title is-size-1 has-text-weight-medium has-text-centered">
                                    Uw fysiotherapeut en trainer:
                                </h2>
                                <div className="columns">
                                    <div className="column">
                                        <Box className="box has-background-primary image 1by1">
                                            <img
                                                src="https://www.personaltrainers.nl/public/user_images/1476.jpg"
                                                alt="Tom Preijde || Bovenmaat Fitness"
                                            />

                                            <p>Tom Preijde</p>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollTarget>
        </>
    );
};

export default withBaseRoute(Home);
