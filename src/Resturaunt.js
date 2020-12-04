import React from 'react';
import { Card, Button } from 'react-bootstrap'
export const Resturaunt = (props) => {
    console.log(props)

    const info = props.info.establishment && props.info.cuisines ? `A ${props.info.establishment} who specializes in ${props.info.cuisines}` : ""
    
    return (
        // <div className="container">
        //     <h1>{props.info.name}</h1>
        //     <img src={props.info.thumb}></img>
        //     <span>type: {props.info.cuisines}</span> <span>pn: {props.info.phone_numbers}</span>
        //     <span>open from: {props.info.timings}</span>
        //     <a href={props.info.url}>Click here for a link</a>
        // </div>

        <Card style={{ width: '18rem' }} className="m-4">
        <Card.Img variant="top" src={props.info.thumb} />
        <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>
            {info}
            <p>Contact Info: {props.info.phone_numbers}</p>
            <p>Address: {props.info.location.address}</p>
        </Card.Text>
        <Button variant="primary"><a href={props.info.url} className="text-light">More Info</a></Button>
        </Card.Body>
        </Card>
    )

}



export default Resturaunt