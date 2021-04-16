/* eslint-disable */
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron, } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import shoesData from './data.js';
import Detail from './Detail.js';
import Navbars from './Navbars.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesChange] = useState(shoesData);

  return (
    <div className="App">
      <Navbars/>
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>A Simple Tag</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <div className="row">
              {
                shoes.map((a,i)=>{ // a = shoes의 데이터
                  return(
                    <Column shoes={shoes[i]} i={i} key={i}/>
                  )
                }) 
              }
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>
      </Switch>
    </div>
  );
}

function Column(props) {
  return(
    <div className="col-md-4" key={props.shoes.id}>
      <img src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
