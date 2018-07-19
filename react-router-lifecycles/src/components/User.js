import React from 'react';

import UserHOC from '../hoc/UserHOC';

const User = () => {
    return (
        <div>
            Hello
        </div>
    );
}

export default UserHOC(User, 'Hello');