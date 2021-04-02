
import style from './css/Information.css'
import {useState} from 'react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
const Infomation = (props) => {
    const [width, setWidth] = useState('0%');
    const onClick =()=>{
        if(width == '0%')
            setWidth('45%');
        else setWidth('0%');
    }
    return (
        <div>
    <div className="information_container">
        <div className="information_user ">
            <div style={{textAlign: 'center', fontSize: '25px', marginBottom:  "20px"}}>
                <label style={{width: 300, padding: 10, borderRadius: 15}}>Thông tin người dùng</label>
            </div>
            <div className="information-div">
                <label>Tên thành viên: Trần Nhật Huy</label>
            </div>
            
            <div className="information-div">
                <label>Ngày đăng kí: 30/05/2001</label>
            </div>
            <div className="information-div">
                <label>Ngày đăng kí: 30/05/2001</label>
            </div>
            <button onClick={onClick} style={{marginLeft: '38%'}}>Xem lịch sử</button>
        </div>
        <div className="information_history" style={{width: width, padding: width == '45%'? 20: 0, borderWidth: width == '45%'? 2:0}}>
            <label style={{width: 300, padding: 10, borderRadius: 15, fontSize: 25}}>Lịch sử mua vé</label>
            <div>

            </div>
        </div>
        
    </div>
    <br/>
        <Link to="/">
            <FontAwesomeIcon icon={faTimesCircle} className="login-exit"/>
        </Link>
    </div>)
}
export default Infomation