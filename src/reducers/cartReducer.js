import {NEW_ITEM,QTY_INC,QTY_RED,REMOVE_ITEM} from '../actions/types';


export default function (state = [],action){
    const i = action.index;
    switch(action.type){
        case QTY_INC:
            return  [
                ...state.slice(0,i), //before the updated item
                {...state[i],qty:state[i].qty + 1},
                ...state.slice(i+1) //after our updated item
            ];
            
        case QTY_RED:
        if(state[i].qty > 1)
           { return  [
                ...state.slice(0,i), //before the updated item
                {...state[i],qty:state[i].qty - 1},
                ...state.slice(i+1) //after our updated item
            ];
        } else{
            return state;
        }

        case REMOVE_ITEM:
        return  [
            ...state.slice(0,i), //before the updated item
            ...state.slice(i+1) //after our updated item
        ];


        default:
            return state; 
    }
}