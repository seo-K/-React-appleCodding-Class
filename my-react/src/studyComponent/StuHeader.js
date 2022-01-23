//링크 사용할때!
import {Link} from "react-router-dom";
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import { IconContext } from 'react-icons';

//css
import styled from "styled-components";
import HeaderBg from '../img/main_img02.png';
import menuBar from '../img/menu_bar.png';
// import menuBar2 from '../img/menu_bar_2.png';
import closeBtn from '../img/close_btn.png';


export default function StuHeader(){

   
  
    return(
        <>
         <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ShoppingMall</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
    );
 }

//Head

