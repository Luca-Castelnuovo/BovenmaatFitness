import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setproducts] = useState(null);
    const productsLocal = sessionStorage.getItem('products');

    useEffect(() => {
        if (productsLocal) {
            return;
        }

        const fetchData = async () => {
            const response = await fetch('/api/products');
            const json = await response.json();

            setproducts(json.data);
            sessionStorage.setItem('products', JSON.stringify(json.data));
        };

        fetchData();
    }, [productsLocal]);

    if (productsLocal) {
        return JSON.parse(productsLocal);
    }

    return products;
};

export default useProducts;
