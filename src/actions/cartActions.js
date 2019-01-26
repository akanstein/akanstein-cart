import {NEW_ITEM,QTY_INC,QTY_RED,REMOVE_ITEM} from './types';


export function increaseQty(index){
    return {
        type:QTY_INC,
        index
    }
}

export function reduceQty(index){
    return {
        type:QTY_RED,
        index
    }
}

export function removeItem(index){
    return{
        type:REMOVE_ITEM,
        index
    }
}

export function addItem(payload){
    return {
        type:NEW_ITEM,
        payload
    }
}