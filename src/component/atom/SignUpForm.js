import { useState } from 'react';
const SignUpForm = (props) => {
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [rePassword, setRePassword]= useState("");
    return (
        <div className="login-loginForm">
        <input type="text" placeholder="Username" className="login-boxInput"
                onChange={(e) => setUserName(e.target.value)} />
        <input type="text" placeholder="Email" className="login-boxInput"
                onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Phone" className="login-boxInput"
              onChange={(e) => setPhone(e.target.value)}/>
        <input type="password" placeholder="Password" className="login-boxInput"
                onChange={(e) => setPassword(e.target.value)}/>         
        <input type="password" className="login-boxInput"
                onChange={(e) => setRePassword(e.target.value)} placeholder="Confirm password"/> 
        <input type="submit" value="Sign Up" className="login-submit" 
        onClick={() => props.signUpSubmit(username, email, phone, password, rePassword)}/>
    </div>
    )
}
export default SignUpForm;