import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';

const INITIAL_STATE = [
        {
            id:1,
            image:'/assets/swades2.jpg',
            title:'Product 1',
            price:350,
            qty:1
        },
        {
            id:3,
            image:'./assets/Img25.jpg',
            title:'Product 1',
            price:350,
            qty:1
        },
        {
            id:2,
            image:'./assets/Img29.jpg',
            title:'Product 1',
            price:350,
            qty:1
        }
    ]
    
;

const middleWare = [thunk];

const store = createStore(cartReducer,INITIAL_STATE, applyMiddleware(...middleWare));

export default store;