import logo from './logo.svg';
import './App.css';
import './fontawesome.js'
//Components
import { Component } from 'react';
import MainContainer from './component/MainContainer'
import Menu from './component/Menu'
import Login from './component/Login';
import Seat from './component/Seat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from './component/Infomation';
class App extends Component{
  constructor(props){
    super(props);
      this.state={
        seat: 1
      }
  }
  
  render(){
    const onClick = (val) =>{
      this.setState({...this.state,seat: val});
    }
  
    return (
      <div className="mainContainer">
        <Menu/> 
        <div>
            <Route exact path="/" render={() =><MainContainer click={onClick}/>}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/seat" component={() => <Seat seat={this.state.seat}/> }/>
            <Route exact path="/information" component={Information}/>

        </div>
        <Link to="/information">
          ss
        </Link>
      </div>        
     
    );
  }
  
 
}

export default App;
