import React from 'react';

const Loader = () => {
    return (
        <div className="preloader">
            <div className="preloader__inner">
                <svg className="spinner">
                    <circle cx="40" cy="40" r="36"></circle>
                </svg>
            </div>
        </div>
    );
};

export default Loader;
