import { Component, useState } from "react";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as types from '../reducer/action'
import { Link } from 'react-router-dom';
import './css/Login.css';
import axios from "axios";
import { connect } from "react-redux";

//Hiển thị màn hình đăng nhập
const Login =(props) => {
    const [login, setLogin]= useState(true);
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [rePassword, setRePassword]= useState("");

    const loginSubmit = (username, password) =>{
        
    }
    return (
        <div className={login?"login-mainContainer":"login-mainContainer l" }>
            <div>{props.match.params.user}</div>
            <a className="login-login1" >
                <p onClick={() =>{setLogin(true)}} 
                className={login?"login-h5 l":"login-h5 s"}>Sign in</p>
            </a>
            
            <a className="login-login1">
                <p onClick={() =>{setLogin(false)}}
                className={!login?"login-h5 l":"login-h5 s"}>Sign up</p>
            </a>
            
            <div style={{clear:'both'}}></div>
            {
                login?                
                <div className="login-loginForm">
                    <input type="text" placeholder="Enter username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Enter password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Login" className="login-submit" onClick={() => loginSubmit(username, password)}/>
                </div>:
                <div className="login-loginForm">
                    <input type="text" placeholder="Enter username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Enter password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Submit password" className="login-boxInput"
                            onChange={(e) => setRePassword(e.target.value)}/>
                    <input type="submit" value="Sign Up" className="login-submit" />
                </div>
            }
            <Link to="/">
                <FontAwesomeIcon icon={faTimesCircle} className="login-exit"/>
            </Link>
        </div>
    )
    
}


const stateToProps = (state) => {
    return {
        user: state.UserReducer
    }
}

const dispatchToprops = (dispatch, props) =>{
    return {
        login: (obj) =>{
            dispatch({type: types.LOGIN.type, obj});
        }
    }   
} 
export default connect(stateToProps, dispatchToprops)(Login)