import React from 'react';
import PropTypes from 'prop-types';
import BrandLogo from './BrandLogo';
import BrandBooking from './BrandBooking';
import BrandHamburger from './BrandHamburger';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    return (
        <div className="navbar-brand">
            <BrandLogo />

            <BrandBooking />

            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={toggleHamburger}
            />
        </div>
    );
};

Brand.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    toggleHamburger: PropTypes.func.isRequired,
};

export default Brand;
