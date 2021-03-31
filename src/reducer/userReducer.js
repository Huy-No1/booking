import * as types from './action'

const initState=[{}];

const Reducer = (state= initState, action) => {
    switch(action.type){
        case (types.LOGIN.type):{
            return {...state,...action.obj};
        }
        default:
            return state;
    }
}

export default Reducer;