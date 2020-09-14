import React from 'react';
import PropTypes from 'prop-types';
import ProductsItem from './ProductsItem';

const ProductsCategory = ({ title, products }) => {
    if (products.length === 0) {
        return null;
    }

    return (
        <div className="mb-6">
            <h2 className="title is-size-3">{title}</h2>
            <hr />
            <div className="columns is-multiline">
                {products.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

ProductsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
};

export default ProductsCategory;
