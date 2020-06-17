import React, { useState } from 'react';

import usePrevious from '../hooks/usePrevious';

const PreviousUseExample = () => {
    const [value, setValue] = useState(0);
    const lastValue = usePrevious(value);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Current: {value} - Previous: {lastValue}</div>
            <br/>
            <button onClick={()=>setValue(value+1)}>
                Increment Money
            </button>
        </div>
    )
}

export default PreviousUseExample;