import { combineReducers } from 'redux';
import commentReducer from './slices/commentSlice';
const rootReducer = combineReducers({
    comment: commentReducer,
});

export default rootReducer;
