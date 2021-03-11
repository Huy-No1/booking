import axios from 'axios';
import * as types from './action'

const initState=[
    {
        movie_id: 1,
        movie_name: "Cậu vàng",
        movie_imgSource: "cauvang.jpg"
    },
    {
        movie_id: 2,
        movie_name: "Cậu vàng",
        movie_imgSource: "cauvang.jpg"
    },
    {
        movie_id: 3,
        movie_name: "Cậu vàng",
        movie_imgSource: "cauvang.jpg"
    },
    {
        movie_id: 4,
        movie_name: "Cậu vàng",
        movie_imgSource: "cauvang.jpg"
    }
];

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