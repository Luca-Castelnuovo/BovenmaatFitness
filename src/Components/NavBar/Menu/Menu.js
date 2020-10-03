import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import MenuLink from './MenuLink';

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen,
    });

    return (
        <div className={classes}>
            <div className="navbar-start">
                <MenuLink to="/home">Home</MenuLink>
                <MenuLink to="/persoonlijke-aandacht">
                    Persoonlijke aandacht
                </MenuLink>
                <MenuLink to="/inschrijven">Lid worden</MenuLink>
            </div>

            <div className="navbar-end is-hidden-touch">
                <div className="navbar-item">
                    <MenuLink
                        to="/redirect/booking"
                        className="button is-primary is-medium"
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                        <span>Maak een afspraak</span>
                    </MenuLink>
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
};

export default Menu;
