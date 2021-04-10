
import style from './css/Information.css'
import {useEffect, useState} from 'react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';
import Ticket from './atom/Ticket';
import { motion } from 'framer-motion';
const Infomation = (props) => {
    const [width, setWidth] = useState('0%');
    const [data, setData]= useState([]);
    const history= useHistory();
    useEffect(() => {
        axios.post('https://h2m-server.herokuapp.com/bookingticket/booking-history',
        {
            CustomerId: props.user.user.Id
        }
        ).then( res => {
            setData(res.data);
        });
    },[]);
    const onClick =()=>{
        if(width == '0%')
            setWidth('45%');
        else setWidth('0%');
    }
    const onDelete = (ticketId) => {
        let answer= window.confirm("Are you sure ?");
        if(!answer) 
        return ;
        axios.post('https://h2m-server.herokuapp.com/bookingticket/drop-ticket',
        {
            TicketId: ticketId
        }
        ).then(res => {
            alert("Delete success");
            history.push('/');
        })
    }
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
    <div className="information_container">
        <div className="information_user ">
            <div style={{textAlign: 'center', fontSize: '25px', marginBottom:  "20px"}}>
                <label style={{width: 300, padding: 10, borderRadius: 15}}>Thông tin người dùng</label>
            </div>
            <div className="information-div">
                <label>{"Username: "+ props.user.user.Username}</label>
            </div>
            
            <div className="information-div">
                <label>{"Phone number: "+ props.user.user.Phone}</label>
            </div>
            <div className="information-div">
                <label>{"Email: "+ props.user.user.Email}</label>
            </div>
            <button onClick={onClick} style={{marginLeft: '38%'}}>Xem lịch sử</button>
        </div>
        <div className="information_history" style={{width: width, padding: width == '45%'? 20: 0, borderWidth: width == '45%'? 2:0}}>
            <label style={{width: 300, padding: 10, borderRadius: 15, fontSize: 25}}>Lịch sử mua vé</label>
            <div className="info-scroll">
            {
                    data.map((item, index) => (<Ticket item={item} key={index} onDelete={onDelete}/>))
            }
            </div>
        </div>
        
    </div>
    <br/>
        <Link to="/">
            <FontAwesomeIcon icon={faTimesCircle} className="login-exit"/>
        </Link>
        </motion.div>)
}

const stateToProps = (state) => {
    return {
        user: state.UserReducer
    }
}
export default connect(stateToProps, null)(Infomation);