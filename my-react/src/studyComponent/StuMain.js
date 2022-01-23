import styled from "styled-components";

import Bg from '../img/main_img.jpg';


export default function StuMain(props){
    return(
        <>
       <BigBox>
                <h1>20% 세일합니다</h1>
                <p>Lorem</p>
                <Button>버튼</Button>
            </BigBox>

            {/* 1-1. 애플코딩 Map*/}
            <div className="container">
                <div className="row">
                    {
                        props.shoes.map((item, index) => {
                            return(
                                // <Card onClick={() = > {}} shoes={shoes[index]} index={index} key={index}/>
                                <Card shoes={props.shoes[index]} index={index} key={index}/>
                                // <Card shoes={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
 }

 
function Card(props){
    return(

        // 1-1. 애플코딩 Map
        <div className="col-md-4" key="index">
            <ImgWrap>
                <CardImg src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} alt="이미지1"/>
            </ImgWrap>
            <h3>{props.shoes.title}</h3>
            <p>{props.shoes.content} &amp; {props.shoes.price}</p>
        </div>

        // 1-2. 애플코딩 
        // <div className="col-md-4" key="index">
        //     <ImgWrap>
        //         <CardImg src="https://codingapple1.github.io/shop/shoes1.jpg" alt="이미지1"/>
        //     </ImgWrap>
        //     <h3>{props.shoes.title}</h3>
        //     <p>{props.shoes.content} &amp; {props.shoes.price}</p>
        // </div>

        //  2. 내방식 
        // props.shoes.map((item, index)=> {
        //     return(
        //             <div className="col-md-4" key="index">
        //                 <ImgWrap>
        //                     <CardImg src="https://codingapple1.github.io/shop/shoes1.jpg" alt="이미지1"/>
        //                 </ImgWrap>
        //                 <h3>{item.title}</h3>
        //                 <p>{item.content} &amp; {item.price}</p>
        //             </div>
        //     )
        // })
    )
}

 const BigBox = styled.div`
 position: relative;
 background: url(${Bg}) no-repeat center center /cover;
 width:100%;
 padding: 40px 0;
 text-align: center;


 &:after{
     position: absolute;
     top:0;
     left:0;
     width:100%;
     height:100%;
     content:'';

     background: rgba(0, 0, 0, 0.3);

     z-index:0;
 }

 & * {
     position: relative;
     color:#fff;
     z-index:2;
 }
`

const Button = styled.p`
 cursor: pointer;
 width:100px;
 text-align: center;
 margin: 0 auto;
 border: 1px solid #333;

 padding: 10px 20px;
 transition: all .3s;

 &:hover{
     background: #333;
     color:#fff;
 }
`
const ImgWrap = styled.div`
 width:100%;
 height:100%;

 cursor: pointer;

 overflow: hidden;
`
const CardImg = styled.img`
 width:100%;
 height:100%;

 transition: all .2s;

 &:hover{
     transform: scale(1.1);
 }
`
