import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pages from './components/Pages'
import CharactersData from './components/CharactersData'
import { API_URL } from './constants'
import './styles/styles.scss'

export default () => {

    const [pages, setNumberOfPages] = useState()
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)


    const [countEpisodes, setCountEpisodes] = useState()
    const [episodes, setepisodes] = useState([])
    const [episodesList, setEpisodesList] = useState([])


    useEffect(() => {

        setLoading(true)
        axios.get(`${API_URL}character/`).then(data => {
            setNumberOfPages(data.data.info.pages)

        })
        axios.get(`${API_URL}episode/`).then(data => {
            setCountEpisodes(data.data.info.count)
        })

    }, [])


    useEffect(() => {

        setLoading(true)
        if (countEpisodes) {

            let count_array = []

            for (let i = 1; i <= countEpisodes; i++) {

                count_array.push(i)
            }
            axios.get(`${API_URL}episode/${count_array}`).then((data) => {
                setepisodes(data.data)
                setLoading(false)
            })
        }
    }, [countEpisodes])


    useEffect(() => {

        if (episodes.length > 0) {

            setEpisodesList(episodes)

        }
    }, [episodes])



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
                        <CharactersData currentpage={currentpage} episodesList={episodesList} />
                        <Pages totalPages={pages} setPage={setCurrentPage} />
                    </div>
                )}
        </div>
    )
}