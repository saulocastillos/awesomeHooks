import { useEffect } from 'react'

const useClickInside = (ref, callback) => {
    const handleclick = e => {
        if(ref.current && ref.current.contains(e.target)){
            callback();
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleclick)
        return () => {
            document.removeEventListener('click', handleclick);
        }
    })
}

export default useClickInside;