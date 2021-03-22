
import React,{ Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import './css/Film.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as types from '../reducer/action';
import firebase from '../firebase';
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
        console.log("running");
        const filmRef = firebase.database().ref("FilmList");
        // console.log(filmRef);
        filmRef.on("value", snap => {
            const obj= snap.val();
            const arr=[];
            for (let i in obj)
                arr.push(obj[i]);
            setList(arr);
            props.onShow(arr);
        });
    },[]);

    return(
        <div className="mainContainer3">
            <div className="flex">
            {   
                list.map((item) => (
                    <div key={item.id} className={item.id===1?"divname "+ arrayInput[input]:"divname"}
                        onClick={() =>props.click(item.id)}>
                    <Link to="/seat" className="name">
                        <img  src={"img/"+ item.imgSrc} 
                            className="poster"/>
                        <p style={{marginTop: '5px'}}>{item.name}</p>
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
  