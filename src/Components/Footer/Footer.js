import React from 'react';
import FooterLocation from './FooterLocation';
import FooterHours from './FooterHours';
import FooterContact from './FooterContact';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <nav className="columns is-centered has-text-centered">
                    <FooterLocation />
                    <hr />
                    <FooterHours />
                    <hr />
                    <FooterContact />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
