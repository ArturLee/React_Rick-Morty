import React, { useEffect, useState } from 'react'
import Character from './Character'
import axios from 'axios'
import { API_URL } from '../constants'



const getEpisodeNumber = (character) => {
    const episodelink = character.episode[character.episode.length - 1]
    return episodelink.split('/episode/')[1]
}


export default function Characters({ currentpage, episodesList }) {
    const [characters, addCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const currentPage = currentpage || 1

    useEffect(() => {
        let mounted = true; //fix this error index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

        setLoading(true)
        axios.get(`${API_URL}character/?page=${currentPage}`).then(data => {
            if (mounted) {
                addCharacter(data.data.results)
                setLoading(false)
            }
        })
        return () => {
            console.log('unmounted')
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
                lastepisodename={getlastepisodename(episodesList, getEpisodeNumber(character))}
                loading={loading}
            />
        )
    }

    return (
        <div id='grid'>
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

function getlastepisodename(episodelist, number) {
    const lastepisodename = episodelist[number - 1].name
    if (lastepisodename) {
        return (episodelist[number -1].name)
    }return 'unknown'
}

