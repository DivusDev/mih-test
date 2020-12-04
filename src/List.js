import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import { Container, Button, Row, Col, Jumbotron } from 'react-bootstrap'

import Resturaunt from './Resturaunt'

export const List = () => {

    

    //history hook for router
    const history = useHistory() 
    const [resturaunts, setResturaunts] = useState([])
    const location = useSelector(state => state.location)
    

    //Split functions for async await and promise chaining
    const getSingleResturaunt = async resturauntID => {
        return await fetch(`https://us-central1-mih-test.cloudfunctions.net/api/resturaunt/${resturauntID}`)
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
        // console.log(resturaunts)
    },[resturaunts])
    
    return (

        <Container>
            <Jumbotron>
                <h1>Resturaunts located in {location.location.title}</h1>
                <Button>
                    <Link to="/" className="text-light">Search again</Link>
                </Button>
            </Jumbotron>
                <Row>
                    {resturaunts.map((e, i) => {
                    return(
                        <Col key={i} md={4}>
                            <Resturaunt info={e}/>
                        </Col>
                        )
                    })}
                </Row>
            
            <Button>
                <Link to="/" className="text-light">Search again</Link>
            </Button>
        </Container>

    )

}



export default List