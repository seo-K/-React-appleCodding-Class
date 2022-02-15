import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){


  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
          {/* <td>{ props.state[0].name }</td> */}
          <tbody>
            {
              props.state.map(( a, i )=> {
                return (
                  <tr key={i}>
                    <td>{ a.id }</td>
                    <td>{ a.name }</td>
                    <td>{ a.quan }</td>
                    <td>
                      <button onClick={() => {  props.dispatch({ type : '증가' })} }>+</button>
                      <button onClick={() => { props.dispatch({ type : '감소' })} }>-</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
      </Table>
  </div>
  )
};

function state를props화(state){
  return {
    state : state
  }
}
export default connect(state를props화)(Cart);
