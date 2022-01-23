import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Footer(){

    return(
           <FooterWrap>
                <Link to="/">&copy;Nature Skin.</Link>
            </FooterWrap>
    );
 }


 const FooterWrap = styled.div`
    background:#555;
    /* width: calc( 100vw * (960 / 1920)); */
    height: calc(100vw * ( 50 / 1920));
    line-height: calc(100vw * ( 50 / 1920));

    text-align: center;
    /* margin:0 auto; */

    color:#fff;
    @media screen and (max-width: 1024px) and (min-width: 640px) {
      height: calc(100vw * ( 80 / 1920));
      line-height: calc(100vw * ( 80 / 1920)); 
   }
    @media(max-width: 640px){
    }
 `
