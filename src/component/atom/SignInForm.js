import {useState } from 'react';
import '../css/Login.css';
const SingInForm = (props) => {
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    return (
        <div className="login-loginForm">
            <input type="text" placeholder="Username" className="login-boxInput"
                    onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="Password" className="login-boxInput"
                    onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Login" className="login-submit" 
                onClick={() => props.signInSubmit(username, password)}
            />
        </div>
    )

}

export default SingInForm;