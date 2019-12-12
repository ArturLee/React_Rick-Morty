import React from 'react'
import Spinner from './Spinner'

export default (props) => {

    return (props.loading)
        ? <Spinner />
        : (
            <ul>
                <article >
                    <div className="flip-card-container">

                        <div className="flip-card">
                            <div className="flip-card-front">
                                <header>
                                    <div className='shadow'>
                                        <img src={props.img} alt={props.name} className='card__img' />
                                    </div>
                                    <h2>{props.name}</h2>
                                    <h3>{props.status}</h3>
                                </header>
                                <div className='info'>
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
                                    <p>ep. {props.lastepisode} <br />
                                        {props.lastepisodename}</p>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-back-info">
                                    <h1> Episodes </h1>
                                    {props.allepisodes.map(n => {
                                        return <span key={n}> {n} </span>
                                    })}

                                </div>
                            </div>


                        </div>

                    </div>
                </article>
            </ul >

        )
}
