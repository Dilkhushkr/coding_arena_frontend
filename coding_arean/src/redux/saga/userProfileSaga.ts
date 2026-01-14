import {call, put, takeLatest} from 'redux-saga/effects';
import {getUserProfileRequest,getUserProfileSuccess,getUserProfileFailure} from '../slice/userProfile';

import {getUserProfileApi} from '../services/profileApi';


function* getUserProfileSaga(): Generator<any, void, any> {
    try{
        const response = yield call(getUserProfileApi)
        console.log("User Profile response:",response);
        yield put(getUserProfileSuccess(response));

    }catch(error : any){
        yield put(getUserProfileFailure(error));
    }
}


export function* profileSaga() {
  yield takeLatest(getUserProfileRequest.type, getUserProfileSaga);
}