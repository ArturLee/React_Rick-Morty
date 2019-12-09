import React from 'react'

const Posts = props => {
    if (props.loading) {
        return (
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
        )
    }
    
    return (
        <div id='grid'>
            <ul>
                <article>
                    <header>
                        <div className='shadow'>
                            <img src={props.img} alt={props.name} className='card__img' />
                        </div>
                        <h2>{props.name}</h2>
                        {console.log('1')}
                    </header>
                    <div className='info'>
                        <span>status</span>
                        <p>{props.status}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>species</span>
                        <p>{props.species}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>sex</span>
                        <p>{props.sex}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>origin</span>
                        <p>{props.origin}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>last location</span>
                        <p>{props.lastlocation}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>last dimension</span>
                        <p>{props.lastdimension}</p>
                    </div>
                    <div className='info'>
                        <hr />
                        <span>last episode seen</span>
                        <p>ep. {props.lastepisode}</p>
                    </div>
                </article>
            </ul>
        </div>
    )
}

export default Posts