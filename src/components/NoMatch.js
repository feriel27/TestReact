import React from 'react';
import styled from 'styled-components';
import NavigationBar from "./Layout/NavigationBar";
import {Container} from "react-bootstrap";
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (

   <>

       <Wrapper>
           <h2>No Match</h2>
       </Wrapper>
   </>
)
