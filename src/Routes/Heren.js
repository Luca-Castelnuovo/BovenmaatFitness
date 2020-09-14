import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import HerenConfig from 'Config/Heren';
import Business2 from 'Assets/images/business/business2.jpg';

const Heren = () => {
    return <Service title="Heren" image={Business2} prices={HerenConfig} />;
};

export default withBaseRoute(Heren);
