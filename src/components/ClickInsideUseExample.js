import React, { useRef } from 'react'

import useClickInside from '../hooks/useClickInside.js'

const ClickInsideExample = (onClickInside) => {
    const clickRef = useRef();
    useClickInside(clickRef, onClickInside);
    return (
        <div ref={clickRef}>
            <p >Hit the Box</p>
        </div>
    )
}

export default ClickInsideExample;