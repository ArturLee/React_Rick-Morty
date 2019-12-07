import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2> //can do something prittier
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
                            </article>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts