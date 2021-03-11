import './css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

//Hiển thị thông tin phía dưới cùng
const Footer = (props)=>{
    return(
        <div className="footer-container">
            <img src="/img/logo.png" alt="" className="footer-logo"/>
            <div className="footer-copyright">
                This website was made by H2M<br/>
                Contact: 0123456789<br/>
                ĐH Công Nghệ - ĐHQGHN
            </div>
            <div className="menu-contact">
                <a href="https://www.facebook.com/profile.php?id=100009742087387" className="menu-link">
                    <FontAwesomeIcon icon={faFacebookSquare} className="menu-icon"/>
                </a>
                <a href="https://www.instagram.com/huynhat2209/" className="menu-link">
                    <FontAwesomeIcon icon={faInstagram} className="menu-icon"/>
                </a>
                <FontAwesomeIcon icon={faTwitter} className="menu-icon"/>
                <FontAwesomeIcon icon={faYoutubeSquare} className="menu-icon"/>
            </div>
        </div>
    )
}



export default Footer