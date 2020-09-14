import PropTypes from 'prop-types';

const useFilter = (data, filter, search) => {
    return data.filter((entry) => {
        return entry[filter] === search;
    })[0];
};

useFilter.propTypes = {
    data: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
};

export default useFilter;
