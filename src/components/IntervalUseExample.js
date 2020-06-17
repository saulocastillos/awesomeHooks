import React, { useState } from 'react';

import useInterval from '../hooks/useIntervalHook'

const IntervalUseExample = () => {
    const [seconds, setSeconds] = useState(0);
  
    useInterval(()=>{
      setSeconds(seconds+1);
    },1000);
  
    return <p>{seconds}</p>
}

export default IntervalUseExample;