import React from 'react';
import { Element as ScrollTarget } from 'react-scroll';
import StylesItem from './StylesItem';

const Styles = () => {
    return (
        <ScrollTarget name="styles">
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-5">
                        <div className="box is-size-3 has-text-centered">
                            <p className="has-text-weight-semibold ">
                                Jan Sluijter werkt met de mooiste kleuringen van
                                loreal professional en is onder andere
                                gespecialiseerd in French Balayage.
                            </p>
                            <p className="has-text-weight-medium mt-5">
                                Hij heeft veel ervaring met het knippen van
                                krullend haar en heeft daarnaast een grote
                                passie voor kunst.
                            </p>
                            <p className="has-text-weight-medium mt-5 is-hidden-touch">
                                Tevens wordt er gewerkt met tape extensions van
                                Double True haarverlenging.
                            </p>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box">
                            <h2 className="title is-size-1 has-text-weight-medium has-text-centered">
                                Voor wie zoekt u een haarstijl?
                            </h2>
                            <div className="columns">
                                <StylesItem gender="female" />
                                <StylesItem gender="male" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTarget>
    );
};

export default Styles;
