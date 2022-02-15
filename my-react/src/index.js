import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './page/Map';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';



 let 기본state = [
  {id : 0, name : '멋진신발', quan : 2},
  {id : 1, name : '멋진신발2', quan : 1},
  {id : 2, name : '멋진신발3', quan : 2},
  {id : 3, name : '멋진신발4', quan : 5},
  {id : 4, name : '멋진신발5', quan : 7},
 ]

 function reducer( state = 기본state, 액션) {
   if ( 액션.type === '증가' ){
     let copy = [...state];
     copy[0].quan++;

     return copy
   } else if( 액션.type === '감소'){
      let copy = [...state];
      copy[0].quan--;

      return copy
   }else{
     return state
   }
 }

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
