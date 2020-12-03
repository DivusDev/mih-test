import React from 'react';
import { connect } from 'react-redux';

export const Search = () => {

    //dispatch code for accessing store in redux
    const dispatch = () => {

    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("hi")
        fetch(`http://localhost:8888/search/${this.state.location}`)
        .then(res => res.json()).then(json => {
            console.log(json)
            this.setState({resturaunts: json})
        })

    }

    const handleChange = e => {
        this.setState({location: e.target.value})
    }


    
    return (

        <div className="container">
            <h1>Where are you located?</h1>
            <form onSubmit={this.handleSubmit}>
                <input name="query" type="text" onChange={this.handleChange} ></input>
                <label for="query"> Your location</label>
                <button type='submit'></button>
            </form>
        </div>
    )

}



export default Search