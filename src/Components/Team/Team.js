import React from 'react';
import TeamConfig from 'Config/Team';
import TeamMember from './TeamMember';

const Team = () => {
    return TeamConfig.map((member) => (
        <TeamMember
            key={member.name}
            name={member.name}
            description={member.description}
            image={member.image}
        />
    ));
};

export default Team;
