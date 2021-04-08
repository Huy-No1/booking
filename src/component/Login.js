import { useState } from "react";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as types from '../reducer/action'
import { Link, useHistory } from 'react-router-dom';
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
    const loginSubmit = (username, password) =>{
        axios.post('http://localhost:5000/users/login', {username: username, password: password}).then(res =>{
        props.login(res.data);
        console.log(res.data);
        if(res.data) {
            alert("Succes");
            history.push('/');
        }
    });
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
                <div className="login-loginForm">
                    <input type="text" placeholder="Username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Login" className="login-submit" onClick={() => loginSubmit(username, password)}/>
                </div>:
                <div className="login-loginForm">
                    <input type="text" placeholder="Username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Email" className="login-boxInput"
                            onChange={(e) => setEmail(e.target.value)}/>
                    <input style={{display: 'none'}}/>
                    <input type="text" placeholder="Phone" className="login-boxInput"
                          />
                    <input type="password" placeholder="Password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>         
                    <input type="password" className="login-boxInput"
                            onChange={(e) => setRePassword(e.target.value)} placeholder="Confirm password"/> 
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