import logo from './logo.svg';
import './App.css';
import './fontawesome.js'
//Components
import { Component, useState } from 'react';
import MainContainer from './component/MainContainer'
import Menu from './component/Menu'
import Login from './component/Login';
import Seat from './component/Seat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from './component/Infomation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const App = ()=>{
  const [seat, setSeat]= useState(1);
  const [display, setDisplay]= useState("block");
  const onClick = (val) =>{
    setSeat(val);
  }
  const onClose = ()=>{
    setDisplay("none");
  }
  return (
    <div className="mainContainer">
      <Menu/> 
      <div className="bigPoster" style={{display: display}}>
        <img src="./img/bigPoster.jpg" style={{width: '70%', height: '70%'}}/>
        <FontAwesomeIcon icon={faTimesCircle} className="exit" onClick={onClose}/>
      </div>

      <div>
          <Route exact path="/" render={() =><MainContainer click={onClick}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/seat" component={() => <Seat seat={seat}/> }/>
          <Route exact path="/information" component={Information}/>
      </div>
      <Link to="/information">
        ss
      </Link>
    </div>        
    
  );
  
  
 
}

export default App;
