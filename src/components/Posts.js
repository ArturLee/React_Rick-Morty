import React from 'react'

const Posts = ({ posts, loading, episodenumber, episodeName }) => {
    if (loading) {
        return (
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
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
        const episodenum = episodelink.split('/')[5]
        return episodenum
    }

    function getlastepisodename(character) {
        const episodelink = character.episode[character.episode.length - 1]
        const episodenum = parseInt(episodelink.split('/')[5])
        //episodenumber(episodenum)
        return episodeName
    }

    // for (let i = 0; i <= posts.length; i++) {
    //     posts[i].episode.map(episodes => {

    //     })
    // }
    return (
        <div id='grid'>
            <ul>
                {posts.map(characters => (
                    <li key={characters.id}>
                        <div>
                            <article>
                                <header>
                                    <div className='shadow'>
                                        <img src={characters.image} alt={characters.name} className='card__img' />
                                    </div>
                                    <h2>{characters.name}</h2>
                                </header>
                                <div className='info'>
                                    <hr />
                                    <span>status</span>
                                    <p>{characters.status}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>species</span>
                                    <p>{characters.species}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>sex</span>
                                    <p>{characters.gender}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>origin</span>
                                    <p>{getOrigin(characters)}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last location</span>
                                    <p>{getlastlocation(characters)}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last dimension</span>
                                    <p>{getlastdimension(characters)}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last episode seen</span>
                                    <p>{getlastepisode(characters)}
                                        {getlastepisodename(characters)}</p>
                                </div>
                            </article>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts