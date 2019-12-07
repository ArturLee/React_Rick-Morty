import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return (
            <div class="spinner">
                <span class="spinner-inner-1"></span>
                <span class="spinner-inner-2"></span>
                <span class="spinner-inner-3"></span>
            </div>
        )
    }

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
                                    <p>{characters.origin.name}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last location</span>
                                    <p>{characters.location.name}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last dimension</span>
                                    <p>{characters.location.name}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last episode seen</span>
                                    <p>{characters.episode[characters.episode.length]}</p>
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