
import style from './css/Information.css'
import {useState} from 'react';
const Infomation = (props) => {
    const [width, setWidth] = useState('0%');
    const onClick =()=>{
        if(width == '0%')
            setWidth('45%');
        else setWidth('0%');
    }
    return (
    <div className="information_container">
        <div className="information_user ">
            <div style={{textAlign: 'center', fontSize: '30px', marginBottom:  "20px"}}>
                <label>Thông tin người dùng</label>
            </div>
            <div className="information-div">
                <label>Tên thành viên: Trần Nhật Huy</label>
            </div>
            
            <div className="information-div">
                <label>Ngày đăng kí: 30/05/2001</label>
            </div>
            <button onClick={onClick} style={{marginLeft: '38%'}}>Xem lịch sử</button>
        </div>
        <div className="information_history" style={{width: width, padding: width == '45%'? 20: 0}}>
            dsdsds
        </div>
    </div>)
}
export default Infomation