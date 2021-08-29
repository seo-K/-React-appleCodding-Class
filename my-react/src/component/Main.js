import styled from "styled-components";

import SubImg1 from "../img/subimg01.png";
import SubImg2 from "../img/subimg02.png";
import SubImg3 from "../img/subimg03.png";

export default function Main(){
    return(
        <>
        <Wrap>
            <TextList>
                <Title>About Naure Skin</Title>
                <SubTitle>What is Aromatherapy</SubTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adissssssssfgggdpisicing elit. Tempore vel fugiat minima voluptatem suscipit vedafdafaddffdfafdro aut repellat quam, modi nulla commodi odit,dgagad labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel fugiat minima voluptatem suscadfdfdfipit vero aut repellat quam, modi nulla commodi odit, labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel fugiat minima voluptatem suscafadffadfdfipit vero aut repellat quam, modi nulla commodi odit, labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
            </TextList>
            <ImgList>
                <SubImg></SubImg>
                <SubImg></SubImg>
                <SubImg></SubImg>
            </ImgList>
        </Wrap>
        </>
    );
 }

const Wrap = styled.div`
    position: relative;

    display: flex;

    width: calc( 100vw * (960 / 1920));
    margin:calc( 100vw * (50 / 1920)) auto;
`
const TextList = styled.div`
    width:55%;


    margin-right: 5%;
`
const Title = styled.h2`
 font-family: "Charmon";
     text-align: center;
    font-weight: 600;
    margin-bottom:calc( 100vw * (20 / 1920));
    font-size:calc( 100vw * (25 / 1920));
 `

const SubTitle = styled.h3`
font-family: "Charmon";
    margin-bottom:calc( 100vw * (30 / 1920));
    font-size:calc( 100vw * (20 / 1920));

    text-align: left;
`
const Text = styled.p`
    margin-bottom:calc( 100vw * (30 / 1920));
    line-height: 1.3;
    text-align: justify;
    letter-spacing: -0.5px;
    text-indent: calc( 100vw * (10 / 1920));
`

const ImgList = styled.ul`
    width:40%;
`

const SubImg = styled.li`
 width:100%;
 height: calc( 100vw * (200 / 1920));

 &::nth-child(1){
    background: url(${SubImg1}) no-repeat center center / cover;
 }
 &::nth-child(2){}
 &::nth-child(3){}
`