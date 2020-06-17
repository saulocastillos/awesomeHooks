import React, { useState } from 'react';

import useTimeout from '../hooks/useTimeoutHook';

const TimeoutUseExample = () => {
    const [seconds, setSeconds] = useState('After 5 sec will be displayed');
  
    useTimeout(()=>{
      setSeconds('TaDa');
    },5000);
  
    return <p>{seconds}</p>
}

export default TimeoutUseExample;