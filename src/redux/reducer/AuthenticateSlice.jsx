import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    id:'',
    password:'',
    authenticate:false
}

const authenticateSlice = createSlice({
    name:"authenticate",
    initialState,
    reducers:{
        setLogin(state,action){
            state.authenticate = true;
            state.id = action.payload.id;
            state.password = action.payload.password;
        },
        setLogout(state,action){
            state.authenticate = false;
            state.id = '';
            state.password = '';
        }
    }
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;