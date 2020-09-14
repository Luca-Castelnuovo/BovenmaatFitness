import React from 'react';
import FooterBrands from './FooterBrands';
import FooterLocation from './FooterLocation';
import FooterHours from './FooterHours';
import FooterBooking from './FooterBooking';

const Footer = () => {
    return (
        <footer className="footer">
            <FooterBrands />

            <hr />

            <div className="content">
                <nav className="columns is-centered has-text-centered">
                    <FooterLocation />
                    <hr />
                    <FooterHours />
                    <hr />
                    <FooterBooking />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
