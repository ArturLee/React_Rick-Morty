import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pages from './components/Pages'
import CharactersData from './components/CharactersData'
import { API_URL } from './constants'
import './styles/styles.scss'




export default () => {

    const [pages, setNumberOfPages] = useState()
    const [epipages, setEpisodePages] = useState()
    const [episodes, setEpisodes] = useState()
    const [episodes2, setEpisodes2] = useState()
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1);
    // let episode = [...episodes,...episodes2]
    // console.log(episode)
    
    useEffect(() => {

        setLoading(true)
        axios.get(`${API_URL}character/`).then(data => {
            setNumberOfPages(data.data.info.pages)
        })
        axios.get(`${API_URL}episode/`).then(data => {
            setEpisodes(data.data.results)
            setEpisodePages(data.data.info.pages)
        })
        axios.get(`${API_URL}episode/?page=2`).then((data) =>{
            setEpisodes2(data.data.results)
            setLoading(false)
        })
    }, [])

    //Change page
    // const page = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    // console.log(epipages)

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
                        {console.log('not')}
                        <img className='title' src="https://carlisletheacarlisletheatre.org/images/rick-and-morty-logo-svg-3.png" alt='Rick and Morty' />
                        <CharactersData currentpage={currentpage} episodes={episodes} episodes2={episodes2}/>
                        <Pages totalPages={pages} setPage={setCurrentPage} />
                        
                    </div>
                )}
        </div>
    )
}
function getlastepisodename(episode, episode2){
    console.log(episode)
    console.log(episode2)
    let lastepiname = [...episode,...episode2]
    console.log(lastepiname)
    // return lastepiname
}