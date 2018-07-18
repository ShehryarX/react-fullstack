import React from 'react';

const Conditional = () => {
    const value = true; // can be a function too

    return (
        <div>
            { value ? 
                <div>
                Hello, it's true!
                </div>
                :
                null    
            }
        </div>
    )
}

export default Conditional;