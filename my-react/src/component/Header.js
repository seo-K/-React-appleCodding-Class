//링크 사용할때!
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

//css
import styled from "styled-components";
import HeaderBg from '../img/main_img02.png';



export default function Header(){

    // const gnbDate = [
    //     {list:"Nature Skin",
    //     link:"/"},
    //     {list:"Guide Info",
    //     link:"/sub"},
    //     {list:"Reservation",
    //     link:"/sub"},
    //     {list:"Customer",
    //     link:"/sub"},
    // ]
    
    
  const [data, gnbDate] = useState([]);

  useEffect(() => {
    gnbDate([
        {list:"Nature Skin",
        path:"/"},
        {list:"Guide Info",
        path:"/sub"},
        {list:"Reservation",
        path:"/sub"},
        {list:"Customer",
        path:"/sub"},
    ]);
  }, [])

    return(
        <>
        <Wrap>
            <Title><a href="index.html">Nature Skin</a></Title>
            {/* 이미지넣는 2가지 방법 */}
            {/* 위에서 import 한 후  import HeaderBg from '../img/main_img02.png';*/}
            {/* return 부분에 <img src={HeaderBg} alt="Logo" />;*/}
            {/* css에 background: url(${HeaderBg}) no-repeat center center / cover; */}


            {/* 메뉴 넣는 3가지 방법 */}
            {/* (1) 그냥적기 */}
            {/* <Gnb>222
                <Link to="/">Nature Skin</Link>
                <Link to="/sub">Guide Info</Link>
                <Link to="/sub">Reservation</Link>
                <Link to="/sub">Customer</Link>
            </Gnb> */}

            {/* (2) map 돌리기 */}
            {/* <Gnb>
                {
                    gnbDate.map((item, index) => {
                        return(
                            <Link to="{item.path}">{item.list}</Link>
                        )
                    })
                }
            </Gnb> */}

            {/* (3) useEffect */}
            <Gnb>
            {
            data.map((item, index) => {
                return(
                    <StyledLink to={item.path} key={index}>{item.list}</StyledLink>
                )
            })
            }
            </Gnb>
        </Wrap>
    </>
    );
 }

//Head

const Wrap = styled.div`
    position: relative;
    width: calc( 100vw * (960 / 1920));
    height: calc( 100vw * (400 / 1920));
    margin:0 auto;
    border-bottom: 1px solid pink;

    background: url(${HeaderBg}) no-repeat center center / cover;
 `

const Title = styled.h1`
    position: absolute;
    top: 50%;
    right: calc( 100vw * (50 / 1920));
    margin-top: calc( 100vw * (-17.5 / 1920));

    text-align: right;

    color:#fff;
    text-align: center;
    font-size: calc( 100vw * (35 / 1920));
    text-shadow: 1px 1px 3px,0 0 10px rgba(0,0,0,0.5);;
`
const Gnb = styled.nav`
    position: absolute;
    bottom: 0;
    width:100%;

    display: flex;
    justify-content: space-around;

    height: calc( 100vw * (50 / 1920));
    line-height: calc( 100vw * (50 / 1920));
`
const StyledLink = styled(Link)`
    display: block;
    float: left;
    position: relative;
    width: 25%;
    text-align: center;
    color: #eee;
    background: rgba(208, 66, 64, 0.8);
    transition: all 0.3s;
    box-sizing: border-box;

${({active}) => {
    return active?
    `color: salmon;`
    :
    `color: #fff;`
}}

`