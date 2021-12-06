import { useState, useEffect } from 'react';

// page
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';

import styled from "styled-components";

export default function MainPage(){

    const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    let [ 하트, 하트변경] = useState(0)

    function 글제목바꾸기(){
        // 하드코딩
        // 글제목변경(['여자코트 추천', '경기 우동맛집', '리액트독학']);

        // var newArray = 글제목에 있던 0번째 데이터를 여자 코트 추천으로 바꿈
        var newArray = [...글제목];

        newArray[0] = "여자코트 추천";
        글제목변경(newArray);
    }


    const posts ='강남고기 맛집'

  return (
      <Container>
        <BlackBg>
            <BlackNav>
                <p>개발 Blog</p>
            </BlackNav>
        </BlackBg>
        {/* <Button onClick={ () => { 글제목변경([...글제목],["여자코트 추천"]) }}>버튼</Button> */}
        <Button onClick={ 글제목바꾸기 }>버튼</Button>
        <List>
            <h3>{글제목[0]}<Good onClick={ () => { 하트변경(하트 + 1) }}>😍</Good> {하트} </h3>
            <p>12월 12일 발행</p>
            <hr/>
        </List>
        <List>
            <h3>{글제목[1]}</h3>
            <p>12월 14일 발행</p>
            <hr/>
        </List>
        <List>
            <h3>{글제목[2]}</h3>
            <p>12월 20일 발행</p>
            <hr/>
        </List>
      </Container>
  );
      
}

const Container = styled.div`
    position: relative;

    width: 100%;
`

const BlackBg = styled.div`
    position: relative;

    width: 100%;
    background-color: #000;

    padding: 20px 0;
`
const BlackNav = styled.div`
    
    
    & p{
        color:#fff;
        font-size: 20px;
        text-align:center;
    }
`
const Button = styled.button`
    display: block;
    width:400px;

    font-size:16px;
    margin:20px auto;
    border: 1px solid #999;;
    border-radius: 10px;

    &:hover{
        color:#fff;
        background-color: #000;
    }

`
const List = styled.div`
    position: relative;

    width: calc( 100vw * (960 / 1920));
    margin:0 auto;

`

const Good = styled.span`
    color: red;
`