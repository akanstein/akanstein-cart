import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({cart:cartReducer,item:itemReducer});

export default rootReducer;