import React, { Component } from 'react';

class FetchData extends Component {
    state = {
        loading: true,
        character: []
    }

    async componentDidMount() {
        const page = 25
        const url = "https://rickandmortyapi.com/api/character/?page=" + page
        const response = await fetch(url) //wait for all the character to finishing load
        const data = await response.json();
        console.log(data)

        this.setState({
            loading: false,
             character: data.results
        })

    }

    render() {
        return (<div>
            {this.state.loading ?
                <div> loading ...</div>
                :
                <div>
                    {this.state.character.map(charc => (
                        <div key={charc.id}>
                            <div>{charc.name}</div>
                            <div>{charc.gender}</div>
                            <img src={charc.image}></img>
                        </div>
                    ))}
                </div>}
        </div>)
    }


}

export default FetchData