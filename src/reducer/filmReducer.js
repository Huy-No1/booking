import axios from 'axios';
import * as types from './action'

const initState=[];

const Reducer = (state= initState, action) => {
    switch(action.type){
        case (types.LIST.type):{
            return action.obj;
        }
        default:
            return state;
    }
}

export default Reducer;