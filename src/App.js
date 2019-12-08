import React, { useState, useEffect } from 'react';
import Posts from './components/Posts'
import Pages from './components/Pages'
import './styles/styles.scss'



const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pages, setNumberOfPages] = useState(0)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const url = "https://rickandmortyapi.com/api/character/?page=0"
            const res = await fetch(url)
            const data = await res.json()
            setPosts(data.results)
            setNumberOfPages(data.info.pages)
            setLoading(false)
        }
        fetchPost()
    }, [])

    const episode = []
    const [ep, setEpisodePagees] = useState(0)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            // const url = "https://rickandmortyapi.com/api/episode/"
            // const res = await fetch(url)
            // const data = await res.json()
            // setEpisodePagees(data.info.pages)

            for (let i = 1; i <= 2; i++) {
                const url = "https://rickandmortyapi.com/api/episode/?page=" + i
                const res = await fetch(url)
                const data = await res.json()
                episode.push(data.results)
                console.log(data.results)
                setLoading(false)
            }
            console.log(episode)
        }
        fetchPost()
    }, [])

    //Change page 
    const page = (pageNumber) => {
        console.log(pageNumber)
        const fetchPost = async () => {
            setLoading(true)
            const url = "https://rickandmortyapi.com/api/character/?page=" + pageNumber
            const res = await fetch(url)
            const data = await res.json()
            setPosts(data.results)
            setNumberOfPages(data.info.pages)
            setLoading(false)
        }
        fetchPost()
    }

    return (
        <div id='main'>
            <img className='title' src="https://carlisletheacarlisletheatre.org/images/rick-and-morty-logo-svg-3.png" alt='Rick and Morty' />
            <Posts posts={posts} loading={loading} />
            <Pages totalPages={pages} page={page} />
        </div>
    )
}

export default App;
