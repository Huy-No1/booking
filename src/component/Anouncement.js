import { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import './css/Anouncement.css';

//Hiển thị các thông báo chính trên web
const Anouncement = (props) =>{
    const [input, setInput]= useState('first');
    const auto = () =>{
        setInput(pre => {
            if (pre === 'first')
                return 'second';
            if (pre === 'second')
                return 'third';
            if (pre === 'third')
                return 'first';
        });
    }

    const onClick =(value) => {
        setInput(value);
    }
    useEffect(() => {
        setInterval(auto, 5000);
    },[]);
    return(
        <div className="mainContainer1">
            <div className="img">
            {
                props.poster.map((item) => (<img key={item.id} src={"img/"+ item.url}
                className={item.id==1?"imgPoster "+input:"imgPoster"}/>))
            }
            </div>

            <div className="labelInput">
                <label className="labelRadio" onClick={() => onClick('first')}/>
                <label className="labelRadio" onClick={() => onClick('second')}/>
                <label className="labelRadio" onClick={() => onClick('third')}/>
            </div>
            <div className="footer"></div>
        </div>
    )
    
}

const stateToProps = (state) => {
    return {
        poster: state.AnouncementReducer
    }
}
export default connect(stateToProps, null)(Anouncement)