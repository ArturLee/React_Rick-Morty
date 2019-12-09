import { useEffect, useState } from 'react'
import axios from 'axios'

export const Episodes = (url) => {
    const [state, setState] = useState({data:null})
    
    useEffect(() => {
        axios.get(url).then(data => {
            setState(data.data.name)
        })
    },[url])
    return state
}

