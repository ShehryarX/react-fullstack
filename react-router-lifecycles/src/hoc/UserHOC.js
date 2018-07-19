import React from 'react';

const UserHOC = (WrappedComponent, arg1) => {
    return (props) => (
        <div>
            <WrappedComponent {...props} />
        </div>
    )
}

export default UserHOC; 