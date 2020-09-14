import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BrandHamburger = ({ hamburgerOpen, hamburgerClick }) => {
    const classes = classNames('navbar-burger', 'burger', {
        'is-active': hamburgerOpen,
    });

    return (
        <div className={classes} onClick={hamburgerClick}>
            <span />
            <span />
            <span />
        </div>
    );
};

BrandHamburger.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    hamburgerClick: PropTypes.func.isRequired,
};

export default BrandHamburger;
