import React from 'react';

const Increment = ({countIncrement}) => {
    return (
        <div>
            <button onClick={countIncrement}>+5</button>
        </div>
    );
}

export default Increment;
