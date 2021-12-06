
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css" //기본 reset 파일

import MainPage from './page/MainPage';
import SubPage from './page/SubPage';

// 애플코딩 공부
import Apple from './page/Apple'

export default function App(){

  return (
      <Router>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/sub" component={SubPage}/>
          <Route exact path="/apple" component={Apple}/>
      </Router>

    );
}


// import { useState, useEffect } from "react";
// import './App.css';

// function App() {

//   const [count, setCount ] = useState(1);
//   //count 는 절대 바꾸면안됩니다! setCount 만 변화 가능

//   useEffect(() => {
//     console.log(count)
//   }, [count])

//   //값이 변경될때마다 실행된다

//   const increaseCount = () => {
    
//     setCount(2)
//   }

//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={increaseCount} >count 증가</button>
//     </>
//   )
// }


//이미지 넣는 법
// import logo from './logo.svg';
// import './App.css';

// import iconImg from './img/bg.png'
// import bgImg from './img/bg.png'
// import { useState } from 'react';
// //변수는 하단에

// function App() {

//   contst [data, setDate] = useState([]);


//   const data= [
//     {디저트:"아아", icon:iconImg},
//     {디저트:"베라", icon:iconImg},
//     {디저트:"마카롱", icon:iconImg},
//     {디저트:"콘츠즈", icon:iconImg},
//     {디저트:"아아", icon:iconImg},
//     {디저트:"아아", icon:iconImg},
//   ]

//   // return (
//   //   <div className={"wrap"}>
//   //     {
//   //       data.map((item, index) = > {
          
//   //       })
//   //     }
//   //     <img src={"iconWrap"}></img>
//   //     <img src={item.icon}></img>
//   //   </div>
//   // )


//   return(
//     <div className={"wrap"}>

//     <BgContent bgImg = {BgImg}></BgContent>

//     </div>
//   );
// }

// export default App;
// const BgContent = styled.div`
//   width:100px;
//   height:300px;
//   border 1px solid red;


//   ${({BgImg}) = > {
//     return `
//     background-image: url(${bgImg} BgImg );
//     `
//   }}

// `