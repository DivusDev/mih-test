import React from 'react';
import { Card, Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Error = () => {
    
    
    return (
        <Jumbotron>
            <h1> Theres nothing here...</h1>
            <Button><Link to="/" className="text-light">Click me to go back home!</Link></Button>
        </Jumbotron>
    )

}
