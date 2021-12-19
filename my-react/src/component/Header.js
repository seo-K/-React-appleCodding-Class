//링크 사용할때!
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
// import { IconContext } from 'react-icons';

//css
import styled from "styled-components";
import HeaderBg from '../img/main_img02.png';
import menuBar from '../img/menu_bar.png';
// import menuBar2 from '../img/menu_bar_2.png';
import closeBtn from '../img/close_btn.png';


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
        path:"/apple"},
        {list:"Customer",
        path:"/study"},
    ]);
  }, [])

  
    return(
        <>
        <Wrap>
            <Title><Link to="/shop">Nature Skin</Link></Title>
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
            <btnWrap>
                <MobMenuBar></MobMenuBar>
                <MobcloseBtn></MobcloseBtn>
            </btnWrap>
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
const btnWrap = styled.div`
    

 img{
    position: fixed;
    top:0;
    right:0;

    width: calc( 100vw * (50 / 1920));
    height: calc( 100vw * (50 / 1920));

    z-index: 20;
 }
`

const MobMenuBar = styled.img.attrs({
    src: menuBar,
  })`
    /* width:calc( 100vw * (50 / 1920)); */
    /* height:calc( 100vw * (50 / 1920)); */
  `
  
const MobcloseBtn = styled.img.attrs({
    src: closeBtn,
  })`
    /* width:calc( 100vw * (50 / 1920)); */
    /* height:calc( 100vw * (50 / 1920)); */
`

const Wrap = styled.div`
    position: relative;
    /* width: calc( 100vw * (960 / 1920)); */
    height: calc( 100vw * (400 / 1920));
    /* margin:0 auto; */
    border-bottom: 1px solid pink;

    background: url(${HeaderBg}) no-repeat center center / cover;

    @media screen and (max-width: 1024px) and (min-width: 640px) {
    width: 100%;
    height:calc( 100vw * (400 / 1920));
  }
 `

const Title = styled.h1`
    font-family: "Charmon";
    position: absolute;
    top: 50%;
    right: calc( 100vw * (50 / 1920));
    margin-top: calc( 100vw * (-17.5 / 1920));

    text-align: right;

    color:#000;
    text-align: center;
    font-size: calc( 100vw * (35 / 1920));
    text-shadow: 1px 1px 3px,0 0 10px rgba(0,0,0,0.5);

    @media screen and (max-width: 1024px) and (min-width: 640px) {
        font-size: calc( 100vw * (50 / 1920));
    }
    @media(max-width: 640px){
    }
`
const Gnb = styled.nav`
    position: absolute;
    bottom: 0;
    width:100%;

    display: flex;
    justify-content: space-around;

    height: calc( 100vw * (50 / 1920));
    line-height: calc( 100vw * (50 / 1920));

    @media screen and (max-width: 1024px) and (min-width: 640px) {
        height: calc( 100vw * (80 / 1920));
    line-height: calc( 100vw * (80 / 1920));
    }
    @media(max-width: 640px){
    }
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

    &:hover {
    background-color: rgba(0,0,0,.4);
    padding-right: 25px;
  }
`

// 태그 타입 styled 함수 인자로 전달
// const MyInput = styled('input')`
//   background:gray;
// `
