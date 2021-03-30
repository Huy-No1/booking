import './App.css';
//Components
import { Component, useState } from 'react';
import MainContainer from './component/MainContainer'
import Menu from './component/Menu'
import Login from './component/Login';
import Seat from './component/Seat';
import {Route, Link, Switch, useLocation } from "react-router-dom";
import Information from './component/Infomation';
import Poster from './component/Poster';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';
const App = ()=>{
  const [seat, setSeat]= useState(1);
  const onClick = (val) =>{
    setSeat(val);
  }
  const location= useLocation();
  return (
    <div className="mainContainer">
    <ScrollToTop/>
      <Menu/> 
      <Poster/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={() =><MainContainer click={onClick}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/seat" component={() => <Seat seat={seat}/> }/>
          <Route exact path="/information" component={Information}/>
      </Switch>
      </AnimatePresence>
      <Link to="/information">
        ss
      </Link>
    </div>        
    
  );
  
  
 
}

export default App;
