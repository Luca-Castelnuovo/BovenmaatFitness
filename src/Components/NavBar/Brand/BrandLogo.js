import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.p`
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
    }
`;

const BrandLogo = () => {
    return (
        <Link to="/" className="navbar-item">
            <Title className="is-uppercase is-family-secondary has-text-white has-background-black pl-1 pr-1">
                Bovenmaat Fitness
            </Title>
        </Link>
    );
};

export default BrandLogo;
