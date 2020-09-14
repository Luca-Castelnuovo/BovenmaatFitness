import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import MenuLink from 'Components/NavBar/Menu/MenuLink';

const BrandBooking = () => {
    return (
        <div className="navbar-item is-hidden-desktop">
            <MenuLink
                to="/redirect/booking"
                className="button is-primary is-rounded is-normal"
            >
                <span className="icon is-hidden-touch">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </span>

                <span>Maak een afspraak</span>
            </MenuLink>
        </div>
    );
};

export default BrandBooking;
