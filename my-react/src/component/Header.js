import {Link} from "react-router-dom";

//css
import styled from "styled-components";

export default function Header(){

    return(
        <>
            <Wrap>
                <Title><a href="index.html">Nature Skin</a></Title>
                <Gnb>
                    <Link to="/">Nature Skin</Link>
                    <Link to="/sub">Guide Info</Link>
                    <Link to="/sub">Reservation</Link>
                    <Link to="/sub">Customer</Link>
                </Gnb>
            </Wrap>
        </>
    );
 }

//header
const Wrap = styled.div`
position: relative;
top:0;
left:0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid pink;
 `
const Title = styled.h1`
    color:#fff;
    text-align: center;
    margin-bottom: 20px;
`
const Gnb = styled.nav`
    display: flex;
    justify-content: space-around;

    color:#fff;
`
