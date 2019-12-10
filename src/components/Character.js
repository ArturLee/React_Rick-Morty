import React from 'react'
import Spinner from './Spinner'


export default (props) => {

	 return (props.loading)
	 	?	<Spinner />
		:	(
        <div id='grid'>
            <ul>
                <article>
                    <header>
                        <div className='shadow'>
                            <img src={props.img} alt={props.name} className='card__img' />
                        </div>
                        <h2>{props.name}</h2>
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
                        <p>ep. {props.lastepisode} <br/>
                        {props.lastepisodename}</p>
                        {console.log('2')}
                    </div>
                </article>
            </ul>
        </div>
    )
}
