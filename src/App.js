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

    //Change page 
    const page = (pageNumber) => {
        //console.log(pageNumber)
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

    //Get episode name
    const [epnames, setEpName] = useState()
    const getepname = (epnum) => {
        const fetchPost = async () => {
            setLoading(true)
            const url = "https://rickandmortyapi.com/api/episode/" + epnum
            const response = await fetch(url)
            const data = await response.json();
            setEpName(data.name)
            setLoading(false)
        }
        fetchPost()
    }

    return (
        <div id='main'>
            <img className='title' src="https://carlisletheacarlisletheatre.org/images/rick-and-morty-logo-svg-3.png" alt='Rick and Morty' />
            <Posts posts={posts} loading={loading} episodenumber={getepname} episodeName={epnames} />
            <Pages totalPages={pages} page={page} />
        </div>
    )
}

export default App;
