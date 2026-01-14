import {call,put,takeLatest, } from 'redux-saga/effects';
import { 
    signupFailure,
    signupSuccess,
    signupRequest,
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    checkAuthRequest,
    checkAuthSuccess,
    checkAuthFailure,
    } from '../slice/authSlice';
import {signupApi,loginApi,logoutApi, checkAuthApi} from '../services/authApi';



function* signupSaga(action : ReturnType<typeof signupRequest>):Generator<any, void, any>{
    try{
        const response = yield call(signupApi,action.payload);
        console.log("Signup response:",response);
        yield put(signupSuccess(response));

    }catch(error:any){
        console.log("Error in signupSaga:",error);
        yield put(signupFailure(error.message));
    }

}

function* loginSaga(action : ReturnType<typeof loginRequest>):Generator<any, void, any>{
    try{
        const response = yield call(loginApi as any,action.payload);
        console.log("Login response:",response);
        yield put(loginSuccess(response));
    }catch(error:any){
        yield put(loginFailure(error.message));
    }
}

function* logoutSaga() : any{
    try{
        yield call(logoutApi);
        yield put(logoutSuccess());

    }catch(error : any){
        yield put(logoutFailure(error.message));
    }
}

function* checkAuthSaga() : any{
    try{
      const response =   yield call(checkAuthApi);
      console.log("Check Auth response:",response.data);
        yield put(checkAuthSuccess());
    }catch(error : any){
        yield put(checkAuthFailure());
    }
}


export function* authSaga(){
    yield takeLatest(signupRequest.type,signupSaga);
    yield takeLatest(loginRequest.type,loginSaga);
    yield takeLatest(logoutRequest.type,logoutSaga);
    yield takeLatest(checkAuthRequest.type,checkAuthSaga);
}