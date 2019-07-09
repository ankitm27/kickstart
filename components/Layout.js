import React from 'react';
import Header from "./Header.js";
import { Container } from "semantic-ui-react";
  
export default (props) => {
    return (
        // <div>
        <Container>
        <Header />
            {props.children}
            
        {/* </div> */}
        </Container>
    )
}