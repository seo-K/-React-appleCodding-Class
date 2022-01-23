import React, { useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Router, Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

// page
import StuHeader from './studyComponent/StuHeader'
import StuMain from './studyComponent/StuMain'
import Data from './page/Data';
import Detail from './page/Detail';
// import {name, name2} from './Data';


export default function App(){

    const [shoes, shoes변경 ] = useState(Data);

  return (
    <>
        {/* header */}
       <StuHeader/>
        <Switch>
          {/* main */}
          <Route exact path='/'>
            <StuMain shoes={shoes}/>
          </Route>
          <Route path="/detail/:id">
              <Detail shoes={shoes}/>
          </Route>
      </Switch>
    </>
  );
      
}



