import { useState } from "react";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as types from '../reducer/action'
import { Link, useHistory } from 'react-router-dom';
import SignInForm from './atom/SignInForm';
import SignUpForm from './atom/SignUpForm';
import './css/Login.css';
import axios from "axios";
import { connect } from "react-redux";

//Hiển thị màn hình đăng nhập
const Login =(props) => {
    const [login, setLogin]= useState(true);
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [rePassword, setRePassword]= useState("");
    const history= useHistory();
    const signInSubmit = (username, password) =>{
        axios.post('https://h2m-server.herokuapp.com/users/login', {Username: username, Password: password}).then(res =>{
        props.login(res.data);
        if(res.data) {
            alert("Succes");
            history.push('/');
        }
    }).catch(err => alert("Invalid"));
    }
    const signUpSubmit =(username, email, phone, password, rePassword) => {
        if( password != rePassword) {
            alert("Password incorrect");
            return;
        }
        axios.post('https://h2m-server.herokuapp.com/users/signup', {
            Username: username,
            Email: email,
            Phone: phone,
            Password: password
        }).then( res => {
            alert("Success, please signIn");
        }).catch( err => alert("Already has this account"));
    }
    return (
        <div className={login?"login-mainContainer":"login-mainContainer l" }>
            <div className="login-login1" >
                <p onClick={() =>{setLogin(true)}} 
                className={login?"login-h5 l":"login-h5 s"}>Sign in</p>
            </div>
            
            <div className="login-login1">
                <p onClick={() =>{setLogin(false)}}
                className={!login?"login-h5 l":"login-h5 s"}>Sign up</p>
            </div>
        
            {
                login?                
                <SignInForm signInSubmit={signInSubmit}/>:
                <SignUpForm signUpSubmit={signUpSubmit}/>
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