import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`
.container {
  margin: 0;
  padding: 0;
  max-width: 100%;
}
  
`;


export const Layout = (props) => (
  <Styles>
  <Container>
    {props.children}
  </Container>
  </Styles>
)