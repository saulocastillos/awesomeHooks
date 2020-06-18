import React, { useRef } from 'react'

import useClickInside from '../hooks/useClickInside.js'


const styles = {
    container: {
        border: '5px solid green',
        height: 150,
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const ClickInsideExample = ({onClickInside}) => {
    const clickRef = useRef();
    useClickInside(clickRef, onClickInside);
    return (
        <div
            ref={clickRef}
            style={styles.container}
        >
            <p>Hit the Box</p>
        </div>
    )
}

export default ClickInsideExample;