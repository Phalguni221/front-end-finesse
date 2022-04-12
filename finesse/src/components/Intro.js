import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container2 = styled.div `
 height:0.01px;
  width:700px;
  background-color: beige;
`;

//Parent-wrapper for navbar 
const Wrapper2 = styled.div `
  padding: 150px 20px;
  justify-content: space-between;
  margin-right:100px;
`;

export default function Intro () {
    return (
    <Container2>
         <head>
    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"/>
    </head>
        <Wrapper2>
    <title>Welcome to Finesse!</title>
    <h1>
        Browse and shop for the latest fashion trends! Whether it is to impress yourself or others, you can be sure that we have it all!
        <br></br>
        <br></br>
        Select from a wide variety of accessories and find the one that matches your style! 
        <br></br>
        <br></br>
        You can even take one of our surveys to get recommendations tailored to your unqiue preferences and personality!
    </h1>
    </Wrapper2>
    </Container2>
  
    )
}