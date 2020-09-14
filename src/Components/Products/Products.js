import React from 'react';
import useProducts from 'Utils/useProducts';
import ProductsCategory from './ProductsCategory';

const Products = () => {
    const ProductsAPI = useProducts();

    if (!ProductsAPI) {
        return <progress className="progress is-large is-primary"></progress>;
    }

    return (
        <>
            <ProductsCategory
                title="Kérastase"
                products={ProductsAPI.kerastase}
            />
            <ProductsCategory title="L'Oréal" products={ProductsAPI.loreal} />
            <ProductsCategory
                title="Tecni Art"
                products={ProductsAPI.tecni_art}
            />
            <ProductsCategory
                title="Marc Inbane"
                products={ProductsAPI.marc_inbane}
            />
            <ProductsCategory
                title="Double True"
                products={ProductsAPI.double_true}
            />
            <ProductsCategory title="Overig" products={ProductsAPI.overig} />
        </>
    );
};

export default Products;
