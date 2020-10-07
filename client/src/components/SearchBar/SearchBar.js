import React from "react";
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Container from "react-bootstrap/Container"


function SearchBar() {
        return (
                <Container>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Search!</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Container>
        )
}

export default SearchBar;
