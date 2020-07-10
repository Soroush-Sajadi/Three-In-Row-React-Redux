import { combineReducers } from 'redux';
import reducer from './DataRedux/reducer';

const rootReducer = combineReducers({
    data: reducer
})

export default rootReducer;