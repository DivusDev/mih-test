import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { Container, Jumbotron, InputGroup, Form, Button, Alert } from 'react-bootstrap';

export const Search = () => {

    //dispatch code for accessing store in redux
    const dispatch = useDispatch()

    //history hook for router
    const history = useHistory() 

    //local state for functionality
    const [currLocation, setCurrLocation] = useState('');

    const [notFound, setNotFound] = useState(false)

    const handleSubmit = e => {
        //stop page refresh
        e.preventDefault()
        //fetch data from node endpoint
        console.log(currLocation)
        fetch(`https://us-central1-mih-test.cloudfunctions.net/api/search/${currLocation}`)
        .then(res => res.json()).then(json => {
            console.log(json)
            if (Object.entries(json).length > 0){
                //put recieved data in redux store
                dispatch({
                    type: "UPDATE_LOCATION",
                    payload: json
                })
                //change page
                history.push('/list')
            } else {
                setNotFound(true)
            }
            
        })

    }

    const handleChange = e => {
        setCurrLocation(e.target.value)
    }


    
    return (

        <Container fluid="justify-content-md-center">
            <Jumbotron>
                <h1>Find resturaunts near you!</h1>
                <p>This is a simple tool designed to help you find new exciting places to eat around you</p>
                <p>
                    Just enter your city and press the Search button
                </p>
            </Jumbotron>
            <Container>
                {notFound && <Alert variant='danger'>The chosen city/county/state was not found</Alert>}
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>City or County</InputGroup.Text>
                        </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="New York" size="lg" onChange={handleChange}/>
                            <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">Find Me a Place to Eat!</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Container>
        </Container>
    )

}



export default Search