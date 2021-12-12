import { useState, useEffect } from 'react';

// page
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';

import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function MainPage(){

    // 1. 게시글명
    const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    // 2. 초기 좋아요값
    let [하트, 하트변경] = useState([0, 5, 10])
    // 3. 모달
    const [modalShow,setModalShow] = useState(false)


    function 글제목바꾸기(){
        // 1. 하드코딩
        // 글제목변경(['여자코트 추천', '경기 우동맛집', '리액트독학']);

        // 2. 깔끔코딩
        //데이터가 100개가 될 수 있으므로 복사해서 사용
        // var newArray = 글제목에 있던 0번째 데이터를 여자 코트 추천으로 바꿈
        var newArray = [...글제목];

        newArray[0] = "여자코트 추천";
        글제목변경(newArray);
    }

    function 글순서바꾸기(){
        // 1.하드코딩
        // 글제목변경(['경기 우동맛집','리액트독학','여자코트 추천'])

        // 2. 깔끔코딩
        var twoNewArray = [...글제목];

        // 1) 가다나순 정렬
        twoNewArray.sort();

        // 2) 얘는 얘로 정렬
        // twoNewArray[0] = twoNewArray[1];
        // twoNewArray[1] = twoNewArray[2];
        // twoNewArray[2] = twoNewArray[0];

        글제목변경(twoNewArray);
    }


    function 개인하트변경(){
        let i = 하트변경.index();
        console.log(i)
        let copy = [...하트];
        copy[i]++;
        하트변경(copy);
    }


    // 모달 보이기 함수로 만들기
    function ShowModal(){
        // 1.모달 보이게
        // setModalShow(true)

        // 2. 모달이 true일땐 false로 / false 일땐 true로 토글
        setModalShow(!modalShow)
    }

  return (
      <Container>
        <BlackBg>
            <BlackNav>
                <p>개발 Blog</p>
            </BlackNav>
        </BlackBg>
        {/* 1. 원초적 방법 (그대로 쓴다) */}
        {/* <Button onClick={ () => { 글제목변경([...글제목],["여자코트 추천"]) }}>버튼</Button> */}
        {/* 2. 똑똑이 방법 (함수로 쓴다) */}
        <Button onClick={ 글제목바꾸기 }>제목버튼</Button>
        <Button onClick={ 글순서바꾸기 }>순서버튼</Button>
        <List>
            <h3>{글제목[0]}<Good onClick={ 개인하트변경 }>😍</Good> {하트[0]} </h3>
            <p>12월 12일 발행</p>
            <hr/>
        </List>
        <List>
            <h3>{글제목[1]}<Good onClick={ () => { 하트변경(하트 + 1) }}>😍</Good> {하트[1]} </h3>
            <p>12월 14일 발행</p>
            <hr/>
        </List>
        <List>
            <h3>{글제목[2]}<Good onClick={ () => { 하트변경(하트 + 1) }}>😍</Good> {하트[2]} </h3>
            <p>12월 20일 발행</p>
            <hr/>
        </List>

        <Button onClick={() => {setModalShow(!modalShow)}}>모달창 버튼</Button>
        {
            modalShow ?
            <Modal 글제목={글제목}/>
            :
            null
        }

        <GoMap to={`apple/map`}>맵을 써보겠어욘</GoMap>
      </Container>
  );
      
}

function Modal({글제목변경}){
    return (
        <ModalWrap>
            <h3>글제목 : {글제목변경[1]}</h3>
            <p>날짜</p>
            <p>상세내용</p>
        </ModalWrap>
    )
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
const GoMap = styled(Link)`
    display: block;
    width:400px;

    font-size:16px;
    text-align: center;
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

const ModalWrap = styled.div`
    padding: calc( 100vw * (20 / 1920));
    background:#eee;

    margin-top: calc( 100vw * (20 / 1920));

    text-align:center;
`
