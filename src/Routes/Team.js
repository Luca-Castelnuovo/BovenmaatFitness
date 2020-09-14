import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import TeamMembers from 'Components/Team';

const Team = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-size-1">Team</h1>
                <div className="columns">
                    <TeamMembers />
                </div>
            </div>
        </section>
    );
};

export default withBaseRoute(Team);
