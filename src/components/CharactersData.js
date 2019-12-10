import React, { useEffect, useState } from 'react'
import Character from './Character'
import axios from 'axios'
import { API_URL } from '../constants'



const getEpisodeNumber = (character) => {
    const episodelink = character.episode[character.episode.length - 1]
    return episodelink.split('/episode/')[1]
}


export default function Characters({ currentpage, episodes, episodes2 }) {
    const [characters, addCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const currentPage = currentpage || 1
    const lastEpisodeNames = []


    useEffect(() => {
        let mounted = true; //fix this error index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

        setLoading(true)
        axios.get(`${API_URL}character/?page=${currentPage}`)
        .then(data => {
            if (mounted) {
                addCharacter(data.data.results)
            }
        })
        setLoading(false)
        return () => {
            //console.log('unmounted')
            mounted = false
        }
    }, [currentPage])

    const renderCharacter = (character) => {
        return (
            <Character
                key={character.id}
                img={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                sex={character.gender}
                origin={getOrigin(character)}
                lastlocation={getlastlocation(character)}
                lastdimension={getlastdimension(character)}
                lastepisode={getEpisodeNumber(character)}
                lastepisodename={getlastepisodename(episodes, episodes2, getEpisodeNumber(character))}
                loading={loading}
            />
        )
    }

    return (
        <div>
            
            {characters.map(renderCharacter)}
        </div>
    )
}



function getOrigin(character) {
    const origin = character.origin.name.split('(')[0]
    return origin
}

function getlastlocation(character) {
    const lastlocation = character.location.name.split('(')[0]
    return lastlocation;
}

function getlastdimension(character) {
    const locationname = character.location.name
    const locationDimension = locationname.split('(')[1]
    if (!locationDimension) { return "unknown" }
    const lastDimension = locationDimension.slice(0, -1)
    return lastDimension
}

function getlastepisodename(episodes, episodes2, number) {
    //console.log(episodes2)
    //console.log(number)
    // const [lastEpisodeName, setlastEpisodeName] = useState()
    // const url = `${API_URL}episode/${number}`
    // axios.get(url).then(data => {
    //     //console.log(data.data.name)
    //     setlastEpisodeName(data.data.name)

    // })
    // //console.log(lastEpisodeName)
    // console.log(lastEpisodeName)
    // return
    // const episodelink = character.episode[character.episode.length - 1]
    // const episodenum = parseInt(episodelink.split('/episode/')[1])
    // const url = `https://rickandmortyapi.com/api/episode/${episodenum}`
    // const {data} = Episodes(url)
    // console.log(data)
    const episodelist = episodes.concat(episodes2)
    //console.log(episodelist)
    return(episodelist[number-1].name)
}

