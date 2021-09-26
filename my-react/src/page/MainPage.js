import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';

import styled from "styled-components";

export default function MainPage(){

  return (
      <Wrap>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </Wrap>
  );
      
}

const Wrap = styled.div`
    position: relative;

    width: calc( 100vw * (960 / 1920));
    margin:0 auto;

    @media screen and (max-width: 1024px) and (min-width: 640px) {
      width:98%
    }
    @media(max-width: 640px){
    width: 100%;
  }

`