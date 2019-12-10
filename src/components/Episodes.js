import { useEffect, useState } from 'react'
import axios from 'axios'

export const Episodes = url => {
    const [episode, setEpisode] = useState({data:null})
    const [episodes, setEpisodes] = useState()
    const [episodes2, setEpisodes2] = useState()
    
    useEffect(() => {
        setLoading(true)
        axios.get("https://rickandmortyapi.com/api/episode/").then(data => {
            setEpisodes(data.data.results)
            setEpisodePages(data.data.info.pages)
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        setLoading(true)
        axios.get("https://rickandmortyapi.com/api/episode/?page=2").then(data => {
            setEpisodes2(data.data.results)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        axios.get(url).then(data => {
            setEpisode(data.data.name)
        })
    },[url])
    return episode
}

