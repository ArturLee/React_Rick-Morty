import React, { useState, useEffect } from 'react';
import Pages from './components/Pages'
import './styles/styles.scss'
import axios from 'axios';
import Characters from './components/Characters'


function App() {

    const [pages, setNumberOfPages] = useState()
    const [epipages, setEpisodePages] = useState()
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1);


    useEffect(() => {
        setLoading(true)
        axios.get("https://rickandmortyapi.com/api/character/").then(data => {
            setNumberOfPages(data.data.info.pages)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        setLoading(true)
        axios.get("https://rickandmortyapi.com/api/episode/").then(data => {
            setEpisodePages(data.data.info.pages)
            setLoading(false)
        })
    }, [])

    //Change page
    const page = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    console.log(epipages)

    return (
        <div>
            {loading ? (
                <div className="spinner">
                    <span className="spinner-inner-1"></span>
                    <span className="spinner-inner-2"></span>
                    <span className="spinner-inner-3"></span>
                </div>
            ) : (

                    <div>
                        <img className='title' src="https://carlisletheacarlisletheatre.org/images/rick-and-morty-logo-svg-3.png" alt='Rick and Morty' />
                        <Characters currentpage={currentpage} />
                        <Pages totalPages={pages} page={page} />
                    </div>
                )}
        </div>
    )
}

export default App;