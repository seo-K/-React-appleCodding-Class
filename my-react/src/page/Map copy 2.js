import { useState, useEffect } from 'react';

import styled from "styled-components";

export default function MainPage(){

    // 1. 게시글명
    const [글제목, 글제목변경] = useState(['강남 맛집 이다', '열심히 배운다', '리액트 마스터']);

    // 2. 초기 좋아요값
    let [하트, 하트변경] = useState([0,0,0]);       

    // 3. 모달
    const [modalShow,setModalShow] = useState(false);

    // 4. 누른 제목
    let [누른제목, 누른제목변경] = useState([0]);

  return (
      <Container>
        <BlackBg>
            <BlackNav>
                <p>개발 Blog</p>
            </BlackNav>
        </BlackBg>
            {
                글제목.map((item,index) => {
                    return(
                    <List key={index} onClick={() => {누른제목변경(index)}}>
                        <h3>{item}<Good >😍</Good> {하트[index]} </h3>
                        <p>12월 12일 발행</p>
                        <hr/>
                    </List>
                    )
                })
            }

        <Button onClick={() => {setModalShow(!modalShow)}}>모달창 버튼</Button>
        {
            modalShow
            ?
            <Modal 글제목={글제목} 누른제목={누른제목}/>
            :
            null
        }
      </Container>
  );
      
}

    function Modal({글제목, 누른제목}){
    return (
        <ModalWrap>
            <h3>글제목 :{글제목[누른제목]}</h3>
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

    padding: 5px 0;

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

    cursor:pointer;
`

const ModalWrap = styled.div`
    padding: calc( 100vw * (20 / 1920));
    background:#eee;

    margin-top: calc( 100vw * (20 / 1920));

    text-align:center;
`
