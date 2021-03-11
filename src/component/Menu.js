import { faFacebookSquare, faInstagram, faTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './css/Menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as types from '../reducer/action'
const Menu = (props)=> {   
    return(        
     
        <div className="menu-mainContainer">
        <FontAwesomeIcon icon={faBars} className="menu-bars"/>
            <div className="menu-contact">
                <a href="https://www.facebook.com/profile.php?id=100009742087387" className="menu-link">
                    <FontAwesomeIcon icon={faFacebookSquare} className="menu-icon"/>
                </a>
                <a href="https://www.instagram.com/huynhat2209/" className="menu-link">
                    <FontAwesomeIcon icon={faInstagram} className="menu-icon"/>
                </a>
                <FontAwesomeIcon icon={faTwitter} className="menu-icon"/>
                <FontAwesomeIcon icon={faYoutubeSquare} className="menu-icon"/>
                <Link to="/login" className="menu-login">
                    <label>{!props.user ? `${props.user.username}` :"Đăng Nhập"}</label>
                </Link>

            </div>
            <div className="menu-logo">
                <img src="/img/logo.png" alt="" />
            </div>
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
        onShow: (obj) =>{
            dispatch({type: types.LIST.type, obj});
        }
    }   
} 
export default connect(stateToProps,null)(Menu)