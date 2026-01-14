import { createSlice } from "@reduxjs/toolkit";

interface UserProfileState{
    data : null |{
    email : string;
    name : string;
    rank : number;
    wins : number;
    losses : number
    };
    loading : boolean;
    error : string | null;
    
}

const initialState : UserProfileState = {
    data : null,
    loading : false,
    error : null
}


const profileSlice = createSlice({

    name  : 'Profile',
    initialState,
    reducers : {
        getUserProfileRequest(state){
            state.loading = true;
            state.error = null;
        },
        getUserProfileSuccess(state,action){
            state.loading = false;
            state.data = action.payload
        },
        getUserProfileFailure(state,action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {getUserProfileRequest,getUserProfileSuccess,getUserProfileFailure} = profileSlice.actions;
export default profileSlice.reducer;


