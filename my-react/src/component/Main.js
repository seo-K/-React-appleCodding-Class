import styled from "styled-components";

export default function Main(){
    return(
        <>
        <Wrap>
            <Title>About Naure Skin</Title>
            <Article>
            <SubTitle>What is Aromatherapy</SubTitle>
                <Text>Lorem ipsum dolor sit amet, consectetur adissssssssfgggdpisicing elit. Tempore vel fugiat minima voluptatem suscipit vedafdafaddffdfafdro aut repellat quam, modi nulla commodi odit,dgagad labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel fugiat minima voluptatem suscadfdfdfipit vero aut repellat quam, modi nulla commodi odit, labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel fugiat minima voluptatem suscafadffadfdfipit vero aut repellat quam, modi nulla commodi odit, labore vitae accusantium libero dignissimos. Voluptatum, voluptates quam?</Text>
            </Article>
        </Wrap>
        </>
    );
 }

 const Wrap = styled.div`
    position: relative;
    width: calc( 100vw * (960 / 1920));
    height: calc( 100vw * (400 / 1920));
    margin:0 auto;
`
 const Title = styled.h2`
     text-align: center;
    font-weight: 600;
    margin-bottom:calc( 100vw * (20 / 1920));
    font-size:calc( 100vw * (25 / 1920));

    
 `
const Article = styled.article`
    text-align: center;
    font-weight: 600;
    margin-bottom:calc( 100vw * (20 / 1920));
    font-size:calc( 100vw * (25 / 1920));
`
const SubTitle = styled.h3`
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