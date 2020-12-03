import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import { get } from 'request';

import Resturaunt from './Resturaunt'

export const List = () => {

    

    //history hook for router
    const history = useHistory() 
    const [resturaunts, setResturaunts] = useState([])
    const location = useSelector(state => state.location)

    //Split functions for async await and promise chaining
    const getSingleResturaunt = async resturauntID => {
        return await fetch(`http://localhost:8888/resturaunt/${resturauntID}`)
        .then(res => res.json()).then(json => {
            return json
        })
    }

    const getAllResturaunts = async () => {
        return await Promise.all(location.nearby_res.map(getSingleResturaunt))
    }

    useEffect(()=>{
        getAllResturaunts().then(resturaunts => setResturaunts(resturaunts))
    },[])
    useEffect(()=>{
        console.log(resturaunts)
    },[resturaunts])
    
    return (

        <div className="container">
            <h1>Resturaunts located in {location.location.title}</h1>
            {resturaunts.map((e) => {
                return <Resturaunt info={e}/>
            })}
            <Link to="/">Search again</Link>

        </div>

    )

}



export default List