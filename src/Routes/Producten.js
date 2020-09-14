import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Products from 'Components/Products';

const Producten = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-size-1">Producten</h1>
                <Products />
            </div>
        </section>
    );
};

export default withBaseRoute(Producten);
