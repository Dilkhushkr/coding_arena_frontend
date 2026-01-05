import {call,put,takeLatest} from 'redux-saga/effects';
import { signupAPi } from '../services/service';
import { signupFailure, signupSuccess,signupRequest } from '../slice/authSlice';


function* signupSaga(action : ReturnType<typeof signupRequest>):Generator<any, void, any>{
    try{
        const response = yield call(signupAPi,action.payload);
        console.log("Signup response:",response);
        yield put(signupSuccess(response));

    }catch(error:any){
        console.log("Error in signupSaga:",error);
        yield put(signupFailure(error.message));
    }

}

export function* authSaga(){
    yield takeLatest(signupRequest.type,signupSaga);
}