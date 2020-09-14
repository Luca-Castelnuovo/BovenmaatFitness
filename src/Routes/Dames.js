import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import DamesConfig from 'Config/Dames';
import Business1 from 'Assets/images/business/business1.jpg';

const Dames = () => {
    return <Service title="Dames" image={Business1} prices={DamesConfig} />;
};

export default withBaseRoute(Dames);
