
import styled from "styled-components";
import { useState } from 'react';

export default function Study(){

const [list,setList]= useState(['코딩공부열시미','리액트도열시미','나눈짱']);
const [like,setLike]= useState(['0','0','0']);
const [showPopup, setShowPopup] = useState(false);
const [clickTitle, setClickTitle] = useState([0]);

function 이름바꾸기() {
  var newArray = [...list];

  newArray[2] = '나는짱';

  setList(newArray)
}


function 가나다변경() {
  var newArray = [...list];

  newArray.sort();

  setList(newArray)
}

function 좋아요변경(index) {
  var newArray = [...like];

  newArray[index]++;

  setLike(newArray);

}

// function 누른제목가져오기(index){
//   setClickTitle(clickTitle[index]);
// }


  return (
      <Wrap>
         <Title>서영이짱</Title>
         <BoardWrap>
           {
             list.map((item, index) => {
               return(
                 <BorderList key={index}>
                   <Title>{item}</Title>
                   <Desc>잘하고있음</Desc>
                   <p onClick={() => {좋아요변경(index)}}>♥{like[index]}</p>
                   <Button  onClick={() => {setShowPopup(true);setClickTitle(index)}}>팝업이름바꿔서 노출</Button>
                 </BorderList>
               )
             })
           }
         </BoardWrap>
         <Button onClick={가나다변경}>가나다순</Button>
         <Button onClick={이름바꾸기}>그냥 얘 이름바꾸기</Button>
         <Button onClick={() => setShowPopup(!showPopup)}>나와라 팝업</Button>
         {
           showPopup?
           <Popup setShowPopup={setShowPopup} clickTitle={clickTitle} list={list}/>
           :
           null
         }
      </Wrap>
  );

}

function Popup(props){
  return(
    <Screen>
      <CloseBtn onClick={() => {props.setShowPopup(false)}}>닫기</CloseBtn>
      <Title>{props.list[props.clickTitle]}</Title>
      <Desc>팝업 내용입니다.</Desc>
    </Screen>
  )
}
  


const Wrap = styled.div`
    position: relative;

`
const Title = styled.h1`
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

    & p{
      cursor: pointer;
    }
`
const Button = styled.p`
    width:100px;
    padding:20px;
    border: 1px solid #333;
    border-radius: 20px;;
    text-align:center;
    color:#111;

    background: #222;

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
    background: #111;

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