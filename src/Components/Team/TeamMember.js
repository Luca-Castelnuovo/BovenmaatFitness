import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, description, image }) => {
    return (
        <div className="column is-one-third">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-primary">
                        <p className="title">{name}</p>
                        <figure className="image is-1by1">
                            <img src={image} alt="Jan" />
                        </figure>
                        {description && (
                            <p className="is-size-4 mt-2">{description}</p>
                        )}
                    </article>
                </div>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default TeamMember;
