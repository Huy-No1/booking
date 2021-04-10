import { connect } from "react-redux";
import './css/Seat.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios";

//Phần đặt vé
const Seat = (props) => {
    const {list, seat}= props;
    const [seats, setSeats]= useState([]);
    // Chinh sua className cua tunng box //chua dat co mau trang // dang chon co mau vang
    const onClick = (i, j) => {
        if(itemClassName[i][j].indexOf("chuadat") !== -1){
            setItemClassName((pre) =>{
                let exp=[...pre];
                exp[i][j]=exp[i][j].replace("chuadat", "dangchon");
                return exp;
            });
            return;         
        }
        if(itemClassName[i][j].indexOf("dangchon") !== -1){
            setItemClassName((pre) =>{
                let exp=[...pre];
                exp[i][j]=exp[i][j].replace("dangchon", "chuadat");
                return exp;
            });     
        }
    }

    //history
    const history = useHistory();
    const goBack = () =>{
        history.push('/');
    }
    //info
    var info= [];
    for(let i=0; i<6; i++){
        info.push(<div className="seat-abc" key={i}>{String.fromCharCode(65 + i)}</div>);
    }
    //item
    const [itemClassName, setItemClassName]= useState([[],[],[],[],[],[]]);
    useEffect(() =>{
        let exp=[[],[],[],[],[],[]];
        for(let i=0; i<6; i++){
            for(let j=0; j<6; j++){
                if(seats.length == 0){
                    if( j===5){
                        exp[i][j]="seat-chair last-child chuadat " + String.fromCharCode(65 + i)+(j+1);
                    }
                    else {
                        exp[i][j]="seat-chair chuadat " + String.fromCharCode(65 + i)+(j+1);
    
                    }
                }
                else {
                    if( seats[i + j*6 ].Available == 0)  {
                        if( j===5){
                            exp[i][j]="seat-chair last-child dadat " + String.fromCharCode(65 + i)+(j+1);
                        }
                        else {
                            exp[i][j]="seat-chair dadat " + String.fromCharCode(65 + i)+(j+1);
        
                        }
                    }
                    else 
                    if( j===5){
                        exp[i][j]="seat-chair last-child chuadat " + String.fromCharCode(65 + i)+(j+1);
                    }
                    else {
                        exp[i][j]="seat-chair chuadat " + String.fromCharCode(65 + i)+(j+1);

                    }
                }
            }
        }
        setItemClassName((pre) =>{
            return exp;
        });
    }
    ,[seats]);

    const eticket=[];
    const item =() =>{
        let x=[];
        if(!itemClassName[0][0]) return x;
        for(let i=0; i<6; i++){
            for(let j=0; j<6; j++){
                x.push(<div key={i +j*6}
                            className={itemClassName[i][j]} onClick={()=>onClick(i, j)}>
                    {itemClassName[i][j].indexOf("dangchon") != -1 ? itemClassName[i][j].slice(-2):""}
                    </div>);
                if(itemClassName[i][j].indexOf("dangchon") != -1) 
                    eticket.push(`${itemClassName[i][j].slice(-2)}`);
            }
            x.push(<br/>);
        }

        return x;
    }

    //Day
    const [ticketDay, setTicketDay] = useState("");
    const [ticketTime, setTicketTime] = useState("");
    const [day, setDay]= useState([]);
    const [dateTime, setDateTime] =useState([])
    const [time, setTime] =useState([""])

    //UseEffect
    useEffect(() =>{
        axios.post("https://h2m-server.herokuapp.com/bookingticket/get-all-time",{MovieId: list[seat-1].Id}).then(res => {
            setDateTime(res.data);
        })
    },[]);
    useEffect(() =>{
            for(let item of dateTime){
                if( !day.includes(item.Time.slice(0, 10)))
                    setDay([...day, item.Time.slice(0, 10)]);
            }
        
    },[dateTime]);
    useEffect(() =>{
        var exp=[];
        for(let item of dateTime){
            if(item.Time.includes(ticketDay))
                exp.push(item.Time.slice(11, 16));
                
        }
    setTime([...exp]);
    },[dateTime]);  
    useEffect(() =>{
        axios.post("https://h2m-server.herokuapp.com/bookingticket/get-movie",
        {
            ScheduleId: getscheduleId()
        }
        ).then(res => {
            setSeats(res.data);
        })
    },[dateTime]);  
    useEffect(() =>{
        axios.post("https://h2m-server.herokuapp.com/bookingticket/get-movie",
        {
            ScheduleId: getscheduleId()
        }
        ).then(res => {
            setSeats(res.data);
        })
    },[ticketTime]);  
    const getCurrentDate =() =>{
        const today= new Date();
        return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
    }
    const getId =(seat) =>{
        let id= getscheduleId();
        return parseInt(seat.charCodeAt(0)-65) + parseInt(seat[1]-1)*6 + 1 + (id-1) *36;
    }
    const getscheduleId = ()=> {
        for(let i of dateTime)
            if(i.Time.includes(ticketDay) && i.Time.includes(ticketTime))
            return i.Id;
    } 
    const Buy =() =>{
        if(props.user.user === undefined){
            alert("You aren't login");
            history.push('/login');
            return;
        }
        if(eticket.length > 3 ){
            alert("You only can buy max 3 tickets");
            return;
        }
        let listSeat=[];
        for(let i=0; i< eticket.length; i++)
            listSeat.push(getId(eticket[i]));
        axios.post("https://h2m-server.herokuapp.com/bookingticket/booking-ticket",
        {
            TicketId: listSeat,
            CustomerId: props.user.user.Id,
            BookingDate: getCurrentDate()
        }
        ).then(res => {
            alert("booking success");
            history.push('/');
        })
    }
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}} className="seat-container">
            <div className="seat-note">
                <label className="seat-seat-note chuadat">Ghế trống</label>
                <label className="seat-seat-note dadat">Ghế đã đặt</label>
                <label className="seat-seat-note dangchon" style={{animation: 'none'}}>Ghế đang chọn</label>
            </div>
            <div className="seat-seat">
            <p className="seat-screen">SCREEN</p>
            <div className="seat-chair1">
                {
                        item()
                    }
                </div>
                <div className="seat-chair1-info">{info}</div>
                <div className="seat-chair1-info n2">{info}</div>
            </div>
            <div className="seat-info">
                <label className="seat-seat-note chuadat">THÔNG TIN VÉ</label><br/>
                <div className="seat-infoTicket">
                    <img src={"/img/" + list[seat - 1].ImageSource} alt=""/> 
                    <div>
                    <p style={{marginTop: '10px',fontSize: '30px', fontWeight: '700'}}>{list[seat - 1].Name}</p>
                    <p>{list[seat - 1].Duration +" phút"}</p>
                    <p>{"Ra mắt: " + list[seat - 1].Release.slice(0, 10)}</p>
                    </div>
                    <div style={{clear: 'both'}}></div>
                    <div className="seat-div">
                        <label className="seat-label n"></label>
                        <select name="Ngày" onChange={
                            e => setTicketDay(e.target.value)
                        }>
                            {
                                day.map((item, index) => (<option key={index} value={item}>{item}</option>))
                            }
                        </select>

                    </div>
                    <div className="seat-div">
                        <label className="seat-label sc"></label>
                        <select name="Time"
                        onChange={e =>setTicketTime(e.target.value)}>
                            {
                                time.map((item, index) => (<option key={index} value={item}>{item}</option>))
                            }
                        </select>
                    </div>
                    <div className="seat-div">
                        <label className="seat-label v">{eticket.join(", ")}</label>
                    </div>
                    <div className="seat-div">
                        <label className="seat-label t">{Intl.NumberFormat('en').format(eticket.length *45000)}</label>
                    </div>
                    <input type="submit" value="Xác Nhận" style={{fontSize: 15}} onClick={Buy}/>
                </div>
            </div>

 
                <FontAwesomeIcon icon={faTimesCircle} className="login-exit" onClick={goBack}/>
        </motion.div>
    )
    
}

const stateToProps = (state) => {
    return {
        list: state.FilmReducer,
        user: state.UserReducer,
    }
}
export default connect(stateToProps, null)(Seat)