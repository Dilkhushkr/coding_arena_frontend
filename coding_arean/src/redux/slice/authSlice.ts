import {createSlice , type PayloadAction} from '@reduxjs/toolkit';

interface SignupPayload {
    name : string;
    email: string;
    password : string;
    confirm_password : string;
}



interface AuthState{
    loading : boolean;
    error : string | null;
    signupData : SignupPayload | null;
    user : any | null;
    isAuthenticated ?: boolean;
}

const initialState : AuthState = {

    loading :true,
    error : null,
    signupData : null,
    user : null,
    isAuthenticated : false

}

const authSlice = createSlice({

    name : 'auth',
    initialState,
    reducers:{
        signupRequest(state,_action:PayloadAction<SignupPayload>){
            state.loading = true;
            state.error = null;
        },

        signupSuccess(state,action:PayloadAction<SignupPayload>){
            state.loading = false;
            state.error = null;
            state.signupData = action.payload;
        },
        signupFailure(state,action:PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        loginRequest(state, _action:PayloadAction<{email:string; password:string; remember_me:boolean}>){
            
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state,action:PayloadAction<any>){
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated  = true
        },
        loginFailure(state,action:PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        logoutRequest : (state)=>{
            state.loading = true;
        },
        logoutSuccess :(state)=>{
            state.loading = false;
            state.isAuthenticated = false;
        },
        logoutFailure: (state,action:PayloadAction<string>)=>{
            state.loading = false;
            state.error = action.payload;
        },
        checkAuthRequest : (state)=>{
            state.loading = true;
        },
        checkAuthSuccess : (state)=>{
            state.loading = false;
            state.isAuthenticated = true;
        },
        checkAuthFailure : (state)=>{
            state.loading = false;
            state.isAuthenticated = false;
        },


    }

})

export const {
    signupRequest,
    signupSuccess,
    signupFailure,
    loginRequest,
    loginFailure,
    loginSuccess,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    checkAuthRequest,
    checkAuthSuccess,
    checkAuthFailure,
} = authSlice.actions;

export default authSlice.reducer;


