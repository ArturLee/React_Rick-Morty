import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return (
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
        )
    }
    // for (let i = 0; i <= posts.length; i++) {
    //     posts[i].episode.map(episodes => {
            
    //     })
    // }
    let num = 'a'; 
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
                                    <p>{characters.origin.name.split('(')[0]}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last location</span>
                                    <p>{characters.location.name.split('(')[0]}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last dimension</span>
                                    <p alt='none'>{characters.location.name.split('(')[1]}</p>
                                </div>
                                <div className='info'>
                                    <hr />
                                    <span>last episode seen</span>
                                    {console.log((characters.episode[characters.episode.length-1]))}
                                    <p>{characters.episode[characters.episode.length-1].split('/')[5].toString()}
                                    {characters.episode[characters.episode.length-1]}</p>
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