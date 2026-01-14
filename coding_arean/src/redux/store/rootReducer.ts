import {combineReducers} from 'redux';
import authReducer from '../slice/authSlice';
import userProfileReducer from '../slice/userProfile';

const rootReducer = combineReducers({
    auth : authReducer,
    profile : userProfileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;