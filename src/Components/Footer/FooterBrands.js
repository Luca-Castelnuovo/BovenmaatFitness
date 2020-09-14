import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import doubleTrue from 'Assets/images/brands/double_true.jpg';
import tecniArt from 'Assets/images/brands/tecni_art.jpg';
import kerastase from 'Assets/images/brands/kerastase.jpg';
import lorealProfessionel from 'Assets/images/brands/loreal_professionel.jpg';
import marcInbane from 'Assets/images/brands/marc_inbane.jpg';

const Logo = styled.figure`
    width: 192px;
    margin-left: auto !important;
    margin-right: auto !important;
`;

const FooterBrands = () => {
    return (
        <div className="content">
            <Link to="/producten">
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <Logo className="image">
                            <img
                                alt="Double True || Sluijter Kappers"
                                src={doubleTrue}
                            />
                        </Logo>
                    </div>
                    <div className="column is-narrow">
                        <Logo className="image">
                            <img
                                alt="Tecni Art || Sluijter Kappers"
                                src={tecniArt}
                            />
                        </Logo>
                    </div>
                    <div className="column is-narrow">
                        <Logo className="image">
                            <img
                                alt="Kérastase || Sluijter Kappers"
                                src={kerastase}
                            />
                        </Logo>
                    </div>
                    <div className="column is-narrow">
                        <Logo className="image">
                            <img
                                alt="L'Oréal Professionel || Sluijter Kappers"
                                src={lorealProfessionel}
                            />
                        </Logo>
                    </div>
                    <div className="column is-narrow">
                        <Logo className="image">
                            <img
                                alt="Marc Inbane || Sluijter Kappers"
                                src={marcInbane}
                            />
                        </Logo>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FooterBrands;
