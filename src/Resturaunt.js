import React from 'react';


export const Resturaunt = (props) => {
    console.log(props)
    
    return (

        <div className="container">
            <h1>{props.info.name}</h1>
            <img src={props.info.thumb}></img>
            <span>type: {props.info.cuisines}</span> <span>pn: {props.info.phone_numbers}</span>
            <span>open from: {props.info.timings}</span>
            <a href={props.info.url}>Click here for a link</a>
        </div>
    )

}



export default Resturaunt