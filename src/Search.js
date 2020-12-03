import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

export const Search = () => {

    //dispatch code for accessing store in redux
    const dispatch = useDispatch()

    //history hook for router
    const history = useHistory() 

    //local state for functionality
    const [currLocation, setCurrLocation] = useState('');

    const handleSubmit = e => {
        //stop page refresh
        e.preventDefault()
        //fetch data from node endpoint
        console.log(currLocation)
        fetch(`http://localhost:8888/search/${currLocation}`)
        .then(res => res.json()).then(json => {
            console.log(json)
            //put recieved data in redux store
            dispatch({
                type: "UPDATE_LOCATION",
                payload: json
            })
            //change page
            history.push('/list')
        })

    }

    const handleChange = e => {
        setCurrLocation(e.target.value)
    }


    
    return (

        <div className="container">
            <h1>Where are you located?</h1>
            <form onSubmit={handleSubmit}>
                <input name="query" type="text" onChange={handleChange} ></input>
                <label htmlFor="query"> Your location</label>
                <button type='submit'></button>
            </form>
        </div>
    )

}



export default Search