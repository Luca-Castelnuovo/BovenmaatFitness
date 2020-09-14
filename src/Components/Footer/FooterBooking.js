import React from 'react';
import { Link } from 'react-router-dom';

const Footerbooking = () => {
    return (
        <div className="column is-one-third">
            <p className="title">Afspraak Maken</p>

            <div className="columns is-centered">
                <div className="column is-narrow">
                    <Link
                        to="/redirect/booking"
                        className="button is-primary is-medium"
                    >
                        Online
                    </Link>
                </div>

                <div className="column is-narrow">
                    <a
                        href="tel:0356018613"
                        className="button is-primary is-medium is-outlined"
                    >
                        035 601 8613
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footerbooking;
