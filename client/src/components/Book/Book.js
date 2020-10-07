import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

export default function Book() {
    return (
        <Jumbotron fluid>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/200" />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h1>Book Title Here</h1>
                        </div>
                        <div className="row">
                            <p>Description here</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Jumbotron>
    )
}