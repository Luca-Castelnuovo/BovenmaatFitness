import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FemaleModel from 'Assets/images/models/female.jpg';
import MaleModel from 'Assets/images/models/male.jpg';

const Box = styled.figure`
    box-shadow: unset;
    padding: 0.5rem;
`;

const Stylesitem = ({ gender }) => {
    return (
        <div className="column">
            <Link to={gender === 'female' ? '/dames' : '/heren'}>
                <Box className="box has-background-primary image 1by1">
                    <img
                        src={gender === 'female' ? FemaleModel : MaleModel}
                        alt={`${
                            gender === 'female' ? 'Vrouwelijk' : 'Mannelijk'
                        } Model || Sluijter Kappers`}
                    />
                </Box>
            </Link>
        </div>
    );
};

Stylesitem.propTypes = {
    gender: PropTypes.string.isRequired,
};

export default Stylesitem;
