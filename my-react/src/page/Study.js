import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';

import styled from "styled-components";
import { useState } from 'react';

export default function Study(){

  const [제목, 제목변경] = useState(['서영이는 공부잘해', '서영이는 짱이야']);
  const [list, setList] = useState(['차차','리액트도 잘해','html도잘해','스크립트도 잘할거야']);

  const [modalShow, setModalShow] = useState(false);

  function 제목변경함수() {
      var arrayCopy = [...제목];

      arrayCopy[0] = "제목을 변경한다";


      제목변경(arrayCopy)
  }
  function 제목순서변경함수() {
      var arrayCopy = [...list];

      arrayCopy.sort();


      setList(arrayCopy)
  }

  // 4. 누른 제목
  let [누른제목, 누른제목변경] = useState([0]);

  const [좋아요, 좋아요변경] = useState([0,0,0,0]);     

  function 하트플러스(index){
    var newLike = [...좋아요];
    newLike[index]++;
    좋아요변경(newLike);
  }


  return (
      <Wrap>
          <Title onClick={제목변경함수}>{제목[0]}</Title>
          <BoardWrap>
            {
              list.map((item, index)=> {
                return(
                  <BorderList key={index}>
                    <h3>{item}</h3>
                    <p>글리스트</p>
                    <p onClick={()=> {하트플러스(index)}}>★{좋아요[index]}</p>
                    <Button onClick={() => {setModalShow(true);누른제목변경(index)}}>팝업버튼</Button>
                  </BorderList>
                )
              })
            }
           
          </BoardWrap>
          <ModalButton onClick={제목순서변경함수}>가나다 순</ModalButton>
          <ModalButton onClick={()=> {setModalShow(!modalShow)}}>나와라 팝업</ModalButton>
          {
            modalShow === true ?
            <Modal list={list} modalShow={modalShow} 누른제목={누른제목}/>
            :
            null
          }
      </Wrap>

  );

}

function Modal(props){
  return(
        <Screen>
          {/* <CloseBtn onClick={()=> {setModalShow(false)}}>X</CloseBtn> */}
          <Title>제목 : {props.list[props.누른제목]}</Title>
          <Desc>내용 : </Desc>
        </Screen>
        )
}

const Wrap = styled.div`
    position: relative;

`
const Title = styled.div`
    padding: 50px 0;
    background: #988;
    color:#fff;
    
    font-size:30px;
    font-weight: bold;
    text-align: center;
`
const BoardWrap = styled.ul`
    display: flex;
    width:100%;
`

const BorderList = styled.li`
  flex:1;
    padding: 20px 0;
    background: #000;
    color:#fff;
    
    font-size:20px;
    text-align: center;
`
const Button = styled.p`
    width:100px;
    padding:20px;
    border: 1px solid #333;
    border-radius: 20px;;
    text-align:center;
    color:#111;

    background: #fff;

    margin: 30px auto;
    cursor: pointer;
`

const ModalButton = styled.div`
    width:200px;
    padding:20px;
    border: 1px solid #333;
    border-radius: 20px;;
    margin: 0 auto;
    text-align:center;

    cursor: pointer;
`

const Screen = styled.div`
    margin: auto;
    width:500px;
    height:500px;
    background: #fff;

    border-radius:10px;

    border: 3px solid #333;
    border-radius: 20px;

    overflow: hidden;
`
const CloseBtn = styled.p`
  font-size: 30px;
  font-weight: bold;

  cursor: pointer;
    
`
const Desc = styled.div`
    text-align: center;
`