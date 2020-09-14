import React from 'react';
import PropTypes from 'prop-types';

const ProductsItem = ({ product }) => {
    return (
        <div className="column is-one-third-tablet is-one-quarter-desktop is-one-fith-widescreen is-narrow">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={product.image} alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="subtitle is-5 has-text-primary has-text-weight-bold">
                        €{product.price}
                    </p>
                </div>
            </div>
        </div>
    );
};

ProductsItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductsItem;
