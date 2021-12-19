import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

// page
import Data from './Data';
// import {name, name2} from './Data';

import styled from "styled-components";
import { Link } from 'react-router-dom';


import Bg from '../img/main_img.jpg';

export default function Shop(){

    const [shoes, shoes변경 ] = useState(Data);

  return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ShoppingMall</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <BigBox>
            <h1>20% 세일합니다</h1>
            <p>Lorem</p>
            <Button>버튼</Button>
        </BigBox>
        <div className="container">
            <div className="row">
                {
                    shoes.map((item, index)=> {
                        return(
                            <div className="col-md-4" key="index">
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="이미지1"/>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p>{item.price}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
      </>
  );
      
}


const BigBox = styled.div`
    position: relative;
    background: url(${Bg}) no-repeat center center /cover;
    width:100%;
    padding: 40px 0;
    text-align: center;


    &:after{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        content:'';

        background: rgba(0, 0, 0, 0.3);

        z-index:0;
    }

    & * {
        position: relative;
        color:#fff;
        z-index:2;
    }
`

const Button = styled.p`
    cursor: pointer;
    width:100px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #333;

    padding: 10px 20px;
    transition: all .3s;

    &:hover{
        background: #333;
        color:#fff;
    }
`
