
import React,{ Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import './css/Film.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as types from '../reducer/action'
import axios from "axios";

//Hiển thị list phim
const FilmList = (props) => {
    const [input, setInput] = useState(0);
    
    const arrayInput= ['first', 'second', 'third'];
    const onClickRight = () => {
        if(input != 2)
            setInput(input + 1);
    }
    const onClickLeft = () => {
        if(input != 0)
            setInput(input - 1);
    }

    const [list, setList] = useState([]);

    //gọi Api để set cái phim list chạy phía dưới
    useEffect(() =>{
        axios.get("https://h2m-server.herokuapp.com/bookingticket/get-all-movie").then(res =>{
            props.onShow(res.data);
            setList(res.data);
    });
    },[]);

    return(
        <div className="mainContainer3">
            <div className="flex">
            {   
                list.map((item) => (
                    <div key={item.Id} className={item.Id===1?"divname "+ arrayInput[input]:"divname"}
                        onClick={() =>props.click(item.Id)}>
                    <Link to="/seat" className="name">
                        <img  src={"img/"+ item.ImageSource} 
                            className="poster"/>
                        <p style={{marginTop: '5px'}}>{item.Name}</p>
                    </Link>
                    </div>))
            }
            </div>
            <div className="test" onClick={() =>onClickRight()}>
                <FontAwesomeIcon icon={faAngleRight} />  
            </div>
            <div className="test left" onClick={() =>onClickLeft()}>
                <FontAwesomeIcon icon={faAngleLeft} />  
            </div>
        </div>
    )
}


const stateToProps = (state) => {
    return {
        list: state.FilmReducer
    }
}

const dispatchToprops = (dispatch, props) =>{
    return {
        onShow: (obj) =>{
            dispatch({type: types.LIST.type, obj});
        }
    }   
} 
export default connect(stateToProps, dispatchToprops)(FilmList)
  