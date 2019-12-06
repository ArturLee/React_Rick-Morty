import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2> //can do something prittier
    }

    return (
        <ul>
            {posts.map( characters => (
                <li key={characters.id}>
                    <div>
                        <img src={characters.image}/>
                        {characters.name}
                    </div>
                </li>
            ))}
        </ul>

    )
}

export default Posts