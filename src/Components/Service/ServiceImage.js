import React from 'react';
import PropTypes from 'prop-types';

const ServiceImage = ({ image }) => {
    return (
        <div className="column is-hidden-touch">
            <div className="column is-hidden-touch">
                <figure className="image is-5by4">
                    <img src={image} alt="De Zaak || Sluijter Kappers" />
                </figure>
            </div>
        </div>
    );
};

ServiceImage.propTypes = {
    image: PropTypes.string.isRequired,
};

export default ServiceImage;
