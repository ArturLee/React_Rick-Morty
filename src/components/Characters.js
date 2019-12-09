import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import { Episodes } from './Episodes'
import axios from 'axios'


export default function Characters({currentpage}) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const currentPage = currentpage || 1

    useEffect(() => {
        setLoading(true)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`).then(data => {
            setPosts(data.data.results)
            setLoading(false)
        })
        
    },[currentPage])

    return (
        <div>
            {posts.map((characters => (
                <Posts
                    key={characters.id}
                    img={characters.image}
                    name={characters.name}
                    status={characters.status}
                    species={characters.species}
                    sex={characters.gender}
                    origin={getOrigin(characters)}
                    lastlocation={getlastlocation(characters)}
                    lastdimension={getlastdimension(characters)}
                    lastepisode={getlastepisode(characters)}
                    lastepisodename={getlastepisodename(characters)}
                    loading={loading}
                />)
            ))}
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

function getlastepisode(character) {
    const episodelink = character.episode[character.episode.length - 1]
    const episodenum = episodelink.split('/episode/')[1]
    return episodenum
}

function getlastepisodename(character) {
    const episodelink = character.episode[character.episode.length - 1]
    const episodenum = episodelink.split('/episode/')[1]
    //const url = `https://rickandmortyapi.com/api/episode/${episodenum}`
    //const {data} = Episodes(url)
    //console.log(data)

}