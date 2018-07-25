import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    return (
        <div>
template
        </div>
    )
}

UserTemplate.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    canSpeakFrench: PropTypes.bool,
    randomFunction: PropTypes.func,
    randomObject: PropTypes.object,
}

export default UserTemplate;