import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useFilter from 'Utils/useFilter';
import Loader from 'Components/Loader';
import RedirectConfig from 'Config/Redirects';

const Redirect = () => {
    const { src } = useParams();
    const history = useHistory();
    const data = useFilter(RedirectConfig, 'from', src);

    useEffect(() => {
        if (!data) {
            history.goBack();
        }

        window.location.replace(data.to);
    }, [data, history]);

    return <Loader />;
};

export default Redirect;
