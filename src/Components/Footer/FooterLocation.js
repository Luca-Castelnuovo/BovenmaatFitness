import React from 'react';
import { Link } from 'react-router-dom';
import Maps from 'Assets/images/business/maps.jpg';

const FooterLocation = () => {
    return (
        <div className="column is-one-third">
            <p className="title">Locatie</p>
            <p className="is-hidden-desktop is-size-3">
                <Link to="/redirect/gmaps">
                    Zuidpromenade 1a, <br />
                    3768 EM SOEST
                </Link>
            </p>

            <div className="is-hidden-touch">
                <Link to="/redirect/gmaps">
                    <figure className="image is-3by2">
                        <img alt="Locatie || Sluijter Kappers" src={Maps} />
                    </figure>
                </Link>
            </div>
        </div>
    );
};

export default FooterLocation;
