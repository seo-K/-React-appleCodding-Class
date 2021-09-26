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
    /* width: calc( 100vw * (960 / 1920)); */
    padding:calc( 100vw * (30 / 1920));
    
    @media screen and (max-width: 1024px) and (min-width: 640px) {
        flex-direction: column;
    }
    @media(max-width: 640px){
    }
`
const TextList = styled.div`
    width:55%;

    margin-right: 5%;
    @media screen and (max-width: 1024px) and (min-width: 640px) {
        width:100%;
        margin-right: 0;
    }
    @media(max-width: 640px){
    }
`
const Title = styled.h2`
    font-family: "Charmon";
    text-align: center;
    font-weight: 600;
    margin-bottom:calc( 100vw * (20 / 1920));
    font-size:calc( 100vw * (25 / 1920));

    @media screen and (max-width: 1024px) and (min-width: 640px) {
        font-size:calc( 100vw * (45 / 1920));
    }
    @media(max-width: 640px){
    }
 `

const SubTitle = styled.h3`
font-family: "Charmon";
    margin-bottom:calc( 100vw * (30 / 1920));
    font-size:calc( 100vw * (20 / 1920));

    text-align: left;

    @media screen and (max-width: 1024px) and (min-width: 640px) {
        font-size:calc( 100vw * (30 / 1920));
    }
    @media(max-width: 640px){
    }
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
    @media screen and (max-width: 1024px) and (min-width: 640px) {
        display: flex;
        width:100%;
    }
    @media(max-width: 640px){
    }
`

const SubImg = styled.li`
    width:100%;
    height: calc( 100vw * (200 / 1920));
    display: inline-block;
    border:5px solid transparent;

    filter: blur(2px);/*흐려*/
    filter:brightness(0.6);/*밝기*/
    filter:contrast(0.5);/*명암효과*/

    transition: all 0.3s;

    &:hover {
        border:5px solid gray;
        outline :5px dashed #b9de7d;
        outline-offset:-30px;
        filter: blur(1);/*흐려*/
        filter:brightness(1);/*밝기*/
        filter:contrast(01);/*명암효과*/;
    }

    &:nth-child(1){
        background: url(${SubImg1}) no-repeat center center / cover;
    }
    &:nth-child(2){
        background: url(${SubImg2}) no-repeat center center / cover;
        }
    &:nth-child(3){
        background: url(${SubImg3}) no-repeat center center / cover;
    }

    @media screen and (max-width: 1024px) and (min-width: 640px) {
        width:32%;
        height: calc( 100vw * (400 / 1920));

        &:not(:last-child){
            margin-right: 2%;
    }

    }
    @media(max-width: 640px){
    }
`
