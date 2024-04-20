
import {configureStore} from "@reduxjs/toolkit";
import authenticateReducer from "./reducer/AuthenticateSlice";
import audioComponentReducer from "./reducer/AudioComponentSlice";

let store = configureStore({
    reducer:{
        auth : authenticateReducer,
        audio: audioComponentReducer,
    }
});

export default store;